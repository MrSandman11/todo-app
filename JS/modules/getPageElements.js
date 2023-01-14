const getPageElements = () => {
  const appContainer = document.querySelector('.app-container');
  const form = document.querySelector('.form__newTask');
  const btnAdd = document.querySelector('.btn-primary');
  const table = document.querySelector('.table');
  const importance = document.querySelector('.form-select');

  return {
    appContainer,
    form,
    btnAdd,
    table,
    importance,
  };
};

export default {getPageElements};
