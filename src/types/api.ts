// 接口类型定义

export interface Result<T = any> {
    code: number;
    data: T;
    msg: string;
}

export namespace LoginNS {
    export interface params {
        userName: string;
        usePwd: string;
    }
}
