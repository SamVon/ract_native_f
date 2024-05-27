// const plugin = require("tailwindcss");

module.exports = {
  //assets: ['./assets/fonts/'], 
  presets: ['module:@react-native/babel-preset'],
  plugins: [["nativewind/babel"],[
    'module:react-native-dotenv',
    {
      moduleName: '@env',
      path: '.env',
      blacklist: null,
      whitelist: null,
      safe: false,
      allowUndefined: true,
    },
  ],
], 
}; 