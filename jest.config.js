module.exports = {
  bail: false,
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.svelte$': 'svelte-jester'
  },
  verbose: true
}
