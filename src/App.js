import './App.css';
import axios from 'axios';

function App() {


  function pstReq() {
    const pName = prompt("Please Enter Your Name");
    const pAge = prompt("Please Enter Your Age");

    const url = "http://localhost:5000/"
    console.log("Button am working");

    axios.post(url, { name: pName , age: pAge })
      .then((res) => { console.log(res.data) })
      .catch((err) => { console.log("Request Nai Gai") })
  }

  return (
    <div className="App">
      <button onClick={pstReq}> CLick me TO Send Post Request</button>
    </div>
  );
}

export default App;
