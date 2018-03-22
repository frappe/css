import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/base.css',
    output: {
        file: 'dist/frappe-css.css',
        format: 'cjs'
    },
    plugins: [
        postcss()
    ]
}