import React from 'react';
import Card from '../Card/Card';
import s from './Dishes.module.scss';
const Dishes = ({dishes = []}) => <div className={s.main}>
    {dishes.map(({name, image}) => <Card key={name} name={name} image={image} />)}
</div>;
export default Dishes;