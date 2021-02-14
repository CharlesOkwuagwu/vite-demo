import { UserConfig   } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

const config: UserConfig = {
  plugins: [
    Vue({
      include: [/\.vue$/]
    }),
    Pages({
      extensions: ['vue'],
      syncIndex: false,
    }),
    ...WindiCSS(),
    Layouts()
  ],
}

export default config