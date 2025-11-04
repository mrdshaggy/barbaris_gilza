// document.getElementById("saveBtn").addEventListener("click", async () => {
//     const element = document.getElementById("capture");
//     const canvas = await html2canvas(element);

//     canvas.toBlob(async (blob) => {
//         const file = new File([blob], "barbaris-screenshot.png", { type: "image/png" });

//         if (navigator.canShare && navigator.canShare({ files: [file] })) {
//         try {
//             await navigator.share({
//             title: "Barbaris Screenshot",
//             text: "Saved from Barbaris Workshop",
//             files: [file],
//             });
//         } catch (err) {
//             console.log("Share canceled or failed:", err);
//         }
//         } 
        
//         else {
//             const imgURL = URL.createObjectURL(blob);
//             const img = new Image();
//             img.src = imgURL;
//             img.style.width = "100%";
//             img.style.border = "2px solid #000";
//             img.style.marginTop = "10px";
//             document.body.appendChild(img);
//             alert("📸 Long-press the image below to Save to Photos");
//         }
//     }, "image/png");
// });

document.getElementById("saveBtn").addEventListener("click", function () {
    html2canvas(document.getElementById("capture")).then(canvas => {
      const link = document.createElement("a");
      link.download = "page-screenshot.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });