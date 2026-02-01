
export default function CommentsForm() {
    const[formData,setformData] = useState({
        username:"  ",
        remarks:"",
        rating:""
    });
    return (
        <div>
        <h4>Give a Comment!</h4>
        <form>
        <input placeholder="username" type="text" value={formData.username} />
        <br></br> <br></br>
        <textarea value={formData.remarks} placeholder="add few remarks">Remarks</textarea>
         <br></br> <br></br>
         <input placeholder="rating" type="number" min={1} max={5}/>
        </form>
        </div>
    );
}