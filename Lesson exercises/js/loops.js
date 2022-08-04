var x = 5;
//while(x < 10){
//        x++
 //   console.log(x)
//}
//console.log("out of while loop");

//do{
//++x
//    console.log(x)
//}while(x < 10)
//console.log("broke out of do while")

//for(var num = 0; x < 10; num++){
//    console.log(num)
//}

for (var num = 5; num <= 100; num += 5){
    console.log(num)
    if(num === 50){
        continue;
    }
    console.log(num + " is not 50")
    //  console.log("num is still less than 50")
}

