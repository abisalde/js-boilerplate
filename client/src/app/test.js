const nameShuffle = str => {
    str = str.split(' ').reverse().join(' ')
    return str;
}

console.log(nameShuffle("Donald Trump"))
console.log(nameShuffle("Rosie O'Donnell"))

const addition = num => {
    num = num + 1
    return num;
}

console.log(addition(-3))