const usersList = document.getElementById('users-list');
const userDetails = document.getElementById('user-details');

let isLoading = false;
let activeUserId = null;

/* 1) загрузка всех пользователей */
async function loadUsers() {
  isLoading = true;

  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await response.json();

    console.log('Всего пользователей:', users.length);
    renderUsers(users);
  } catch (error) {
    usersList.innerHTML = '<li>Ошибка загрузки</li>';
  } finally {
    isLoading = false;
  }
}

/* 2) отрисовка списка */
function renderUsers(users) {
  usersList.innerHTML = '';

  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    li.dataset.id = user.id;

    li.addEventListener('click', () => {
      if (isLoading) return;

      setActiveUser(user.id);
      loadUserDetails(user.id);
    });

    usersList.appendChild(li);
  });
}

/* 3) загрузка деталей */
async function loadUserDetails(id) {
  isLoading = true;
  lockUI(true);

  userDetails.innerHTML =
    '<p class="loading">Загрузка...</p>';

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = await response.json();

    renderUserDetails(user);
  } catch (error) {
    userDetails.textContent = 'Ошибка загрузки данных';
  } finally {
    isLoading = false;
    lockUI(false);
  }
}

/* 4) отрисовка деталей */
function renderUserDetails(user) {
  userDetails.innerHTML = `
    <strong>${user.name}</strong><br><br>
    Email: ${user.email}<br>
    Phone: ${user.phone}<br>
    City: ${user.address.city}
  `;
}

/* подсветка активного пользователя */
function setActiveUser(id) {
  activeUserId = id;

  const items = usersList.querySelectorAll('li');
  items.forEach(item => {
    item.classList.toggle(
      'active',
      Number(item.dataset.id) === id
    );
  });
}

/* блокировка UI */
function lockUI(state) {
  usersList.classList.toggle('disabled', state);
}

/* старт */
loadUsers();
