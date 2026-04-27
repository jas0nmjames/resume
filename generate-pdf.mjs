import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputHtmlPath = path.join(__dirname, "resume-pdf.html");
const outputPdfPath = path.join(__dirname, "assets", "resume_jason-james.pdf");

await fs.mkdir(path.dirname(outputPdfPath), { recursive: true });

const browser = await puppeteer.launch({
  headless: "new"
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 1 });

  const fileUrl = pathToFileURL(inputHtmlPath).toString();
  await page.goto(fileUrl, { waitUntil: "networkidle0" });

  await page.pdf({
    path: outputPdfPath,
    printBackground: true,
    preferCSSPageSize: true
  });
} finally {
  await browser.close();
}

