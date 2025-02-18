// Star information database
const starData = {
    "brown_dwarf": {
        title: "Brown Dwarf",
        description: "Brown dwarfs are 'failed stars' that did not gather enough mass to sustain hydrogen fusion.",
        images: [
            { src: "images/brownDwarf2.png", title: "Brown Dwarf Image", source: "https://www.adlerplanetarium.org/blog/astrofan-brown-dwarfs/"},
            { src: "images/brownDwarf1.png", title: "Brown Dwarf Size Comparison Diagram", source: "https://www.spitzer.caltech.edu/image/ssc2020-09b-brown-dwarf-comparison" }
        ]
    },
    "red_dwarf": {
        title: "Red Dwarf",
        description: "Red dwarfs are small, cool, and burn fuel slowly, making them long-lived. Proxima Centauri is an example.",
        images: [
            { src: "images/redDwarf2.png", title: "Red Dwarf Image", source: "https://www.space.com/23772-red-dwarf-stars.html" },
            { src: "images/redcomp.png", title: "Red Dwarf Composition", source: "https://sites.ualberta.ca/~pogosyan/teaching/ASTRO_122/lect17/lecture17.html" }
        ]
    },
    "main_sequence": {
        title: "Main Sequence",
        description: "Main sequence stars fuse hydrogen into helium. Our Sun is a main sequence star.",
        images: [
            { src: "images/mainSeq1.png", title: "Main Sequence Star Image", source: "https://theplanets.org/types-of-stars/main-sequence-star-life-cycle-and-other-facts/" },
            { src: "images/mainseqcomp.png", title: "Main Sequence Star Composition", source: "https://web.pa.msu.edu/courses/1997spring/ISP205/sec-3/stars.hw8.ans.html" }
        ]
    },
    "white_dwarf": {
        title: "White Dwarf",
        description: "White dwarfs are the remains of stars that have exhausted their nuclear fuel, like Sirius B.",
        images: [
            { src: "images/whiteDwarf1.png", title: "White Dwarf Image", source: "https://www.sci.news/astronomy/white-dwarf-crystals-06805.html" },
            { src: "images/whitecomp.png", title: "White Dwarf Composition", source: "https://www.researchgate.net/figure/nternal-structure-of-C-O-white-dwarfs-The-core-of-white-dwarf_fig1_283153193" }
        ]
    },
    "supergiant": {
        title: "Supergiant",
        description: "Supergiants are massive, bright stars nearing the end of their life, like Betelgeuse.",
        images: [
            { src: "images/supergiant1.png", title: "Supergiant Star Size Comparison Diagram", source: "https://earthsci.org/space/space/stars/stars.html" },
            { src: "images/superComp1.png", title: "Supergiant Star Composition", source: "https://sites.ualberta.ca/~pogosyan/teaching/ASTRO_122/lect18/lecture18.html" }
        ]
    },
    "hypergiant": {
        title: "Hypergiant",
        description: "Hypergiants are enormous, unstable stars with extreme luminosity. VY Canis Majoris is a well-known example.",
        images: [
            { src: "images/hyperGiant1.png", title: "Hypergiant Star Size Comparison Diagram", source: "https://www.skyatnightmagazine.com/space-science/hypergiant-stars" },
            { src: "images/hypercomp.png", title: "Hypergiant Star Composition", source: "https://study.com/academy/lesson/red-giant-definition-facts-quiz.html" }
        ]
    }
};

// Function to show star details
function showStarInfo(starType) {
    const star = starData[starType];

    // Hide main content, show star details
    document.getElementById("starGallery").style.display = "none";
    document.getElementById("starInfo").style.display = "block";

    // Update title and description
    document.getElementById("starTitle").innerText = star.title;
    document.getElementById("starDescription").innerText = star.description;

    // Load extra images with sources
    const extraImagesDiv = document.getElementById("extraImages");
    extraImagesDiv.innerHTML = ""; // Clear previous images

    star.images.forEach(imageData => {
        let imgTitle = document.createElement("h3");
        imgTitle.innerText = imageData.title;
        // imgTitle.style.textAlign = "center"; 

        let img = document.createElement("img");
        img.src = imageData.src;
        img.alt = star.title;
        img.width = 800;

        let credit = document.createElement("p");
        credit.innerHTML = `<small>Image Source: <a href="${imageData.source}" target="_blank">${imageData.source}</a></small>`;
        // credit.style.textAlign = "center";

        extraImagesDiv.appendChild(imgTitle);
        extraImagesDiv.appendChild(img);
        extraImagesDiv.appendChild(credit);
    });
}

// Function to return to the main page
function hideStarInfo() {
    document.getElementById("starGallery").style.display = "block";
    document.getElementById("starInfo").style.display = "none";
}

