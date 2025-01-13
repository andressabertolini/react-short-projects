"use client";

import { useEffect, useState } from "react";

const TicketList = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/_data/db.json');
            const data = await res.json();
            setTickets(data);
        };

        fetchData();
    }, []);

    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id} className="card my-5">
                    <h3>{ticket.title}</h3>
                    <p>{ticket.body.slice(0, 200)}...</p>
                    <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
                </div>
            ))}
            {tickets.length === 0 && (
                <p>There are no open tickets</p>
            )}
        </>
    );
};

export default TicketList;
