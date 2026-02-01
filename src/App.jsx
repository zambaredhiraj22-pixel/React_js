
///////////////////////////////// (1)importing and exporting component//////////////////////////

import React, { useState } from "react";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
import UserList from "./UserList";

import { useActionState, useEffect } from "react"

import { useState } from "react";

import Login,{Profile,Setting, UserKey,} from './UserComponent'

function App(){
  return(
    <div>
      <h1>Importing and Exporting Components</h1>
      <Login/>
      <Profile/>
      <Setting/>
      <h1>{UserKey}</h1>
    </div>
  )
}
export default App;

/////////////////////////////////// simple program using button addition////////////////////////

function App() {
  const userName="Dhiraj Zambre";
  let x=20;
  let y=50;
  return(
    <div>
      <h1>{userName}</h1>
      <h1>10+20+70</h1>
      <button onClick={()=>alert("Hello ,Dhiraj Zambre")}>Click Me</button>
    </div>
  )
}
export default App; 


import ToDo from "./ToDo"

function App() {
  return(
    <div>
      <h1>JSX Exercise</h1>
      <ToDo/>
    </div>
  );
}
export default App;

function App() {
  const name="Dhiraj Zambre"
    return(
       <div>
        <h1>JSX with Curly Bracket</h1>
        <h1>Dhiraj Zambre</h1>
       </div>
    );
}
export default App;

//////////////////////////////////////////////////state in react_js////////////////////////////

import { useState } from "react";
import Counter from "./assets/Counter";
function App() {
  const[fruit,setFruit]=useState("Apple");
  const handleFruit=()=>{
    setFruit("Banana")
  }
  return (
    <div>
      <h1>State in React Js</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit}>Change Fruit Name</button>
      <Counter/>
    </div>
  ); 
}
export default App

///////////////////////////////////////////////Toggle or hide_show/////////////////////////////

import { useState} from "react"
function App() {
  const[display,setDisplay]=useState(false)
  return (
    <div>
      <h1>Hello Dhiraj Your Sooo Cute</h1>
      <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {
        display? <h1>Dhiraj Zambre</h1>:null
      }
    </div>
  );
}
export default App

////////////////////////////////////////// muiltiple condition if else/////////////////////////

import { useState} from "react"
function App() {
  const[count,setCount]=useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Counter</button>
        {
          count==0?<h1>Condition</h1>:null
        }
    </div>
  );
}
export default App

/////////////////////////////////////// probs in react_js/////////////////////////////////////

import Probs1 from "./Probs1"
function App() {
  // let userName="Dhiraj Zambre";
  // let age="22";
  // let email="dhirajzambre@.com"
  let userObject={
      name:"Dhiraj Zambre",
      age:"22",
      email:"zambaredhiraj22@gamil.com"
  }
  let userObject2={
      name:"Sanika Zambre",
      age:"22",
      email:"zambaresanika20@gamil.com"
  }
  let userObject3={
      name:"Family Zambre",
      age:"22",
      email:"zambarefamily200@gamil.com"
  }
  return (
    <div>
      <h2>Probs in React Js</h2>
      {/* <Probs1 name="userName" age={age} email={email}/> */}
      <Probs1 user={userObject}/>
      <Probs1 user={userObject2}/>
       <Probs1 user={userObject3}/>
      
    </div>
  );
}
export default App

////////////////////////////////////// Pass Jsx with default wrap//////////////////////////////

import PassJasxwithProbs from "./PassJasxwithProbs";
function App() {
  return(
    <div>
      <h1>Probs in React Js</h1>
      <PassJasxwithProbs>
        <h1>HEllo  EveryOne</h1>
      </PassJasxwithProbs>

      <PassJasxwithProbs>
        <h1>HEllo Dhiraj</h1>
      </PassJasxwithProbs>

      <PassJasxwithProbs>
        <h1>HEllO Admin</h1>
        <h2 style={{color:'red'}}>Please login</h2>
      </PassJasxwithProbs>
    </div>
  );
}
export default App;

/////////////////////////////////// controller component//////////////////////////////////////

import { useState } from "react";
function App(){
  const[name,setName]=useState("");
   const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    return(
        <div>
            <h1>Controller Component</h1>
            <form action="" method="get">
                <input type="text" placeholder="Enter Name"/>
                <br /><br/>
                 <input type="password" placeholder="Enter password"/>
                 <br /><br/>
                  <input type="text" placeholder="Enter email"/>
                  <br /><br/>
                  <button>Submit</button>
            </form>
        </div>
    );
}
export default App;

