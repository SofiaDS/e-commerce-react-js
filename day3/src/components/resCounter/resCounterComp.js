import React from 'react';
// import Counter from '../buttons/buttonsComp.js';

export default class ResCounter extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            counter: props.counter
        }
    }
    render(){
        return(
            <span>{this.state.counter}</span>
        )
    }
}