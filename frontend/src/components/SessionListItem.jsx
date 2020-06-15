import React from "react";

export default function SessionListItem(props) {
    const { id, duration, time_of_day, productivity, site_id } = props;
console.log(time_of_day)
    return (
        <div className={id}>
            <div >duration: {duration}</div>
            <div >Time: {time_of_day}</div>
            <div >productivity: {productivity}</div>
            <div >site_id: {site_id}</div>
        </div>
    );
}
