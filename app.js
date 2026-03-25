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

document.addEventListener("DOMContentLoaded", () => {
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

    document.getElementById("btn-generate").addEventListener("click", renderBarcode);
});

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

function renderBarcode() {
    const canvas = document.getElementById("output-canvas");
    const errorMsg = document.getElementById("error-msg");
    const downloadZone = document.getElementById("download-zone");
    const context = canvas.getContext("2d");
    const opts = buildOptions();

    try {
        bwipjs.toCanvas(canvas, opts);
        errorMsg.textContent = "";
        downloadZone.style.display = "block";
    } catch (error) {
        errorMsg.textContent = error.message;
        context.clearRect(0, 0, canvas.width, canvas.height);
        downloadZone.style.display = "none";
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
        alert(`SVG 생성 중 오류: ${error.message}`);
    }
}
