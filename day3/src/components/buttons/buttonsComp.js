import React from 'react';
export default class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        };
    }
    counterHandle = isSum =>{
        // this.props.product.quantity ++;
        this.props.select(this.props.product)

    }
    // counterHandle = isSum => {
    //     this.setState({
    //         counter:isSum ? this.state.counter +1 : this.state.counter -1
    //     });
    // }
    render(){
        return (
            <div className='wrapper'>
                <span>{this.props.product.counter}</span>
                <button onClick= {() => this.counterHandle(true)} className='btn'><span className='txtBtn'>+</span></button>
            </div>
        );
    }
}