import { Component } from "react";

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
        return <div>this is Disclaimer component. Click and unmount it.</div>
    }
}
