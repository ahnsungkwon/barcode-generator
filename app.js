const symbologies = [
    {
        group: {
            en: "Common",
            ko: "자주 쓰는 형식"
        },
        items: [
            { id: "code128", name: "Code 128" },
            { id: "ean13", name: "EAN-13" },
            { id: "upca", name: "UPC-A" },
            { id: "qrcode", name: "QR Code" },
            { id: "datamatrix", name: "Data Matrix" }
        ]
    },
    {
        group: {
            en: "2D Symbologies",
            ko: "2D 형식"
        },
        items: [
            { id: "pdf417", name: "PDF417" },
            { id: "azteccode", name: "Aztec Code" },
            { id: "maxicode", name: "MaxiCode" }
        ]
    },
    {
        group: {
            en: "One-dimensional",
            ko: "1D 형식"
        },
        items: [
            { id: "code39", name: "Code 39" },
            { id: "interleaved2of5", name: "Interleaved 2 of 5" },
            { id: "code93", name: "Code 93" },
            { id: "codabar", name: "Codabar" }
        ]
    }
];

const copy = {
    en: {
        title: "Barcode Generator Lab",
        languageSwitchLabel: "Language switch",
        nav: {
            workspace: "Workspace",
            guide: "Guide"
        },
        hero: {
            eyebrow: "Precision label lab",
            title: "Generate crisp barcodes in a quieter, sharper workspace.",
            lede: 'Tune symbologies, scale, rotation, and export format in one screen. Built on <a href="https://github.com/metafloor/bwip-js" target="_blank" rel="noreferrer">bwip-js</a>, redesigned for faster iteration and cleaner output review.',
            primaryCta: "Open workspace",
            secondaryCta: "Render current draft",
            points: {
                one: "Common 1D and 2D formats in one place",
                two: "Instant PNG and SVG export",
                three: "Readable controls for real production tweaks"
            },
            caption: "Signal-ready output with a stronger first impression."
        },
        controls: {
            kicker: "Build",
            title: "Configure the symbol",
            description: "Start with a preset or dial the exact barcode parameters you need.",
            generate: "Generate barcode"
        },
        fields: {
            barcodeType: "Barcode type",
            contents: "Contents",
            options: "Options",
            optionsPlaceholder: "includetext guardwhitespace",
            scaleX: "Scale X",
            scaleY: "Scale Y",
            rotation: "Rotation"
        },
        preview: {
            kicker: "Preview",
            title: "Scan and export",
            meta: {
                type: "Type",
                scale: "Scale",
                rotation: "Rotation"
            }
        },
        downloads: {
            png: "Download PNG",
            svg: "Download SVG",
            tip: "Use SVG when you need vector output for print, packaging, or downstream editing."
        },
        guide: {
            items: {
                one: {
                    kicker: "Format discipline",
                    title: "Choose the symbol for the job.",
                    body: "Stay with Code 128 and EAN for retail-style labels, move to QR or Data Matrix when density matters."
                },
                two: {
                    kicker: "Option syntax",
                    title: "Keep flags short and explicit.",
                    body: 'Enter options as space-separated flags such as <code>includetext</code> or key-value pairs like <code>height=18</code>.'
                },
                three: {
                    kicker: "Export path",
                    title: "Review in raster, deliver in vector.",
                    body: "PNG is fast for review. SVG is the safer handoff when a printer, designer, or downstream system needs clean geometry."
                }
            }
        },
        footer: {
            body: 'Pure browser barcode rendering with <a href="https://github.com/metafloor/bwip-js" target="_blank" rel="noreferrer">bwip-js</a>.'
        },
        rotate: {
            N: "Normal",
            R: "90 Right",
            L: "90 Left",
            I: "180 Inverted"
        },
        status: {
            readyWithCount: "Ready to render {count} characters.",
            readyEmpty: "Add data to render a barcode.",
            rendered: "Rendered {label} successfully.",
            error: "Adjust the input and try again."
        },
        alerts: {
            svgError: "SVG generation failed: {message}"
        }
    },
    ko: {
        title: "Barcode Generator Lab | 한글 버전",
        languageSwitchLabel: "언어 선택",
        nav: {
            workspace: "작업 공간",
            guide: "가이드"
        },
        hero: {
            eyebrow: "정밀 라벨 작업실",
            title: "더 차분하고 또렷한 작업 화면에서 바코드를 빠르게 생성하세요.",
            lede: '바코드 종류, 배율, 회전, 내보내기 형식을 한 화면에서 조정할 수 있습니다. <a href="https://github.com/metafloor/bwip-js" target="_blank" rel="noreferrer">bwip-js</a> 기반으로 만들었고, 더 빠르게 검토하고 더 깔끔하게 출력할 수 있도록 다시 디자인했습니다.',
            primaryCta: "작업 화면 열기",
            secondaryCta: "현재 내용 렌더링",
            points: {
                one: "대표적인 1D, 2D 포맷을 한곳에서 다룹니다",
                two: "PNG와 SVG를 즉시 내려받을 수 있습니다",
                three: "실무 조정에 맞춘 읽기 쉬운 컨트롤을 제공합니다"
            },
            caption: "첫 화면부터 출력 품질이 느껴지도록 정리한 바코드 워크스페이스입니다."
        },
        controls: {
            kicker: "설정",
            title: "심볼 설정",
            description: "프리셋으로 시작하거나 필요한 바코드 파라미터를 직접 세밀하게 조정하세요.",
            generate: "바코드 생성"
        },
        fields: {
            barcodeType: "바코드 형식",
            contents: "내용",
            options: "옵션",
            optionsPlaceholder: "includetext guardwhitespace",
            scaleX: "가로 배율",
            scaleY: "세로 배율",
            rotation: "회전"
        },
        preview: {
            kicker: "미리보기",
            title: "미리보기 및 다운로드",
            meta: {
                type: "형식",
                scale: "배율",
                rotation: "회전"
            }
        },
        downloads: {
            png: "PNG 다운로드",
            svg: "SVG 다운로드",
            tip: "인쇄, 패키징, 후속 편집처럼 벡터 출력이 필요한 경우 SVG를 사용하는 편이 안전합니다."
        },
        guide: {
            items: {
                one: {
                    kicker: "포맷 선택",
                    title: "용도에 맞는 심볼을 고르세요.",
                    body: "소매 라벨 성격이면 Code 128과 EAN을 우선 쓰고, 더 높은 밀도가 필요하면 QR Code나 Data Matrix로 넘어가세요."
                },
                two: {
                    kicker: "옵션 문법",
                    title: "옵션은 짧고 명확하게 적으세요.",
                    body: '<code>includetext</code> 같은 플래그를 공백으로 구분해 넣거나, <code>height=18</code>처럼 key=value 형태로 입력하면 됩니다.'
                },
                three: {
                    kicker: "내보내기",
                    title: "검토는 래스터로, 전달은 벡터로.",
                    body: "PNG는 빠른 확인용으로 좋고, 프린터나 디자이너, 후속 시스템에 넘길 때는 SVG가 더 안정적입니다."
                }
            }
        },
        footer: {
            body: '<a href="https://github.com/metafloor/bwip-js" target="_blank" rel="noreferrer">bwip-js</a>를 사용한 브라우저 기반 바코드 렌더링입니다.'
        },
        rotate: {
            N: "기본",
            R: "오른쪽 90도",
            L: "왼쪽 90도",
            I: "180도 반전"
        },
        status: {
            readyWithCount: "{count}자를 렌더링할 준비가 됐습니다.",
            readyEmpty: "바코드를 만들 데이터부터 입력하세요.",
            rendered: "{label} 바코드를 생성했습니다.",
            error: "입력 값을 조정한 뒤 다시 시도하세요."
        },
        alerts: {
            svgError: "SVG 생성 실패: {message}"
        }
    }
};

let currentLanguage = getInitialLanguage();
let statusState = { key: "readyEmpty", params: {} };

document.addEventListener("DOMContentLoaded", () => {
    populateSymbologies();
    attachEventHandlers();
    setLanguage(currentLanguage);
    renderBarcode();
});

function getInitialLanguage() {
    return navigator.language && navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
}

function populateSymbologies() {
    const select = document.getElementById("symbology");

    symbologies.forEach((group, index) => {
        const optgroup = document.createElement("optgroup");
        optgroup.dataset.groupIndex = index;
        optgroup.label = group.group[currentLanguage] || group.group.en;

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
        document.getElementById(id).addEventListener("change", () => updatePreviewMeta());
    });

    document.getElementById("contents").addEventListener("input", () => updatePreviewMeta());
    document.getElementById("options").addEventListener("input", () => updatePreviewMeta());

    document.querySelectorAll(".preset-button").forEach((button) => {
        button.addEventListener("click", () => {
            document.getElementById("symbology").value = button.dataset.bcid;
            document.getElementById("contents").value = button.dataset.text;
            document.getElementById("options").value = button.dataset.options;
            updatePreviewMeta();
            renderBarcode();
        });
    });

    document.querySelectorAll(".lang-button").forEach((button) => {
        button.addEventListener("click", () => {
            setLanguage(button.dataset.lang);
        });
    });
}

