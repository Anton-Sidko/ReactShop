import {useState, useEffect} from 'react';
import {API_KEY, API_URL} from '../config';

import {Preloader} from './Preloader';
import {GoodsList} from './GoodsList';
import {Cart} from './Cart';
import {CartList} from './CartList';
import {Alert} from './Alert';


function Main() {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isCartShow, setCartShow] = useState(false);
    const [alertName, setAlertName] = useState ('');

    const addToCart = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            })
            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    const removeFromCart = (itemId) => {
        const newOrder = order.filter(el => el.id !== itemId);
        setOrder(newOrder);
    };

    const changeQuantityItem = (itemId, n) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                const newQuantity = el.quantity + n;
                return {
                    ...el,
                    quantity: newQuantity > 0 ? newQuantity : 0
                }
            } else {
                return el;
            }
        });

        setOrder(newOrder);
    };

    const handleCartShow = () => {
        setCartShow(!isCartShow);
        if (!isCartShow) {
            document.body.style.overflow='hidden';
            document.querySelector('.goods-list').style.webkitFilter = 'blur(10px)';
        } else {
            document.body.style.overflow='';
            document.querySelector('.goods-list').style.webkitFilter = '';
        }
    };

    const closeAlert = () => {
        setAlertName('');
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
                headers: {
                    Authorization: API_KEY,
                }
            })
        .then(response => response.json())
        .then(data => {
            data.shop && setGoods(data.shop);
            setLoading(false);
        })
    }, []);

    return (
        <main className="container">
            <Cart quantity={order.length} handleCartShow={handleCartShow} />
            {loading ? (
                <Preloader /> ) : (
                <GoodsList goods={goods} addToCart={addToCart}/>
            )}
            {
                isCartShow && (
                <CartList
                    order={order}
                    handleCartShow={handleCartShow}
                    removeFromCart={removeFromCart}
                    changeQuantityItem={changeQuantityItem}
                />)
            }
            {
                alertName && <Alert name={alertName} closeAlert={closeAlert}/>
            }
        </main>
    );
}

export {Main};