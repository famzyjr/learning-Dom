//querySelector => this is use to  get single element 
// quereySelectorAll => this is used to get several elements
//getting element with tag name 
// const para = document.querySelector('p');
// console.log(para);

//getting element with class name
// const para = document.querySelector('.error');
// console.log(para);

//this gets a div with a class of error
// const para = document.querySelector('div.error');
// console.log(para);

//we can use square bracket notation or forEach method to select

//When we use querySelectorAll method to select elements, it returns a NodeList object that contains a collection of elements that match the specified CSS selector. This NodeList object is similar to an array, but it doesn't have all the methods that an array has.

// We can access individual elements of the NodeList using square bracket notation, just like we do with arrays. For example, paras[0] will give us the first element in the NodeList.

// On the other hand, we can also use the forEach method to iterate over all the elements in the NodeList. The forEach method takes a callback function as an argument, which is executed for each element in the NodeList. The callback function can access the current element, as well as its index and the entire NodeList.

// Using either square bracket notation or the forEach method allows us to access and manipulate elements in a NodeList. However, the forEach method is more flexible and powerful as it enables us to perform more complex operations on each element in the NodeList.

// const paras = document.querySelectorAll('p');
// console.log(paras[0]);

// paras.forEach(para => {
//  console.log(para);
// });


// const paras = document.querySelectorAll('.error')
// console.log(paras)

// paras.forEach(para => {
//     console.log(para);
// })



// get an Element by ID => we don't need the symbol # which we would do if we were using  querySelector 
const title = document.getElementById('Header')
console.log(title);

// get Elements by their class name we can't forEach on it
const error = document.getElementsByClassName('error');
console.log(error);
console.log(error[0]);



// get elements by their tag name 

const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);








































// //assesement
// const single = document.querySelector('div  h1');
// console.log(single);

// const Class = document.querySelector('.dom');
// console.log(Class);

// const lass = document.querySelectorAll('p');
// console.log(lass[0]);
// console.log(lass[1]);
// console.log(lass[2]);

// lass.forEach( para => {
//     console.log(para);
// });
