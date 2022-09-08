import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/base/",
  plugins: [
    mdEnhancePlugin({
      mermaid: true,
    }),
  ],
});