/////////////// /////////////////////Handle CheckBoxes in React_Js////////////////////////////

import CheckBoxes from "./CheckBoxes"
function App() {
  return(
    <div>
      <h1>Handle Checkbox in React Js</h1>
      <CheckBoxes/>
    </div>
  );
}
export default App;

////////////////////////////////////// Handle ratio button and dropdown/////////////////////////

import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");
  const [city,setCity] = useState("");

  return (
    <div>
      <h1>Handle Radio And Dropdown</h1>
      <h4>Select Gender</h4>

      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        checked={gender === "male"}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        checked={gender === "female"}
        onChange={(event) => setGender(event.target.value)}
      />
      <label htmlFor="female">Female</label>

      <h2>Selected Gender: {gender}</h2>
       
       <h2>Select City</h2>
       <select onChange={(event)=>setCity(event.target.value)} defaultValue={""}>
        <option Value="dongarsoni">Dongarsoni</option>
        <option value="savalaj">Savalaj</option> 
        <option value="anjani">Anjani</option>
        <option value="vadagaon">Vadagaon</option>
        <option value="tasgaon">Tasgaon</option>
        <option value="ghatnandre">Ghatnandre</option>
        <option value="sangli">Sangli</option>
       </select>
       <h2>Selected City : {city}</h2>
    </div>
  );
}

export default App;

/////////////////////////////////////// loop in jsx with map function////////////////////////////

function App() {

  const userData=[
    {
      name:"Dhiraj",
      age:'22',
      email:"zambaredhiraj22@gmail",
      id:1
    },
    {
      name:'Sanika',
      age:'20',
      email:"zambaresanika33@gmail",
      id:2
    },
    {
      name:'nikhil',
      age:'21',
      email:"zambaredhiraj22@gmail",
      id:3
    },
    {
      name:'nikhil',
      age:'22',
      email:"zambaredhiraj22@gmail",
      id:4
    }
  ]
 
  return(
    <div>
      <h1>Lopp in JSX with Map function</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map((user)=>(
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
              </tr>
            ))
          }
        </tbody>

      </table>
      <h1>Dummy Data</h1>
      <table border="1">
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Age</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dhiraj</td>
                <td>zambaredhiraj22@gmail.com</td>
                <td>22</td>
               </tr>
               <tr>
                <td>2</td>
                <td>Sanika</td>
                <td>zambaresanika20@gmail.com</td>
                <td>20</td>
               </tr>
               <tr>
                <td>3</td>
                <td>nikhil</td>
                <td>zambaredhiraj22@gmail.com</td>
                <td>22</td>
               </tr>
               <tr>
                <td>4</td>
                <td>nikita</td>
                <td>zambaredhiraj22@gmail.com</td>
                <td>22</td>
               </tr>
            </tbody>
      </table>
      
    </div>
  );
}
export default App;

////////////////////////////////////// Reuse Component in Loop///////////////////////////////////

import User from "./User"
function App() {

  const userData=[
    {
      name:"Dhiraj",
      age:'22',
      email:"zambaredhiraj22@gmail",
      id:1
    },
    {
      name:'Sanika',
      age:'20',
      email:"zambaresanika33@gmail",
      id:2
    },
    {
      name:'nikhil',
      age:'21',
      email:"zambaredhiraj22@gmail",
      id:3
    },
    {
      name:'nikhil',
      age:'22',
      email:"zambaredhiraj22@gmail",
      id:4
    }
  ]
  return (
    <div>
      <h1 style={{ color:"yellow"}}>Reuse Component in Loop </h1>
      {
        userData.map((user)=>(
          <div key={user.id}>
            <User data={user} />
          </div>
        ))
      }
    </div>
  )
} 
export default App;

/////////////////////////////////////useEfects in react js_Hooks/////////////////////////////////

import { useState } from "react" ;
import Counter from "./Counter" ;

