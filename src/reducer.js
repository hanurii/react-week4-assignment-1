const initState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const reducers = {
  changeTitle: (state, action) => ({
    ...state,
    taskTitle: action.payload.taskTitle,
  }),
  addTask: (state) => {
    const { newId, taskTitle, tasks } = state;

    if (!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  },
  deleteTask: (state, action) => {
    const { tasks } = state;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  },
};

export default function reducer(previousState = initState, action) {
  if (!action || !reducers[action.type]) {
    return previousState;
  }

  return reducers[action.type](previousState, action);
}