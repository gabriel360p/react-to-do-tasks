import {
  Container,
  AppWrapper,
  Logo,
  Menu,
  MenuButton,
  TaskTitle,
  Content,
  Legend,
  Header,
  Title,
  CreateTask,
  TaskInput,
  AddButton,
  TasksGrid,
  TaskCard,
  TaskDescription,
  TaskFooter,
  Status,
  Actions,
  ActionButton,
} from "./styles";

import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  //todas as recuperadas do localStorage
  const [tasks, setTasks] = useState([]);
  //Descrição da task
  let taskDesc = useRef();

  //Essa array ela é "corrente", ele é usada apenas como "faixada", para inserir tarefas no localStorage
  const tasksArray = [];
  const storageName = "appTasks";

  // -----------------------------------------/

  useEffect(() => {
    //Recuperando minhas tasks assim que a página carregar
    recoveryTasks(); //Acionando minha função recovery quando a págima carregar para pegar os dados do localstorage
  }, []);

  // -----------------------------------------/
  function createNewTask() {
    //trim(), corta espaços entre as strings
    if (!taskDesc.current.value.trim()) {
      alert("Por favor preencha todos os campos");
    } else {
      let generateID = Date.now(); //usando o tempo para criar um id único para cada item,isso é genial!!!!!!
      //chave e id da tarefa serão os mesmos

      //criando um novo objeto task
      let newTask = {
        id: generateID,
        description: taskDesc.current.value,
        concluid: false,
      };

      //guardando no state
      if (!tasks) {
        setTasks([newTask]);
      } else {
        setTasks((prev) => [...prev, newTask]);
      }

      //atualizando meu localstorage
      localStorage.setItem(storageName, JSON.stringify(tasks));
    }
  }
  // -----------------------------------------/
  function deleteTask(id) {
    let tasksKeeping = tasks.filter((task) => task.id != id);
    setTasks(tasksKeeping);
    localStorage.setItem(storageName, JSON.stringify(tasksKeeping));
  }
  // -----------------------------------------/
  function saveTask(id, newDescription) {
    let taskunique = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          description: newDescription,
        };
      }
      return task;
    });
    setTasks(taskunique);
    localStorage.setItem(storageName, JSON.stringify(taskunique));
  }
  // -----------------------------------------/
  function checkTask(id) {
    let taskunique = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          concluid: !task.concluid,
        };
      }

      return task;
    });
    setTasks(taskunique);
    localStorage.setItem(storageName, JSON.stringify(taskunique));
  }
  // -----------------------------------------/
  function recoveryTasks() {
    /*
      Recuperando tasks do localStorage
      Como os dados salvos no localStorage são em string e nós estamos usando formato JSON, precisamos recuperar esse dados
      e converter de volta para JS Object e ainda podemos manipular com mais facilidade:
  */
    let allTasks = JSON.parse(localStorage.getItem(storageName)); //localStorage-> storageName-> json/string
    //json convertido para JS Object, agora temos uma lista de objetos manipuláveis!

    setTasks(allTasks); //tasks armazenadas em meu STATE
    // console.log(tasks);
  }
  // -----------------------------------------/

  return (
    <Container>
      <AppWrapper>
        <Content>
          <Header>
            <Title>Tarefas</Title>
          </Header>
          <CreateTask>
            <TaskInput
              placeholder="Descrição da Tarefa"
              required
              ref={taskDesc}
            />
            <AddButton onClick={createNewTask}>Criar</AddButton>
          </CreateTask>
          <TasksGrid>
            {tasks != null
              ? tasks.map((task) => (
                  <TaskCard key={task.id}>
                    <TaskDescription>
                      <TaskInput
                        className="taskText"
                        value={task.description}
                        onChange={(e) => saveTask(task.id, e.target.value)}
                      ></TaskInput>
                    </TaskDescription>
                    <Legend status={task.concluid}>
                      {task.concluid ? "Tarefa Concluida" : "Pendente"}
                    </Legend>
                    <TaskFooter>
                      <Actions>
                        <ActionButton onClick={() => deleteTask(task.id)}>
                          🗑
                        </ActionButton>
                        <ActionButton onClick={() => checkTask(task.id)}>
                          <i className="fa-solid fa-check"></i>
                        </ActionButton>
                      </Actions>
                    </TaskFooter>
                  </TaskCard>
                ))
              : ""}
          </TasksGrid>
        </Content>
      </AppWrapper>
    </Container>
  );
}

export default App;
