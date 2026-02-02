const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');

const commonLinuxConfig = {
  name: 'silvi',
  productName: 'SiLVi',
  genericName: 'Video Annotation Tool',
  title: 'SiLVi',
  description: 'Simple Interface for Labeling Video Interactions',
  productDescription: 'SiLVi enables researchers to annotate behaviors and interactions directly within video data, generating structured outputs suitable for training and validating computer vision models.',
  homepage: 'https://ozan-kanbertay.github.io/SiLVi',
  maintainer: 'Ozan Kanbertay',
  icon: 'icons/icon.png',
  categories: [ 'Science', 'Video' ],
  section: 'science',
};

  module.exports = {
  packagerConfig: {
    asar: true,
    icon: 'icons/icon',
    ignore: [
      // 'examples', 
      'installers',
      'docs',
      '.github'
    ],
    osxSign: {},
    osxNotarize: {
      keychainProfile: 'notarization'
    }
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: (arch) => ({
        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        iconUrl: 'https://raw.githubusercontent.com/ozan-kanbertay/silvi/8ed93440afd5bee3e7e3e75ecfaed5b394bb4015/icons/icon.ico',
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: 'icons/icon.ico',
      }),
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
      config: (arch) => ({
        // macUpdateManifestBaseUrl: `https://bitbucket.org/kanbertay/ethowatch/downloads`
      }),
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        format: 'ULMO',
        icon: 'icons/icon.icns'
      },
      platforms: ['darwin']
    },
    {
      name: '@electron-forge/maker-deb',
      config: commonLinuxConfig,
      platforms: ['linux'],
    },
    {
      name: '@electron-forge/maker-rpm',
      config: commonLinuxConfig,
      platforms: ['linux'],
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
