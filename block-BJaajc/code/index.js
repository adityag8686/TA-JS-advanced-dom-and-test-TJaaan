function getFullName(firstName ,lastName){
    return `${firstName} ${lastName}`;
}
//function to get pallindorme 

function isPallindrome(str){
    let array = str.split('');
    let arr  = array.reverse();
    let reversed = arr.reduce((acc,cv)=>{
        acc+=cv;
        return acc;
    },'');
    return str === reversed;
}
// function to get circumference 

function isCircumference(radius){
    let circum  =  2*3.14*radius;
    return `The circumference is ${circum}`;
}

//function to  get area of a circle 

function getArea(radius){
    let r = radius*radius;
    let area  = 3.14*r;
    return `The area is ${area}`;
}

module.exports = {
    getFullName,
    isPallindrome,
    isCircumference,
    getArea
};