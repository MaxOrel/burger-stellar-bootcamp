import { BurgerIngredient } from '@ya.praktikum/react-developer-burger-ui-components';
import cn from 'classnames';

import s from './style.module.css';

export const Category = ({ title, id, ingredients }) => {
    return (
        <>
            <h2 className='text text_type_main-medium' id={id}>{title}</h2>
            <div className={cn(s.list, 'mb-30')}>
                {ingredients?.map(data => <BurgerIngredient key={data._id} {...data} count={1} />)}
            </div>
        </>
    )
}