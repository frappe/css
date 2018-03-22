const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');
const cssnext = require('cssnext');

const input = 'src/base.css';
const output = 'dist/frappe-css.css';

fs.readFile(input, (err, css) => {
    postcss([atImport, cssnext])
        .process(css, { from: input, to: output })
        .then(result => {
            fs.writeFile(output, result.css);
            if ( result.map ) fs.writeFile(output + '.map', result.map);
        })
        .catch(err => {
            console.error(err);
        });
});
