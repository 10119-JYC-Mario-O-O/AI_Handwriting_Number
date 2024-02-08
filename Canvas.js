const InputCanvas = document.getElementById("Input");
const InputCTX = InputCanvas.getContext("2d");
const PreproCanvas = document.getElementById("Prepro");
const PreproCTX = PreproCanvas.getContext("2d");
const eraseBTN = document.getElementById("erase");

let CanvasLine = false, AllwaysPrepro = true, DebugMod = false;

let mouseX = 0, mouseY = 0, mousedown = false;

let Drawing, PreprocessedArray;

function resetArray() {
    Drawing = new Array(100).fill().map(() => new Array(100).fill(0));
    PreprocessedArray = new Array(25).fill().map(() => new Array(25).fill(0));
    document.getElementById("aiOutput").innerHTML = ""
}

function drawLine() {
    InputCTX.strokeStyle = "rgba(128, 128, 128, 0.5)";
    InputCTX.lineWidth = 1;

    for (let x = 0; x < 100; x++) {
        for (let y = 0; y < 100; y++) {
            InputCTX.strokeRect(x * 5, y * 5, 5, 5);
        }
    }
}

InputCanvas.onmousedown = () => {
    mousedown = true;
};

InputCanvas.onmouseup = () => {
    mousedown = false;
};

InputCanvas.onmousemove = (e) => {
    mouseX = Math.floor((e.clientX - 10) / 5);

    mouseY = Math.floor((e.clientY - 10) / 5);
};

eraseBTN.onclick = () => {
    resetArray();
    InputCTX.reset();
    
    if (CanvasLine) {
        drawLine();
    }
}

resetArray();

if (CanvasLine) {
    drawLine();
}

function main() {
    const Check = mouseX > 5 && mouseX < 94 && mouseY > 5 && mouseY < 94;

    if (mousedown && Check) {
        for (let y = -7; y < 7; y++) {
            for (let x = -7; x < 7; x++) {
                if (x * x + y * y < 7 * 7) {
                    Drawing[mouseY - y][mouseX - x] = 1;
                }
            }
        }
    }

    if (AllwaysPrepro) {
        PreprocessedArray = Preprocessing(Drawing);
    }

    for (let y = 0; y < 100; y++) {
        for (let x = 0; x < 100; x++) {
            if (Drawing[y][x] == 1) {
                InputCTX.fillRect(x * 5, y * 5, 5, 5);
            }
        }
    }

    PreproCTX.reset();

    if (DebugMod) {
        PreproCanvas.style.border = "1px solid black";

        for (let y = 0; y < 25; y++) {
            for (let x = 0; x < 25; x++) {
                if (PreprocessedArray[y][x] == 1) {
                    PreproCTX.fillRect(x * 20, y * 20, 20, 20);
                }
            }
        }
    } else {
        PreproCanvas.style.border = "1px solid white";
    }

    requestAnimationFrame(main);
}

main();