window.onload = function () {
    const bgCanvas = document.getElementById('bg-canvas');
    const bgCtx = bgCanvas.getContext('2d');
    const backgroundImage = new Image();
    backgroundImage.src = 'assets/bg.jpg';
    backgroundImage.onload = function () {
        bgCtx.drawImage(backgroundImage, 0, 0, bgCanvas.width, bgCanvas.height);
    };

    const fgCanvas = document.getElementById('fg-canvas');
    const fgCtx = fgCanvas.getContext('2d');
    const foregroundImage = new Image();
    foregroundImage.src = 'assets/fg.jpg';
    foregroundImage.onload = function () {
        fgCtx.drawImage(foregroundImage, 0, 0, fgCanvas.width, fgCanvas.height);
        fgCtx.globalCompositeOperation = 'destination-out';
    };

    fgCanvas.addEventListener('mousedown', startScratching);
    fgCanvas.addEventListener('mousemove', scratch);
    fgCanvas.addEventListener('mouseup', stopScratching);
    fgCanvas.addEventListener('mouseout', stopScratching);

    let isDragging = false;

    function startScratching(e) {
        e.preventDefault();
        isDragging = true;
    }

    function scratch(e) {
        e.preventDefault();
        if (!isDragging) return;
        const x = e.offsetX
        const y = e.offsetY

        fgCtx.beginPath();
        fgCtx.arc(x, y, 40, 0, Math.PI * 2);
        fgCtx.fill();

    }

    function stopScratching(e) {
        e.preventDefault();
        isDragging = false;
    }
}