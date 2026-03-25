const symbologies = [
    { value: "code128", text: "Code 128" },
    { value: "ean13", text: "EAN-13" },
    { value: "qrcode", text: "QR Code" },
    { value: "code39", text: "Code 39" },
    { value: "datamatrix", text: "Data Matrix" },
    { value: "upca", text: "UPC-A" },
    { value: "pdf417", text: "PDF417" },
    { value: "interleaved2of5", text: "Interleaved 2 of 5" },
    { value: "azteccode", text: "Aztec Code" }
];

document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("symbology");
    symbologies.forEach((symbology) => {
        const option = document.createElement("option");
        option.value = symbology.value;
        option.textContent = symbology.text;
        select.appendChild(option);
    });

    document.getElementById("makeBarcode").addEventListener("click", generateBarcode);
});

function generateBarcode() {
    const canvas = document.getElementById("barcodeCanvas");
    const errorDiv = document.getElementById("errorMessage");
    const downloadDiv = document.getElementById("download-links");

    errorDiv.textContent = "";

    const bcid = document.getElementById("symbology").value;
    const text = document.getElementById("contents").value;
    const optionsStr = document.getElementById("options").value;

    const opts = {};
    optionsStr.split(/\s+/).forEach((opt) => {
        const parts = opt.split("=");
        opts[parts[0]] = parts[1] === undefined ? true : parts[1];
    });

    try {
        bwipjs.toCanvas(canvas, {
            bcid,
            text,
            scale: 2,
            height: 10,
            includetext: opts.includetext,
            guardwhitespace: opts.guardwhitespace,
            ...opts
        });
        downloadDiv.style.display = "block";
    } catch (error) {
        errorDiv.textContent = `Error: ${error.message}`;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
        downloadDiv.style.display = "none";
    }
}

function downloadImage() {
    const canvas = document.getElementById("barcodeCanvas");
    const link = document.createElement("a");
    link.download = "barcode.png";
    link.href = canvas.toDataURL();
    link.click();
}
