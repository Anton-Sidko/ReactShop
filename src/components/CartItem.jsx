import {useContext} from 'react';
import {ShopContext} from '../context';

function CartItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        preview,
    } = props;

    const {removeFromCart, changeQuantityItem} = useContext(ShopContext);

    return (
        <li className="collection-item cart-list-item">
            <div className="list-item-wrap">
                <div className="cart-list-img">
                    <img src={preview} alt={name} />
                </div>
                {
                    quantity ? (
                        <div>
                            {name} x {quantity} = {price * quantity} V
                        </div>
                    ) : (
                        <div className="deep-orange-text text-darken-3">
                            {name} x {quantity} = {price * quantity} V (Нулевое количество товара. Добавьте количество или удалите товар из корзины)
                        </div>
                    )
                }
            </div>
            <div className="control-list-item">
                <div className="change-quantity-wrap">
                    <button className="change-quantity-item" onClick={() => changeQuantityItem(id, 1)}>+</button>
                    <button className="change-quantity-item" onClick={() => changeQuantityItem(id, -1)}>-</button>
                </div>
                <span className="secondary-content" onClick={() => removeFromCart(id)}>
                    <i className="material-icons">remove_shopping_cart</i>
                </span>
            </div>
        </li>
    )
}

export {CartItem};