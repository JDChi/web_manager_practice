import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

function Error404() {
    const nav = useNavigate();

    function handleClick(): void {
        nav('/');
    }

    return (
        <Result
            status={'404'}
            extra={
                <Button type='primary' onClick={handleClick}>
                    回首页
                </Button>
            }
        />
    );
}

export default Error404;
