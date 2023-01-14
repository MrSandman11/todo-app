import render from './modules/renderPage.js';
const {
  renderPage,
  renderTasks,
} = render;

import control from './modules/control.js';
const {
  indexControl,
  inputControl,
  taskSuccessControl,
  taskDeleteControl,
  addTaskControl,
  editTaskControl,
} = control;

import pageElements from './modules/getPageElements.js';
const {
  getPageElements,
} = pageElements;

import serviceStorage from './modules/serviceStorage.js';
const {
  getStorage,
} = serviceStorage;

document.addEventListener('DOMContentLoaded', () => {
  const login = () => {
    const person = prompt('Имя пользователя?');
    return person;
  };

  const init = (person) => {
    const {appContainer} = getPageElements();

    const {list} = renderPage(appContainer, person);

    const data = getStorage(person);

    const {
      form,
      btnAdd,
      table,
      importance,
    } = getPageElements();

    renderTasks(list, data);
    indexControl();
    inputControl(form, btnAdd);
    taskSuccessControl(table, data, person);
    taskDeleteControl(table, data, person);
    addTaskControl(form, list, person, data, importance);
    editTaskControl(table, data, person);
  };

  const person = login();
  init(person);
});
