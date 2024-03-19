// display content in screen
const displayContent = (content) =>{
    console.log(content);
    calcscreen.value += content
}
// clear content
const clearAllContent = () =>{
    calcscreen.value =""
    calcscreen.placeholder="0"
}
// result display in calcscreen
const showResult =() =>{
    try{
        console.log("TRY Block");
        calcscreen.value = eval(calcscreen.value)
    }catch(err){
        console.log("CATCH Block");
        console.log(err);
        calcscreen.value = ""
        calcscreen.placeholder = "Invalid Expression !!!"
    }finally{
        console.log("Finally Block : Task completed");
    }
}
// remove last
const removeLast= () =>{
    calcscreen.value =calcscreen.value.slice(0,-1)
}
