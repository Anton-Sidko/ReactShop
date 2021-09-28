import {CartItem} from './CartItem';

function CartList(props) {
    const {order = [], handleCartShow = Function.prototype} = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity;
    }, 0);

    return (
        <ul className="collection cart-list">
            <li className="collection-item active cart-list-item">Корзина
                <i class="material-icons" onClick={handleCartShow}>close</i>
            </li>
            {
                order.length ? (
                    order.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))) : (
                        <li className="collection-item">
                            Корзина пуста
                        </li>
                    )
            }
            <li className="collection-item active cart-list-item">Общая стоимость: <span>{totalPrice} V</span></li>
        </ul>
    )
}

export {CartList};