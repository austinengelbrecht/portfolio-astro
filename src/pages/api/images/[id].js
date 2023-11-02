import { APIRoute } from "astro";

const test = [
  { src: "https://picsum.photos/seed/arst/600", alt: "Some alt text" },
  { src: "https://picsum.photos/seed/qwfp/600", alt: "Some alt text" },
  { src: "https://picsum.photos/seed/zxcd/600", alt: "Some alt text" },
  { src: "https://picsum.photos/seed/tsra/600", alt: "Some alt text" },
  { src: "https://picsum.photos/seed/pfqq/600", alt: "Some alt text" },
];

const techStackIcons = [
  {
    src: "https://raw.githubusercontent.com/github/explore/5cc0a03a302ec862c4aeac2a22a513ae31c35432/topics/astro/astro.png",
    alt: "Astro",
  },
  {
    src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
    alt: "CSS",
  },
  {
    src: "https://raw.githubusercontent.com/github/explore/bc74dc5f9d530003dcd057b7b73c12fbcc4484ed/topics/elm/elm.png",
    alt: "Elm",
  },
  {
    src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
    alt: "HTML",
  },
  {
    src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
    alt: "JS",
  },
  {
    src: "https://camo.githubusercontent.com/6a89c40d54fde3f7c40b827e46081e4057633764c07bc9bca4ed513689eb2a8e/68747470733a2f2f70696e69612e7675656a732e6f72672f6c6f676f2e737667",
    alt: "Pinia",
  },
];

export async function GET({ params, request }) {
  const id = params.id;
  let data;

  if (id == "accountMessages") {
    data = test;
  } else if (id == "techStackIcons") {
    data = techStackIcons;
  } else {
    throw new Error("Unknown Id");
  }

  return new Response(JSON.stringify(data));
}

export function getStaticPaths() {
  return [
    { params: { id: "accountMessages" } },
    { params: { id: "techStackIcons" } },
  ];
}
