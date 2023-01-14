import createElements from './createElements.js';

const {
  createContainer,
  createTitle,
  createForm,
  createTableWrapper,
  createTable,
  createRow,
} = createElements;

const renderPage = (appContainer, person) => {
  const container = createContainer(appContainer);
  const title = createTitle(person);
  const form = createForm();
  const tableWrapper = createTableWrapper();
  const table = createTable();

  tableWrapper.append(table);
  container.append(title, form, tableWrapper);

  return {
    list: table.tbody,
  };
};

const renderTasks = (elem, data) => {
  const allRow = data.map(createRow);
  elem.append(...allRow);

  return allRow;
};

export default {
  renderPage,
  renderTasks,
};
