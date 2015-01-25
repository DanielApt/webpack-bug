var path = require('path');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');


module.exports = {
    entry: './src/script',
    output: {
    	path: path.join(__dirname, 'dist'),
        filename: 'script.js'
    },
    plugins: [
    	new ProvidePlugin({
    		'$':'jquery',
    		'jQuery':'jquery',
    		'window.jQuery':'jquery'
    	})
    ]
};