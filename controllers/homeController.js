const pdf = require('pdf-creator-node');
const fs = require('fs');
const path = require('path');
const options = require('../helpers/options');
const data = require('../helpers/data');

const homeview = (req, res, next) => {
  res.render('home');
};

const generatePdf = (req, res, next) => {
  const html = fs.readFileSync(
    path.join(__dirname, '../views/template.html'),
    'utf-8'
  );
  const filename = Math.random() + '_doc' + '.pdf';
  let array = [];

  data.forEach((d) => {
    const prod = {
      name: d.name,
      age: d.age,
    };
    array.push(prod);
  });

  const obj = {
    prodlist: array,
  };
  const document = {
    html: html,
    data: {
      products: obj,
    },
    path: '.docs/' + filename,
  };
  pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  const filepath = 'http://localhost:3000/docs' + filename;

  res.render('download', {
    path: filepath,
  });
};

module.exports = {
  homeview,
  generatePdf,
};
