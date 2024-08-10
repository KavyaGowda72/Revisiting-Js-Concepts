//Loops:
// Label: for(...){} =>whenever want to break nested loops use Label

// ex:

outer:for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){

        if(i==2) break
        console.log(`The Coordinates are : ${i} ${j}`)
    }
}