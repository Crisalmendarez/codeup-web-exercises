var number = prompt('Enter an Integer: ');
function showMultiplicationTable(x){
    for (let i = 1; i <= 10; i++) {
        const result = i * x;
        console.log(`${x} * ${i} = ${result}`);
    }
}
console.log(showMultiplicationTable(number));

for(var i = 1; i<= 10; i++){
    var random =  Math.floor((Math.random() * 180) + 20);
    if(random % 2 === 0) {
        console.log(`${random} is even`);
    }else if(random % 2 !== 0){
        console.log(`${random} is odd`);
    }
}

for(var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));

}

for(var i = 100; i >= 5; i-=5){
    console.log(i)

}



