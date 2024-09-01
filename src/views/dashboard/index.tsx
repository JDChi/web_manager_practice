import { Descriptions } from 'antd';
import style from './index.module.less';

export default function Dashboard() {
    return (
        <div className={style.dashboardWrapper}>
            <div className={style.userInfo}>
                <Descriptions title='User Info'>
                    <Descriptions.Item label='UserName'>
                        Zhou Maomao
                    </Descriptions.Item>
                    <Descriptions.Item label='Telephone'>
                        1810000000
                    </Descriptions.Item>
                    <Descriptions.Item label='Live'>
                        Hangzhou, Zhejiang
                    </Descriptions.Item>
                    <Descriptions.Item label='Remark'>empty</Descriptions.Item>
                    <Descriptions.Item label='Address'>
                        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang,
                        China
                    </Descriptions.Item>
                </Descriptions>
            </div>
            <div className={style.report}>
                <div className={style.card}>
                    <div className={style.title}>司机数量</div>
                    <div className={style.data}>100个</div>
                </div>
                <div className={style.card}>
                    <div className={style.title}>总流水</div>
                    <div className={style.data}>100万</div>
                </div>
                <div className={style.card}>
                    <div className={style.title}>总订单</div>
                    <div className={style.data}>100单</div>
                </div>
                <div className={style.card}>
                    <div className={style.title}>开通城市</div>
                    <div className={style.data}>100个</div>
                </div>
            </div>
        </div>
    );
}
