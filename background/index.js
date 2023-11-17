// 1. fetch a random quote
// 2. turn text of quote into lines
// 3. turn text of author into lines
// 4. add a quote image
// 5. turn these element to svg
// 6. svg to image as png base64 in lambda

const sharp = require('sharp');
const apiUrl = 'https://zenquotes.io/api/random';
const fetch = require('node-fetch');

async function getRandomQuote(apiUrl) {
  let quoteText;
  let quoteAuthor;

  // validate response
  const res = await fetch(apiUrl);
  const quoteData = await res.json();
  console.log(quoteData);

  quoteText = quoteData[0].q;
  quoteAuthor = quoteData[0].a;
  console.log(quoteText);
  console.log(quoteAuthor);

  // image
  const width = 750;
  const height = 483;
  const text = quoteText;
  const words = text.split(' ');
  const lineBreak = 4;
  let newText = '';

  let tspanEle = '';
  for (let i = 0; i < words.length; i++) {
    newText += words[i] + ' ';
    if ((i + 1) % lineBreak === 0) {
      tspanEle += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
      newText = '';
    }
  }
  if (newText !== '') {
    tspanEle += `<tspan x="${width / 2}" dy="1.2em">${newText}</tspan>`;
  }
  console.log(tspanEle);

  // svg
  const svgImg = `
    <svg width="${width}" height="${height}">
      <style>
        .title {
          fill: #fff;
          font-size: 20px;
          font-weight: bold;
        }
        .quoteAuthorStyles {
          font-size: 35px;
          font-weight: bold;
          padding: 50px;
        }

        .footerStyles {
          font-size: 20px;
          font-weight: bold;
          fill: lightgrey;
          text-anchor: middle;
          font-family: Verdana;
        }
      </style>
      <circle cx="382" cy="76" r="44" fill="rgba(255, 255, 255, 0.155)" />
      <text x="382" y="76" dy="50" text-anchor="middle" font-size="90" font-family="Verdana" fill="white">^</text>
      <g>
        <rect x="0" y="0" width="${width}" height="auto"></rect>
        <text id="lastLineOfQuote" x="375" y="120" font-family="Verdana" font-size="35" fill="white" text-anchor="middle">
          ${tspanEle}
          <tspan class="quoteAuthorStyles" x="375" dy="1.8em">- ${quoteAuthor}</tspan>
        </text>
      </g>
      <text x="${width / 2}" y="${
        height - 10
      }" class="footerStyles">Created by RickHuang from ZenQuotes.io</text>
    </svg>
  `;

  // add background img
  const backgroundImgs = [
    'imgs/CoolSky.png',
    'imgs/Harvey.png',
    'imgs/Harvey.png',
    'imgs/MegaTron.png',
  ];

  const randomIdex = Math.floor(Math.random() * backgroundImgs.length);
  const selectedImg = backgroundImgs[randomIdex];

  const timestamp = new Date().toLocaleString().replace(/[^\d]/g, '');
  const svgBuffer = Buffer.from(svgImg);
  const img = await sharp(selectedImg)
    .composite([
      {
        input: svgBuffer,
        top: 250,
        left: 500,
      },
    ])
    .toFile(`finals/quote-card_${timestamp}.png`);
  // const img = await sharp(selectedImg).toFile(`finals/quote-card_${timestamp.png}`)
}

getRandomQuote(apiUrl);
