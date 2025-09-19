
import {useState} from "react";

function App(){
    const [task,setTask]=useState("")
    const [tasks, setTasks]=useState([])
    
    function addTask(){
        if(task.trim()!==""){
            setTasks([...tasks,task]);
            setTask("");
        }
    }
    return(
        <div>
            <h1>TO DO LIST</h1>
            <p>Just Do it.</p>
            <input 
            value={task}
            onChange={(e)=> setTask(e.target.value)}
            placeholder="enter here.."
            />
            <button onClick={addTask}>add new</button>
            <ul>
                {tasks.map((t,index)=>(
                <li key={index}>{t}</li>
    ))}
            </ul>
        </div>
    )
}
export default App;


// // import React from "react";
// // import { useEffect } from "react";
// // import ReactDOM from "react-dom/client";

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <App/>
// //   </React.StrictMode>
// // );

// // function App(){
// //   console.log("wafaaaa")

// // return <h1>what is you name?
// // </h1>
// // }
// // export default App;

// // function Header(){
// //     return <h1>WELCOME TO THE SITE</h1>
// //   }
// //   function Footer(){
// //     return <p>all right reserve</p>
// //   }
// //   function App(){
// //     return(
// //     <div style={{color:"red"}}>
// //       <Header />
// //       <p style={{backgroundColor:"dodgerBlue", color:"white", padding:"10px"}}>hello everyonr its my new website. how are you</p>
// //     <Footer/>
// //     </div>
// //     )
// //   }
// //   export default App;

// // import logo from './logo.svg';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import {Button, Card, Form, Alert, Container, Row, Col} from "react-bootstrap";

// // function App(){
// //   return(
// //     <container classname="mt-4">
// // {/* {alert} */}
// // <Alert variant='success'>🎊welcome to bootstrap🎊</Alert>
// // <Row>
// // <Col md={6}>
// // {/* {card} */}
// // <Card className="mb-3">
// // <Card.Body>
// //   <Card.Title>💗GOOD DAY💗</Card.Title>
// //   <Card.Text>"Everything is beauty but,Everyone can't see."✨</Card.Text>
// //   <Button variant="info" className='me-2'>click here</Button>
// //   <Button variant="danger">Delete</Button>
// // </Card.Body>
// // </Card>
// // </Col>

// // <Col mt={6}>
// // {/* {form} */}
// // <Form>

// //   <Form.Group classname="mb-3">
// // <Form.Label>Email address</Form.Label>
// // <Form.Control type="email" placeholder="Enter email"/>
// //   </Form.Group>

// //   <Form.Group className="mb-3">
// //    <Form.Label>Password</Form.Label>
// //    <Form.Control type='password' placeholder='Enter password'/>
// //   </Form.Group>

// //   <Button variant='success' type='submit'> SUBMIT</Button>
// // </Form>
// // </Col>
// // </Row>
// //     </container>
// //   )
// // }
// // export default App;


//   // function Title(){
//   //   return <h2 style={{color:"#f87685", fontWeight:"bolder",fontSize:"40px"}}>SlasheD</h2>
//   // }
//   // function Discription(){
//   // return <p>it one of the famouse brand in USA, its very expensive and comfortable.</p>
//   // }
  
//   // function App(){
//   //   return (
//   //     <div style={{textAlign:"center",color:"rgba(235, 143, 143, 0.6)", fontWeight:"bold",border:"3px solid #454141ff",padding:"10px",width:"300px", marginLeft:"550px",marginTop:"50px", backgroundColor:"rgba(5, 96, 54, 1)"}}>
//   //       <Title/>
//   //       <Discription/>
//   //     </div>
//   //     )
//   // }
//   // export default App;
  
// // function Blog(){
// //   return(

