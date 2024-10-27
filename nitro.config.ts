import "dotenv/config";
import { env } from 'std-env';

//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  "preset": "aws-amplify",
  runtimeConfig: {
    appName: "FromConfig",
    another: env.NITRO_APP_NAME ?? env.APP_NAME,
    sam: env.REACT_APP_TEST_VARIABLE
  }
});
