import Link from 'next/link';
import React, { FC } from 'react'

type Props = {
    title: string;
    link?: string;
    button?: string;
}


const Title: FC<Props> = (props) => {
    return (
        <div className='title__container'>
            <div className="show_more">
                <div className="selected_title"><p>{props.title}</p></div>
                { props.link ? (
                    <div className="show_more_button"><Link href={props.link}>{props.button}</Link></div>
                ) : ""   }  
            </div>
        </div>
    )
}

export default Title