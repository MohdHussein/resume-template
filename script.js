const progress = document.querySelectorAll('.progressDone');

progress.forEach(element => {
    element.style.width = element.dataset.progress;
    element.textContent = element.dataset.progress;
});