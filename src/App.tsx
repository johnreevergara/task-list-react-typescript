import React, { SyntheticEvent, useEffect, useState } from "react";
import styles from "./App.module.scss";
import ToDoList from "./Components/ToDoList";
import { ITaskList } from "./types/tasklist";

function App() {
  const [taskList, setTaskList] = useState<ITaskList[]>([]);
  const [inputTaskVal, setInputTaskVal] = useState<string>("");
  const [inputDateVal, setInputDateVal] = useState<string>("");

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      task: { value: string };
      date: { value: string };
    };
    const task = target.task.value;
    const date = target.date.value;
    setTaskList([
      ...taskList,
      {
        taskId: taskList.length + 1,
        task: task,
        targetToAccomplish: date,
        done: false,
      },
    ]);
  };

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <form onSubmit={handleFormSubmit}>
          <input
            autoComplete="off"
            type="text"
            name="task"
            placeholder="Type New Task Here..."
            onChange={(e): void => setInputTaskVal(e.target.value)}
            value={inputTaskVal}
            className={styles.__task_input}
          />

          <input
            type="date"
            name="date"
            onChange={(e): void => setInputDateVal(e.target.value)}
            value={inputDateVal}
            className={styles.__date_input}
          />

          <input
            type="submit"
            value="Add task"
            className={styles.__btn_submit}
          />
        </form>
      </div>
      <ToDoList />
    </div>
  );
}

export default App;
