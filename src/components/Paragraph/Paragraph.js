import React from 'react';
import { PARA_TEXT } from '../../strings';
import s from './Paragraph.module.scss';
const Paragraph = ({text = PARA_TEXT}) => <div className={s.parent}>
    <p className={s.main}>{text}</p>
    <span className={s.main_line} />
</div>;
export default Paragraph;