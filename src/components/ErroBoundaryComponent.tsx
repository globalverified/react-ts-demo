import {useState} from 'react'

export function ErrorBoundayHandle(){
    const [isComponent, setIsComponent] = useState(false);
   
    return(
        <div>
            <button onClick={()=>setIsComponent(true)}> set error boundary</button>
        </div>
    )
}