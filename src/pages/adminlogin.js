import Router from 'next/router'
import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import { auth } from '../../firebase/firebase'
import Script from 'next/script'
import Head from 'next/head'




function Auth() {
    const[email,setemail] =  useState("")
    const[pass,setpass] =  useState("")
    
    const sign=()=>{
    auth.signInWithEmailAndPassword(email,pass).then((u)=>{if(u.user.email==="admin@dakshinsahodaya.com"){
        Router.push("/admin")
    }
    else{
        alert("please leave this page, you are not the admin")
    }

 }).catch((err)=>{alert(err)})
    

    }
    
    return(
        
        <html>
            <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>DSSC - Admin Login</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>

      </Head>
      <body> 
      <header>
        <div px-5>
          <nav class="navbar navbar-expand-lg bg-body-tertiary px-lg-5 px-0 border border-bottom ">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">
              <div class="d-flex flex-row align-items-center">
                <div class="p-2">
                  <img src="/images/dakshilogo.jpg" alt="Dakshin Sahodaya" width="75" height="60" className="d-inline-block img-fluid rounded-1 align-text-top"/>
                </div>
                <div className="p-2">
                <h2 className="fw-bolder">Dakshin<br/>Sahodaya</h2>
                </div>
              </div>
              </a>
              <button class="navbar-toggler border-1  rounded-circle p-3 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav fw-bolder h4 mx-auto">
                  <a class="nav-link p-3 mx-lg-2 mx-0 border-bottom-1 active" aria-current="page" href="#">Home</a>
                  <a class="nav-link p-3 mx-lg-2 mx-0 border-bottom-1" href="#">Registered Schools</a>
                  <a class="nav-link p-3 mx-lg-2 mx-0 border-bottom-1" href="/gallery">Gallery</a>
                  <a class="nav-link p-3 mx-lg-2 mx-0 border-bottom-1"></a>
                </div>
                <button type="button" className="btn btn-success btn-lg border-0 rounded-4 fw-bold px-5 py-3 me-3 shadow-sm" style={{backgroundImage:`linear-gradient(90deg,#1D976C,#93F9B9)`}} onClick={()=>{Router.push("/signup")}} >Register now</button>

              </div>
            </div>
          </nav>
        </div>


</header> 
<section className="hero">
<div className="container text-center justify-content-center py-lg-5 px-lg-5 py-3" >

<h1 className="display-4 fw-bolder py-3 justify-content-center" align="center">Admin Login</h1>

      <form className="pb-lg-5 pt-lg-4 px-2 pb-5 pt-4">
      

          <div className="form-floating mb-3">
            <input type="email" className="form-control bg-light text-dark border" maxLength="40" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{
        setemail(e.target.value)

    }}/>
            <label className="text-secondary fw-bold">Enter E-mail</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control bg-light text-dark border" maxLength="20" id="floatingPassword" placeholder="Password" onChange={(e)=>{
        setpass(e.target.value)
    }}/>
            <label className="text-secondary fw-bold">Enter Password</label>
          </div>

  <div className="d-grid mt-3">
  <button onClick={sign} type="button" style={{backgroundImage:`linear-gradient(90deg,#1D976C,#93F9B9)`}} className="btn btn-lg btn-success text-white fw-bold border-0">Log In</button>
  </div>
</form>
    

  </div>

</section> 


<footer className="navbar navbar-expand-lg bg-light px-lg-5 px-2 text-dark border border-top-1">
    <div className="container-fluid">
      <span className="navbar-text me-auto  px-2">
        <span className="fw-bold">Copyright © 2023 DSSC </span><div class="vr text-black mx-2"></div>
        <small className="fw-normal"><span className="fw-bold">Designed & Developed by</span> <a target="new" href="https://jezhtechnologies.com" className="fw-bolder text-decoration-none text-dark">Jezh Technologies Pvt Ltd.</a></small>

      </span>

    </div>
  </footer>  



  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></Script>

      </body>
        </html>
      
      
    )
}

export default Auth
