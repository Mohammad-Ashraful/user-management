import React from 'react';
import './User.css'

const User = (props) => {
    const { img, name, occupation, email, salary } = props.user
    return (
        <div className="users">
            <div className="card">
                <img src={img} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <h6 className="card-text">{occupation}</h6>
                    <p>Email: <small>{email}</small></p>
                    <p>Salary: <strong>${salary}</strong></p>
                    <button onClick = {() => props.handlePaySalary(props.user)} className="btn btn-info w-50">Pay</button>

                </div>
            </div>
            
        </div>
    );
};

export default User;