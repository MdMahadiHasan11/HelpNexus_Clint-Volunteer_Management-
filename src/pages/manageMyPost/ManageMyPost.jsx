// import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageMyPost = () => {
    const { user } = useContext(AuthContext) || {};
    const [items, setItem] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/needVolunteer/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data);
                // displayAll(data)
            })

    }, [user])



    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                fetch(`http://localhost:5000/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = user.filter(user => user._id !== _id);
                            setItem(remaining);
                            // setDisplayAll(item);
                            window.location.reload();
                        }
                    })
            }
        });
    }


    return (
        <div className="mt-10 overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead >
                    <tr className=" border-2" >
                        <th className="text-lg border-2 font-bold" >
                            Si No
                        </th >
                        <th className="text-lg border-2 font-bold">Title</th>
                        <th className="text-lg  border-2font-bold">Category</th>
                        <th className="text-lg border-2 font-bold">Dead Line</th>
                        <th className="text-lg border-2 font-bold"></th>
                    </tr>
                </thead>


                {
                    items.map((item, index) => <tbody key={item._id}
                    >
                        
                        {/* row 1 */}
                        <tr className=" border-2">
                            <th className=" border-2">
                                {index + 1}
                            </th>
                            <td className=" border-2">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.Thumbnail} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold">{item.Title}</div>

                                    </div>
                                </div>
                            </td>
                            <td className="text-lg font-bold border-2">
                                {item.selectedCategory}
                            </td>
                            <td className="text-lg border-2 font-bold">{new Date(item.startDate).toLocaleDateString()}</td>

                            {/* <td className="text-lg border-2 font-bold">{item.startDate ?  new Date(item.startDate).toLocaleDateString: 'No date selected'}</td> */}
                            <th className="border-2">
                                {/* <Link to={`/details/${item._id}`}><button  className="btn bg-orange-600 ">View Details</button></Link> */}




                                <button onClick={() => handleDelete(item._id)} className="btn bg-orange-600">Delete</button>
                                <Link to={`/update/${item._id}`}><button className="btn bg-orange-600">Update</button></Link>





                            </th>
                        </tr>

                    </tbody>)
                }


            </table>
        </div>
    );
};

export default ManageMyPost;