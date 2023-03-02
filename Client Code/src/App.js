import React, {useState} from "react";
import "./App.css";
import Axios from 'axios';



function App() {
  const [name, setName] = React.useState("")
  const [height, setHeight] = React.useState("")
  const [email, setEmail] = React.useState("")

  // const App = () => {
    const [data, setData] = React.useState({
      name: "",
      height: "",
      email: ""
    });

  const handleChange = (e) => {
      const value = e.target.value;
      setData({
        ...data,
        [e.target.name]: value
      });
    };
  const handleSubmit = (e) => {
      e.preventDefault();


  Axios.post('http://127.0.0.1:3001', {
        crossDomain: true,
          fullName: name,
          height: height,
          email: email,
        })
  }

  return (
    <div className="App">
      <header className="App-header">
      <form onSubmit={handleSubmit}>
        <h1>Hello</h1>
        <input
        className = "Name"
        type="text"
        placeholder="First and Last Name"
        onChange={(e) => {setName(e.target.value)}}
        />

        <input
        className = "Height"
        type="number"
        placeholder="What is your height in cm?"
        onChange={(e) => {setHeight(e.target.value)}}
        />

        <input
        className = "Email"
        type="email"
        placeholder="Email Address"
        onChange={(e) => {setEmail(e.target.value)}}
        />
        <button id = "send" >Submit</button>

        </form>
      </header>
    </div>
  );
}
export default App;

// const App = () => {
//   const [state, setState] = useState({
//     name: "",
//     job: ""
//   });
//
//   const handleChange = (e) => {
//     const value = e.target.value;
//     setState({
//       ...state,
//       [e.target.name]: value
//     });
//   };
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//       name: state.name,
//       job: state.job
//     };
//     axios.post("https://reqres.in/api/users", userData).then((response) => {
//       console.log(response.status, response.data);
//     });
//   };
//
//   return (
//     <div>
//       <h1>Register or Create new account</h1>
//       <hr />
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">
//           Name
//           <input
//             type="text"
//             name="name"
//             value={state.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label htmlFor="job">
//           Job
//           <input
//             type="text"
//             name="job"
//             value={state.job}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };
