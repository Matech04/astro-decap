import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

const config: AstroUserConfig = defineConfig({
	site: "http://localhost:4321",
	output: "server",
	adapter: vercel(),
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
	],

	i18n: {
    locales: ["en", "de", "pl"],
    defaultLocale: "en",
		routing: {
        prefixDefaultLocale: false
    }
  }
});

// https://astro.build/config
export default defineConfig(config);
