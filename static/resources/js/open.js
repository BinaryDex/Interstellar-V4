function dexopen(url) {
    var newWindow = window.open("", "_blank");

    var iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    newWindow.document.body.appendChild(iframe);
}