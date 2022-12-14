import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import select1 from "../../../public/AdobeStock_118120200.png"
import { useAppDispatch } from '../../app/hook';
import { isGalleryImages } from '../../app/slices/dataSlice';
import { Result } from '../../shared/types';

interface Props {
    item: Result
}

const Product: FC<Props> = ({item}) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    
    
    return (
        <div >
            <a href="" onClick={() => dispatch(isGalleryImages(item?.images))}>
            <Link href={`/productdetail/${item?.articles[0].code}`}  >
            <div className="selected_product_item" key="2">
                <div className="product_img"><img src={`${item?.images?.[0].url}`} /></div>
                <div className="text_container">
                   {router.pathname != "/" ? " ": (
                    <div className="discount_container">
                     <div className="discount"><h4>30%</h4></div>
                 </div>
                   )  }
                    <div className="product_text">
                        <h3>{item?.name}</h3>
                        <h3>${item?.price.value}</h3>
                    </div>
                </div>
            </div>
            </Link>
            </a>
        </div>
    )
}

export default Product