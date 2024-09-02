import React from 'react'


import { BiEdit} from "react-icons/bi"
import { AifillDelete} from "react-icons/ai"




const todo = ({text, updatemode, deletetodo}) =>{

    return (
        <div className="todo">
            <div classname="text">{text}</div>
            <div className="icons">
                <BiEdit className ='icon' oneClick={updateMode} />
                <AiFilleDelete className= 'icon'oneclick={deletetodo}/>

            </div>
        </div>
    )
}

export default todo