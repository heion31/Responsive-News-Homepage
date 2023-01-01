const navSlide = () => {
    const open = document.querySelector('#menu-open');
    const close = document.querySelector('#menu-close');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const widthLimit = 480;

    // BEHAVIOR OF MENU-BUTTONS WHEN RESIZE
    window.addEventListener('resize', function () {
        let currentWidth = window.innerWidth;
        
        // Make Two Menu-Buttons Hide
        if (currentWidth > widthLimit ) {
            close.style.display = 'none';
            open.style.display = 'none';
        // Make Open-Menu-Button Show
        } else if (open.style.display == 'none' && close.style.display == 'none' && currentWidth <= widthLimit) {
            open.style.display = 'block';
            location.reload();
        }
    });


    // OPEN MENU BUTTON
    open.addEventListener('click', () => {
        // Open Menu
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Menu Style  
        open.style.display = "none";
        close.style.display = "block";
        close.style.animation = `menu-open 0.5s ease`;
    });


    // CLOSE MENU BUTTON
    close.addEventListener('click', () => {
        // Open Menu
        nav.classList.toggle('nav-active');

        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Menu Style
        open.style.display = "block"
        close.style.display = "none";
        open.style.animation = `menu-close 0.8s ease`;
    });

}

navSlide();


// Stop Transition During Window Resizing 
let resizeTimer;

window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);

});