import { useState } from "react"

export const Message = ()=>{
    
    const [message, setMessage] = useState('Welcome Visitor')
    const [id, setId] = useState('useID')

    return( 
    <div>
    <h1 id={id}>{message}</h1>
    <button onClick={() => setMessage('Thanks!')}>Subscribe</button>
    <button onClick={() => setId('differentID')}>ID Change</button>
    </div>
    )

}

