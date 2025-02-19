$(document).ready(function() {
    var randomNumber = Math.floor(Math.random() * 2 + 1);
    if (randomNumber % 2 === 0) {
        $('#myPic').attr('src', "./assets/image/2.png");
        $('#hero').removeClass('md:flex-row');
        $('#hero').addClass('md:flex-row-reverse');
    }
    $('#thisYear').attr('value', new Date().getFullYear());

    // Fade-in animation for introduction
    gsap.from("#introduction", {
        duration: 2,
        opacity: 0,
        y: 250,
        ease: "power4.out"
    });

    // Register GSAP TextPlugin
    gsap.registerPlugin(TextPlugin);

    // Create a GSAP timeline for sequential animations
    var tl = gsap.timeline();

    // Step 1: Animate the name first
    tl.to("#myName", {
        text: "Hi, I'm Willy! Nice to meet you.",
        duration: 3,
        ease: "power1.inOut"
    })

    // Step 2: Animate the short introduction and tech skills section
    .to("#shortIntro", {
        text: "I'm a Full-Stack Web Developer",
        duration: 2,
        ease: "power1.inOut"
    })
    .to("#subShortIntro", {
        text: "I can use : ",
        duration: 1,
        ease: "power1.inOut"
    })
    .to("#tectMentionDiv", {
        opacity: 1, // Make the div fully visible and persist
        duration: 1,
        ease: "power1.inOut"
    });

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
    gsap.from("#frontEndSkills", {
        scrollTrigger: {
            trigger: "#frontEndSkills",
            start: "top 80%", // Starts when 80% of the viewport height is reached
            toggleActions: "play none none reverse", // Play animation when entering, reverse when leaving
        },
        opacity: 0,
        y: 50, // Moves up from 50px
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from("#BackEndSkill", {
        scrollTrigger: {
            trigger: "#BackEndSkill",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from("#SourceControlSkill", {
        scrollTrigger: {
            trigger: "#SourceControlSkill",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from("#about", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 150,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from("#skills", {
        scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 150,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from("#projects", {
        scrollTrigger: {
            trigger: "#projects",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 150,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from("#footer", {
        scrollTrigger: {
            trigger: "#footer",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 150,
        duration: 1.5,
        ease: "power2.out"
    });

});
