module.exports = {
	apps: [
		{
			name: "blog",
			script: "./src/server/app.js",
			watch: true,
			env: {
				"PORT": 80,
				"NODE_ENV": "dev",
			},
			env_prod: {
				"PORT": 8001,
				"NODE_ENV": "prod",
				"TOKEN": "89ad303adcf15ecefdf85cd230729ca17df09730",
			}
		}
	]
}