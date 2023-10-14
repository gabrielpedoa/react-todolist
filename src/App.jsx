import { Done } from "./components/Done";
import { TaskDay } from "./components/TaskDay";
import { Container } from "./styles/Container";
import { ContainerRow } from "./styles/ContainerRow";
import { DoneContainer } from "./styles/DoneContainer";
import { Global } from "./styles/Global";
import { TaskContainer } from "./styles/TaskContainer";
import { ToDoContainer } from "./styles/ToDoContainer";

function App() {
  return (
    <div>
      <Global />
      <ToDoContainer>
        <Container>
          <h1>Gabriel's To do List</h1>
          <ContainerRow>
            <TaskContainer>
              <h6>Task Day</h6>
              <TaskDay />
              <TaskDay />
              <TaskDay />
              <TaskDay />
            </TaskContainer>
            <DoneContainer>
              <h6>Done</h6>
              <Done />
            </DoneContainer>
          </ContainerRow>
        </Container>
      </ToDoContainer>
    </div>
  );
}

export default App;
