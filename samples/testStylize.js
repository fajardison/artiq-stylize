import stylize from '@artiqlize/stylize'

const styleSets = [
  ['red', 'bold'],
  ['green', 'underline'],
  ['blue'],
  ['magenta', 'italic'],
]

console.log('== Stylize 1 kalimat penuh (default) ==')
console.log(
  stylize('ARTISTIC OUTPUT', styleSets, { randomize: true })
)
console.log('\n')

console.log('== Stylize per kata (urut gaya atau acak) ==')
console.log(
  stylize('ARTISTIC OUTPUT IN COLOR', styleSets, { style: 'word' })
)
console.log(
  stylize('ARTISTIC OUTPUT IN COLOR', styleSets, { style: 'word', randomize: true }) // error karena seharusnya bukan world tapi word
)
console.log('\n')

console.log('== Stylize per karakter ==')
console.log(
  stylize('ARTISTIC', styleSets, { style: 'char' })
)
console.log(
  stylize('ARTISTIC', styleSets, { style: 'char', randomize: true })
)
console.log('\n')

console.log('== Gaya langsung via chaining (proxy) ==')
console.log(
  stylize.red.bold.underline('HELLO PROXY STYLE')
)

console.log('\n\n== RGB ==')

const stylesRGB = [
  ['bold', 'rgb(255,0,0)'],
  ['underline', 'rgb(0,255,0)'],
  ['italic', 'rgb(0,0,255)'],
  ['bgRgb(255,255,0)', 'black']
]

console.log(
  stylize('Hello colorful world!', stylesRGB, { style: 'word', randomize: false })
)

console.log(
  stylize('Saat ini Saya ingin\nmenggunakan Line!', stylesRGB, { style: 'line', randomize: false })
)

console.log(
  stylize('Hello RGB Terminal!', stylesRGB, { style: 'char', randomize: true })
)

const stylesHEX = [
  ['#FF0000', 'bold'],
  ['bg#00FF00'],
  ['#00FFFF', 'bg#333333', 'underline']
  ]

console.log('\n\n== HEX ==')
console.log(stylize('Contoh warna', stylesHEX))
console.log(stylize('Contoh latar belakang', stylesHEX,  { style: 'word' }))
console.log(stylize('Gabungan', stylesHEX, { style: 'char', randomize: true }))


const styled = stylize('Hello Artistic!', [
  ['bold', 'red'],
  ['italic', 'blue'],
  ['underline', 'green']
], { style: 'word', randomize: false });

console.log(styled);
