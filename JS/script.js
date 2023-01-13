import createElements from './modules/createElements.js';
const {
  appContainer,
  createContainer,
  createTitle,
} = createElements;

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
} = control;

import pageElements from './modules/getPageElements.js';
const {
  getPageElements,
} = pageElements;

import serviceStorage from './modules/serviceStorage.js';
const {
  getStorage,
  setStorage,
  removeStorage,
} = serviceStorage;

document.addEventListener('DOMContentLoaded', () => {
  const login = () => {
    const person = prompt('Имя пользователя?');
    return person;
  };

  const init = (person, appContainer) => {
    const {list} = renderPage(appContainer, person);
    const {
      form,
      btnAdd,
      table,
    } = getPageElements();

    const data = getStorage(person);
    // [
    //   {
    //     task: 'Купить слона',
    //     status: 'during',
    //   },
    //   {
    //     task: 'Помыть кота',
    //     status: 'sucsuccess',
    //   },
    //   {
    //     task: 'Купить слона',
    //     status: 'during',
    //   },
    //   {
    //     task: 'Купить слона',
    //     status: 'during',
    //   },
    // ];

    renderTasks(list, data);
    indexControl();
    inputControl(form, btnAdd);
    taskSuccessControl(table, data, person);
    taskDeleteControl(table, data, person);
    addTaskControl(form, list, person, data);
  };

  const person = login();
  init(person, appContainer);
});
