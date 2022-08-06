import React , {Component} from "react";
import datatype from 'prop-types';
//자식 컴포넌트에서 자료형을 선언해 놓으면 부모 컴포넌트에서 넘어오는 props
//변수들의 자료형과 비교된다.
class R018_PropsDatatype extends Component{
    render(){
        let{
            String, Number, Boolean, Array, Function
        } =  this.props
        return (
            <div style={{padding: "0px"}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <p>BooleanProps: {Boolean}</p>
                <p>ArrayProps: {Array}</p>
                <p>FunctionProps: {Function}</p>
            </div>
        )
    }
}

R018_PropsDatatype.prototype = {
    String:datatype.number,
    Number:datatype.number,
    Boolean:datatype.bool,
    Array:datatype.array,
    Function:datatype.func,
}

export default R018_PropsDatatype;
