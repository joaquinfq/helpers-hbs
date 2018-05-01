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
    /**
     * Registra un helper en handlebars.
     *
     * @param {Handlebars} hbs      Módulo de handlebars a usar.
     * @param {String}     filename Ruta completa del archivo del helper.
     */
    registerHelper(hbs, filename)
    {
        hbs.registerHelper(
            path.basename(filename, path.extname(filename)),
            require(filename)
        );
    },
    /**
     * Compila una plantilla y devuelve el resultado.
     *
     * @param {Handlebars} hbs      Manejador de la plantilla.
     * @param {String}     filename Ruta completa del archivo de la plantilla.
     * @param {Object}     context  Contexto de la plantilla.
     * @param {Object}     options  Opciones para compilar la plantilla.
     *
     * @return {String} Plantilla renderizada.
     */
    render(hbs, filename, context = {}, options = {})
    {
        let _content = '';
        if (filename && fs.existsSync(filename))
        {
            const _tpl = fs.readFileSync(filename, 'utf8');
            if (_tpl)
            {
                _content = hbs.compile(
                    _tpl,
                    Object.assign(
                        {
                            noEscape : true
                        },
                        options
                    )
                )(context);
            }
        }

        return _content;
    },
    /**
     * Escanea un directorio de manera no recursiva.
     *
     * @param {String} dir Ruta del directorio a escanear.
     *
     * @return {String[]} Ruta completa de los archivos encontrados.
     */
    scandir(dir)
    {
        return fs.readdirSync(dir).map(file => path.join(dir, file));
    }
};
