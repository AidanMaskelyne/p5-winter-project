const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/index.ts",
	devtool: "inline-source-map",
	devServer: {
		static: "./dist"
	},
	module: {
		rules: [
			{
				test: /\.ts$/i,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},			
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist"),
	},
	optimization: {
		runtimeChunk: "single",
	},
	plugins: [new HtmlWebpackPlugin()]
};
