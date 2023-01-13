const getPageElements = () => {
  const form = document.querySelector('.form__newTask');
  const btnAdd = document.querySelector('.btn-primary');
  const table = document.querySelector('.table');
  return {
    form,
    btnAdd,
    table,
  };
};

export default {getPageElements};
