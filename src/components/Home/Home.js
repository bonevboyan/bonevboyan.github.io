import React, { useState, useEffect } from "react";

import useHttp from "../../hooks/use-http";

import classes from "./Home.module.css"

import AddReason from "./Reasons/AddReason";
import ReasonList from "./Reasons/ReasonList";

const Home = () => {
    const [reasons, setReasons] = useState([]);

    const { sendRequest } = useHttp();

    useEffect(() => {
        const transformReasons = (reasonsObj) => {
            const loadedReasons = [];

            for (const reasonKey in reasonsObj) {
                loadedReasons.push({
                    id: reasonKey,
                    text: reasonsObj[reasonKey].text,
                });
            }

            setReasons(loadedReasons);
        };

        sendRequest(
            {
                url: "https://bondi-8a94c-default-rtdb.firebaseio.com/reasons.json",
            },
            transformReasons
        );
    }, [sendRequest]);

    const createReason = (reasonText, reasonData) => {
        const generatedId = reasonData.name; // firebase-specific => "name" contains generated id
        const createdReason = { id: generatedId, text: reasonText };

        reasonAddHandler(createdReason);
    };

    const enterReasonHandler = async (reasonText) => {
        sendRequest(
            {
                url: "https://bondi-8a94c-default-rtdb.firebaseio.com/reasons.json",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: { text: reasonText },
            },
            createReason.bind(null, reasonText)
        );
    };

    const reasonAddHandler = (reason) => {
        setReasons((prevReasons) => prevReasons.concat(reason));
    };

    return (
        <div className={classes.home}>
            <AddReason onAddReason={enterReasonHandler} />
            <ReasonList items={reasons} />
        </div>
    );
};

export default Home;
