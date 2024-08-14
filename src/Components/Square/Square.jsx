import React from 'react'

const Square = (props) => {
    return (
        <div className='square' onClick={props.onClick} style={{ border: "1px solid black",height:"24vmin",width:"24vmin",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <h5 style={{fontSize:"3vmin"}}>{props.value}</h5>
        </div>
    )
}

export default Square