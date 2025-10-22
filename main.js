const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 100;
  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email!");
    return;
  }
  alert("Message sent successfully!");
  this.reset();
});


const toggle = document.createElement('button');
toggle.innerText = "🌙";
toggle.className = "btn btn-sm btn-dark position-fixed bottom-0 end-0 m-3";
document.body.appendChild(toggle);
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});
if (localStorage.getItem("darkMode") === "true") document.body.classList.add("dark-mode");
