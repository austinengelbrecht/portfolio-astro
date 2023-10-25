import { APIRoute } from "astro";

const test = [
  { src: "https://picsum.photos/seed/arst/600", alt: "Some alt text" },
  { src: "https://picsum.photos/seed/qwfp/600", alt: "Some alt text" },
  { src: "https://picsum.photos/seed/zxcd/600", alt: "Some alt text" },
  { src: "https://picsum.photos/seed/tsra/600", alt: "Some alt text" },
  { src: "https://picsum.photos/seed/pfqq/600", alt: "Some alt text" },
];

export async function GET({ params, request }) {
  const id = params.id;

  let data;
  if (id == "accountMessages") {
    data = test;
  }
  return new Response(JSON.stringify(data));
}

export function getStaticPaths() {
  return [{ params: { id: "accountMessages" } }];
}
