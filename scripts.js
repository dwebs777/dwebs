document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("1Ze_9R7hZMFTnt2fk");
});

function showSection(id) {
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function openModal() {
    document.getElementById("emailModal").style.display = "block";
}

function closeModal() {
    document.getElementById("emailModal").style.display = "none";
}

function toggleInfo(id) {
    const info = document.getElementById(id);
    const allInfo = document.querySelectorAll('.service-info');

    allInfo.forEach(el => {
        if (el.id !== id) {
            el.classList.remove('show');
        }
    });

    info.classList.toggle('show');
}
