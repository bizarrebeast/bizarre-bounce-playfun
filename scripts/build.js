import * as fs from "fs"
import * as path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = path.resolve(__dirname, "..")
const distDir = path.join(rootDir, "dist")
const htmlTemplatePath = path.join(rootDir, "index.html")
const outputPath = path.join(distDir, "index.html")

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true })
}

// The game is entirely self-contained in index.html.
// Build step: copy to dist/ and strip HTML comments.
let html = fs.readFileSync(htmlTemplatePath, "utf8")
html = html.replace(/<!--[\s\S]*?-->/g, "")
fs.writeFileSync(outputPath, html)

console.log(`Built dist/index.html (${(html.length / 1024).toFixed(1)} KB)`)
