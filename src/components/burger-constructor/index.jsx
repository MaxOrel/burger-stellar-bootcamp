import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

export const BurgerConstructor = ({ constructorIngredients }) => {
    const buns = constructorIngredients.find(data => data.type === 'buns')

    return (
        <>
            <div>
                <ConstructorElement {...buns} type="top" />
                {constructorIngredients.map(data => <ConstructorElement thumbnail={data.image} {...data} />)}
                <ConstructorElement type='buttom' />
            </div>

        </>
    )
}