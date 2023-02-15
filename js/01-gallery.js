import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.forEach((el) => {
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery__item";
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__img";
  galleryImage.href = el.preview;
  galleryItem.setAttribute("data-source", el.original);
  galleryImage.alt = el.description;

  galleryItem.append(galleryLink);
  galleryItem.append(galleryImage);
  items.push(galleryItem);
});

gallery.append(...items);

gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = e.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `<img src="${selectedImage}" width="800" height="600">`
  );

  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});
