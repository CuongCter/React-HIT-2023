import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPost] = useState([])
    useEffect(() => {
        axios.post('http://103.90.227.133:8082/api/v1/products/search?page=0&size=12')
            .then(response => {
                console.log(response.data);
                // setUsers(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const getPost = async () => {
        try {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts`
            );
            // console.log(response);
            setPost(response.data)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getPost()
    }, [])
    return (
        <div>
            <ul>

                {/* {users.length > 0 && users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))} */}

                {posts.length > 0 && posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>

    )
}

export default UserList