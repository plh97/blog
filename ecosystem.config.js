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
				"TOKEN": "814ed630017a34658c45ac5f2f30b8bfcd1eb0e4",
			}
		}
	]
}