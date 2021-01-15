import React from 'react';
import s from './SideBar.module.scss';
const SideBar = ({options = [], buttonText = 'Go', canShow}) => <aside 
    className={s.main}
    style={{display: !canShow ? 'none' : 'flex'}}
>
    {options.map(item => <span key={item} className={s.main_item}>{item}</span>)}
    <span className={[s.main_item, s.main_button].join(' ')}>{buttonText}</span>
</aside>;
export default SideBar