import * as C from './App.styles';
import { useState } from 'react';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    // { id: 1, name: 'Comprar o pão', done: false },
    // { id: 2, name: 'Comprar o café', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });

    setList(newList);
  }

  return (
    <C.container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter = {handleAddTask}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.container>
  )

}

export default App;