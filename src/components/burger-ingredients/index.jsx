import { useState } from 'react';
import cn from 'classnames';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import s from './style.module.css';
import { Category } from '../category/category';


export const BurgerIngredients = ({ ingredients }) => {
    const [current, setCurrent] = useState('buns')

    const buns = ingredients.filter(item => item.type === 'bun');
    const main = ingredients.filter(item => item.type === 'main');
    const sauce = ingredients.filter(item => item.type === 'sauce');

    function handleClickTab(tab) {
        setCurrent(tab);
        console.log(tab);
        const title = document.getElementById(tab);
        console.log(title);
        if (title) title.scrollIntoView({ behavior: "smooth" })
    }


    return (
        <section className={s.ingredients}>
            <div className={s.menu}>
                <Tab value="buns" active={current === 'buns'} onClick={handleClickTab}>
                    One
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={handleClickTab}>
                    Two
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={handleClickTab}>
                    Three
                </Tab>
            </div>
            <div className={cn(s.wrapper, 'custom-scroll')}>
                <Category
                    title="Булки"
                    id="buns"
                    ingredients={buns}
                />
                <Category
                    title="Начинки"
                    id="main"
                    ingredients={main}
                />
                <Category
                    title="Соусы"
                    id="sauce"
                    ingredients={sauce}
                />
            </div>

        </section>
    )
}