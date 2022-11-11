import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Table from '../component/Table'

const Home = () => {
  const [err, setErr] = useState(null)
  const [users, setUsers] = useState(null)


  const handleUser = async()=>{
    try {
      let usersFound = await axios.get("http://localhost:5000/users")
      setUsers(usersFound.data)
    } catch (error) {
      setErr(error)
    }
  }
  return (
    <><div className="home">
    <Link to="/login" className='link'>Login</Link>
    <Link to="/register" className='link'>Register</Link>
    { err && <p>{err}</p> }
    <button onClick={handleUser}>Show Users</button>
   { users && <Table tableData={users}/>}
    </div>
    </>
  )
}

export default Home