import { moduleFederationPlugin } from '@module-federation/sdk';

export const mfConfig: moduleFederationPlugin.ModuleFederationPluginOptions = {
  name: "dominatecnica",
  exposes: {},
  remotes: {
    'components': 'dominausers@http://localhost:4002/remoteEntry.js',
  },
  shared: [
    "react",
    "react-dom",
    "tailwindcss",
    "postcss-loader",
  ],
};
