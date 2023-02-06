let string = "bed"
let stringSplit = string.split("");

let desiredString = "nisbehadet"

const desiredStringArray = desiredString.split("");

const filterArray = desiredStringArray.filter((value)=>{
    return (!stringSplit.includes(value))
})
const filterString = filterArray.join("").toString();
console.log(filterString);
