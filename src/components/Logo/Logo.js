import React from 'react';
import { CgMenuLeft, FiShoppingCart } from 'react-icons/all';
import s from './Logo.module.scss';
const Logo = ({text1='Lorem', text2 = 'Ipsum', setCanShowBar, currentState}) => <h1 className={s.main}>
    <CgMenuLeft onClick={() => setCanShowBar(!currentState)} className={[s.main_icon, s.main_left].join(' ')} />
    <span className={s.main_text}>{text1}</span>
    <span className={s.main_text}>{text2}</span>
    <FiShoppingCart className={[s.main_icon, s.main_right].join(' ')} />
</h1>;
export default Logo;