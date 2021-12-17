import { useState } from "react";
interface IUserForm {
    name: string,
    age: number
}
const defaultFormValue = {
    name: '',
    age: 0
}
export function UserForm() {
    const compTitle = '- UserForm-with state management - ';
    const [form, setForm] = useState<IUserForm>(defaultFormValue)
    const onChangeName = (e: any) => {
        setForm({
            ...form,
            name: e.target.value
        })
    }
    const onChangeAge = (e: any) => {
        setForm({
            ...form,
            age: e.target.value
        })
    }
    const onSubmitForm = ()=>{
        console.log("form", form);
        // here we can POST call
    }
    return (
        <div>
            <hr />
            {compTitle}
            Name: <input type="text" name="username" value={form.name}
                onChange={onChangeName} /><br />
            Age: <input type="number" name="userage" value={form.age}
                onChange={onChangeAge} />
                <button onClick={onSubmitForm}>submit</button>
        </div>
    )
}
