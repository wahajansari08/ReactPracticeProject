import { useState } from 'react'

function Counter(){

    return <SmallCounter initialValue={0}/>

}

function SmallCounter({initialValue}){
    const [count, SetCount] = useState(initialValue)

    return(<>
    <h4>Counter {count}</h4>
    <button onClick={()=>SetCount(count+1)}>Increase</button>
    </>)
}

export default Counter