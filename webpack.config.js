var path = require('path');
var HtmlPlug = require('html-webpack-plugin');
module.exports = {
	entry : {
		main : './src/app.jsx'
	},
	output : {
		filename : 'bundle.js',
		path : path.join(__dirname, 'dist/')
	},
	plugins : [
		new HtmlPlug({template: './src/templates/index.html'})
	],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: [
            '.js', '.jsx'
        ]
    }
};
