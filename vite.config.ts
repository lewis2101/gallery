import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import pluginRewriteAll from 'vite-plugin-rewrite-all';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        pluginRewriteAll(),
        createHtmlPlugin({
            minify: true,
            entry: 'src/main.ts',
            template: 'build/vite/index.vite.html',
            inject: {
                tags: [
                    {
                        injectTo: 'head-prepend',
                        tag: 'base',
                        attrs: {
                            href: '/'
                        }
                    }
                ]
            }
        })
    ],
    server: {
        host: 'localhost',
        port: 3000
    }

})
