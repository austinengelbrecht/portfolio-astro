import { APIRoute } from "astro";

export async function GET({ params, request }) {
  return new Response(
    JSON.stringify([
      { src: "https://picsum.photos/seed/arst/600", alt: "Some alt text" },
      { src: "https://picsum.photos/seed/qwfp//600", alt: "Some alt text" },
      { src: "https://picsum.photos/seed/zxcd//600", alt: "Some alt text" },
      { src: "https://picsum.photos/seed/tsra//600", alt: "Some alt text" },
      { src: "https://picsum.photos/seed/pfqq//600", alt: "Some alt text" },
    ])
  );
}
