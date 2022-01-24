import {useState} from 'react'

export function ErrorBoundayHandle(){
    const [isUserComponent, setIsComponent] = useState(false);
   
    return(
        <div>
            {isUserComponent? <></>: null}
            <button onClick={()=>setIsComponent(true)}> set error boundary</button>
        </div>
    )
}