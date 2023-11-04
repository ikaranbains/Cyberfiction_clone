function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        pinType: document.querySelector("#main").style.transform
            ? "transform"
            : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

locomotive();


function canvas() {
    const canvas = document.querySelector("#page>canvas");
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
     ./canvas/male0001.png
     ./canvas/male0002.png
     ./canvas/male0003.png
     ./canvas/male0004.png
     ./canvas/male0005.png
     ./canvas/male0006.png
     ./canvas/male0007.png
     ./canvas/male0008.png
     ./canvas/male0009.png
     ./canvas/male0010.png
     ./canvas/male0011.png
     ./canvas/male0012.png
     ./canvas/male0013.png
     ./canvas/male0014.png
     ./canvas/male0015.png
     ./canvas/male0016.png
     ./canvas/male0017.png
     ./canvas/male0018.png
     ./canvas/male0019.png
     ./canvas/male0020.png
     ./canvas/male0021.png
     ./canvas/male0022.png
     ./canvas/male0023.png
     ./canvas/male0024.png
     ./canvas/male0025.png
     ./canvas/male0026.png
     ./canvas/male0027.png
     ./canvas/male0028.png
     ./canvas/male0029.png
     ./canvas/male0030.png
     ./canvas/male0031.png
     ./canvas/male0032.png
     ./canvas/male0033.png
     ./canvas/male0034.png
     ./canvas/male0035.png
     ./canvas/male0036.png
     ./canvas/male0037.png
     ./canvas/male0038.png
     ./canvas/male0039.png
     ./canvas/male0040.png
     ./canvas/male0041.png
     ./canvas/male0042.png
     ./canvas/male0043.png
     ./canvas/male0044.png
     ./canvas/male0045.png
     ./canvas/male0046.png
     ./canvas/male0047.png
     ./canvas/male0048.png
     ./canvas/male0049.png
     ./canvas/male0050.png
     ./canvas/male0051.png
     ./canvas/male0052.png
     ./canvas/male0053.png
     ./canvas/male0054.png
     ./canvas/male0055.png
     ./canvas/male0056.png
     ./canvas/male0057.png
     ./canvas/male0058.png
     ./canvas/male0059.png
     ./canvas/male0060.png
     ./canvas/male0061.png
     ./canvas/male0062.png
     ./canvas/male0063.png
     ./canvas/male0064.png
     ./canvas/male0065.png
     ./canvas/male0066.png
     ./canvas/male0067.png
     ./canvas/male0068.png
     ./canvas/male0069.png
     ./canvas/male0070.png
     ./canvas/male0071.png
     ./canvas/male0072.png
     ./canvas/male0073.png
     ./canvas/male0074.png
     ./canvas/male0075.png
     ./canvas/male0076.png
     ./canvas/male0077.png
     ./canvas/male0078.png
     ./canvas/male0079.png
     ./canvas/male0080.png
     ./canvas/male0081.png
     ./canvas/male0082.png
     ./canvas/male0083.png
     ./canvas/male0084.png
     ./canvas/male0085.png
     ./canvas/male0086.png
     ./canvas/male0087.png
     ./canvas/male0088.png
     ./canvas/male0089.png
     ./canvas/male0090.png
     ./canvas/male0091.png
     ./canvas/male0092.png
     ./canvas/male0093.png
     ./canvas/male0094.png
     ./canvas/male0095.png
     ./canvas/male0096.png
     ./canvas/male0097.png
     ./canvas/male0098.png
     ./canvas/male0099.png
     ./canvas/male0100.png
     ./canvas/male0101.png
     ./canvas/male0102.png
     ./canvas/male0103.png
     ./canvas/male0104.png
     ./canvas/male0105.png
     ./canvas/male0106.png
     ./canvas/male0107.png
     ./canvas/male0108.png
     ./canvas/male0109.png
     ./canvas/male0110.png
     ./canvas/male0111.png
     ./canvas/male0112.png
     ./canvas/male0113.png
     ./canvas/male0114.png
     ./canvas/male0115.png
     ./canvas/male0116.png
     ./canvas/male0117.png
     ./canvas/male0118.png
     ./canvas/male0119.png
     ./canvas/male0120.png
     ./canvas/male0121.png
     ./canvas/male0122.png
     ./canvas/male0123.png
     ./canvas/male0124.png
     ./canvas/male0125.png
     ./canvas/male0126.png
     ./canvas/male0127.png
     ./canvas/male0128.png
     ./canvas/male0129.png
     ./canvas/male0130.png
     ./canvas/male0131.png
     ./canvas/male0132.png
     ./canvas/male0133.png
     ./canvas/male0134.png
     ./canvas/male0135.png
     ./canvas/male0136.png
     ./canvas/male0137.png
     ./canvas/male0138.png
     ./canvas/male0139.png
     ./canvas/male0140.png
     ./canvas/male0141.png
     ./canvas/male0142.png
     ./canvas/male0143.png
     ./canvas/male0144.png
     ./canvas/male0145.png
     ./canvas/male0146.png
     ./canvas/male0147.png
     ./canvas/male0148.png
     ./canvas/male0149.png
     ./canvas/male0150.png
     ./canvas/male0151.png
     ./canvas/male0152.png
     ./canvas/male0153.png
     ./canvas/male0154.png
     ./canvas/male0155.png
     ./canvas/male0156.png
     ./canvas/male0157.png
     ./canvas/male0158.png
     ./canvas/male0159.png
     ./canvas/male0160.png
     ./canvas/male0161.png
     ./canvas/male0162.png
     ./canvas/male0163.png
     ./canvas/male0164.png
     ./canvas/male0165.png
     ./canvas/male0166.png
     ./canvas/male0167.png
     ./canvas/male0168.png
     ./canvas/male0169.png
     ./canvas/male0170.png
     ./canvas/male0171.png
     ./canvas/male0172.png
     ./canvas/male0173.png
     ./canvas/male0174.png
     ./canvas/male0175.png
     ./canvas/male0176.png
     ./canvas/male0177.png
     ./canvas/male0178.png
     ./canvas/male0179.png
     ./canvas/male0180.png
     ./canvas/male0181.png
     ./canvas/male0182.png
     ./canvas/male0183.png
     ./canvas/male0184.png
     ./canvas/male0185.png
     ./canvas/male0186.png
     ./canvas/male0187.png
     ./canvas/male0188.png
     ./canvas/male0189.png
     ./canvas/male0190.png
     ./canvas/male0191.png
     ./canvas/male0192.png
     ./canvas/male0193.png
     ./canvas/male0194.png
     ./canvas/male0195.png
     ./canvas/male0196.png
     ./canvas/male0197.png
     ./canvas/male0198.png
     ./canvas/male0199.png
     ./canvas/male0200.png
     ./canvas/male0201.png
     ./canvas/male0202.png
     ./canvas/male0203.png
     ./canvas/male0204.png
     ./canvas/male0205.png
     ./canvas/male0206.png
     ./canvas/male0207.png
     ./canvas/male0208.png
     ./canvas/male0209.png
     ./canvas/male0210.png
     ./canvas/male0211.png
     ./canvas/male0212.png
     ./canvas/male0213.png
     ./canvas/male0214.png
     ./canvas/male0215.png
     ./canvas/male0216.png
     ./canvas/male0217.png
     ./canvas/male0218.png
     ./canvas/male0219.png
     ./canvas/male0220.png
     ./canvas/male0221.png
     ./canvas/male0222.png
     ./canvas/male0223.png
     ./canvas/male0224.png
     ./canvas/male0225.png
     ./canvas/male0226.png
     ./canvas/male0227.png
     ./canvas/male0228.png
     ./canvas/male0229.png
     ./canvas/male0230.png
     ./canvas/male0231.png
     ./canvas/male0232.png
     ./canvas/male0233.png
     ./canvas/male0234.png
     ./canvas/male0235.png
     ./canvas/male0236.png
     ./canvas/male0237.png
     ./canvas/male0238.png
     ./canvas/male0239.png
     ./canvas/male0240.png
     ./canvas/male0241.png
     ./canvas/male0242.png
     ./canvas/male0243.png
     ./canvas/male0244.png
     ./canvas/male0245.png
     ./canvas/male0246.png
     ./canvas/male0247.png
     ./canvas/male0248.png
     ./canvas/male0249.png
     ./canvas/male0250.png
     ./canvas/male0251.png
     ./canvas/male0252.png
     ./canvas/male0253.png
     ./canvas/male0254.png
     ./canvas/male0255.png
     ./canvas/male0256.png
     ./canvas/male0257.png
     ./canvas/male0258.png
     ./canvas/male0259.png
     ./canvas/male0260.png
     ./canvas/male0261.png
     ./canvas/male0262.png
     ./canvas/male0263.png
     ./canvas/male0264.png
     ./canvas/male0265.png
     ./canvas/male0266.png
     ./canvas/male0267.png
     ./canvas/male0268.png
     ./canvas/male0269.png
     ./canvas/male0270.png
     ./canvas/male0271.png
     ./canvas/male0272.png
     ./canvas/male0273.png
     ./canvas/male0274.png
     ./canvas/male0275.png
     ./canvas/male0276.png
     ./canvas/male0277.png
     ./canvas/male0278.png
     ./canvas/male0279.png
     ./canvas/male0280.png
     ./canvas/male0281.png
     ./canvas/male0282.png
     ./canvas/male0283.png
     ./canvas/male0284.png
     ./canvas/male0285.png
     ./canvas/male0286.png
     ./canvas/male0287.png
     ./canvas/male0288.png
     ./canvas/male0289.png
     ./canvas/male0290.png
     ./canvas/male0291.png
     ./canvas/male0292.png
     ./canvas/male0293.png
     ./canvas/male0294.png
     ./canvas/male0295.png
     ./canvas/male0296.png
     ./canvas/male0297.png
     ./canvas/male0298.png
     ./canvas/male0299.png
     ./canvas/male0300.png
 `;
        return data.split("\n")[index];
    }

    const frameCount = 300;

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
            trigger: `#page>canvas`,
            //   set start end according to preference
            start: `top top`,
            end: `600% top`,
            scroller: `#main`,
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
        var ratio = Math.min(hRatio, vRatio);
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

        trigger: "#page>canvas",
        pin: true,
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
    });
}

canvas();


gsap.to('#page1', {
    scrollTrigger: {
        trigger: '#page1',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scroller: '#main'
    }
})
gsap.to('#page2', {
    scrollTrigger: {
        trigger: '#page2',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scroller: '#main'
    }
})
gsap.to('#page3', {
    scrollTrigger: {
        trigger: `#page3`,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scroller: '#main'
    }
})