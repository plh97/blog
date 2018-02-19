module.exports = {
	apps: [
		{
			name: "blog",
			script: "dist/index.html",
			watch: true,
			env: {
				"PORT": 80,
				"NODE_ENV": "dev",
			},
			env_prod: {
				"PORT": 8001,
				"NODE_ENV": "prod"
			}
		}
	]
}