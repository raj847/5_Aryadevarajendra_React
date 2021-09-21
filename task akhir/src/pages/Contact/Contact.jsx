import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import './contact.css'
import side from "../../img/charles-rRWiVQzLm7k-unsplash.jpg"
import logoputih from "../../img/logo-ALTA-v2@2x.png"
// import {Redirect} from "react-router"
import { useDispatch } from "react-redux";
import { addFormData } from "../../store/formDataSlice";
// function Contact(){
//     const dispatch = useDispatch();

const baseData = {
    name: "",
    email:"",
    phone:"",
    nationality: "",
    message:""
}
const baseErrors = {
    name: "",
    email: "",
    phone: "",
    nationality: "",
    message:"",
}



const Contact = () => {
    const history = useHistory()
    const [data, setData] = useState(baseData);
    const [errorMassage, setErrorMessage] = useState(baseErrors);
    const dispatch = useDispatch();
    const regexNama = /^[A-Za-z ]*$/
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const handleSubmit = e => {
        if (errorMassage.name !== '' || errorMassage.email !== '' || errorMassage.phone !== '') {
            alert("ERROR")
        } else {
            alert(`"${data.name}" Diterima`)
            history.push('/')
        }
        e.preventDefault()
        let formIsValid = true;
        if (formIsValid) {
            dispatch(addFormData(data));
      history.push("/review");
          }
    }

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        // setData(e.target.value)
        console.log(errorMassage)
        if (name === "name") {
            if (value === "") {
                setErrorMessage({...errorMassage, [name]: 'Full name cannot be empty'})
            } else  {
                if (!regexNama.test(value)) {
                    setErrorMessage({...errorMassage, [name]: 'Nama Lengkap Harus Berupa Huruf'})
                } else {
                    setErrorMessage({...errorMassage, [name]: ''})
                }
            }
        }
        if (name === "email"){
            if (value === "") {
                setErrorMessage({...errorMassage, [name]: 'Email name cannot be empty'})
            } else {
                if (!regexEmail.test(value)) {
                    setErrorMessage({...errorMassage, [name]: 'Email Format Wrong'})
                } else {
                    setErrorMessage({...errorMassage, [name]: ''})
                    // setData(e.target.value)

                }
            }
        }
        if (name === "phone"){
            if (value === "") {
                setErrorMessage({...errorMassage, [name]: 'Phone number cannot be empty'})
            } else {
                if (value.length < 9 || value.length > 14) {
                    setErrorMessage({...errorMassage, [name]: 'Phone Number Format Wrong'})
                } else {
                    setErrorMessage({...errorMassage, [name]: ''})
                    // setData(e.target.value)

                }
            }
        }
        if (name === "nationality") {
            console.log(value)
            if (value === "") {
                setErrorMessage({...errorMassage, [name]: 'Tolong Pilih Data yang benar'})
            } else {
                // setData(e.target.value)
            }
        }
        // setData(e.target.value)
        // console.log(data)
        // setData({...data,[name]: value})
        setData({...data,[name]: value})

    }

    return (
        <div>
            <div className="HalamanContact">
                <div className="container-fluid ms-0 ps-0 position-relative">
                    <div className="row justify-content-between">
                        <div className="col-md-4 Kiri">
                            <img src={ side } width="500px" alt="" srcSet />
                            <div className="Logo position-absolute top-0 start-0">
                            </div>
                            <img src={ logoputih } width="350px" className="position-absolute top-50 start-0 ms-5 ps-5" alt="" />
                        </div>
                        <div className="col-md-6 p-3 m-3">
                            <h1>Contact us</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label fs-4"
                                    name="fullname">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="form-control"
                                        // value={data.name}
                                        name="name"
                                        id="name"
                                        aria-describedby="emailHelp"
                                        onChange={handleChange}
                                    />
                                    {/*{console.log(errorMassage.nama)}*/}
                                    <p>{errorMassage.name}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fs-4">Email Address</label>
                                    <input
                                    name="email"
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        required
                                        name="email"
                                        onChange={handleChange}
                                    />
                                    {/*{console.log(errorMassage.email)}*/}
                                    <p>{errorMassage.email}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label fs-4">Phone Number</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        required
                                        onChange={handleChange}
                                        aria-describedby="emailHelp"
                                    />
                                    <p>{errorMassage.phone}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="nationality" className="form-label fs-4">Nationality</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        required
                                        name="nationality"
                                        value={data.nationality}
                                        onChange={handleChange}
                                    >
                                        <option selected value={""}>Open this select menu</option>
                                        <option value={ "indonesia" }>Indonesia</option>
                                        <option value={ "UK" }>UK</option>
                                        <option value={ "Uganda" }>Uganda</option>
                                    </select>
                                    <p>{errorMassage.nationality}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label fs-4">Message</label>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        id cols={ 30 } rows={ 5 }
                                        // defaultValue={ "" }
                                        value={data.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <button className="ButtonSubmit" type="submit" value="Submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
// }
export default Contact
