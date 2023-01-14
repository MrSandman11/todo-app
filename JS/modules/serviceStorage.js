const getStorage = (person) => {
  if (localStorage.getItem(person)) {
    return JSON.parse(localStorage.getItem(person));
  } else {
    return [];
  }
};

const setStorage = (person, task) => {
  const data = getStorage(person);
  data.push(task);
  localStorage.setItem(person, JSON.stringify(data));
};

const setStatusStorage = (person, task) => {
  const data = getStorage(person);
  for (let i = data.length; i--;) {
    if (data[i].task === task) {
      data[i].status = 'sucsuccess';
    }
  }
  localStorage.setItem(person, JSON.stringify(data));
};

const renameTaskStorage = (person, task, newTask) => {
  const data = getStorage(person);
  for (let i = data.length; i--;) {
    if (data[i].task === task) {
      data[i].task = newTask;
    }
  }
  localStorage.setItem(person, JSON.stringify(data));
};

const removeStorage = (person, task) => {
  const data = getStorage(person);
  const newData = data.filter(item => item.task !== task);
  localStorage.setItem(person, JSON.stringify(newData));
};

export default {
  getStorage,
  setStorage,
  setStatusStorage,
  renameTaskStorage,
  removeStorage,
};
