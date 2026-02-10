let images = [
  "./assets/img/photos/addmin_panel.webp",
  "./assets/img/photos/admin_Panel.avif",
  "./assets/img/photos/website_laptp.webp",
];

let index = 0;
const imgElement = document.getElementById("mainPhoto");

function change() {
  imgElement.src = images[index];
  index > 1 ? (index = 0) : index++;
}

setInterval(change, 3000);
