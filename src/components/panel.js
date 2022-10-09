import React, { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'


function Panel(){
  const[iframe,setiframe]=useState("/admin/h")
  return (
<html>
<Head>
    <meta charset="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>

    <title>DS Admin-Panel</title>
</Head>
    



<body className="bg-black">
    <nav className="navbar bg-black">
        <div className="container-fluid py-4" >
          <h1 className="navbar-brand text-mb-0 h1 text-white fw-bolder position-absolute top-50 start-50 translate-middle"><b>DAKSHIN SAHODAYA</b><span className="badge text-dark fw-bold text-bg-light ms-2">ADMIN PANEL</span></h1>
        </div>
      </nav>
    <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 border border-dark bg-black" align="left">
            <nav className="nav flex-column">
                <Link className="nav-link text-warning fw-bold bg-dark border-none rounded-2  mt-4 mb-2 py-3" href="#" ><a onClick={()=>{
                setiframe("/admin/h")
                }} className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-4 mt-2 py-3">HOME</a></Link>
                <Link className="nav-link text-warning fw-bold bg-dark border-none rounded-2 my-2 py-3" href="#"><a onClick={()=>{
                setiframe("/admin/rs")
                }} className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-4 mt-2 py-3">REGISTERED SCHOOLS</a></Link>
                <Link className="nav-link text-warning fw-bold bg-dark border-none rounded-2 my-2 py-3" href="#"><a onClick={()=>{
                setiframe("/admin/ar")
                }} className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-4 mt-2 py-3">ACADEMIC REPOSITORY</a></Link>
                <Link className="nav-link text-warning fw-bold bg-dark border-none rounded-2 my-2 py-3" href="#"><a onClick={()=>{
                setiframe("/admin/ue")
                }} className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-4 mt-2 py-3">UPCOMING EVENTS</a></Link>
                <Link className="nav-link text-warning fw-bold bg-dark border-none rounded-2 my-2 py-3" href="#"><a onClick={()=>{
                setiframe("/admin/oe")
                }} className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-4 mt-2 py-3">ONGOING EVENTS</a></Link>
                <Link className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mt-2 py-3" href="#"><a onClick={()=>{
                setiframe("/admin/ln")
                }} className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-4 mt-2 py-3">LATEST NEWS</a></Link>
                <hr className="border border-white" />
                <Link className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-2 py-3" href="#"><a onClick={()=>{
                setiframe("/admin/g")
                }} className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-4 mt-2 py-3">GALLERY</a></Link>
                <Link  href="#"><a onClick={()=>{
                setiframe("/admin/bm")
                }} className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-4 mt-2 py-3" >BOARD MEMBERS</a></Link>
              </nav>
          </div>
          <div className="col-sm-10 mx-0 px-0 border border-dark" align="center">
            <div className="container-fluid ratio ratio-16x9">
              <iframe className="allowfullscreen" src={iframe}></iframe>
            </div>
          </div>
        </div>
    </div> 
    <div className="container bg-black">
  <footer className="d-flex flex-wrap justify-content-between align-items-center bg-black py-2">
    <p className="col-md-5 mb-0 text-muted">© 2022 Dakshin Sahodaya</p>

    <Link href="/" className="col-md-2 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img src="/images/dakshilogo.jpg" className="img-fluid rounded-1" width="50" height="50" alt="..."/>
    </Link>
    
      <ul className="nav col-md-5 justify-content-end">
        <li className="nav-item"><Link href="https://jeshtechnology.com/" ><a className="nav-link px-2 text-muted">Designed And Developed By
<b> JESH TECHNOLOGY Pvt. Ltd.</b></a></Link></li>
      </ul>
    </footer>
</div>       

<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></Script>
</body>
</html>
  )
}

export default Panel