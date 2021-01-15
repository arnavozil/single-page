import React from 'react';
import s from './Card.module.scss';
const Card = ({name, image}) => <div className={s.main}>
    <img alt={name} src={image} className={s.main_img} />
    <span className={s.main_name}>{name}</span>
</div>;
export default Card;