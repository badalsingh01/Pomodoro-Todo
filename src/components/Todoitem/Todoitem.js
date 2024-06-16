import React from 'react';
import './Todoitem.css';

const Todoitem = (props) => {
  const {item,id,updateCheckbox,updateDeleteItem,ischecked}=props;

  const updateCheckboxHandler=(ev)=>{
    // console.log(ev.target.parentElement.id);
    let val=ev.target.className;
    if(val=="checkbox"){
      updateCheckbox(id);
    }
    if(val=="deleteItem"){
      updateDeleteItem(id);
    }
  }

  let strikeOrNot=ischecked ? 'line-through': '';

  return (
    <div id={id} className="TodoItem" onClick={updateCheckboxHandler}>
      <span className="leftItem">
        <input checked={ischecked} className="checkbox" type="checkbox"></input>
        <span className="mainTask" style={{'textDecoration': strikeOrNot}}>{item.name}</span>
      </span>
      {/* {upShow && <button className="upArrow">⬆</button>}
      {downShow && <button className="downArrow">⬇</button>} */}
      <button className="deleteItem">X</button>
    </div>
  )
}

export default Todoitem