var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    // Set the "homepage"
    entry: "./src/index.tsx",
    
    // Output the js bundle to the dist folder
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/dist/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // CSS and preprocess SCSS
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
        ]
    },

     plugins: [
        new CopyWebpackPlugin([
            { from: './node_modules/react/dist/react.js' },
            { from: './node_modules/react-dom/dist/react-dom.js' },
            { from: 'node_modules/leaflet/dist', to: 'leaflet'}
        ])
     ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "leaflet": "L"
    },
};