import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/api/auth': 'http://localhost:5000',
			'/api/players': 'http://localhost:5000',
		},
	},
})
