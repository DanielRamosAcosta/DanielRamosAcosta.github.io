const puppeteer = require('puppeteer')
const path = require('path')
const express = require('express')

console.log('Staring PDF export...')

const app = express()

app.use(express.static(path.join(__dirname, '../build')))

const server = app.listen(3000)

async function main() {
  const browser = await puppeteer.launch({})
  const page = await browser.newPage()
  await page.goto('http://localhost:3000')
  await page.pdf({
    path: 'CV Daniel Ramos.pdf',
    printBackground: true,
    margin: {
      top: '1.016cm',
      right: '1.016cm',
      bottom: '1.016cm',
      left: '1.016cm'
    }
  })

  await browser.close()
  server.close()
}

main()
  .then(() => {
    console.log('Done!')
  })
  .catch(err => {
    console.error(err)
  })
