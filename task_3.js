let string = prompt();
// без использования цикла или split/join
function reverse(str) {
    if (str == '') {
        return '';
    }else{
        return reverse(str.slice(1)) + str.charAt(0);
    }
}

console.log(reverse(string));


