import { FC } from 'react';
import './index.less';
interface TapexProps {
    className?: string;
    bordered?: boolean;
    infiniteScroll?: boolean;
    columns?: any;
    dataSource?: any;
}
declare const Tapex: FC<TapexProps>;
export default Tapex;
