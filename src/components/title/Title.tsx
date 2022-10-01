import Link from 'next/link';
import React, { FC, useEffect } from 'react'
// import AOS from "aos"

type Props = {
    title: string;
    link?: string;
    button?: string;
}


const Title: FC<Props> = (props) => {

//     useEffect(() => {
//   AOS.init();
// }, []);

    return (
        <div className='title__container aos-item' 
        data-aos="fade-up"
         >
            <div className="show_more" >
                <div className="selected_title"><p>{props.title}</p></div>
                { props.link ? (
                    <div className="show_more_button"><Link href={props.link}>{props.button}</Link></div>
                ) : ""   }  
            </div>
        </div>
    )
}

export default Title