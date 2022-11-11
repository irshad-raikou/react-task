import React from 'react'

const Table = (props) => {

  return(
    <table className="table">
        <thead>
            <tr>
                <th>Index</th>
                <th>UserName</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email Address</th>
                <th>Password</th>
                <th>Date Of Birth</th>
            </tr>
        </thead>
        <tbody>
        {
          props.tableData &&  props.tableData.map((data, index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{data.userName}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{data.password}</td>
                        <td>{data.dob.substring(0,10)}</td>
                    </tr>
                )
            })
        }
        </tbody>
    </table>
)
}

export default Table