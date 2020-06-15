import React from "react";
import SessionListItem from "./SessionListItem.jsx";

export default function SessionList(props) {
    const { sessions } = props;
    
    const SessionList = sessions.map((session) => {
        console.log(session.time_of_day)
        return (
            <SessionListItem
                key={session.id}
                duration={session.duration}
                time_of_day={session.time_of_day}
                productivity={session.productivity}
                site_id={session.site_id}
            />
        );
    });

    return <ul>{SessionList}</ul>;
}
