let num = prompt();
num = + num;
if (typeof num === 'number' && !isNaN(num)) {
    if (num % 2 === 0){
        console.log("Четное");
    }else{
        console.log("Нечетное");
    }
}else{
    console.log("Упс, кажется, вы ошиблись");
}
