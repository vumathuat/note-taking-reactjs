import React from 'react'

const MenuBar = (props) => {
  return(
    <div className="menu" >
      <ul >
        <li onClick={props.addBoard}> + Board </li>
        <li onClick={() => props.deleteBoard(props.activeBoard.id)}> - Board </li>
        <li onClick={() => props.onAddTxtNote('text')}> + Note </li>
        <li onClick={() => props.onAddImgNote('image')}> + Image Note </li>
      </ul>
    </div>
  )
}

export default MenuBar
