const fs = require('fs');
const PDF = require('pdfkit');

const rockBand = [
    {name: 'Nirvana'},
    {name: 'Limp Bizkit'},
    {name: 'ACDC'}
];

let i = 1000;

rockBand.forEach((band) => {
    i++;
    let doc = new PDF();
    doc.pipe(fs.createWriteStream(`archivos-pdf/${i}-${band.name}.pdf`));
    doc.text(`ID: ${i}\nName: ${band.name}`, 150, 100);
    doc.image(`images/${i}.jpg`, 30 , 150);
    doc.end();
    console.log(`PDF craeted for ${band.name}`);
});