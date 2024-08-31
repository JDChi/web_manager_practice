import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <ConfigProvider
        theme={{
            token: {
                colorPrimary: '#00b96b'
            }
        }}
    >
        <App />
    </ConfigProvider>
);
