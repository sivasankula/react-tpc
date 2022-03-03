import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../REDUX/userActions";

const UserData = () => {
    const mystoreData = useSelector(state => state)
    const dispatch = useDispatch()

    
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return(
        <div>
            <h1>hi user</h1>
            {
                mystoreData.isLoding ? <h1>loading true</h1> : <h1>loading false</h1>
            }
            {
                mystoreData.users.map(item=><h1 key={item.id}> {item.id}</h1>)
            }
            {
                mystoreData.error ? <p>{mystoreData.error}</p>: null
            }
        </div>
    )
}

export default UserData