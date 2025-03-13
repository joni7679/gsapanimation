function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform
            ? "transform"
            : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
  loco();

function canvas() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
 https://smoovco.com/wp-content/uploads/2023/11/smoov1-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov2-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov3-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov4-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov5-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov6-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov7-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov8-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov9-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov10-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov11-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov12-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov12-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov13-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov14-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov15-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov16-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov17-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov18-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov19-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov20-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov21-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov22-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov23-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov24-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov25-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov26-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov27-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov28-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov29-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov30-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov31-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov32-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov33-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov34-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov35-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov36-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov37-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov38-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov39-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov40-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov41-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov42-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov43-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov44-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov45-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov46-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov47-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov48-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov49-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov50-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov51-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov52-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov53-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov54-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov55-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov52-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov53-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov54-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov55-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov56-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov57-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov58-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov59-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov60-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov61-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov62-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov63-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov64-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov65-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov66-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov67-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov68-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov69-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov70-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov71-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov72-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov72-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov73-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov74-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov75-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov76-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov77-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov78-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov79-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov80-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov81-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov82-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov83-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov84-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov85-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov86-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov87-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov88-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov89-min.jpg
https://smoovco.com/wp-content/uploads/2023/11/smoov90-min.jpg




   `;
        return data.split("\n")[index];
    }

    const frameCount = 180;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `.hero-section`,
            start: `top top`,
            end: `600% top`,
            scroller: `main`,
            
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({
        trigger: ".hero-section",
        pin: true,
        markers:true,
        scroller: `main`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
    });
}
canvas();