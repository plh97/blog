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
				"TOKEN": "4acc89612d7ff3cfa3acf6392f78e2850eeb135b",
			}
		}
	]
}