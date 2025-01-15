import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv, type ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
    const env = loadEnv(mode, process.cwd());

    env.VITE_BASE_URL ??= "/";

    return {
        plugins: [vue()],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./src", import.meta.url)),
            },
        },
        // We use this to factor in for github hosting, as for github, it's not served at the root, it's at the root + repository name
        // https://vitejs.dev/guide/static-deploy.html#github-pages
        // This parameter is always expected to end in a "/"
        base: env.VITE_BASE_URL,
        ssgOptions: {
            includedRoutes(_, routes) {
                const newroutes: string[] = [];
                for (const route of routes) {
                    if (!route.path.includes(":")) {
                        newroutes.push(route.path);
                    }
                }

                for (let a = 0; a < 4; a++) {
                    newroutes.push(`/shop/${a}`);
                }
                return newroutes;
            },
        },
    };
});
