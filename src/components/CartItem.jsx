function CartItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        preview
    } = props;

    return (
        <li className="collection-item cart-list-item">
            <div className="list-item-wrap">
                <div className="cart-list-img">
                    <img src={preview} alt={name} />
                </div>
                {name} x {quantity} = {price * quantity} V
            </div>
            <span href="#!" class="secondary-content">
                <i class="material-icons">remove_shopping_cart</i>
            </span>
        </li>
    )
}

export {CartItem};