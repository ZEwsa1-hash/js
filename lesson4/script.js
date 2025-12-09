// №1
// const products = [
//   { id: 1, name: 'Ноутбук', price: 1200, category: 'electronics', inStock: true },
//   { id: 2, name: 'Стул', price: 150, category: 'furniture', inStock: false },
//   { id: 3, name: 'Книга', price: 20, category: 'books', inStock: true },
//   { id: 4, name: 'Наушники', price: 80, category: 'electronics', inStock: true },
//   { id: 5, name: 'Стол', price: 300, category: 'furniture', inStock: true },
// ];

// // const available = products.filter(p => p.inStock);
// // const names = available.map(p => p.name);
// // const totalPrice = available.reduce((sum, p) => sum + p.price, 0);
// // const firstFurniture = products.find(p => p.category === 'furniture');
// // const hasExpensive = products.some(p => p.price > 1000);
// const sortedByPrice = [...products].sort((a, b) => a.price - b.price);

// №2
// const students = [
//   { name: 'Алексей', score: 85 },
//   { name: 'Мария', score: 92 },
//   { name: 'Иван', score: 78 },
//   { name: 'Ольга', score: 92 },
//   { name: 'Сергей', score: 65 },
// ];

// const passedNames = students
//   .filter(s => s.score >= 75)
//   .map(s => s.name);

// const avgScore = students
//   .reduce((sum, s) => sum + s.score, 0) / students.length;

// const failedCount = students.filter(s => s.score < 75).length;

// const sortedStudents = [...students].sort((a, b) => {
//   if (b.score !== a.score) return b.score - a.score;
//   return a.name.localeCompare(b.name);
// });

// №3
// const point = [10, -5, 21];
// const [x, y, z] = point;

// №4
// const user = {
//   firstName: 'Анна',
//   lastName: 'Иванова',
//   age: 28,
//   contact: {
//     email: 'anna@example.com',
//     phone: '+375291234567'
//   }
// };

// const {
//   firstName,
//   lastName,
//   contact: { email },
//   sity = 'Ваш любимый город'
// } = user;

// №5
// const users = [
//   { id: 1, profile: { name: 'Алиса', address: { city: 'Москва' } } },
//   { id: 2, profile: { name: 'Боб' } },
//   { id: 3 },
//   { id: 4, profile: { name: 'Давид', address: { city: 'Казань', street: 'Центральная' } } },
// ];

// for (const u of users) {
//   const city = u.profile?.address?.city ?? 'не указан';
//   console.log(`Город: ${city}`);
// }
