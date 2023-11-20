function open(value) {
    let iframe = document.querySelector(".iframe.active");
    let url = value.trim();
    // pass the NON-encoded url to the second page
    sessionStorage.setItem("encodedUrl", url);
    location.href = "go";
  }