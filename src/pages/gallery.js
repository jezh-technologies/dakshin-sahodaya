import React from 'react'
import firebase from '../../firebase/firebase'
import {useCollectionData}from 'react-firebase-hooks/firestore'
import Head from 'next/head'
import Link from 'next/link'

function Gallery() {
    const [gallery]=useCollectionData(firebase.firestore().collection("gallery"))
    
  return (
    <html>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
    <title>DSSC - Gallery</title>
    </Head>
    <body className="">
    <header>
        <div px-5>
          <nav class="navbar navbar-expand-lg bg-body-tertiary px-lg-5 px-0 border border-bottom ">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
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
                  <a class="nav-link p-3 mx-lg-2 mx-0  active" aria-current="page" href="#">Home</a>
                  <a class="nav-link p-3 mx-lg-2 mx-0 " href="#">Registered Schools</a>
                  <a class="nav-link p-3 mx-lg-2 mx-0 border-bottom border-success border-4" href="/gallery">Gallery</a>
                  <a class="nav-link p-3 mx-lg-2 mx-0 "></a>
                </div>
                <button type="button" className="btn btn-success btn-lg border-0 rounded-3 fw-bold px-5 py-3 me-3 shadow-sm" style={{backgroundImage:`linear-gradient(90deg,#1D976C,#93F9B9)`}} onClick={()=>{Router.push("/signup")}} >Register now</button>

              </div>
            </div>
          </nav>
        </div>


</header>
    <div className='fw-bolder'>
      <center className="fw-bolder">
        <h1 className="fw-bolder bg-light px-2 py-1">GALLERY</h1>
        </center>
        <div class="container my-4">
           <div class="">
            <div className='row'>    {
        gallery&&gallery.map((g)=> <div className='col-sm-12 col-md-6 col-lg-4 my-2' key={g.id}>
            <img className="img-fluid rounded-4" src={g.url} />
            <span className="fw-bolder ms-1">{g.folder}</span>

        </div>)}
        </div>
           </div>
        </div>
        </div>
        <footer className="navbar navbar-expand-lg bg-light px-lg-5 px-2 text-dark border border-top-1">
    <div className="container-fluid">
      <span className="navbar-text me-auto  px-2">
        <span className="fw-bold">Copyright © 2023 DSSC </span><div class="vr text-black mx-2"></div>
        <small className="fw-normal"><span className="fw-bold">Designed & Developed by</span> <a target="new" href="https://jezhtechnologies.com" className="fw-bolder text-decoration-none text-dark">Jezh Technologies Pvt Ltd.</a></small>

      </span>

    </div>
  </footer>  
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
        </body>
        
        </html> )
        
}

export default Gallery
