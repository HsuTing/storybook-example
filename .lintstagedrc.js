module.exports = {
  '*.js': ['yarn prettier --write'],
  '**/package.json': [
    'yarn prettier-package-json --write',
    'yarn prettier --parser json --write',
  ],
  '*.md': ['yarn prettier --parser markdown --write'],
  '*.less': ['yarn prettier --parser less --write'],
};
