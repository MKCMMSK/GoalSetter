import React from "react";

export default function SessionListItem(props) {
    const { id, duration, time_of_day, productivity, site_id } = props;
    console.log(time_of_day)
    return (
        <ul className={id}>
            <li >duration: {duration}</li>
            <li >Time: {time_of_day}</li>
            <li >productivity: {productivity}</li>
            <li >site_id: {site_id}</li>
        </ul>
    );
}
