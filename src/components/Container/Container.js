import React, { useEffect, useLayoutEffect, useState } from 'react';
import { DISHES_LIST, HEADING_TEXT, SIDE_OPTIONS } from '../../strings';
import Dishes from '../Dishes/Dishes';
import Heading from '../Heading/Heading';
import Logo from '../Logo/Logo';
import Paragraph from '../Paragraph/Paragraph';
import SideBar from '../SideBar/SideBar';

import s from './Container.module.scss';

const Container = () => {
    const [canShowBar, setCanShowBar] = useState(window.innerWidth >= 900);
    const [width, setWidth] = useState(window.innerWidth);
    useLayoutEffect(() => {
        setWidth(window.innerWidth);
    }, [window.innerWidth]);
    useEffect(() => setCanShowBar(width >= 900), [width]);
    return <section className={s.main}>
        <Logo currentState={canShowBar} setCanShowBar={setCanShowBar} />
        <SideBar canShow={canShowBar} options={SIDE_OPTIONS} buttonText='Cart' />
        <Heading text={HEADING_TEXT} />
        <Paragraph />
        <Dishes dishes={DISHES_LIST} />
    </section>;
}


export default Container;