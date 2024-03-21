const path = require("path");

const productName = "min-electron-test";
const icoPath = path.resolve(__dirname, "resources/icons/icon.ico");
const iconUrl = `https://cdn.affine.pro/app-icons/icon_stable.ico`;

module.exports = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: productName,
        setupIcon: icoPath,
        iconUrl: iconUrl,
        loadingGif: path.resolve(
          __dirname,
          "./resources/icons/affine_installing.gif"
        ),
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
    {
      name: "@pengx17/electron-forge-maker-appimage",
      platforms: ["linux"],
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
