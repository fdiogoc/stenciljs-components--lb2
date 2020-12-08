#!/usr/bin/env node

const fs = require('fs-extra');
const glob = require('glob-promise');
const path = require('path');
const util = require('util');
const svgson = require('svgson').parse;

// first, get a list of all of your icons in the source folder
glob('icons/*.svg')
  // next, read their files, using svgson to parse
  .then(filePaths =>
    Promise.all(
      filePaths.map(fileName => {
        return new Promise(resolve => {
          fs.readFile(fileName, 'utf-8').then(svg => {
            svgson(svg, {}, contents => {
              resolve({ file: fileName, contents });
            }).then(json => {
              console.log(json);
              let paths = json.children.filter(child => child.name === 'path').map(child => child.attrs.d);
              console.log(paths);
            });
          });
        });
      }),
    ),
  )
  // write a JSON file inside your component's asset folder for each icon
  .then(files => {
    console.log(files);
    files.forEach(svg => {
      let file = path.basename(svg.file);
      console.log(file);
      let paths = svg.childs.filter(child => child.name === 'path').map(child => child.attrs.d);
      // Make sure this folder exists!
      let filename = `src/components/my-component/assets/${file}.json`;
      fs.writeFileSync(filename, JSON.stringify(paths[0].d), 'utf8');
    });
    process.exit(0);
  });
