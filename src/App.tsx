import { ChangeEvent, FC, SyntheticEvent, useEffect, useState } from "react";
import Button from "./Components/Button";

import styles from "./App.module.scss";
import ToDoList from "./Components/ToDoList";
import { ITaskList } from "./types/tasklist";
import useClassNames from "./hooks/useClassnames";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
  const [taskInputVal, setTaskInputVal] = useState<string>("");
  const [targetToAccomplish, setTargetToAccomplish] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [taskList, setTaskList] = useState<ITaskList[]>([]);
  const [hasNoTaskInputted, setHasNoTaskInputted] = useState<boolean>();
  const [hasNoDateInputted, setHasNoDateInputted] = useState<boolean>();
  const [latestId, setLatestId] = useState<number>(1);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "date":
        setTargetToAccomplish(event.target.value);
        break;
      default:
        setTaskInputVal(event.target.value);
        break;
    }
  };

  useEffect(() => {
    if (taskInputVal.length > 0) setHasNoTaskInputted(false);
    if (targetToAccomplish.length > 0) setHasNoDateInputted(false);
  }, [targetToAccomplish.length, taskInputVal.length]);

  const onTaskSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!taskInputVal.length) {
      setHasNoTaskInputted(true);
    }
    if (!targetToAccomplish.length) {
      setHasNoDateInputted(true);
    }
    if (taskInputVal.length > 0 && targetToAccomplish.length > 0) {
      const toastId = toast.loading("Creating new task...");
      setIsLoading(true);
      setLatestId((prev) => prev + 1);
      setTimeout(() => {
        setTaskInputVal("");
        setTargetToAccomplish("");
        setTaskList([
          ...taskList,
          {
            taskId: latestId,
            task: taskInputVal,
            targetToAccomplish,
            done: false,
          },
        ]);

        toast.update(toastId, {
          render: "Task successfully added!",
          type: "success",
          isLoading: false,
          hideProgressBar: false,
          autoClose: 850,
        });
        setIsLoading(false);
      }, 850);
    }
  };

  const handleMarkAsDoneClick = (id: number) => {
    const toastId = toast.loading("Removing task...");
    const updatedTaskList = taskList.map((task) => {
      if (task.taskId === id) {
        task.done = true;
      }
      return task;
    });

    setTimeout(() => {
      setTaskList(updatedTaskList);
      toast.update(toastId, {
        render: "Task completed... Awesome!!! ",
        type: "success",
        isLoading: false,
        hideProgressBar: false,
        autoClose: 1000,
      });
    }, 100);
  };

  const handleRemoveItem = (id: number) => {
    const toastId = toast.loading("Removing task...");
    const updatedTaskList = taskList.filter(
      (task) => !(task.taskId === id && task.done !== true)
    );
    setTimeout(() => {
      setTaskList(updatedTaskList);
      toast.update(toastId, {
        render: "Task deleted!",
        type: "error",
        isLoading: false,
        hideProgressBar: false,
        autoClose: 1000,
      });
    }, 100);
  };

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <form onSubmit={onTaskSubmit}>
          <input
            autoComplete="off"
            type="text"
            name="task"
            placeholder="Type New Task Here..."
            onChange={handleInputChange}
            value={taskInputVal}
            className={useClassNames(
              styles.input,
              hasNoTaskInputted && styles.error
            )}
          />

          <input
            type="date"
            name="date"
            onChange={handleInputChange}
            value={targetToAccomplish}
            className={useClassNames(
              styles.date_input,
              hasNoDateInputted && styles.error
            )}
          />

          <Button
            size="large"
            loading={isLoading}
            disabled={!!isLoading}
            type={"submit"}
          >
            Add Task
          </Button>
        </form>
      </div>
      {taskList.length > 0 && (
        <div className={styles.task_container}>
          <ToDoList
            items={taskList}
            onMarkAsDoneClick={handleMarkAsDoneClick}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default App;
