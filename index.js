const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const genImage = document.getElementById("googleBlank");


function createImage() {

    let search = document.getElementById("inputSearch").value;
    let result = document.getElementById("inputResult").value;


    // ctx.fillStyle = "blue";
    // ctx.beginPath();
    // ctx.rect(0, 0, 300, 150);
    // ctx.fill();

    ctx.drawImage(genImage, 0, 0);

    ctx.font = "30px sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText(`${search}`, 200, 50);
    ctx.fillText(`${result}`, 50, 220);

    return canvas.toDataURL("image/jpeg");
}

function saveImage() {
    let canvas = document.getElementById('canvas')
    canvas.toBlob(blob => {
        let data = window.URL.createObjectURL(blob)
        let link = document.createElement('a')
        link.href = data
        link.download = 'feed.png'
        link.click()
      }, 'image/png')
}