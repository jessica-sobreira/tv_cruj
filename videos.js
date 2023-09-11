const timaoepumbaItemsRow = document.getElementById("timaoepumba-items");
const dougItemsRow = document.getElementById("doug-items");
const anapimentinhaItemsRow = document.getElementById("anapimentinha-items");
const ahoradorecreioItemsRow = document.getElementById("ahoradorecreio-items");
const iframeMovie = document.getElementById("iframe-movie");
const videoFrame = document.getElementById("video-frame");

const movieModal = new bootstrap.Modal("#movie-modal", {
  keyboard: false,
});

function closeModal() {
  movieModal.hide();
  videoFrame.setAttribute("src", "");
}

function openMovie(element) {
  // Coloca o link do vídeo
  videoFrame.setAttribute("src", element.getAttribute("data-link"));
  // Coloca o modal na tela
  movieModal.show();

}

function renderVideos(category, element) {
  let html = "";
  let videosInThisCategory = videos.filter((video) => video.category === category)
}
videosInThisCategory.forEach((video) => {
  html += `
    <div class="col-12 col-sm-4 my-3">
      <div class="card" style="min-height: 500px;">
        <img src="${video.img}" alt="${video.title}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${video.title}</h5>
          <p class="card-text">
            Categoria: ${video.category}
            </p>
          <button
            data-movie="${video.link}"
            class="btn btn-primary"
            onclick="openMovie(this)"
            >Assistir</button>
            </div>
          </div>
          `;

  element.innerHTML += html;
})




renderVideos(timaoepumbaItemsRow, "Timão & Pumba");
renderVideos(dougItemsRow, "Doug");
renderVideos(anapimentinhaItemsRow, "Ana Pimentinha");
renderVideos(ahoradorecreioItemsRow, "A Hora do Recreio");


