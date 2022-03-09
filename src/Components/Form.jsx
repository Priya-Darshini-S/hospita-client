import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Doctor } from "./Doctors";
import "./Form.css"


export const Form = () => {
    const [doctors, setDoctors] = useState([]);
    const [specia_id, setSpecia_id] = useState([]);
    const [flag, setFlag] = useState(0);
    console.log('specia_id:', specia_id)
    const [array, setArray] = useState([]);

    let gyneo = ["Anu Deshpande"];
    let pedia = ["Anu Deshpande", "Madhu Banerji"];
    let neuro = ["Akshay Kumar", "Keerthana SK"];
    let cardio = ["Madhu Banerji", "Keerthana SK"];
    let urolo = ["Akshay Kumar", "Madhu Banerji"];
    let ortho = ["Bala Krishna"]


    const d = {
        mm : new Date().toLocaleString("en-IN", { month: "long" }),
        dd: new Date().toLocaleString("en-IN", { day : '2-digit'}),
        yyyy: new Date().getFullYear()
     }

    const [form, setForm] = useState({
        patientname: "",
        age: "",
        gender: "",
        department: "",
        doctor: d.dd + "-" + d.mm + "-" + d.yyyy,
        date: "",
        id: uuidv4(7),
    });

   
    useEffect(() => {
        getProducts();
        console.log("hello")
        // specia_id.forEach(element => {
        //     console.log("ele", element)
        //    // getSpeciality(element); 
        // });
    }, []);

    const getProducts = () => {
        fetch("http://localhost:2123/specs")
        .then((d) => d.json())
        .then((res) => {
           let out = res.specialitys;
           let arr = [];
           let temp = [];
            out.forEach(element => {
                arr.push(element.speciality);
                temp.push(element._id);
            });
             setDoctors(arr);
             setSpecia_id(temp);
           
        })
    }; 

    // const getSpeciality = (id) => {
    //     fetch(`http://localhost:2123/doctor/speciality/${id}`)
    //     .then((d) => d.json())
    //     .then((res) => {
    //        console.log("res", res);
    //     })
    // }; 
    
    const handleChange = (e) => {  

        let {name, value} = e.target;
    
           if(e.target.value === "Neurology"){
            setArray(neuro);
            }else if(e.target.value === "Gynecologist"){
            setArray(gyneo);
            }else if(e.target.value === "Urology"){
            setArray(urolo);
            }else if(e.target.value === "Orthodontist"){
            setArray(ortho);
            }else if(e.target.value === "Cardiology"){
            setArray(cardio);
            }else if(e.target.value === "Pediatrician"){
            setArray(pedia);
            }
        
        setForm({ ...form, [name]: value, });
      
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if(form.patientname.length == 0){
            alert("Please enter name")
        }else if(form.age.length == 0){
            alert("Please enter age")
        }else{
         alert("Appointment booked");
          setFlag(1);
        }
    };
       
    return flag? <Doctor /> : (
        
        <div>

             <div>Book Appointments Below</div>
            <form id="input_form"  onSubmit={handleSubmit}>
                <label>ENTER NAME: </label>
                <input onChange={handleChange} name="patientname" type="text" placeholder="Enter Patient Name" required= "true" />

                <label>ENTER AGE: </label>
                <input onChange={handleChange} name="age" type="number" placeholder="Enter Patient Age" required/>
                 
                <label>SELECT GENDER: </label>
                <select onChange={handleChange} name="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Others</option>
                </select >

                <label>SELECT DEPARTMENT: </label>
                <select onChange={handleChange} name="department">
                      { doctors.map(element => {
                       return ( <option value = {element}> {element} </option> )
                    })
                }
                </select >
                
                <label>DOCTORS: </label>
                <select onChange={handleChange} name="doctor">
                 
                    { array.map(element => {
                       return ( <option value = {element}> {element} </option> )
                    })
                }
                
                </select >

                <label>DATE</label>
                <select onChange={handleChange} name="date">
                    <option value="to_date">{d.dd}-{d.mm}-{d.yyyy}</option>
                </select>
                

               <button onClick={handleSubmit}>Submit</button>
            </form>
            
        </div>
        
    );
}