function setLanguage(language) {
    currentLanguage = copy[language] ? language : "en";
    document.documentElement.lang = currentLanguage;
    document.title = getCopy("title");

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = getCopy(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        element.innerHTML = getCopy(element.dataset.i18nHtml);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        element.setAttribute("placeholder", getCopy(element.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        element.setAttribute("aria-label", getCopy(element.dataset.i18nAria));
    });

    document.querySelectorAll(".lang-button").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.lang === currentLanguage);
    });

    updateSymbologyGroupLabels();
    updateRotateOptions();
    updatePreviewMeta({ updateStatus: false });
    renderStatus();
}

function updateSymbologyGroupLabels() {
    document.querySelectorAll("#symbology optgroup").forEach((optgroup) => {
        const group = symbologies[Number(optgroup.dataset.groupIndex)];
        optgroup.label = group.group[currentLanguage] || group.group.en;
    });
}

function updateRotateOptions() {
    document.querySelectorAll("[data-rotate-option]").forEach((option) => {
        option.textContent = getCopy(`rotate.${option.dataset.rotateOption}`);
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

function updatePreviewMeta({ updateStatus = true } = {}) {
    const symbology = document.getElementById("symbology");
    const scaleX = document.getElementById("scaleX").value || "2";
    const scaleY = document.getElementById("scaleY").value || "2";
    const rotate = document.getElementById("rotate").value;
    const contents = document.getElementById("contents").value.trim();

    document.getElementById("meta-type").textContent = getSelectedSymbologyLabel();
    document.getElementById("meta-scale").textContent = `${scaleX} x ${scaleY}`;
    document.getElementById("meta-rotate").textContent = getCopy(`rotate.${rotate}`);

    if (updateStatus) {
        setStatus(contents ? "readyWithCount" : "readyEmpty", { count: contents.length });
    }

    return symbology;
}

function renderBarcode() {
    const canvas = document.getElementById("output-canvas");
    const errorMsg = document.getElementById("error-msg");
    const downloadZone = document.getElementById("download-zone");
    const context = canvas.getContext("2d");
    const opts = buildOptions();

    updatePreviewMeta({ updateStatus: false });

    try {
        bwipjs.toCanvas(canvas, opts);
        errorMsg.textContent = "";
        downloadZone.hidden = false;
        setStatus("rendered", { label: getSelectedSymbologyLabel() });
    } catch (error) {
        errorMsg.textContent = error.message;
        context.clearRect(0, 0, canvas.width, canvas.height);
        downloadZone.hidden = true;
        setStatus("error");
        console.error(error);
    }
}

function setStatus(key, params = {}) {
    statusState = { key, params };
    renderStatus();
}

function renderStatus() {
    document.getElementById("status-copy").textContent = getCopy(`status.${statusState.key}`, statusState.params);
}

function getSelectedSymbologyLabel() {
    const symbology = document.getElementById("symbology");
    return symbology.options[symbology.selectedIndex]?.textContent || "Code 128";
}

function getCopy(path, params = {}) {
    const value = path.split(".").reduce((acc, segment) => acc && acc[segment], copy[currentLanguage]);
    if (typeof value !== "string") {
        return path;
    }

    return Object.entries(params).reduce((result, [key, paramValue]) => {
        return result.replaceAll(`{${key}}`, String(paramValue));
    }, value);
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
        alert(getCopy("alerts.svgError", { message: error.message }));
    }
}
