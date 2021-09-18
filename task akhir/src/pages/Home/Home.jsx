import React, {useState,useEffect} from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar'
import bg from '../../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
// import {useDate} from "../../Components/Time";

export const DateTime = () => {
    var [date,setDate] = useState(new Date())
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()),1000)
        return function cleanUp() {
            clearInterval(timer)
        }
    })
    return(
        <div>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <Navbar />
            <DateTime/>
            <section className="Project">
                <div className="container">
                    <div className="row vh-100 justify-content-center text-center align-items-center">
                        <div className="col-lg-4">
                            <img src={ bg } width={ 355 } className="rounded-circle profile" alt="" srcSet="" />
                        </div>
                        <div className="col-lg-6 Kanan">
                            <div className="Content mb-5 mt-3">
                                <h5 className="Teks-1 ">Hi My Name is</h5>
                                <h1 className="Nama" >Anne Sullivan</h1>
                                <h4 className="Keterangan">I Build things for the web</h4>
                                <button className="Orange text-white mt-4">Get In Touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
