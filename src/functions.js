
function showMessage(name){
    alert("hello"+ " " +name)
}
showMessage('Kavya')

//Local Variables in Function:
function Hello(){
    let message="I dont say Hello" //message is local
    alert(message)
}
Hello()

//Global variable =>Gobal variables are used by function only if local variables doesn't exixt
// if the outer and local variable names are same then local var shodows outer var
let name='kay'

function User(){
    name='koo'
    alert("hello" + " " + name)
}
User()

//Returning a Value

function UserAge(age){
    if(age>=18){
        return true
    }else{
        return confirm('Do you have permission ?')
    }
}

let age=prompt('enter your age',18)


if(UserAge(age)){
    alert('Access Granted')
}else{
    alert('Access Denied')
}


//An empty return is undefined

function empty(){}
alert(empty()===undefined) //true


// ------------------
function empty(){
    return;
}
alert(empty()===undefined) //true

//Always return value in the same line, else js thinks it that there's semicolon and acts as an empty return. or use parenthesis to ouput as expected. 

//An empty return would terminate the funtion immediately

//Power an X
function power(x, n){
let res=x;
for(let i=1;i<n;i++){
    res=res*x
}
return res
    
}
power(3,4)

let x=prompt('enter x')
let n=prompt('enter n')


//Function Expression

let sayHi=function(){
    alert('hello')
}

//CallBack Function => Function passed as an argument are called allback fun


function User(question,yes,no){
    if(confirm(question)){
        yes()
    }  else{
        no()
    }
}
function myName(){
    alert('yes it is')
}
function notMyName(){
alert('no it isnt')
}

User('Is your name kavyaa?', myName,notMyName)

//Funtions without Name=> Anonymous Functions

//Arrow Function

let sum=(a,b) => a+b

alert(sum(3,4))


//When there is one argument

let double=n=>n*n   //same as   let double=function(n){return n*n}  
double(3)

//No parameter

let name1=()=>{    //Parentesis are compulsory when no parameters are present


}

//MultiLine statement Arrow Function


let addition=(c,d)=>{   //curly braces mandatory
    let result=c+d
    return result
}

alert(addition(4,5))



//Task  Re-writing below funtion into arrow-func

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

        
//Solution://

let ask=(question, yes, no)=>{
    return confirm(question) ? yes() :no()
}

ask('do you agree' , ()=>alert('agreed'), ()=>alert('canceled'))






