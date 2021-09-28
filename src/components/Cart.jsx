function Cart(props) {
    const {quantity = 0, handleCartShow = Function.prototype} = props;

    return (
        <div
            className="cart #009688 teal white-text"
            onClick={handleCartShow}
        >
            <i className="material-icons cart-icon">shopping_cart</i>
            { quantity ? (
                <span className="cart-quantity">{quantity}</span> ) : (
                null
            )}
        </div>
    );
}

export {Cart};