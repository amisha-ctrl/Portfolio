document.querySelector('.menu_bar').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

document.querySelectorAll(".skill-card").forEach((card) => {
    let progressBar = card.querySelector(".progress");
    let targetWidth = card.getAttribute("data-width");
    let color = card.getAttribute("data-color");

    card.addEventListener("mouseenter", function () {
        progressBar.style.width = targetWidth;
        progressBar.style.background = color; // Change color on hover
    });

    card.addEventListener("mouseleave", function () {
        progressBar.style.width = "0"; // Reset width
        progressBar.style.background = "white"; // Reset to white
    });
});

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_6guzq9b';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});