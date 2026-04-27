import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

// #region agent log
fetch('http://127.0.0.1:7376/ingest/06741a57-392d-4e2c-ba08-0cdaa6ddd229',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'363b9c'},body:JSON.stringify({sessionId:'363b9c',runId:'pre-fix',hypothesisId:'H1',location:'generate-pdf.mjs:6',message:'Build runtime basics',data:{node:process.version,hasReadableStream:typeof globalThis.ReadableStream !== 'undefined'},timestamp:Date.now()})}).catch(()=>{});
// #endregion

if (typeof globalThis.ReadableStream === "undefined") {
  // #region agent log
  fetch('http://127.0.0.1:7376/ingest/06741a57-392d-4e2c-ba08-0cdaa6ddd229',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'363b9c'},body:JSON.stringify({sessionId:'363b9c',runId:'pre-fix',hypothesisId:'H1',location:'generate-pdf.mjs:10',message:'ReadableStream missing; applying polyfill from node:stream/web',data:{},timestamp:Date.now()})}).catch(()=>{});
  // #endregion

  const web = await import("node:stream/web");
  globalThis.ReadableStream = web.ReadableStream;
}

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

  // #region agent log
  fetch('http://127.0.0.1:7376/ingest/06741a57-392d-4e2c-ba08-0cdaa6ddd229',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'363b9c'},body:JSON.stringify({sessionId:'363b9c',runId:'pre-fix',hypothesisId:'H2',location:'generate-pdf.mjs:45',message:'About to render PDF',data:{inputHtmlPath,outputPdfPath,fileUrl},timestamp:Date.now()})}).catch(()=>{});
  // #endregion

  await page.pdf({
    path: outputPdfPath,
    printBackground: true,
    preferCSSPageSize: true
  });

  // #region agent log
  fetch('http://127.0.0.1:7376/ingest/06741a57-392d-4e2c-ba08-0cdaa6ddd229',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'363b9c'},body:JSON.stringify({sessionId:'363b9c',runId:'pre-fix',hypothesisId:'H2',location:'generate-pdf.mjs:57',message:'PDF render complete',data:{outputPdfPath},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
} finally {
  await browser.close();
}

