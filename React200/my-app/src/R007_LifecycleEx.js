import React, {Component} from "react";

class R007_LifecycleEx extends Component{
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps Call : '+props.prop_value);
        return {tmp_state:props.prop_value};
    }
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. constructor Call');
    }
    //render()함수 이후 코드를 화면에 그려준다. 화면이 다 보여진 후 
    //실행돼야 하는 이벤트처리에 활용되는 함수이다.
    componentDidMount(){
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : '+this.state.tmp_state);
    }
    render(){
        console.log('3. render Call');
        return (
            <h2>[THIS IS COMPONENT FUNCTION]</h2>
        )
    }
}
export default R007_LifecycleEx;