//Purpose => Revisiting JavaScript Concepts through Documentaion,for better understanding. 


//Interaction Alert, Prompt, and Confirm

//Prompt(title, default_value)- allows user to enter a value with two options OK and CANCEL
let age=prompt("hey What's your name ?","Kavya")  
alert(`your name is ${age}`)


//Confirm- lets user to confirm the question with two options OK and CANCEL , returns true/false
let isAge=confirm("Is your age 23 ?")
alert(isAge)




//Unary Opeartion , converts string input to Number
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b);
alert(Number(a)+Number(b));  


//Example for Logical Operator  OR
let user=prompt("who's there?",'')

if(user=='admin'){
   let  password=prompt('enter password','')
    
    if(password=='TheMaster')
    {
        alert('Welcome')
    }
    else if(password==='' || password===null)
    {
    alert( "cancelled")
    }else{
        alert('wrong password')
    }
}
else if(user === '' || user===null){
    alert('cancelled')
}else{
    alert('I don’t know you')
}

//Nullish Coalescing -(When you have to provide default value OR When you want to get first defined value use Nullish (??))
//Js forbids to use ?? with AND , OR without parenthesis

let a1=null
let b1=undefined;
let c1="Hello"

let ans=a??b??c
alert(ans)  //Hello


//To assign default value

let weight=weight ?? 52 ;

alert(weight) //52 , since weight is undefined the 52 assigned to weight








