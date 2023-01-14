import createElements from './createElements.js';
const {
  createRow,
} = createElements;

import pageElements from './getPageElements.js';
const {
  getPageElements,
} = pageElements;

import serviceStorage from './serviceStorage.js';
const {
  setStorage,
  setStatusStorage,
  renameTaskStorage,
  removeStorage,
} = serviceStorage;

const indexControl = () => {
  const tdIndexes = document.querySelectorAll('.index');
  for (let i = 0; i < tdIndexes.length; i++) {
    tdIndexes[i].textContent = i + 1;
  }
};

const inputControl = (form, btnAdd) => {
  btnAdd.disabled = true;

  form.task.addEventListener('input', () => {
    if (form.task.value === '') {
      btnAdd.disabled = true;
    } else {
      btnAdd.disabled = false;
    }
  });
};

const taskSuccessControl = (table, data, person) => {
  table.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.btn-success')) {
      const targetTask = target.closest('.tr');
      targetTask.classList.remove('table-light',
          'table-warning', 'table-danger');
      targetTask.classList.add('table-success');

      const targetTaskName = targetTask.firstChild.nextSibling;
      targetTaskName.classList.add('text-decoration-line-through');

      const targetTaskStatus = targetTaskName.nextSibling;
      targetTaskStatus.textContent = 'Выполнена';

      for (let i = data.length; i--;) {
        if (data[i].task === targetTaskName.textContent) {
          data[i].status = 'sucsuccess';
        }
      }

      setStatusStorage(person, targetTaskName.textContent);
    }
  });
};

const taskDeleteControl = (table, data, person) => {
  table.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.btn-danger')) {
      const deletedTask = target.closest('.tr');
      const deletedTaskName = deletedTask.firstChild.nextSibling.textContent;
      const deleteConfirm = confirm('Вы действительно хотите удалить задачу?');
      if (deleteConfirm) {
        for (let i = data.length; i--;) {
          if (data[i].task === deletedTaskName) {
            removeStorage(person, deletedTaskName);
            data.splice(i, 1);
          }
        }
        deletedTask.remove();
        indexControl();
      }
    }
  });
};

const addNewTask = (newTask, list) => {
  list.append(createRow(newTask));
};

const addTaskControl = (form, list, person, data, importance) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (importance.value === '1' || importance.value === '2' ||
      importance.value === '3') {
      const formData = new FormData(e.target);
      const newTask = Object.fromEntries(formData);
      newTask.status = 'during';
      newTask.importance = importance.value;
      addNewTask(newTask, list);
      form.reset();
      indexControl();
      const {btnAdd} = getPageElements();
      btnAdd.disabled = true;
      setStorage(person, newTask);
      data.push(newTask);
    } else {
      alert('Выберите важность задачи!');
    }
  });
};

const editTaskControl = (table, data, person) => {
  table.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.btn-secondary')) {
      const targetTask = target.closest('.tr');
      const targetTaskName = targetTask.firstChild.nextSibling;
      const targetTaskPreviousName = targetTaskName.textContent;
      targetTaskName.setAttribute('contenteditable', 'true');
      targetTaskName.focus();
      targetTaskName.addEventListener('blur', () => {
        targetTaskName.setAttribute('contenteditable', 'false');
        for (let i = data.length; i--;) {
          if (data[i].task === targetTaskPreviousName) {
            data[i].task = targetTaskName.textContent;
          }
        }
        renameTaskStorage(person, targetTaskPreviousName,
            targetTaskName.textContent);
      });
    }
  });
};

export default {
  indexControl,
  inputControl,
  taskSuccessControl,
  taskDeleteControl,
  addTaskControl,
  editTaskControl,
};
