
/*Objects=> stores data in key-value pairs
Creating objects: 
1) let user=new Object() // 'object constructor"
2) let user={} //'object literal'

Accessing propserties of Objects:
    * dot notation 
    * sqaure brackets

Adding property: user.age=23;
Deleting Property: delete user.age

When theres multiple words in a property we write it in double quotes:
let user={
"bird watching": true
}

Accessing this property :

user["bird watching"] //true

user.bird watching //watching not defined */








//Tasks:
/*
Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.*/
//Solution
let user={
    name:'john',
    surname:'smith',

}
user.name='Pete'
delete user.name

alert(user.surname)


//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true
}

//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

//If salaries is empty, then the result must be 0.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum=0;
  for(let key in salaries){
    sum=sum+salaries[key]
  }
 alert(sum)


 function summation(sum){
    if(salaries =={}){
        return 0
    }
    for(let prop in salaries){
       
        sum=sum+salaries[prop]
    }
    return sum
 }

 alert(summation(0))


 //Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

 let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

 function multiplyNumeric(menu){

    for(let key in menu){
        if(typeof menu[key]=='number'){
        menu[key]*=2;
        }
    }
 }


