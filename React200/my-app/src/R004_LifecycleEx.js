import React, { Component } from "react";

class R004_LifecycleEx extends Component{
    render(){
        console.log('3. render call');
        return(
            <h2>[THIS IS RENDER FUNCTION]</h2>
        )
    }
}
export default R004_LifecycleEx;
//render()는 화면 내용이 변경돼야 할 시점에 자동으로 호출된다.
