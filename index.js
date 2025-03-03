$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 2 + 1);
    if (randomNumber % 2 === 0) {
        $('#myPic').attr('src', "./assets/image/2.png");
        $('#hero').removeClass('md:flex-row');
        $('#hero').addClass('md:flex-row-reverse');
    }
    $('#thisYear').attr('value', new Date().getFullYear());

    // Fade-in animation for introduction with a stagger effect
    gsap.from("#introduction", {
        duration: 2.5,
        opacity: 0,
        y: 100,
        ease: "expo.out",
        clearProps: "all"
    });

    // Add a subtle floating animation to the profile picture
    gsap.to("#myPic", {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // Register GSAP TextPlugin
    gsap.registerPlugin(TextPlugin);

    // Create a GSAP timeline for sequential animations
    var tl = gsap.timeline();

    // Enhanced text animations with better timing and effects
    tl.to("#myName", {
        text: "Hi, I'm Willy! Nice to meet you.",
        duration: 2,
        ease: "power2.out",
        opacity: 1
    })
    .from("#myName", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=1")

    .to("#shortIntro", {
        text: "I'm a Full-Stack Web Developer",
        duration: 1.5,
        ease: "power2.out"
    })
    .from("#shortIntro", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=1")

    .to("#subShortIntro", {
        text: "I can use : ",
        duration: 0.8,
        ease: "power2.out"
    })
    .from("#subShortIntro", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.8")

    .to("#tectMentionDiv", {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    })
    .from("#tectMentionDiv", {
        y: 20,
        scale: 0.95,
        duration: 1,
        ease: "back.out(1.7)"
    }, "-=1");

    // Tech Stack cycling animation
    const techStack = ["JAVASCRIPT", "REACT", "TYPESCRIPT", "SUPABASE", "TAILWIND CSS", "BOOTSTRAP FRAMEWORK", "NODE JS", "EXPRESS JS"];
    let techIndex = 0;
    let firstCycle = true; // Track if it's the first cycle

    function cycleTechStack() {
        gsap.to("#techMention", {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                $("#techMention").text(techStack[techIndex]);
                techIndex = (techIndex + 1) % techStack.length;

                gsap.to("#techMention", {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.inOut",
                    onComplete: () => {
                        if (firstCycle) {
                            firstCycle = false; // Ensure it runs only once
                            setTimeout(() => {
                                gsap.to("#ctaText", {
                                    text: "Let's work together!",
                                    duration: 1.5,
                                    ease: "power1.inOut",
                                    opacity: 1
                                });
                            }, 7000);
                        }

                        setTimeout(cycleTechStack, 2000); // Continue cycling tech stack
                    }
                });
            }
        });
    }

    setTimeout(cycleTechStack(), 2000); // Start cycling tech stack

    // Other interactions
    $("#contactMe").click(function () { 
        $("#contactMeChoice").slideToggle();
    });

    $("#frontEndButton").click(function () {
        $("#frontEndSkills").slideToggle();
        //$("#frontEndButton").toggleClass("animate-pulse");
    });

    $("#BackEndButton").click(function () {
        $("#BackEndSkills").slideToggle();
       // $("#BackEndButton").toggleClass("animate-pulse");
    });

    $("#ecommerceLink").click(function (e) { 
        e.preventDefault();
        window.open("https://ecommerce-project-hqub.onrender.com", "ecommerce");
    });

    $("#bookLink").click(function (e) { 
        e.preventDefault();
        window.open("https://booknoteapp-rzg0.onrender.com", "book");
    });

    $("#posLink").click(function (e) { 
        e.preventDefault();
        window.open("https://fnb-pos-willy-candras-projects.vercel.app", "POS");
    });

    $("#sakuraspa").click(function (e) { 
        e.preventDefault();
        window.open("https://sakuraspabwi.com", "POS");
    });

    // Register GSAP ScrollTrigger Plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the Skills Section on Scroll
    // Enhanced scroll animations with stagger effects
    const sections = ["#about", "#skills", "#projects", "#footer"];
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse",
                scrub: 1
            },
            opacity: 0,
            y: 100,
            scale: 0.95,
            duration: 1.5,
            ease: "power2.out"
        });
    });

    // Staggered animation for skill icons
    const skillSections = ["#frontEndSkills", "#BackEndSkill", "#SourceControlSkill"];
    skillSections.forEach(section => {
        gsap.from(`${section} .relative.group`, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            scale: 0.8,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });
    });

    // Parallax effect for background gradients
    gsap.to(".absolute.inset-0", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        },
        backgroundPosition: "50% 100%",
        ease: "none"
    });

});
