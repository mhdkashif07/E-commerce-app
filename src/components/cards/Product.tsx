import Link from 'next/link';
import React, { FC } from 'react'
import select1 from "../../../public/AdobeStock_118120200.png"

interface Props {
    id: number;
    image: string;
    name: string;
    price: string;
    description: string;
}

const Product: FC<{item: Props} > = ({item}) => {
    
    return (
        <div>
            <a href="">
            <Link href={`/product/${item.id}`} >
            <div className="selected_product_item" key="2">
                <div className="product_img"><img src={`/${item.image}`} /></div>
                <div className="text_container">
                    <div className="discount_container">
                        <div className="discount"><h4>30%</h4></div>
                    </div>
                    <div className="product_text">
                        <h3>{item.name}</h3>
                        <h3>${item.price}</h3>
                    </div>
                </div>
            </div>
            </Link>
            </a>
        </div>
    )
}

export default Product