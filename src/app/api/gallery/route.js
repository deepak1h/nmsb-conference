import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), "public", "images", "gallary");
    
    if (!fs.existsSync(galleryDir)) {
      return NextResponse.json({ images: [] });
    }

    const files = fs.readdirSync(galleryDir);
    const validExtensions = [".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"];

    const images = files
      .filter((file) => validExtensions.includes(path.extname(file)))
      .map((file) => `/images/gallary/${encodeURIComponent(file)}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    return NextResponse.json({ images: [], error: error.message }, { status: 500 });
  }
}
