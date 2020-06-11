import React from 'react';
import SessionList from "./SessionListItem.js";
import axios from "axios";


function WeekContainer(sessions) {
    const { sessions } = props;
    const [state, setState] = useState({sessions:{}})

    //format date to be similar to db 2020-06-06
    let today = new Date();
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();

    
    const fetchData = () => {
        axios
            .get("/sessions").then((res) => {
                console.log(res);
                setState(...state, sessions.res.json())
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        fetchData()
    })

    const WeekList = sessions.map((session) => {
        console.log(session.time_of_day)
        return (
            <SessionList
                key={session.id}
                duration={session.duration}
                time_of_day={session.time_of_day}
                productivity={session.productivity}
                site_id={session.site_id}
            />
        );
    });
    return <ul>{WeekList}</ul>;

}

export default WeekContainer;