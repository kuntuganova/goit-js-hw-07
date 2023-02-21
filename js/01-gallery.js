import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original.value}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
}

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("gallery")) return;
  const source = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}"width="800" height="600">`);

  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
