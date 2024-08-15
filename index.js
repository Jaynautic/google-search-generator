const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const genImage = document.getElementById("googleBlank");

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = ctx.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }

function createImage() {

    let search = document.getElementById("inputSearch").value;
    let result = document.getElementById("inputResult").value;

    var maxWidth = 640;
    var lineHeight = 24;
    var x = 44;
    var y = 214;
    var text = result;

    ctx.drawImage(genImage, 0, 0);

    ctx.font = "100 16px 'Inter', sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText(`${search}`, 200, 44, 500);
    // ctx.fillText(result, 44, 214, 500);

    ctx.font = "100 18px 'Inter', sans-serif";
    wrapText(ctx, text, x, y, maxWidth, lineHeight);

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
