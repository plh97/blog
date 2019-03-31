module.exports = {
	setupFiles: ['./__mocks__/browserMocks.js'],
	moduleFileExtensions: ['js', 'jsx', 'scss'],
	transformIgnorePatterns: ['node_modules'],
	moduleDirectories: ['node_modules', 'src'],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
		'@/(.*)$': '<rootDir>/src/$1'
	}
}
