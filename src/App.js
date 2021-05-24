import React , {useState,useEffect  } from "react";
import axios from "axios";

// jsx
const App = () => {
  //{userId: 1  , id:110 , title: "nice day ", body: "aaaaaaaaaaaaa"},
  //{userId: 2  , id:111 , title: "my new car", body: "bbbbbbbbbbbbbbbb"}
  const [post, setPost] = useState([]);
  const [userId, setUserId] = useState(0);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then(result=>{
    setPost(result.data)

  })

},[])

const userPost = post.map((elem,i)=>{
  return (<>
  <p>id :{elem.id}</p>
    <p key={i}>title: {elem.title} </p>
    <p key={i+"body"}>body: {elem.body} </p>
    </>)
});


  return (
    <>
      <div>
        <h1>Blog App</h1>
        {userPost}
      </div>
      <input type="number" placeholder="userId" onChange={(e)=>{
        setUserId(e.target.value)
      }}/>
      <input type="number" placeholder="id" onChange={(e)=>{
        setId(e.target.value)
      }} />
      <input type="text" placeholder="title" onChange={(e)=>{
        setTitle(e.target.value)
      }} />
      <input type="text" placeholder="body" onChange={(e)=>{
        setBody(e.target.value)
      }} />
      <button onClick = {()=>{
        setPost([...post,{userId  , id , title, body}])
      }}>add</button>


    </>
  );  
};

export default App;
