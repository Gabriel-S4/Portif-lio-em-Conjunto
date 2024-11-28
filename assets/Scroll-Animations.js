const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('pessoa');
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.remove('pessoa');
            entry.target.classList.add('hidden');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
