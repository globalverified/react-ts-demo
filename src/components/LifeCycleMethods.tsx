import { Component, useEffect, useState } from "react";

export interface IProps {
    initialVal: number;
}
export interface IState {
    count: number;
    destroyComponent: boolean;
}
export class LifeCycleMethods extends Component<IProps, IState>{
    state: IState = {
        count: this.props.initialVal,
        destroyComponent: false
    };
    componentDidMount(){
        console.log('componentDidMount called');
        this.setState({count: this.state.count+10});
    }
    componentDidUpdate(preProps: IProps, prevState: IState){
        console.log('componentDidUpdate called - ',preProps,prevState);
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate called');
        return true //if true then it will call render again
    }
    onClickButton =()=>{
        this.setState({count: this.state.count+2, destroyComponent: true});
    }
    render() {
        console.log('render called');
        return(
            <div>
                <hr />
                Count with class component: {this.state.count}<br />
                <button onClick={this.onClickButton}>increment value</button>
                {!this.state.destroyComponent && <Disclaimer />}
            </div>
        )   
    }
}
export class Disclaimer extends Component{
    componentWillUnmount(){
        console.log('componentWillUnmount called');
        //clean up phase e.g. clearInterval()
    }
    render(){
        return <div>This is ITC Disclaimer Component. Click above and unmount it.</div>
    }
}
export function LifeCycleWithFunction(props: IProps){
    const [count, setCount] = useState(props.initialVal);
    //only one time like componentDidMount
    useEffect(() => {
       console.log('only one time useEffect and COUNT value changed');
       setCount(count+3);
       // eslint-disable-next-line
    }, []);
    useEffect(()=>{
        console.log("useEffect - count value has chnaged");
    },[count]);
    useEffect(()=>{
        console.log("useEffect - EVERYTIME on each component change");
    });
    //previous effect is cleaned up before executing the next effect
    useEffect(()=>{
        console.log("useEffect Clean up - count value has changed");
        // const subscription = props.source.subscribe();
        return ()=>{
            console.log("useEffect - cleaner phase ");
            //subscription.unsubscribe();
        }
    },[count]);
    const incrementValueByOne = ()=>{
        setCount(count+1);
    };
    return(
        <div>
            <hr />
            Count with Function Component: {count}<br/>
            <button onClick={incrementValueByOne}>Increment by 1</button>
        </div>
    )
}