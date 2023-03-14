import React from 'react'

const Person = (props) => {
    return (
        <div>
            {/* <h1>{props.children}</h1> */}
            <ul>
                <li><b>Tên:</b> {props.name}</li>
                <li><b>Loại:</b> {props.type}</li>
                <li><b>Màu:</b>  {props.color}</li>
                <li><b>Kích cỡ:</b>  {props.size}</li>
            </ul>
            <hr></hr>
        </div>
    )
}

export default Person