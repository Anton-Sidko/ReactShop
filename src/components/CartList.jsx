import {CartItem} from './CartItem';

function CartList(props) {
    const {
        order = [],
        handleCartShow = Function.prototype,
        removeFromCart = Function.prototype,
        changeQuantityItem = Function.prototype
    } = props;

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection cart-list">
            <li className="collection-item active cart-list-item">Корзина
                <i className="material-icons" onClick={handleCartShow}>close</i>
            </li>
            {
                order.length ? (
                    order.map(item => (
                        <CartItem
                            key={item.id}
                            removeFromCart={removeFromCart}
                            changeQuantityItem={changeQuantityItem}
                            {...item}
                        />
                    ))) : (
                        <li className="collection-item">
                            Корзина пуста
                        </li>
                    )
            }
            <li className="collection-item active cart-list-item">
                Общая стоимость: {totalPrice} V
                <button className="secondary-content btn indigo lighten-2">Оформить заказ</button>
            </li>
        </ul>
    )
}

export {CartList};