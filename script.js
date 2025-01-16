window.onload = function() {
    window.scrollTo(0, 0)
}

setTimeout(() =>{
    
    window.sr = ScrollReveal({reset: false})
    sr.reveal('.image', {
        duration: 1000,
        origin: 'left',
        distance: '100px'
    })

    sr.reveal('.bio', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        delay: 500
    })

    sr.reveal('.links', {
        duration: 1000,
        origin: 'top',
        distance: '20px',
        delay: 1000
    })

    sr.reveal('.about-me h2', {
        duration: 1000,
        distance: '90px',
        delay: 1500
    })

    sr.reveal('.about-me p', {
        duration: 1000,
        distance: '90px',
        delay: 1800
    })

    sr.reveal('.skills h3', {
        duration: 1000,
        distance: '90px'
    })

    sr.reveal('.skills-box', {
        duration: 1000,
        interval: 300,
        distance: '90px',
        delay: 500
    })

    sr.reveal('.html', {
        duration: 1000,
        scale: 0.8,
        delay: 300
    })

    sr.reveal('.skill-effect', {
        duration: 1000,
        interval: 300,
        scale: 0.8,
        delay: 500
    })

    sr.reveal('.projects h4', {
        duration: 1000,
        distance: '90px'
    })

    sr.reveal('.card', {
        duration: 1000,
        interval: 300,
        origin: 'bottom',
        distance: '100px',
        delay: 1000
    })

    sr.reveal('.contact h5', {
        duration: 1000,
        interval: 300,
        origin: 'bottom',
        distance: '100px',
    })

    sr.reveal('.email', {
        duration: 1000,
        origin: 'left',
        distance: '100px',
        delay: 500
    })

    sr.reveal('.links-socialmedia', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        delay: 1000
    })

} , 700)