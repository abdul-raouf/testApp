module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets/',
          '@components': './src/components/',
          '@icons': './src/icons/',
          '@navigation': './src/navigation/',
          '@screens': './src/screens/',
          '@services': './src/services/',
          '@svgIcons': './src/svgIcons/',
          '@types': './src/types/',
          '@utils': './src/utils/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
