module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    [
      '@emotion/babel-plugin',
      { autoLabel: 'dev-only', labelFormat: '[local]' },
    ],
    'babel-plugin-twin',
    'babel-plugin-macros'
  ],
}
