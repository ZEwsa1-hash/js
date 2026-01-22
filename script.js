const usersEl = document.getElementById('users');
const detailsEl = document.getElementById('details');

let isLoading = false;
let map;
let placemark;


function fetchUsers() {
  return Promise.resolve([
    { id: 1, name: 'Alex', lat: 25.7617, lng: -80.1918 },
    { id: 2, name: 'Maria', lat: 25.7743, lng: -80.1937 },
    { id: 3, name: 'John', lat: 25.7840, lng: -80.2101 }
  ]);
}

function fetchUserDetails(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id,
        name: id === 1 ? 'Alex' : id === 2 ? 'Maria' : 'John',
        email: 'user@mail.com',
        phone: '+1 555 000',
        lat: id === 1 ? 25.7617 : id === 2 ? 25.7743 : 25.7840,
        lng: id === 1 ? -80.1918 : id === 2 ? -80.1937 : -80.2101
      });
    }, 1000);
  });
}


fetchUsers().then(users => {
  console.log('Всего пользователей:', users.length);
  renderUsers(users);
});

ymaps.ready(initMap);


function renderUsers(users) {
  usersEl.innerHTML = '';

  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;

    li.addEventListener('click', () => {
      if (isLoading) return;
      loadUserDetails(user.id);
    });

    usersEl.appendChild(li);
  });
}

async function loadUserDetails(id) {
  isLoading = true;
  setDisabled(true);
  detailsEl.textContent = 'Загрузка...';

  const user = await fetchUserDetails(id);

  detailsEl.innerHTML = `
    <strong>${user.name}</strong><br/>
    Email: ${user.email}<br/>
    Phone: ${user.phone}
  `;

  updateMap(user.lat, user.lng);

  isLoading = false;
  setDisabled(false);
}

function setDisabled(state) {
  document.querySelectorAll('#users li').forEach(li => {
    li.classList.toggle('disabled', state);
  });
}


function initMap() {
  map = new ymaps.Map('map', {
    center: [25.7617, -80.1918],
    zoom: 12
  });

  placemark = new ymaps.Placemark(
    [25.7617, -80.1918],
    {},
    { preset: 'islands-red-icon' }
  );

  map.geoObjects.add(placemark);
}

function updateMap(lat, lng) {
  const position = [lat, lng];
  placemark.geometry.setCoordinates(position);
  map.panTo(position, { flying: true });
}
