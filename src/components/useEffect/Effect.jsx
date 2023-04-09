import React, { useEffect, useState } from 'react'

const Effect = () => {

  const [count, setCount] = useState(0);

  const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   console.log(`Dang goi effect ${count} `);
  // },[]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
        console.log(posts);
      })

  },[])

  return (
    <div>
      {/* <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button> */}

      <div>
        {posts.length > 0 &&
          posts.map((post, index) => (
            <div key={post.id}>
              <h1 >{post.id}</h1>
              <p >{post.title}</p>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Effect