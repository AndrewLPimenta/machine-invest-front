// Este é apenas um script de referência para identificar as páginas que precisam ser atualizadas
// Não será incluído no projeto final

import fs from "fs"
import path from "path"

function findPageFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      findPageFiles(filePath, fileList)
    } else if (file === "page.tsx") {
      fileList.push(filePath)
    }
  })

  return fileList
}

const appDir = path.join(process.cwd(), "app")
const pageFiles = findPageFiles(appDir)

console.log("Páginas encontradas:")
pageFiles.forEach((file) => {
  console.log(file)
})

