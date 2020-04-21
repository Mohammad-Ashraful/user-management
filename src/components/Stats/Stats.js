import React from 'react';

const Stats = (props) => {
    const stat = props.stat
    let total = 0
    for(let i = 0; i < stat.length; i++){
        const user = stat[i]
        total = total + user.salary
    }
    return (
        <div className="d-flex">
            <div className="ml-5">
            <h5>Total Paid(employee): <strong className="text-danger">{stat.length}</strong></h5>
            </div>
            <div className="ml-5">
            <h5>Total Paid(amount): <strong>${total}</strong></h5>
            </div>
            </div>
    );
};

export default Stats;