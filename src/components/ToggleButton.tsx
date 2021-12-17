import { useState } from "react";

export function ToggleButton(){
    const compTitle = '- ToggleButton-with state management - ';
    const [checked, toggleButton]  = useState(false);
    console.log('is checkbox checked',checked);
    return(
        <div>
            {compTitle}
            <input type="checkbox" checked={checked}
            onChange={(e:any)=>toggleButton(e.target.checked)}/>
        </div>
    )
}
