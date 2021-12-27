import { FormInstance } from 'antd';
export declare type TapexInstance = FormInstance<any> & {
    getRootKey: () => string;
    getTableData: () => Array<Record<string, any>>;
    initAllValues: <T extends Record<string, any>>(values: T[]) => void;
    getAllValues: <T extends Record<string, any>>() => T[];
    getValueByPath: (path: [number, string]) => any;
    setValueByPath: (path: [number, string], value: any) => void;
};
