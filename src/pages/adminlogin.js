import Router from 'next/router'
import React, { useState } from 'react'
import styles from '../styles/login.module.css'
import { auth } from '../../firebase/firebase'
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
        
        <html className="bg-black">
            <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>DSSC - Admin Portal</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>

      </Head>
      <body className="bg-black">    
      <nav className="navbar bg-black border-bottom">
        <div className="container-fluid justify-content-center px-0">
          <h1 className="navbar-brand my-0 h1 fw-bolder text-white"><b>Dakshin Sahodaya</b></h1>      
          <span className="badge text-bg-light text-black mt-1">Admin Portal</span>
        </div>
      </nav>
        <div className="container-fluid justify-content-center" style={{width:'20.25em'}}>
        <form className="pb-lg-5 pt-lg-4 px-2 pb-5 pt-4">
          <div className="form-floating mb-3">
            <input type="email" className="form-control bg-dark text-white border-0" maxLength="40" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{
        setemail(e.target.value)

    }}/>
            <label className="text-secondary fw-bold">Admin <i>E-mail</i></label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control bg-dark text-white border-0" maxLength="20" id="floatingPassword" placeholder="Password" onChange={(e)=>{
        setpass(e.target.value)
    }}/>
            <label className="text-secondary fw-bold">Admin <i>Password</i></label>
          </div>

  <div className="d-grid mt-3">
  <button onClick={sign} type="button" className="btn btn-lg text-black fw-bold bg-warning border-0 py-2">Log In</button>
  </div>
</form>
</div>
<div class="container-fluid border-top border-secondary bg-black position-absolute bottom-0 end-0">
  <footer class="d-flex flex-wrap justify-content-between align-items-center bg-black py-2">
    <p class="col-md-5 mb-0 fw-bold text-secondary">© 2022 Dakshin Sahodaya</p>

    <a href="/" class="col-md-2 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img src="/images/dakshilogo.jpg" className="img-fluid rounded-1" width="50" height="50" alt="..."/>
    </a>
    
      <ul class="nav col-md-5 justify-content-end">
        <li class="nav-item"><a href="https://jeshtechnology.com/" class="nav-link px-2 fw-semibold text-secondary">Designed And Developed By
<b> Jezh Technologies Pvt. Ltd.</b></a></li>
      </ul>
    </footer>
</div> 

      </body>
        </html>
      
      
    )
}

export default Auth