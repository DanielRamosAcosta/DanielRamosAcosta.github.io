const puppeteer = require('puppeteer')
const path = require('path')
const express = require('express')

console.log('Staring PDF export...')

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const app = express()

app.use(express.static(path.join(__dirname, '../out')))

const server = app.listen(3000)

async function exportWithLanguage(browser, language) {
  const page = await browser.newPage()

  await page.goto('http://localhost:3000')

  if (language === 'en-US') {
    await page.click('button')
    await sleep(1000)
  }

  await page.pdf({
    path: `CV Daniel Ramos - ${language}.pdf`,
    printBackground: true,
    margin: {
      top: '1.016cm',
      right: '1.016cm',
      bottom: '1.016cm',
      left: '1.016cm',
    },
  })
}

async function main() {
  const browser = await puppeteer.launch({})
  await exportWithLanguage(browser, 'es-ES')
  await exportWithLanguage(browser, 'en-US')

  await browser.close()
  server.close()
}

main()
  .then(() => {
    console.log('Done!')
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