// //   <>
// //   <div style={{backgroundColor:"black", color:"white", width:"400px", height:"auto", marginLeft:"100px", padding:"10px", textAlign:"center"}}>
// //   <Post title="Quote of the day" body="Remember the GOAL!"></Post>
// //   <Post title="9/13/2025"  body="MOVE FORWARD!"></Post>
// //   </div>
// //   </>
// //   )
// // }
// // function Post({title,body}){
// // return(
// //   <>
// //   <PostTitle title={title}/>
// //   <PostBody body={body}/>
// //   </>
// // );
// // }
// // function PostTitle({title}){
// // return <h2>{title}</h2>
// // }
// // function PostBody({body}){
// // return(
// // <article>
// //   <p>{body}</p>
// // </article>

// // );
// // }
// // export default Blog;

// // function Header(){
// //   return <h1 style={{textAlign:"center",fontSize:"80px"}}>CASIO</h1>
// // }
// // function Footer(){
// //   return <p style={{textAlign:"center"}}>© 2025 My Site</p>
// // }
// // function App(){
// //   return (
// //     <div>
// //       <Header/>
// //       <p style={{fontSize:"20px",fontStyle:"italic"}}>Casio is a Japanese multinational electronics company known for its innovative products, including calculators, watches, and musical instruments, and has a rich history of technological advancements since its founding in 1946.</p>
// //       <Footer/>
// //     </div>
// //   )
// // }
// // export default App;



// // import React from "react";
// //  import { useEffect } from "react";
// //  import ReactDOM from "react-dom/client";

// // const Header=()=>{
// //   const myStyle=
// //   {margin:"10px",
// //   color:"#7b4406ff"}
  
// //   return (
// //     <div style={myStyle}>
// //   <h1>TO DO LIST</h1>
// //    <p>Just Do it.</p>
// //   </div>
// //   )
// // }
// // export default Header;

// // const fruit =[
// //   'jakka',
// //   'manga',
// //    'bathakka',
// //    'munthiri',
// // ];
// //   function List(){
// // const listitem=fruit.map(person=>
// //   <li>{person}</li>
// // );
// // return  <ul>{listitem}</ul>
// //  }
// // export default List;

// function App(){
//   const ismallClosed=true
  
//   return(
//     <div>
//       {ismallClosed? <h2>oppss.. mall closed🥲</h2> : <h2>yyohh mall opend🤩</h2>}
//     </div>
//     )
// }
// export default App;


// function App(){
//   const hasItem= true
//   return (
//     <div>
//       <h2>stock success!!</h2>
//       {hasItem && <p>your stock successfull🤩</p>}
//     </div>
//     )
// }
// export default App;


// function App(){
//     const fruit=["apple","kiwi","cherry"]

//     return(
//   <div>
//     <ol>
//       {fruit.map((fruit.index)=>(
//           <li key={index}>{fruit}</li> 
//         ))}
//       ))}
//     </ol>
//   </div>
//     )
// }
// export default App;

// function App(){
//     const car=["GTR","toyots","nissan",]
//     return (
//         <div>
//             <ul>
//                 {car.map((car,index)=>(
//                  <li key={index}>{car}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
// export default App;

// function App(){
//     function handleClick(){
//         alert ("yahh broh.. assalamu alaikaum🫱🏽‍🫲🏼")
//     }
//     return(
//         <button onClick={handleClick}>click </button>
//     )
// }
// export default App;

// function App(){
//     return <button onClick={()=>alert("its 10am 9/14/2025")}>tap</button>
// }
// export default App;

// function App(){
//     const [name,setName]=useState(0);
//     function handleChange(e){
//      setName(e.target.value);
//     }
//     return (
//         <div>
//             <input onChange={handleChange}/>
//             <p>typed text: {name}</p>
//         </div>
//     )
// }
// export default App;

// function App(){
//     function handleSubmit(e){
//      e.preventDefault();
//      alert("successfully submitted!")
//     }
//     return(
//         <div>
//         <form>
//             <input type='text' placeholder='enterrrr....' />
//             <button onSubmit={handleSubmit}>SUBMIT</button>
//         </form>
//         </div>
//     )
// }
// export default App;


