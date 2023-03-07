import React from 'react'
import './banner.css'
import { img } from './asset/img'
const Banner = () => {
    return (
        <div className='a'>
            {
                img.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item.anh} alt="" />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Banner