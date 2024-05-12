// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections active link
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <  offset + height) {
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    
    // Sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)

      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active'); 
};

// Scroll reveal
ScrollReveal({ 
    // reset:  true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


// =============resume download==============
document.addEventListener('DOMContentLoaded', function () {
    const downloadButton = document.getElementById('DownloadCV');

    downloadButton.addEventListener('click', function () {
        // Replace 'path_to_your_cv_file.pdf' with the actual path to your CV file
        const cvFilePath = 'Resume/SiddharthSinghResume.pdf';

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = cvFilePath;

        // Set the download attribute to specify the filename to be downloaded
        link.download = 'SiddharthSinghResume.pdf';

        // Append the link to the document body
        document.body.appendChild(link);

        // Trigger the click event on the link to start the download
        link.click();

        // Remove the link from the document body
        document.body.removeChild(link);
    });
});
