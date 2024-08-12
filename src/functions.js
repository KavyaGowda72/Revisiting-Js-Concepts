
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