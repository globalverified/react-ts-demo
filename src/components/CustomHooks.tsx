import { useLocalStorage } from '../hooks/useLocalStorage';

export function CustomHooks() {
    // eslint-disable-next-line 
    const [state, setstate, remove] = useLocalStorage('key1', 'value1');

    return (
        <>  Local storage value = {state}
            <div>
                <button onClick={() => { setstate('updated value1') }}>Update localstorage value</button>
                <button onClick={() => { remove() }}>Remove localstorage value</button>
            </div>


        </>
    )
}