function App () {
    const [count,setCount]=useState(0);
    const [data,setData]=useState(0);
    // function callOnce(){
    //     console.log("callOnce function called");
    // }
    // useEffect(() => {
    //     callOnce ();
    // },[]);
    return(
        <div>
            <Counter count={count} data={data} />
            <button onClick={()=>setCounter(count+1)}>Counter</button>
            <button onClick={()=>setData(data+1)}>Data</button>
        </div>
    )

}
export default App; 
 
/////////////////////////////////////// External styling in react js//////////////////////////////////////

import './css/style.css'

import myphoto from "./assets/myphoto.jpg";

function App() {
    const cardStyle = {
         border:"1px solid #cccccc",
                width:'200px',
                boxShadow: "2px 2px 5px 2px #cccccc",
                margin:"10px",
    }
    return(
    <>
      <h1 style={{color : 'silver'}}>Inline Style in React Js</h1>
      <div style={{display:'flex', flexWrap:'wrap'}}>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
            <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
            <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
            <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
            <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
            <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
            <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
            <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
            <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
            <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
            <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
             <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
         <div style = {cardStyle}>
             <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
             <div style = {{padding:'5px'}}>
             <h4>Dhiraj Zambre</h4>
             <p>Software Developer</p>
             </div>
         </div>

      </div>
   </>
    )
}
export default App;

///////////////////////////////////different styling and dynamic in react js///////////////////// n
import myphoto from "./assets/myphoto.jpg";
import { useState } from "react";

function App() {
    const [cardStyle,setCardStyle]=useState(
        {
                border:"1px solid #cccccc",
                width:'200px',
                boxShadow: "2px 2px 5px 2px #cccccc",
                margin:"10px", 
        }
    )
    const updateTheme=(bgColor,textColor)=>{
        setCardStyle({...cardStyle,backgroundColor:bgColor})
    }
    return(
    <>
      <h1 style={{color : 'silver'}}>Inline Style and Dynamic and Conditional in React Js</h1>
      <button onClick={()=>updateTheme('pink','green')}>Gray Theme</button>
      <button onClick={()=>updateTheme('orange','white')}>Default Theme</button>
      <div style={{display:'flex', flexWrap:'wrap'}}>
         <div style = {cardStyle}>
            <img style = {{width : '200px'}} src = {myphoto} alt="My Photo" />
            <div style = {{padding:'5px'}}>
            <h4>Dhiraj Zambre</h4>
            <p>Software Developer</p>
            </div>
         </div>
      </div>
   </>
    )
}
export default App;

//////////////////////////////////////// useRef in react js///////////////////////////////////////
import { useRef } from "react";
 
function App() {
    const inputRef=useRef(null);
    const inputHandler=()=>{
        console.log(inputRef);
        inputRef.current.focus()
    }
    return(
        <div>
            <h1>useRef</h1>
            <input ref={inputRef} type="text" placeholder="Enter user name" />
            <button onClick={inputHandler}>Focus on Input fields</button>
        </div> 
    )
}

 export default App;

/////////////////////////////////////// UnControlled Component in react js/////////////////////////

import { useRef } from "react";
function App() {

    const userRef=useRef();
    const passwordRef=useRef();

    const handleForm=(event)=>{
        event.preventDefault();
        const user=document.querySelector("#user").value;
         const password=document.querySelector("#password").value;
        console.log(user,password);
    }
    const handleFormRef=(event)=>{
        event.preventDefault() 
        const user=userRef.current.value
        const password=passwordRef.current.value
        console.log("handleFormRef",user,password);
        
    }
    return(
        <div>
            <h1>Some Information</h1>
            <hr></hr>
            <h1>UnControlled Component</h1>
            <form action="" method="post" onSubmit={handleForm}>
              <input type="text" ref={userRef} id="user" placeholder="enter user name"  />
              <br></br> <br></br>
               <input type="text" ref={passwordRef} id="password" placeholder="enter user password"  />
               <br></br> <br></br>
               <button>Submit</button>
            </form>
            <hr></hr>

            <h1>UnControlled Component with useRef</h1>
            <form action="" method="post" onSubmit={handleFormRef}>
              <input type="text" id="userRef" placeholder="enter user name"  />
              <br></br> <br></br>
               <input type="text" id="passwordRef" placeholder="enter user password"  />
               <br></br> <br></br>
               <button>Submit</button>
            </form>
            <hr></hr>
        </div>
    )
}

export default App;

///////////////////////////////////////// Drived State in React JS.//////////////////////////////

