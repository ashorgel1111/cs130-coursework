const images = [
    'images/marktkirche.jpeg',
    'images/reichelorgel.jpeg',
    'images/spieltisch.jpeg',
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image"
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
    });
};

initScreen();

// Part One //

const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);
    document.querySelector('.featured_image').style.backgroundImage = elem.style.backgroundImage;
}

const imageElements = document.querySelectorAll('.image');

for (const elem of imageElements) {
    elem.onclick = showImage;
}
