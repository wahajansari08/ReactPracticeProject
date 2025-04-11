


const text = "This Is"

export function ParentComponent(){
    return(<>
    <h2>{text} Parent Component</h2>
    <ChildComponent message = {text}/>
    </>)
}
export function ChildComponent(){
    return(<>
    <h2>{text} Child Component</h2>
    </>)
} 
