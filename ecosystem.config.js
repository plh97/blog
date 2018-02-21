module.exports = {
	apps: [
		{
			name: "blog",
			script: "./src/server/index.js",
			watch: true,
			env: {
				"PORT": 80,
				"NODE_ENV": "dev",
			},
			env_prod: {
				"PORT": 8001,
				"NODE_ENV": "prod",
				"TOKEN": "ed8cc3810c26e5f4b386982a2b99408da425be7d",
			}
		}
	]
}