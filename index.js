const fs   = require('fs');
const path = require('path');
const src  = path.join(__dirname, 'src');

module.exports = {
    /**
     * Registra todos los helpers del proyecto.
     *
     * @param {Handlebars} hbs Manejador de la plantilla.
     */
    registerAll(hbs)
    {
        this.scandir(src).forEach(
            filename => this.registerHelper(hbs, filename)
        );
    },
    registerHelper(hbs, filename)
    {
        hbs.registerHelper(
            path.basename(filename, path.extname(filename)),
            require(filename)
        );
    },
    scandir(dir)
    {
        return fs.readdirSync(dir).map(file => path.join(dir, file));
    }
};
