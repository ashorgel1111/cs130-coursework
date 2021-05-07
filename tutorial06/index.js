const tracks = [
    {
      "id": "3nj4c7GkrySzTeUlQE7J7N",
      "name": "Fantasia super Komm, heiliger Geist, Herre Gott, BWV 651",
      "preview_url": "https://p.scdn.co/mp3-preview/157071434a15637ad78274b4ea4a92e8a5752128?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2736d7c9bfb00a06b9a267885e4"
    },
    {
      "id": "32fhaJGXkLBcvnmslZYcpU",
      "name": "Geistliches Konzert für zwei Tenöre, Baß, Violine, zwei Violen da gamba und Basso continuo",
      "preview_url": "https://p.scdn.co/mp3-preview/66f7ecc2875c414d7acfc7c8dc274b9fc38804a0?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2734baf2f4b6d05102c29344d68"
    },
    {
      "id": "2hWyNAugfxnf4v3nUlKFja",
      "name": "Flute Quartet No. 1 in D Major: I. Vivace",
      "preview_url": "https://p.scdn.co/mp3-preview/b215828f807779e9e0023be6ce59e82294501308?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273010a153014375e7cdc09339a"
    }
];


// Part 1:
// This code adds a card for the 6th track in the list (above)
// How would you use a loop so that a card is generated for every
// track in the list?
var i;
for (i=0; i < tracks.length; i++) {
  const track = tracks[i];
  const template = `
      <div data-index="${i}" onclick="playSong(event);">
          <img src="${track.image_url}" />
          <h2>${track.name}</h2>
      </div>`;
  document.querySelector('main').innerHTML += template;
}


// Part 2:
// Using the event object, detect the element that triggered the
// click event (currentTarget) to figure out which song to load
// into the player next. When you've figured it out, set the
// #audio-source element's "src" attribute with the correct
// sound sample and then invoke the audio.load() and audio.play()
// logic.
const playSong = (ev) => {
    var index = Number(ev.currentTarget.dataset.index);
    document.getElementById("audio-source").src = tracks[index].preview_url;
    const audio = document.querySelector('audio');
    audio.load();
    audio.play();
}
