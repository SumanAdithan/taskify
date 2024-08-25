import { defineConfig } from 'vite';
import postcss from './postcss.config';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@actions': resolve(__dirname, 'src/actions'),
            '@assets': resolve(__dirname, 'src/assets'),
            '@components': resolve(__dirname, 'src/components'),
            '@constants': resolve(__dirname, 'src/constants'),
            '@context': resolve(__dirname, 'src/context'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@layout': resolve(__dirname, 'src/layout'),
            '@models': resolve(__dirname, 'src/models'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@provider': resolve(__dirname, 'src/provider'),
            '@reducer': resolve(__dirname, 'src/reducer'),
            '@routes': resolve(__dirname, 'src/routes'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@ui': resolve(__dirname, 'src/ui'),
            '@utils': resolve(__dirname, 'src/utils'),
        },
    },
    plugins: [react(), tsconfigPaths()],
    css: {
        postcss,
    },
});
