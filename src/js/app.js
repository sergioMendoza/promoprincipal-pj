/* eslint linebreak-style: ["error", "windows"] */
const radioBtnCount = document.querySelector('#radiotipo5');
const radioPizzaSelect = document.querySelector('#radiotipo4');
const boxPizzaFavorite = document.querySelector('#box-pizza-favorite');
const titleFavoriteSelection = document.querySelector('#title-favorite-selection');
const borderPreview = document.querySelectorAll('.border-preview');

const resetBorderGrey = () => {
  for (let i = 0; i < borderPreview.length; i += 1) {
    borderPreview[i].classList.add('pizza__border--desactive');
    borderPreview[i].classList.remove('pizza__border');
  }
};

const activeBorderRadioButtonPizza = (id) => {
  resetBorderGrey();
  document.querySelector(`#${id}`).classList.remove('pizza__border--desactive');
  document.querySelector(`#${id}`).classList.add('pizza__border');
};

const showSectionPizzasFavorites = (count) => {
  if (count === '1') {
    boxPizzaFavorite.classList.add('pizza--hide');
    titleFavoriteSelection.textContent = 'tu pizza';
  } else {
    boxPizzaFavorite.classList.remove('pizza--hide');
    titleFavoriteSelection.textContent = 'tu primera pizza';
  }
};

const moveToConfirm = () => {
  $('html,body').animate({ scrollTop: document.body.scrollHeight }, 1500);
};


// get Value of Radio Button
const getValueRadio = (name) => {
  const size = document.querySelector(`input[name="${name}"]:checked`).value;
  return size;
};

// function that hides pizzas
const viewPizzas = () => {
  const valueSelection = getValueRadio('count');
  showSectionPizzasFavorites(valueSelection);
};

const viewSelectPizza = (event) => {
  const idElementBorder = event.target.nextElementSibling.firstElementChild.id;
  activeBorderRadioButtonPizza(idElementBorder);
  // Mover Scroll
  moveToConfirm();
};

// Eventos
radioBtnCount.addEventListener('change', viewPizzas);
radioPizzaSelect.addEventListener('change', viewSelectPizza);

showSectionPizzasFavorites('1');
