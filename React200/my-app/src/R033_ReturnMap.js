import React,{Component} from "react";

class R033_ReturnMap extends Component{
    render(){
        const element_Array = [
            <li>react</li>
            ,<li>200</li>
            ,<li>Array</li>
        ]
        return (

            //map 을 통해 반복되는 배열을 쉽게 화면에 보일 수 있다.
            <ul>

                
                {element_Array.map((array_val) => array_val)}
            </ul>
        )
    }
}
export default R033_ReturnMap;