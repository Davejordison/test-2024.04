import data from "./data.js";

const root = document.querySelector("#root");

function main() {
  const section = document.createElement("section");
  section.className = "intro";

  const h1 = document.createElement("h1");
  h1.className = "intro__header";
  h1.innerText = "Visualized and clarified by AI.";

  section.append(h1);
  root.append(section);

  const main = document.createElement("section");
  main.className = "container";

  for (const key in data) {
    const card = document.createElement("div");
    card.className = "card";

    const header = document.createElement("div");
    header.className = "card__header";
    header.className = data[key].title;

    const body = document.createElement("div");
    body.className = "card__body";

    const bodyImage = document.createElement("div");
    bodyImage.className = "card_body_image";

    const img = document.createElement("img");
    img.src = data[key].image;

    const bodyText = document.createElement("div");
    bodyText.className = "card_body_text";
    bodyText.innerText = data[key].text;

    card.append(header, body);
    body.append(bodyImage, img, bodyText);
    root.append(card);
  }
  root.append(main);
  //console.log(data);
}

main();
