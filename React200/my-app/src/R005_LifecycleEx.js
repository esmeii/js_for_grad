import React, { Component } from "react";

class R005_LifecycleEx extends Component{
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor call');
    }
    render(){
        console.log('3.render call');
        return (
            <h2>[THIS IS CONSTRUCTOR FUNCTION]</h2>
        )
    }
}
export default R005_LifecycleEx;
//constructor(props) 함수는 가장 먼저 한 번만 호출된다.
//component 내부에서 사용되는 변수(state)를 선언하고 부모에게 받은 props
//를 초기화할 때 사용한다. super()는 맨 위에서 호출해야 한다.
