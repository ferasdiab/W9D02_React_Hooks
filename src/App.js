import React , {useState} from "react";

// jsx
const App = () => {
  
  const [post, setPost] = useState([{userId: 1  , id:110 , title: "nice day ", body: "aaaaaaaaaaaaa"},
  {userId: 2  , id:111 , title: "my new car", body: "bbbbbbbbbbbbbbbb"}]);
  const [userId, setUserId] = useState(0);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
//{userId:userId,id:id,title:title,body:body}

  const userPost = post.map((elem,i)=>{
  return (
    <p key={i}>title: {elem.title}</p>
  )
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
      <button >add</button>


    </>
  );  
};

export default App;
