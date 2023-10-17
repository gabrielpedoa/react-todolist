import { useEffect, useState } from "react";
import { Done } from "./components/Done";
import { TaskDay } from "./components/TaskDay";
import { Container } from "./styles/Container";
import { ContainerRow } from "./styles/ContainerRow";
import { DoneContainer } from "./styles/DoneContainer";
import { Global } from "./styles/Global";
import { TaskContainer } from "./styles/TaskContainer";
import { ToDoContainer } from "./styles/ToDoContainer";

function App() {
  const [task, setTask] = useState([]);

  // useEffect(() => {
  //   const storage = localStorage.getItem("task");
  //   if (storage) setTask(JSON.parse(storage));
  // }, []);

  // useEffect(() => {
  //   if (task.length > 0) localStorage.setItem("task", JSON.stringify(task));
  // }, [task]);

  function handleAddTask(tsk) {
    setTask((currentValue) => [...currentValue, tsk]);
  }

  function getListItem(status) {
    return task.filter((i) => i.status === status);
  }

  function changeStatus(i) {
    const index = Array(...task).findIndex((v) => v === i);
    const clonedTask = [...task];
    let status = "doing";
    if (index !== -1) {
      if (clonedTask[index].status == "doing") {
        status = "done";
      }
      clonedTask[index] = { ...clonedTask[index], status };
      setTask(() => clonedTask);
    }
  }

  return (
    <div>
      <Global />
      <ToDoContainer>
        <Container>
          <h1>Gabriel's to do list</h1>
          <ContainerRow>
            <TaskContainer>
              <h6>To do</h6>
              <TaskDay handleAddTask={handleAddTask} />
              <ul>
                {getListItem("to-do").map((i) => (
                  <div>
                    <li key={i.id}>{i.title}</li>
                    <button onClick={() => changeStatus(i)}>next</button>
                  </div>
                ))}
              </ul>
            </TaskContainer>
            <DoneContainer>
              <h6>Progress</h6>
              <Done />
              <ul>
                {getListItem("doing").map((i) => (
                  <div>
                    <li key={i.id}>{i.title}</li>
                    <button onClick={()=> changeStatus(i)}>done</button>
                  </div>
                ))}
              </ul>
            </DoneContainer>
            <DoneContainer>
              <h6>Done</h6>
              <Done />
              <ul>
                {getListItem("done").map((i) => (
                  <li key={i.id}>{i.title}</li>
                ))}
              </ul>
            </DoneContainer>
          </ContainerRow>
        </Container>
      </ToDoContainer>
    </div>
  );
}

export default App;
