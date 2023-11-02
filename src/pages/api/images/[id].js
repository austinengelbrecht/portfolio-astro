import { APIRoute } from "astro";
import testImages from "../../../data/images/testImages.json";
import techStackIcons from "../../../data/images/techStackIcons.json";

export async function GET({ params, request }) {
  const id = params.id;
  let data;

  if (id == "accountMessages") {
    data = testImages;
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
