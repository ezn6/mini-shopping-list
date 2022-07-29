// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then((res) => res.json())
    .then((data) => data.items); //배열
}

function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
  <li class="item" data-type="${item.type}" data-color="${item.color}">
    <img src="${item.img}" alt="${item.type}" class="item__thumbnail" />
    <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));

  buttons.addEventListener('click', (event) => {
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;
    if (key == null || value == null) {
      return;
    }
    updateItems(key, value);
  });
}

function updateItems(key, value) {
  const items = document.querySelectorAll('.item');
  items.forEach((item) => {
    if (item.dataset[key] === value) {
      item.classList.remove('invisible');
    } else {
      item.classList.add('invisible');
    }
  });
}

// main
loadItems()
  .then((items) => {
    // console.log(items); //배열로 data를 받아온 상태
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
