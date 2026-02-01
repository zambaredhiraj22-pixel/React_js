import {useState} from "react";

function CheckBoxes(){

    const[CheckBoxes,setCheckBoxes]=useState([]);

    const handleCheckBoxes = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) {
            setCheckBoxes([...CheckBoxes,value]);
          }  else {
            setCheckBoxes(CheckBoxes.filter(item => item !==value));
          }
        
    };
    return(
        <div>
            <h1>Select Your Skill</h1>

            <input onChange={handleCheckBoxes} type="checkbox" id="mongodb" value="mongodb" />
            <label htmlFor="mongodb">MONGODB</label>
             <br></br> <br></br>

            <input onChange={handleCheckBoxes} type="checkbox" id="express" value="express" />
            <label htmlFor="express">EXPRESS</label>
             <br></br>  <br></br>

            <input onChange={handleCheckBoxes} type="checkbox" id="react" value="react" />
            <label htmlFor="react">REACT</label>
             <br></br>   <br></br>

            <input onChange={handleCheckBoxes} type="checkbox" id="node" value="node" />
            <label htmlFor="node">NODE</label>
            <br></br> <br></br>

            <h3>{CheckBoxes.join(",")}</h3>

        </div>

    
    );
}
export default CheckBoxes;