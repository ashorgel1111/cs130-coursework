const images = [
    'sketchbook_images/portrait.jpg',
    'sketchbook_images/pathos.jpg',
    'sketchbook_images/eye_lips_head.jpg',
    'sketchbook_images/mug.jpg',
    'sketchbook_images/flute_hands.jpg',
    'sketchbook_images/gamba_hands.jpg',
    'sketchbook_images/keyboard_hands.jpg'
];

const initScreen = () => {
    document.querySelector('.cards').innerHTML += `
    <button class="prev">&lsaquo;</button>`;
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image"
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
    });
    document.querySelector('.cards').innerHTML += `
    <button class="next">&rsaquo;</button>`;
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

// Part Two //

let index = 0;

const goNext = (ev) => {
  for (const image of imageElements) {
    if (document.querySelector('.featured_image').style.backgroundImage == image.style.backgroundImage) {
      index = parseInt(image.dataset.index);
    }
  }
  if (index == 6) {
    index = -1;
  }
  for (const image of imageElements) {
    if (index == parseInt(image.dataset.index) - 1) {
      document.querySelector('.featured_image').style.backgroundImage = image.style.backgroundImage
    }
  }
}

const goBack = (ev) => {
  for (const image of imageElements) {
    if (document.querySelector('.featured_image').style.backgroundImage == image.style.backgroundImage) {
      index = parseInt(image.dataset.index);
    }
  }
  if (index == 0) {
    index = 7;
  }
  for (const image of imageElements) {
    if (index == parseInt(image.dataset.index) + 1) {
      document.querySelector('.featured_image').style.backgroundImage = image.style.backgroundImage
    }
  }
}

document.querySelector('.next').onclick = goNext;
document.querySelector('.prev').onclick = goBack;

// Part Three //

document.querySelector('.featured_image').onclick = goNext;
