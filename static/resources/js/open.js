//function dexopen(url) {
//    var newWindow = window.open("", "_blank");
//
//    var iframe = document.createElement("iframe");
//    iframe.src = url;
//    iframe.style.width = "100%";
//    iframe.style.height = "100%";
//    iframe.style.border = "none";
//
//    newWindow.document.body.appendChild(iframe);
//}

function dexopen(value) {
    let iframe = document.querySelector(".iframe.active");
    window.navigator.serviceWorker
      .register("./sw.js", {
        scope: __uv$config.prefix,
      })
      .then(() => {
        let url = value.trim();
        if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
        else if (!(url.startsWith("https://") || url.startsWith("http://")))
          url = "https://" + url;
        //pass the encoded url to the second page
        sessionStorage.setItem("encodedUrl", url);
        location.href = "gonext";
      });
  }
  
  function isUrl(val = "") {
    if (
      /^http(s?):\/\//.test(val) ||
      (val.includes(".") && val.substr(0, 1) !== " ")
    )
      return true;
    return false;
  }