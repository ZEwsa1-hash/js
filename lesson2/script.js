// №1
// const user = { name: 'Anna', age: 25 };
// const admin = user;

// admin.age = 30;

// console.log(user.age); 30

// №2
// const obj1 = { value: 10 };
// const obj2 = { value: 10 };
// const obj3 = obj1;

// console.log(obj1 === obj2); false
// console.log(obj1 === obj3); true
 
// №3
// function updateConfig(config) {
//   config.theme = 'dark';
//   config = { theme: 'light' };
// }

// const appConfig = { theme: 'blue' };
// updateConfig(appConfig);

// console.log(appConfig.theme); dark

// №4 
// const product = {
//   id: 1,
//   name: 'Laptop',
//   price: 1000,
//   inStock: true
// };

// for (const key in product) {
//   console.log(key, product[key]);
// }


// №5 
// function countProperties(obj) {
//   return Object.keys(obj).length;
// }

// №6
// const formData = {
//   username: 'john_doe',
//   email: '',
//   password: 'secret123',
//   age: null
// };

// const isValid = Object.values(formData).every(
//   value => value !== '' && value !== null && value !== undefined
// );


// №7
// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// console.log(mergeObjects(target, source));
// // Ожидаемый результат: { a: 1, b: 3, c: 4 }

// №8
// function filterStringProperties(obj) {
//    const result = {};
//   for (const key in obj) {
//     if (typeof obj[key] === 'string') {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

// const mixedData = {
//   name: 'Building',
//   floors: 5,
//   address: 'Main Street',
//   yearBuilt: 1990
// };

// console.log(filterStringProperties(mixedData)); 
