import React from 'react';
import Todoitem from '../Todoitem/Todoitem';
import './Todolist.css';

const Todolist = (props) => {
    const {todos}=props;
    return (
      <div>
        {todos.map((task,indx)=>{
            return <Todoitem
              item={task}
              key={task.id}
              id={task.id}
              updateCheckbox={props.updateCheckbox}
              updateDeleteItem={props.updateDeleteItem}
              ischecked={task.ischecked}
            />
        })}
      </div>
    )
}

export default Todolist