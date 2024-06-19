import React ,{useState}from 'react'
// import FormCreation from '../CreateForm Components/FormCreation'

import AdminCreate from '../CreateForm Components/AdminCreate'
import DeleteForm from '../CreateForm Components/DeleteForm'
import UpdateForm from '../CreateForm Components/UpdateForm'

const AdminPage = () => {
    const [createOrUpdateOrDelete,setCreateOrUpdate]=useState(null)
  return (
    <div>
      <h1 className='welcome'>Welcome Admin</h1>
    
      <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a 
          
            className="nav-link"
            onClick={() => setCreateOrUpdate('Create')}
          >
            Form Creation
          </a>
        </li>
        <li className="nav-item">
          <a 
          
            className="nav-link"
            onClick={() => setCreateOrUpdate('Update')}
          >
            Form Updation
          </a>
        </li>
        <li className="nav-item">
          <a 
           
            className="nav-link"
            onClick={() => setCreateOrUpdate('Delete')}
          >
            Form Delete
          </a>
        </li>
      </ul>
    </nav>
      
      {/* <nav className="navbar">
      <div className="navbar-brand">
        <a onClick={() => setCreateOrUpdate('Create')}>Form Creation</a>
      </div>
      <div className="navbar-links">
        <a onMouseEnter={() => setCreateOrUpdate('Update')}>Form Updation</a>
      </div>
      <div className="navbar-links">
        <a onMouseEnter={() => setCreateOrUpdate('Delete')}>Form Delete</a>
      </div>
    </nav> */}
    {/* <div className='Page'>
      <button onClick={()=>setCreateOrUpdate('Create')}>Form Creation</button>
      </div>
      <div>
      <button onClick={()=>setCreateOrUpdate('Update')}>Form Updation</button>
      </div>
      <div>
      <button onClick={()=>setCreateOrUpdate('Delete')}>Form Delete</button>
      </div>
    </div> */}
    <div>
        {createOrUpdateOrDelete ==='Create' && <AdminCreate/> } 
        {  createOrUpdateOrDelete === 'Update' && <UpdateForm/> }
        {  createOrUpdateOrDelete === 'Delete' && <DeleteForm/> }
      </div>
    </div>
  )
}

export default AdminPage
