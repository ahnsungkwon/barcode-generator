const symbologies = [
    {
        group: "Common",
        items: [
            { id: "code128", name: "Code 128" },
            { id: "ean13", name: "EAN-13" },
            { id: "upca", name: "UPC-A" },
            { id: "qrcode", name: "QR Code" },
            { id: "datamatrix", name: "Data Matrix" }
        ]
    },
    {
        group: "2D Symbologies",
        items: [
            { id: "pdf417", name: "PDF417" },
            { id: "azteccode", name: "Aztec Code" },
            { id: "maxicode", name: "MaxiCode" }
        ]
    },
    {
        group: "One-dimensional",
        items: [
            { id: "code39", name: "Code 39" },
            { id: "interleaved2of5", name: "Interleaved 2 of 5" },
            { id: "code93", name: "Code 93" },
            { id: "codabar", name: "Codabar" }
        ]
    }
];

const rotateLabels = {
    N: "Normal",
    R: "90 Right",
    L: "90 Left",
    I: "180 Inverted"
};

document.addEventListener("DOMContentLoaded", () => {
    populateSymbologies();
    attachEventHandlers();
    updatePreviewMeta();
    renderBarcode();
});

function populateSymbologies() {
    const select = document.getElementById("symbology");

    symbologies.forEach((group) => {
        const optgroup = document.createElement("optgroup");
        optgroup.label = group.group;

        group.items.forEach((item) => {
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.name;
            optgroup.appendChild(option);
        });

        select.appendChild(optgroup);
    });
}

function attachEventHandlers() {
    document.getElementById("btn-generate").addEventListener("click", renderBarcode);
    document.getElementById("hero-generate").addEventListener("click", renderBarcode);

    ["symbology", "scaleX", "scaleY", "rotate"].forEach((id) => {
        document.getElementById(id).addEventListener("change", updatePreviewMeta);
    });

    document.getElementById("contents").addEventListener("input", updatePreviewMeta);
    document.getElementById("options").addEventListener("input", updatePreviewMeta);

    document.querySelectorAll(".preset-button").forEach((button) => {
        button.addEventListener("click", () => {
            document.getElementById("symbology").value = button.dataset.bcid;
            document.getElementById("contents").value = button.dataset.text;
            document.getElementById("options").value = button.dataset.options;
            updatePreviewMeta();
            renderBarcode();
        });
    });
}

function buildOptions() {
    const optionsStr = document.getElementById("options").value.trim();
    const opts = {
        bcid: document.getElementById("symbology").value,
        text: document.getElementById("contents").value,
        scaleX: parseInt(document.getElementById("scaleX").value, 10) || 2,
        scaleY: parseInt(document.getElementById("scaleY").value, 10) || 2,
        rotate: document.getElementById("rotate").value
    };

    optionsStr.split(/\s+/).forEach((pair) => {
        if (!pair) {
            return;
        }

        const [key, value] = pair.split("=");
        opts[key] = value === undefined ? true : value;
    });

    return opts;
}

function updatePreviewMeta() {
    const symbology = document.getElementById("symbology");
    const scaleX = document.getElementById("scaleX").value || "2";
    const scaleY = document.getElementById("scaleY").value || "2";
    const rotate = document.getElementById("rotate").value;
    const contents = document.getElementById("contents").value.trim();

    document.getElementById("meta-type").textContent = symbology.options[symbology.selectedIndex]?.textContent || "Code 128";
    document.getElementById("meta-scale").textContent = `${scaleX} x ${scaleY}`;
    document.getElementById("meta-rotate").textContent = rotateLabels[rotate] || "Normal";

    const statusCopy = document.getElementById("status-copy");
    statusCopy.textContent = contents
        ? `Ready to render ${contents.length} characters.`
        : "Add data to render a barcode.";
}

function renderBarcode() {
    const canvas = document.getElementById("output-canvas");
    const errorMsg = document.getElementById("error-msg");
    const downloadZone = document.getElementById("download-zone");
    const statusCopy = document.getElementById("status-copy");
    const context = canvas.getContext("2d");
    const opts = buildOptions();

    updatePreviewMeta();

    try {
        bwipjs.toCanvas(canvas, opts);
        errorMsg.textContent = "";
        downloadZone.hidden = false;
        statusCopy.textContent = `Rendered ${opts.bcid} successfully.`;
    } catch (error) {
        errorMsg.textContent = error.message;
        context.clearRect(0, 0, canvas.width, canvas.height);
        downloadZone.hidden = true;
        statusCopy.textContent = "Adjust the input and try again.";
        console.error(error);
    }
}

function downloadPNG() {
    const canvas = document.getElementById("output-canvas");
    const link = document.createElement("a");
    link.download = `barcode_${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
}

function downloadSVG() {
    try {
        const svgStr = bwipjs.toSVG(buildOptions());
        const blob = new Blob([svgStr], { type: "image/svg+xml" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `barcode_${Date.now()}.svg`;
        link.click();
        URL.revokeObjectURL(url);
    } catch (error) {
        alert(`SVG generation failed: ${error.message}`);
    }
}
