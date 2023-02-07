const content = document.querySelector("#content");
const elements = [
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "div",
  "span",
  "strong",
  "em",
  "mark",
  "small",
  "del",
  "ins",
  "sub",
  "sup",
  "code",
  "kbd",
  "samp",
  "var",
];

const phrases = [];

const randomString = () => {
   let randomElementTextCharacterCountRandomNumber = Math.floor(Math.random() * 100) + 1;
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[]^_`{|}~©®£¥€§¶°±¼½¾×÷µ‰¹²³⅓⅔¬√∞≠≡≤≥≈∝∫∑∏√∂∃∅∇∈∉∋∏∐℘ℜℵℑℓℝ⊕⊗⊥";
  for (let i = 0; i < randomElementTextCharacterCountRandomNumber; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

for (let i = 0; i < 100; i++) {
  phrases.push(randomString());
}

const generateRandomElement = () => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  const randomElement = document.createElement(elements[randomIndex]);
  randomElement.classList.add("element");

  const randomPhraseIndex = Math.floor(Math.random() * phrases.length);
  randomElement.innerText = phrases[randomPhraseIndex];

  return randomElement;
};

let isLoading = false;

const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !isLoading) {
      isLoading = true;

      const newElement = generateRandomElement();
      content.appendChild(newElement);

      intersectionObserver.observe(newElement);
      isLoading = false;
    }
  });
});

window.scrollTo(0, 0);

const observerTarget = content.lastElementChild || content;
intersectionObserver.observe(observerTarget);

setInterval(function () {
  window.scrollTo(1000, document.body.scrollHeight);
}, 500);

const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, strong, em, a, li, th, td, label, input");

textElements.forEach(function(element) {
  const backgroundColor = getRandomColor();
  const textColor = getContrastingColor(backgroundColor);
  element.style.backgroundColor = backgroundColor;
  element.style.color = textColor;
});

function getRandomColor() {
  const hexValues = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getContrastingColor(color) {
  const colorInt = parseInt(color.substring(1), 16);
  const contrast = (colorInt > 0xffffff / 2) ? "black" : "white";
  return contrast;
}