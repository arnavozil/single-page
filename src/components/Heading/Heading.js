import React from 'react';
import s from './Heading.module.scss';
const Heading = ({text = 'Heading'}) => <div className={s.main}>{text}</div>;
export default Heading;