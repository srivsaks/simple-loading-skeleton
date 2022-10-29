import "./styles.css";

const cardImage = document.createElement("img");
cardImage.src =
  "https://images.unsplash.com/photo-1666993804910-60191605094f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
cardImage.alt = "image-of-a-mountain";
const imagePlaceholder = document.querySelector(".card-header");

const textPlaceholder = document.querySelector(".card-content");
const heading = document.createElement("h3");
const cardContent = document.createElement("p");

heading.textContent = "Title";
heading.classList.add("card-title");
cardContent.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga et saepe
neque consequatur laudantium veritatis totam quis pariatur unde,
accusamus reprehenderit officiis! Maxime eligendi quae magni velit
veniam! Itaque, necessitatibus?`;
cardContent.classList.add("card-excerpt");

setTimeout(() => {
  imagePlaceholder.appendChild(cardImage);
  textPlaceholder.appendChild(heading);
  textPlaceholder.appendChild(cardContent);
  textPlaceholder.classList.remove("animated-bg");
}, 1500);
