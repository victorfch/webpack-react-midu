const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const ruleForJavaScript = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic'
                }
            ]
        ]
    }
}

const ruleForStyles = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

module.exports = (env, argv) => {
    const {mode} = argv
    const isProduction = mode === 'production'
    return {
        output: {
            filename: isProduction 
            ? '[name].[contenthash].js'
            : 'main.js',
            path: path.resolve(__dirname, "build")
        },
        plugins: [
            new HtmlWebpackPlugin({ template: 'src/index.html' })
        ],
        module: {
            rules: [
                ruleForJavaScript,
                ruleForStyles
            ]
        },
        devServer: {
            open: true,
            port: 3000,
            compress: true
        }
    }
}