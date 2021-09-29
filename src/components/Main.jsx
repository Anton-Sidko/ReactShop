import { useEffect, useContext } from 'react';
import {API_KEY, API_URL} from '../config';

import { ShopContext } from '../context';

import {Preloader} from './Preloader';
import {GoodsList} from './GoodsList';
import {Cart} from './Cart';
import {CartList} from './CartList';
import {Alert} from './Alert';


function Main() {
    const {
        loading,
        order,
        isCartShow,
        alertName,
        setGoods
    } = useContext(ShopContext);

    useEffect(function getGoods() {
        fetch(API_URL, {
                headers: {
                    Authorization: API_KEY,
                }
            })
        .then(response => response.json())
        .then(data => {
            setGoods(data.shop);
        })
        // eslint-disable-next-line
    }, []);

    if (document.querySelector('.goods-list')) {
        if (isCartShow) {
            document.body.style.overflow='hidden';
            document.querySelector('.goods-list').style.webkitFilter = 'blur(10px)';
        } else {
            document.body.style.overflow='';
            document.querySelector('.goods-list').style.webkitFilter = '';
        }
    }

    return (
        <main className="container">
            <Cart quantity={order.length} />
            {loading ? <Preloader /> : <GoodsList /> }
            { isCartShow && <CartList /> }
            { alertName && <Alert /> }
        </main>
    );
}

export {Main};