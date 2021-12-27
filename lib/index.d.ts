import React from 'react';
import './index.less';
import { TapexInstance } from './types';
interface TapexProps {
    className?: string;
    tapex: TapexInstance;
}
export { useTapex } from './hooks';
declare const Tapex: React.FC<TapexProps>;
export default Tapex;
