const verticalPics = [
    "/img/verticalbåt.jpg",
    "/img/verticalgrön.jpg",
    "/img/verticalbro.jpg",
    "/img/verticalbrun.jpg",
    "/img/verticalhalfc.jpg",
    "/img/vericalvbg.jpg",
    "/img/verticalhus.jpg",
    "/img/verticalhöst.jpg",
    "/img/verticalsjö.jpg",
    "/img/verticallång.jpg",
    "/img/verticalspår.jpg",
    "/img/verticaltop.jpg",
    "/img/verticaltri.jpg",
    "/img/verticalväst.jpg",
    "/img/verticalö2.jpg",
    "/img/Ksskala.jpg",
    "/img/horitop1.jpg",
];

const horizontalPics = [
    "/img/hori1080.png",
    "/img/horigbg.jpg",
    "/img/horihav.jpg",
    "/img/horihem.jpg",
    "/img/horihidden.jpg",
    "/img/horikran.jpg",
    "/img/horivolvo.jpg",
    "/img/horiwide.jpg",
    "/img/horiwidec.jpg",
];

const verticalDivs   = ["pic1", "pic3", "pic6", "pic7"];
const horizontalDivs = ["pic2", "pic4", "pic5", "pic8", "pic9"];

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function randomizePics() {
    const shuffledVertical   = shuffle(verticalPics);
    const shuffledHorizontal = shuffle(horizontalPics);

    verticalDivs.forEach((id, i) => {
        const div = document.getElementById(id);
        if (!div) return;
        const img = div.querySelector("img") || document.createElement("img");
        img.src = shuffledVertical[i];
        img.style.cssText = "width:100%;height:100%;object-fit:contain;";
        if (!div.querySelector("img")) div.appendChild(img);
    });

    horizontalDivs.forEach((id, i) => {
        const div = document.getElementById(id);
        if (!div) return;
        const img = div.querySelector("img") || document.createElement("img");
        img.src = shuffledHorizontal[i];
        img.style.cssText = "width:100%;height:100%;object-fit:contain;";
        if (!div.querySelector("img")) div.appendChild(img);
    });
}

document.addEventListener("DOMContentLoaded", randomizePics);