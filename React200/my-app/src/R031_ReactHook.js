import React,{Component, useEffect, useState} from "react";

function R031_ReactHook(props){

    //useState 함수를 통해 state 값 선언 및 할당
    const [contents, setContents] = useState('[THIS IS REACT]');
    //useEffect는 componentDidMount와 같이 화면에 로딩될 때 한 번 실행되고 
    //setContents 함수로 state값이 변경되면 한 번 더 실행된다.
    useEffect(() => {
        console.log('useEffect');
    });
    
    return(
        <div style={{padding:"0px"}}>
            <h2>{contents}</h2>
            <button onClick={()=>setContents('[THIS IS HOOK]')}>
                버튼
            </button>
        </div>
    )
}
export default R031_ReactHook;