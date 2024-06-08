const firstnamechange=(e)=>{
    const val=e.target.value
    if(val.length>1){
        console.log("correct")
    }
    
}
const submitform=(e)=>{
    const t = e.target
    const res ={
        hobbies:[],
    };


    for(let i=0;i<t.length;i++){
        const ty=t[i].type
    }
     
}
function sum(a,b , fun){//in here the "sum " function is declared and is also known as higher order function(HOF)
    const ans = a+b
    fun(ans)
}

function print(x){
    console.log('*****',x,'******')
}
sum(3,4 ,print)//in this function"sum" the argument print is the call back function
