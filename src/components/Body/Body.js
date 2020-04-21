import React, { useState } from 'react';
import './Body.css'
import fakeData from '../../fakeData'
import User from '../User/User';
import Stats from '../Stats/Stats';

const Body = () => {
    const allUsers = fakeData.slice(0, 15)
    const [users, setUsers] = useState(allUsers)
    const [stat, setStat] = useState([])

    const handlePaySalary = (user) => {
        const newStat = [...stat, user]
        setStat(newStat)
        
    }

    return (
        <div>
            <div>
            <Stats stat ={stat}></Stats>
            </div>
            <div className="user-list d-flex flex-wrap align-content-stretch">
            {
                users.map(usr => <User
                    handlePaySalary = {handlePaySalary}
                    user = {usr}></User>)
            }
            </div>
            
        </div>
        
    );
};

export default Body;