// const fetchevent=()=>{
//     const handleClick =(evt)=>{
// console.log("everyyywhereee",evt.target)
//     }
//     return(
//         <div>
//         <button onClick={handleClick}>click1</button>
//         <button onDoubleClick={handleClick}>click2</button>
//         </div>
//     )
// }
// export default fetchevent;

// const fetchevent=()=>{
//     const handleClick=(evt)=>{
//        console.log("concoleee",evt.target)
//     }
//     return (
//         <div>
//             <a href='#link' onClick={handleClick}>tap</a>
//         </div>
//     )
// }
//     export default fetchevent;

// const handleClick=()=>{
//     const sayhello=()=>{
//         console.log("i'm in console")
//     }
//     return(
//         <button onClick={sayhello}>clickalla</button>
//     )
// }
// export default handleClick;

// function App(){
//     useEffect(()=>{
//    console.log("hey")
//     },[])
//          return <h>whatup...check console!</h>
//     }
//     export default App;

// function App(){
//     const [Count,setCount]=useState(0);
//     function one(){
//         setCount(Count+1)
//         setCount(Count+2)
//     }
//     function two(){
//         setCount(prev=>prev+1)
//         setCount(prev=>prev+2)
//     }
//     return (
//         <div>
//             <p>count:{Count}</p>
//             <button onClick={one}>click 1</button>
//             <button onClick={two}>click2</button>
//         </div>
//     )
// }
// export default App;

// function App(){
//     const [name,setName]=useState("");
//     const [error,setError]=useState("")

//     function handleSubmit(e){
//       e.preventDefault();

//       if(name.trim===""){
//         setError ("write and submit..")
       
//       }else{
//         setError("good ..")
       
//       }
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//             <input type='text'
//             value={name} 
//             onChange={e=> setName (e.target.value)}
//             placeholder='enter'/>
//             <button type='submit'>SUBMIT</button>
//             <p style={{color:"red"}}>{error}</p>
//             </form>
//         </div>
//     )
// }
// export default App;

// function App(){
//     return (
//         <div style={{color:"red", backgroundColor:"yellow"}}>
//         <h1>hello everyone</h1>
//         <p style={{color:"blueviolet", backgroundColor:"lavender"}}> hyyy gyyss</p>
//         </div>
//     )
// }
// export default App;

// const App=()=>{
//     const myStyle={
//      backgroundColor:"lavender",
//      color:"#ff5567",
//      padding:"19px",  
//     }
//     return(
//         <div>
//         <h1 style={myStyle}>whatt?</h1>
//         <button style={myStyle}>ok</button>
//         </div>
//     )
// }
// export default App;

// function App(){
//     useEffect(()=>{
//   console.log("deyyyy")
// },[])
// return (
//     <h2>hello</h2>
// )
// }
// export default App;

// function Head(){
//     return(
//         <h1>helloo</h1>
//     )
// }
//     function Content(){
//         return <h4>enthelllaa</h4>
    
// }
// function App(){
//     return (
//         <div style={{color:"red", backgroundColor:"lavender"}}>
//         <Head/>
//         <Content/>
//         </div>
//     )
// }
// export default App;
 

// function head(){
//     return (
//         <>
//         <h1>heyy</h1>
//         <h2>hello</h2>
//         <h3>ooi</h3>
//         <p>whatsupp</p>
//     </>
//     )
// }
// export default head;

// function App(){
//     useEffect(()=>{
//         console.log("heyy")
//     },[])
//     return (
//         <h2>hellooo</h2>
//     )
// }
// export default App;

// function App(){
//     return (
//         <div className='container text-center'>
            
//             <h2 className='text-info border mt-9 text-success'>bootstrap</h2>
//            <p className='text-primary mt-3 shadow bg-warning'>it is very use full</p>
//            <button className='btn btn-danger mt-5 rounded'>OK brohh</button>
//         </div>
//     )
// }
// export default App;