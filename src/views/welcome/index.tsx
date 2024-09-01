import style from './index.module.less';

export default function Welcome() {
    return (
        <div className={style.welcome}>
            <div className={style.content}>
                <div className={style.title}>欢迎体验</div>
                <div className={style.subTitle}>通用管理后台</div>
            </div>
        </div>
    );
}
