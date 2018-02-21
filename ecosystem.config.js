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
				"TOKEN": "1cd2369d62051f0c893735e5d36fee7e9dc5cf52",
			}
		}
	]
}