import PropTypes from 'prop-types';

const ToDoList = ({ listData, deleteItem }) => {


  return (
    <ul>
    {listData.map((item, index)=>(
       <li key={index} className='list-item'>
        {item}
        <span className='icons'><i className="fa-regular fa-trash-can" onClick={()=>deleteItem(index)}></i></span>
        </li>
    ))}
    </ul>
  )
}

ToDoList.propTypes = {
    listData : PropTypes.array,
    onDelete: PropTypes.func
}

export default ToDoList
