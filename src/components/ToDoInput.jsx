import { useState } from "react";
import PropTypes from 'prop-types';

const ToDoInput = ({addList}) => {  
  
  const [inputText, setInputText] = useState('');

  const handleKeyPress =(event)=>{
    if(event.key=="Enter"){
      addList(inputText);
        setInputText('');
    }
  }

  return (
    <div className='input-container'>
      <input type='text' value={inputText} className='input-box-todo' onChange={(e)=>setInputText(e.target.value)}
      onKeyDown={handleKeyPress}
       />
      <button className='add-btn'
      onClick={()=>{
        addList(inputText);
        setInputText('');
      }}
      >+</button>
    </div>
  )
}

ToDoInput.propTypes = {
  addList: PropTypes.func
}

export default ToDoInput
