import img from "./download.jpeg";

function ToDo() {
    function callFun(){
        alert("Button clicked");
    }
    return(
        <div>
            <h1>Dhiraj Zambre</h1>
            <img src="./assets/download.jpeg" alt="download"/>
            <ul>
                <li>Invent new traffic light</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
        </div>
    );
}
export default ToDo;