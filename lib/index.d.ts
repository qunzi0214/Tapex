import React from 'react';
import './index.less';
export { useTapex } from './hooks';
export interface TapexProps {
    className?: string;
}
declare const Tapex: React.FC<TapexProps>;
export default Tapex;
