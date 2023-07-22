// -----------------------------------------------------------
// this typewriter text on home page.
// this typewriter shows text only.
// this typewriter script is only displayed on the home page.
// -----------------------------------------------------------

// https://www.youtube.com/watch?v=SgmNxE9lWcY
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const phrases = [
  "HTML",
  "CSS",
  "JavaScript",
  "JSON",
  ".htaccess",
  "sitemap.xml",
  "Markdown",
  "SVG",
  "font-family",
];

const el = document.getElementById("typewriter");
let waitBeforeTypingTime = 1500;
let waitBeforeBackspaceTime = 2000;
let pressKeysTime = 180;
let pressBackspaceTime = 100;
let curPraseIndex = 0;
const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPraseIndex];
    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(pressKeysTime);
    }
    await sleep(waitBeforeBackspaceTime);
    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(pressBackspaceTime);
    }
    await sleep(waitBeforeTypingTime);
    if (curPraseIndex === phrases.length - 1) {
      curPraseIndex = 0;
    } else {
      curPraseIndex++;
    }
  }
};

writeLoop();

// -----------------------------------------------------------
// this is the main navigation on landing home page.
// this navigation shows text and SVG icon.
// this navigation script is only displayed on the home page.
// -----------------------------------------------------------

var output = "";

fetch("./JSON/content.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.main.length; i++) {
      output +=
        '<a href="' +
        data.main[i].link +
        '"><h3>' +
        data.main[i].title +
        '</h3><img src = "' +
        data.main[i].svg +
        '" alt="' +
        data.main[i].altText +
        '"/></a>';
    }

    document.getElementById("navItem").innerHTML = output;
  });
