
import { useEffect, useState } from 'react'
import './App.css'
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';


function App() {
    const [listData, setListData] = useState([]);
    const addList = (inputText)=>{
       const updatedList = [...listData, inputText];
        setListData(updatedList);
        localStorage.setItem("taskList", updatedList);
        console.log('hi newly added')
    }
    
    const deleteItemSingle = (index)=>{
      const updatedList = [...listData];
      updatedList.splice(index, 1);
      setListData(updatedList);
      localStorage.setItem("taskList", updatedList);
    }

    useEffect(()=>{
      const storedListItem = localStorage.getItem("taskList");
      if(storedListItem){
        setListData(storedListItem);
      }
    },[]);

  return (
   
   <div className='main-container'>
    <div className="center-container">
    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My To-Do App</h2>
    <br/>
    <ToDoInput addList={addList} />
    <h2>To Do </h2>
    <hr/>
    <ToDoList listData={listData} deleteItem={deleteItemSingle} />
    </div>

   </div>
  )
}

export default App
