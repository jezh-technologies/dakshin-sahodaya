import React, { useState } from 'react'
import Head from 'next/head'


function Panel(){
  const[iframe,setiframe]=useState("/admin/h")
  return (
<html>
<Head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>

    <title>DS Admin-Panel</title>
</Head>
    



<body className="bg-black">
    <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2 border border-dark bg-black" align="left">
          <nav className="navbar bg-black">
              <div className="container-fluid pt-4 pb-3" >
                <h1 className="navbar-brand text-mb-0 h1 text-white fw-bolder position-absolute top-50 start-50 translate-middle"><b>Menu</b></h1>
              </div>
            </nav>
            <nav className="nav flex-column">
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 my-2 py-3" href="#" onClick={()=>{
                setiframe("/admin/h")
                }}>HOME</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/rs")
                }}>REGISTERED SCHOOLS</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/ar")
                }}>ACADEMIC REPOSITORY</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/ue")
                }}>UPCOMING EVENTS</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/oe")
                }}>ONGOING EVENTS</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mb-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/ln")
                }}>LATEST NEWS</a>
                <hr className="border border-white m-0" />
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mt-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/g")
                }}>GALLERY</a>
                <a className="nav-link text-warning fw-bold bg-dark border-none rounded-2 mt-2 py-3" href="#"onClick={()=>{
                setiframe("/admin/bm")
                }}>BOARD MEMBERS</a>
              </nav>
          </div>
          <div className="col-sm-10 mx-0 px-0 border border-dark" align="center">
            <nav className="navbar bg-black border-bottom">
              <div className="container-fluid py-4" >
                <h1 className="navbar-brand text-mb-0 h1 text-white fw-bolder position-absolute top-50 start-50 translate-middle"><b>DAKSHIN SAHODAYA</b><span className="badge text-dark fw-bold text-bg-light ms-2">ADMIN PANEL</span></h1>
              </div>
            </nav>
            <div className="container-fluid ratio ratio-16x9">
              <iframe class="allowfullscreen" src={iframe}></iframe>
            </div>
          </div>
        </div>
    </div> 
    <div class="container-fluid bg-black">
  <footer class="d-flex flex-wrap justify-content-between align-items-center bg-black py-2">
    <p class="col-md-5 mb-0 fw-bold text-secondary">© 2022 Dakshin Sahodaya</p>

    <a href="/" class="col-md-2 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img src="/images/dakshilogo.jpg" className="img-fluid rounded-1" width="50" height="50" alt="..."/>
    </a>
    
      <ul class="nav col-md-5 justify-content-end">
        <li class="nav-item"><a href="https://jeshtechnology.com/" class="nav-link px-2 fw-semibold text-secondary">Designed And Developed By
<b> Jesh Technology Pvt. Ltd.</b></a></li>
      </ul>
    </footer>
</div>       

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
</body>
</html>
  )
}

export default Panel
