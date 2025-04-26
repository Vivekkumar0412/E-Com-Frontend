import React, { useState } from 'react'

function UserManagement() {
    const users = [
        {   
            _id : 1223344,
            name :"Raghav",
            email : "raghav@gmail.com",
            role : "admin"
        },
        {   
            _id : 98890,
            name :"Sahyam",
            email : "Sahyam@gmail.com",
            role : ""
        },
    ]

    const [formData,setFormData] = useState({
        name : "",
        email : "",
        password : "",
        role : "customer" // defualt is cutomer
    })

    function handleFormChnage(e){
        setFormData({
            ...formData,[e.target.name] : e.target.value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(formData)
        // reset the form after submisision
        setFormData({
            name : "",
            email : "",
            password : "",
            role : "customer"
        })
    }

    function handleRoleChnageFun(userId,newRole){
        console.log({id : userId , role : newRole})
    }

    function handleDelete(userId){
        if(window.confirm("Do You Really Want to Delete")){
            console.log("deleteing user with id : ",userId)
        }
    }
  return (
    <div className='max-w-7xl mx-auto p-6 container'>
        <h2 className="text-2xl font-bold mb-6">User Management</h2>
        {/* new user form */}
        <div className="p-6 rounded mb-6">
            <h3 className='text-lg font-bold mb-4'>Add new User</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                    <label className='block text-gray-700'>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleFormChnage} className='w-full p-2 border rounded' required/>
                </div>
                <div className="mb-4">
                    <label className='block text-gray-700'>Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleFormChnage} className='w-full p-2 border rounded' required/>
                </div>
                <div className="mb-4">
                    <label className='block text-gray-700'>Password</label>
                    <input type="text" name="password" value={formData.password} onChange={handleFormChnage} className='w-full p-2 border rounded' required/>
                </div>
                <div className="mb-4">
                    <label className='block text-gray-700'>Role</label>
                    <select name="role" value={formData.role} onChange={handleFormChnage} className='w-full p-2 border rounded'>
                        <option value="customer">Customer</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
               
                <button type="submit" className='bg-green-500 text-white py-2 px-4 hover:bg-green-600 rounded font-bold'>Add User</button>
            </form>
        </div>
        {/* user list */}
        <div className="overflow-x-auto shadow-md sm:rounded-lg ">
            <table className='min-w-full text-gray-500 text-left'>
                <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                    <tr>
                        <th className='py-3 px-4'>Name</th>
                        <th className='py-3 px-4'>Email</th>
                        <th className='py-3 px-4'>Role</th>
                        <th className='py-3 px-4'>Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {users.map((user,index)=>(
                        <tr className='border-b hover:bg-gray-50' key={user._id}>
                            <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
                                {user.name}
                            </td>
                            <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
                                {user.email}
                            </td>
                            <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
                                <select name="role" value={user.role} onChange={(e)=>handleRoleChnageFun(user._id,e.target.value)} className='p-2 border rounded'>
                                    <option value="customer">Customer</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </td>
                            <td className='p-4 font-medium text-gray-900 whitespace-nowrap'>
                                <button type="button" onClick={(e)=> handleDelete(user._id)} className='bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserManagement