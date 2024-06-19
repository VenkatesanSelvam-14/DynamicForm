import React from 'react'

const Menu = ({ menu, handleMenuItemClick }) => {

  return (
    <div >
Choose Form :
            <select name={'Menu'}  onChange={(e) =>{  handleMenuItemClick(e)} }>
            <option key={"Menu"}  >{"Menu"}</option>
                {menu.map((item, index) => (
                    <option key={item.formName} value={item.formName ? item.formName : null} >{item.formName ? item.formName : "Need Label Name"}</option>
                ))}
            </select>
      
    </div>
  )
}

export default Menu

