//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  "preset": "aws-amplify",
  runtimeConfig: {
    appName: "FromConfig"
  }
});
