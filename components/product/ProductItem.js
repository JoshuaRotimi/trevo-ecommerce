import React, {useContext} from "react";
import Link from "next/link";
import {DataContext} from "../../store/GlobalState";
import {addToCart} from "../../store/Actions";

const ProductItem = ({product}) => {
    const {state, dispatch} = useContext(DataContext);
    const {cart} = state;

    const userLink = () => {
        return (
            <>
                <Link href={`product/${product._id}`}>
                    <a className='btn btn-info' style={{marginRight: '5px', flex: 1}}>View</a>
                </Link>
                <button className='btn btn-success'
                        style={{marginRight: '5px', flex: 1}}
                        disabled={product.inStock === 0}
                        onClick={() => dispatch(addToCart(product, cart))}
                >
                    Buy
                </button>
            </>
        )
    };
    return (
        <div className="card" style={{ width: '18rem'}}>
            <img src={product.images[0].url} className="card-img-top" alt={product.images[0].url}/>
                <div className="card-body">
                    <h5 className="card-title text-capitalize" title={product.title}>{product.title}</h5>

                    <div className={'row justify-content-between'}>
                        <h6 className={'text-danger'} style={{flex: 1}}>${product.price}</h6>
                        {
                            product.inStock > 0
                                ? <h6 className={'text-danger'} style={{flex: 1}}>In Stock: {product.inStock}</h6>
                                : <h6 className={'text-danger'}>Out of Stock</h6>
                        }
                    </div>
                    <p className="card-text">{product.description}</p>
                    <div className={'row justify-content-between mx-0'}>
                        {userLink()}
                    </div>
                </div>
        </div>
        )

};

export default ProductItem;