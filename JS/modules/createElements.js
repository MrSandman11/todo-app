const appContainer = document.querySelector('.app-container');

const createContainer = (appContainer) => {
  appContainer.classList.add('vh-100', 'w-100', 'd-flex',
      'align-items-center', 'justify-content-center', 'flex-column');
  return appContainer;
};

const createTitle = (person) => {
  const h3 = document.createElement('h3');
  h3.textContent = `Todo App. ${person}`;
  return h3;
};

const createButtonsGroup = params => {
  const buttonGroup = params.map(({className, type, text}) => {
    const button = document.createElement('button');
    button.type = type;
    button.textContent = text;
    button.className = className;
    return button;
  });

  return buttonGroup;
};

const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3', 'form__newTask');
  form.insertAdjacentHTML('beforeend', `
  <label class="form-group me-3 mb-0">
    <input type="text" class="form-control" name="task"
    placeholder="ввести задачу">
  </label>
  `);

  const formButtonGroup = createButtonsGroup([
    {
      className: 'btn btn-primary me-3',
      type: 'submit',
      text: 'Сохранить',
    },
    {
      className: 'btn btn-warning',
      type: 'reset',
      text: 'Очистить',
    },
  ]);

  form.append(...formButtonGroup);

  return form;
};

const createTableWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('table-wrapper');

  return wrapper;
};

const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');

  const thead = document.createElement('thead');
  thead.insertAdjacentHTML('beforeend', `
    <tr>
      <th>№</th>
      <th>Задача</th>
      <th>Статус</th>
      <th>Действия</th>
    </tr>
  `);

  const tbody = document.createElement('tbody');
  table.append(thead, tbody);
  table.tbody = tbody;

  return table;
};

const createRow = ({task, status}) => {
  const tr = document.createElement('tr');
  if (status === 'sucsuccess') {
    tr.classList.add('tr', 'table-success');
  } else {
    tr.classList.add('tr', 'table-light');
  }

  const tdIndex = document.createElement('td');
  tdIndex.classList.add('index');

  const tdTask = document.createElement('td');
  if (status === 'sucsuccess') {
    tdTask.classList.add('task', 'text-decoration-line-through');
  } else {
    tdTask.classList.add('task');
  }

  tdTask.textContent = task;


  const tdStatus = document.createElement('td');
  if (status === 'sucsuccess') {
    tdStatus.textContent = 'Выполнена';
  } else {
    tdStatus.textContent = 'В процессе';
  }

  const tdActions = document.createElement('td');
  const tdButtonGroup = createButtonsGroup([
    {
      className: 'btn btn-danger',
      type: 'button',
      text: `
      Удалить
      `,
    },
    {
      className: 'btn btn-success',
      type: 'button',
      text: `
      Завершить
      `,
    },
  ]);

  tdButtonGroup[0].style.marginRight = '5px';

  tdActions.append(...tdButtonGroup);

  tr.append(tdIndex, tdTask, tdStatus, tdActions);

  return tr;
};

export default {
  appContainer,
  createContainer,
  createTitle,
  createForm,
  createTableWrapper,
  createTable,
  createRow,
};
