function ClickHandler(){
    const handleClick = (text)=>{
        alert(`${text} Opened`)
    }
    return(<>
    <button onClick={()=>handleClick("Alert Box")}>Click Me</button>
    </>)
}
export default ClickHandler