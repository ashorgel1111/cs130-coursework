const images = [
    'images/IMG_0638.JPG',
    'images/Chorfoto.JPG',
    'images/IMG_0636.JPG',
    'images/Me.jpg',
    'images/organ.jpg',
    'images/IMG_0526.JPEG',
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

// Part Two //

let index = 0;

const goNext = (ev) => {
  for (const image of imageElements) {
    if (document.querySelector('.featured_image').style.backgroundImage == image.style.backgroundImage) {
      index = parseInt(image.dataset.index);
    }
  }
  if (index == 5) {
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
    index = 6;
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
