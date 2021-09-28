import {GoodsItem} from './GoodsItem';

function GoodsList(props) {
    const {goods = [], addToCart = Function.prototype} = props;

    if (!goods.length ) {
        return (
            <h3>Nothing here</h3>
        );
    }

    return (
        <div className="goods-list">
            {goods.map(item => (
                <GoodsItem key={item.mainId} {...item} addToCart={addToCart}/>
            )).slice(0,12)}
        </div>
    );

}

export {GoodsList};