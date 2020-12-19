import React, { useEffect } from 'react';

const getComments = async () => {
    return await fetch('https://reqres.in/api/users?page=2');
}

const Comments = () => {
    useEffect(() => {
        const results = getComments();
        console.log(results);
    }, []);

    return (
        <h1>Comments test api</h1>
    )
}

export default Comments;