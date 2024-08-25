import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// 这是 vite 的配置文件，参考 https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, './src'),
		}
	},
	server: {
		host:"localhost",
		port:8080,	
	}
})
