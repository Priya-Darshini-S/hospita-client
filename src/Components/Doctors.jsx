import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Doctor = () => {
    const [doctors, setDoc] = useState([]);
    console.log("outside", doctors);

    let array = [1, 3, 4, 5, 6];

    useEffect(() => {
    //    console.log("in-effect", doctors);
        getProducts();
    }, []);

    const getProducts = () => {
        fetch("http://localhost:2123/doctor")
        .then((d) => d.json())
        .then((res) => {
            setDoc(res);
      //      console.log("in-get", doctors);
        })
    };  

    return (
        <div>
            <h1>Doctors Page</h1>
            {doctors.map(({ first_name, last_name, _id }) =>
            {
               return (
                    <div style={{border: "4px solid black", margin: "auto", width: "400px", marginBottom: "4px", padding: "10px", textAlign: "center"}}>
                        <div style={{width: "200px"}}>Doctor: {first_name} {last_name}</div>
    
                       <Link to={`/doctor/${_id}`}>More details</Link>
                    </div>
                )
            }
            )}
        </div>
    )
}