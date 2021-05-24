const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
  document.querySelector('#tracks').innerHTML = '';
  let url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}&limit=5`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data[0] == null) {
        document.querySelector('#tracks').innerHTML = "No tracks found";
      } else {
        for (const track of data) {
            template = `<section class="track-item preview" data-preview-track="${track.preview_url}" onclick="playTrack(event)">
                          <img src="${track.album.image_url}">
                          <i class="fas play-track fa-play" aria-hidden="true"></i>
                          <div class="label">
                              <h3>${track.name}</h3>
                              <p>${track.artist.name}</p>
                          </div>
                      </section>`;
          document.querySelector('#tracks').innerHTML += template;
        }
      }
    })
};

const getAlbums = (term) => {
  document.querySelector('#albums').innerHTML = '';
  let url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data[0] == null) {
        document.querySelector('#albums').innerHTML = "No albums found";
      } else {
        for (const album of data) {
            template = `<section class="album-card" id="${album.id}">
                            <div>
                                <img src="${album.image_url}">
                                <h3>${album.name}</h3>
                                <div class="footer">
                                    <a href="${album.spotify_url}" target="_blank">
                                        View on Spotify
                                    </a>
                                </div>
                            </div>
                        </section>`;
            document.querySelector('#albums').innerHTML += template;
        }
      }
    })
};

const getArtist = (term) => {
  let url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}&limit=1`;
  fetch(url)
    .then(response => response.json())
    .then(data => displayArtist(data[0]));
};

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};

const playTrack = (ev) => {
  const elem = ev.currentTarget;
  console.log(elem.innerHTML);
  document.querySelector('footer .track-item.preview').innerHTML = elem.innerHTML;
  const previewURL = elem.dataset.previewTrack;
  if (previewURL) {
    audioPlayer.setAudioFile(previewURL);
    audioPlayer.play();
  } else {
    console.log('There is no available preview track.')
  }
};

const displayArtist = (art) => {
  if (art == null) {
    document.querySelector('#artist').innerHTML = "No artist found";
  } else {
  template = `<section class="artist-card" id="${art.name}">
                <div>
                  <img src="${art.image_url}">
                  <h3>${art.name}</h3>
                  <div class="footer">
                    <a href="${art.spotify_url}" target="_blank">View on Spotify</a>
                  </div>
                </div>
              </section>`;
  document.querySelector('#artist').innerHTML = template;
  }
}
