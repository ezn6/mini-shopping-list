// Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then((res) => res.json())
    .then((data) => data.items); //배열
}

function displayItems(items) {
  const container = document.querySelector('.items');
  //innerHTML은 ``으로 태그들을 묶어준 문자열 이므로
  //map으로 배열을 만든 후에 모든 태그들을 문자열로 join해주어야한다.
  //join을 해주지 않으면 []안에 ``으로 묶인 태그들이 있는것이다.
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item) {
  return `
  <li class="item">
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
    if (dataset.type == null && dataset.color == null) return;
    if (dataset.type) {
      console.log(dataset.type);
      const type = items.filter((item) => item.type === dataset.type);
      displayItems(type);
    } else {
      const color = items.filter((item) => item.color === dataset.color);
      displayItems(color);
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
