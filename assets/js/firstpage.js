const redirectBtn = document.getElementById('redirectBtn');
const pageTransition = document.getElementById('pageTransition');

redirectBtn.addEventListener('click', () => {
    pageTransition.classList.add('fade-out');
    setTimeout(() => {
        window.location.href = "shop.html";
    }, 1000); 
});