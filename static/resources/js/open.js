function open(url) {
    localStorage.setItem('savedURL', url)
    window.location.href = 'open';
}