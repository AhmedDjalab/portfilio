const withFonts = require("next-fonts");

module.exports = {
  images: {
    domains: ["cdn.fakercloud.com", "lorempixel.com", "dash.djaalabahmed.com"],
  },
};
// module.exports = withFonts({
//   webpack(config, options) {
//     config.node = {
//       fs: "empty",
//     };
//     config.module.rules.push({
//       test: /.(png|woff|woff2|eot|ttf|svg)$/,
//       images: {
//         domains: ["cdn.fakercloud.com", "lorempixel.com"],
//       },
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: "url-loader?limit=100000",
//         },
//         {
//           loader: "file-loader",
//         },
//       ],
//     });
//     return config;
//   },
// });
