/**
 *
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 *
 * 1. Create and attach an event handler (function) to each ".image"
 * element so that when the ".image" element is clicked, the corresponding
 * image loads in the .featured image element.
 *
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 *
 * 3. If you get to the end, start at the beginning.
 *
 * 4. If you get to the beginning, loop around to the end.
 *
 *
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
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
  if (index == 7) {
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
    index = 8;
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