import{ useStates } from "react";

function App() {

    const [users,setUsers] = useState([]);
    const [user,setUser] = useState('');
    const handleAddUsers=()=>{
        setUsers([...users,user])
    }
    const total=users.length;
    const last=users[users.length-1];
    const unique=[...new Set(users)].length
   
    return (
        
        <div>
            <h2>Total User : {total}</h2>
             <h2>Last User : {last}</h2>
              <h2>Unique Total User : {unique}</h2>
           <input type ="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user" /> 
           <button onClick={handleAddUsers} >Add User</button>
           {
            users.map((item,index)=>(
                <h4 key={index}>{item}</h4>
            ))
           }
        </div>
    )
}

export default App;

/////////////////////////////////////// useActionState_Hook in React Js/////////////////////////

import {useActionState} from 'react'
export default function App() {

     const handleSubmit=(previousData,formData)=>{
        let name=formData.get('name');
        let password=formData.get('password');

        console.log("handleSubmit called",name,password);
     }
    const [data,action,pending]=useActionState(handleSubmit,undefined)
    return(
        <div>
            <h1>useActionState Hook in React Js</h1>
            <form action={action}>
                <input type="text" placeholder="enter name" name="name" />
                <br></br> <br></br>
                 <input type="password" placeholder="enter password" name="password" />
                 <br></br> <br></br>
                 <button>Submit Data</button>
                </form>
        </div>
    );
}

//////////////////////////////////////////Context API in React JS////////////////////////////////////


import Collage from "./Collage";
import { SubjectContext } from "./ContextData";

export default function App() {
    const [subject,setsubject]=useState('')
    return(
        <div style={{backgroundColor:'blue',padding:10}}>
            <SubjectContext.Provider value="English">
                <select defaultValue={subject}   onChange={(event)=>setsubject(event.target.value)}>
                    <option value="">Select Subject</option>
                    <option value="Math">Math</option>
                    <option value="English">English</option>
                    <option value="Science">Science</option>
                     <option value="Geography">Geography</option>
                </select>
            <h1>Context API</h1>
            <Collage/>
            </SubjectContext.Provider>
        </div>


//////////////////////////////////////// //////////API/////////////////////////////////////////////
(UserEdit,UserAdd,UserList,Appcss,mainjsx)

import { NavLink,Route,Routes} from 'react-router';
import './App.css'
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserEdit from './UserEdit'
export default function App() {

    return(
        <div>
            <ul className='nav-list'>
                <li>
                    <NavLink to="/">List</NavLink>
                </li>
        
                <li>
                    <NavLink to="/add">Add User</NavLink>
                </li>
            </ul>
            <hr className='line'></hr> 
            {/* <h1>Make Router and Pages for Add User and User List UI</h1> */}
            {/* <UserList/> */}
        <Routes>
           <Route path="/" element={<UserList/>}/>
          <Route path="/add" element={<UserAdd/>}/>
          <Route path="/edit/:id" element={<UserEdit/>}/>
        </Routes> 
        </div>
    ) 
}

////////////////////////////////////////////////// Validation in react js//////////////////////////////


import { useState } from 'react' ;
import './App.css'
function App() {

    const [name,setName]=useState('')
    const[nameErr,setNameErr]=useState();

     const [password,setPassword]=useState('')
    const[passErr,setPassErr]=useState();
    

    const handleName=(event)=>{
        console.log(event.target.value);
        if(event.target.value.length>5){
            setNameErr("Please enter valid username. only 5 characterrs allowed")
        }else{
            setNameErr('')
        }
    }

    const handlePassword=(event)=>{
        let regex= /^[A-Z0-9]+$/i;
        if(regex.test(event.target.value)){
           setPassErr()
        }else{
             setPassErr("Please enter valid password. only numbers and alphabets allowed")
        }
    }
    return (
        <div>
            <input className={nameErr?'error':''} type="text" onChange={handleName} placeholder="enter name"/> 
            <span className='red-color'>{nameErr && nameErr}</span>  <br></br>  <br></br>
            <input className={passErr?'error':''} type="text" placeholder="enter password" onChange={handlePassword}/>  
            <span className='red-color'>{passErr && passErr}</span>  <br></br>  <br></br>
            <button disabled={passErr || nameErr}>Login</button>
        </div>
    )
}

export default App;