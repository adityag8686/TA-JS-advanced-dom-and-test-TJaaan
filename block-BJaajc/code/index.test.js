const testFun= require('./index');
//  positive  test
test('test for fullName like Aditya Goswami ',()=>{
    expect(testFun.getFullName("Aditya" ,"Goswami")).toBe("Aditya Goswami");
});
// Negative Test

test('test for fullName not as Aditya kumar ',()=>{
    expect(testFun.getFullName("Aditya" ,"Goswami")).not.toBe("Aditya Goswami");
});

// **************** Palidrome Program testing ************************** 
// positive test
test('testing of the palindrome program  ',()=>{
    expect(testFun.isPallindrome("tata")).toBe(true);
});
test('testing of the palindrome program  ',()=>{
    expect(testFun.isPallindrome("mom")).toBe(true);
});

//Negative Test 
test('testing of the palindrome program of all the Negative test  ',()=>{
    expect(testFun.isPallindrome("Aditya")).not.toBe(true);
});

// ******************Circle circumference  testing ************************
//All  the positive test 
test('circumference of the cirlce of radius 4 is: ',()=>{
    expect(testFun.isCircumference(4)).toBe('The circumference is 25.12');
});


// all the negative test for circle Circumfrence

test('circumference of the cirlce of radius 4 is not: ',()=>{
    expect(testFun.isCircumference(4)).not.toBe(' 31.400000000000002');
});


// ***************   Testing the area of the circle ******************* 
//All the positive test for area of circle
test('area of the circle  of Radius 4 is : ',()=>{
    expect(testFun.getArea(4)).toBe('The area is 50.24');
});


//All the negative  test for the area of circle
test('  area of the circle  of Radius 3 is not : ',()=>{
    expect(testFun.getArea(3)).not.toBe('50.24');
});
