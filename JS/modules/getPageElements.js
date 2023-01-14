const getPageElements = () => {
  const form = document.querySelector('.form__newTask');
  const btnAdd = document.querySelector('.btn-primary');
  const table = document.querySelector('.table');
  const importance = document.querySelector('.form-select');
  return {
    form,
    btnAdd,
    table,
    importance,
  };
};

export default {getPageElements};
