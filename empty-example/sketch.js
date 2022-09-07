// const density = "8765432;:+-,._               ";
const density = '       .:-i|=+%O#@';
let video;
let div;


function setup() {

    noCanvas();
    video = createCapture(VIDEO)
    video.size(40, 64);
    background(0);
    div = createDiv();
}

function draw() {

    video.loadPixels();
    let image = '';
    for (let j = 0; j < video.height; j++) {
        for (let i = 0; i < video.width; i++) {
            const pixelIndex = (i + j * video.width) * 4;
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;
            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, 0, len));
            const c = density.charAt(charIndex);
            if (c === " ") image += '&nbsp;'
            else image += c;



        }
        image += '<br/>';
    }
    div.html(image);
}