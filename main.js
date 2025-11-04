window.addEventListener("DOMContentLoaded", (event) => {
    
    document.getElementById("saveBtn").addEventListener("click", async () => {
        const captureElement = document.getElementById("capture");
  
        // Create canvas
        const canvas = await html2canvas(captureElement, {
          scale: 2, // higher resolution
          useCORS: true
        });
  
        // Convert to image
        const imageData = canvas.toDataURL("image/png");
  
        // Create temporary link to trigger download
        const link = document.createElement("a");
        link.href = imageData;
        link.download = "barbaris_workshop.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  
        // (Optional) If you’re on mobile Safari or Android, 
        // user can long-press the image after showing in new tab
        // to save directly to Photos gallery:
        if (/iPhone|iPad|Android/i.test(navigator.userAgent)) {
          const newTab = window.open();
          newTab.document.write(`<img src="${imageData}" style="width:100%;"/>`);
        }
      });

});


