import React from 'react'
import firebase from '../../firebase/firebase'
import {useCollectionData}from 'react-firebase-hooks/firestore'
import Head from 'next/head'
import Link from 'next/link'
function Boardmembers() {
    const [board_members]=useCollectionData(firebase.firestore().collection("board_members"))
  return (
    <html>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
    </Head>
    <body className="">
    <header>
        <nav className="navbar navbar-expand-lg bg-white px-lg-5 px-0 pt-0">
          <div className="container-fluid">
          <img src="/images/dakshilogo.jpg" className="img-fluid" width="80" height="60" alt=""/>
            {/* <h3 className="fw-bold ms-2">Dakshin Sahodaya</h3> */}
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon border-0 text-black"></span>
            </button>
            <div className="collapse text-center navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mb-lg-0 fw-bold fs-5 bg-light rounded-5 px-2 py-1 align-middle">
                <li className="nav-item px-lg-2">
                <Link href='/' ><a className="nav-link rounded-3 px-" href="#">Home</a></Link>
                </li>
                <li className="nav-item px-lg-2">
                  <a className="nav-link rounded-3 px-" href="#">About Us</a>
                </li>
                <li className="nav-item px-lg-2">
                <Link href='/gallery' ><a className='nav-link rounded-3 px-'>Gallery</a></Link>
                </li>
                <li className="nav-item px-lg-2">
                <Link href='/board-members' ><a className="nav-link rounded-3 px-" style={{color:"#FF512F"}} aria-current="page">Board Members</a></Link>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
    </header>
    <div className='fw-bolder'>
      <center className="fw-bolder">
        <h1 className="fw-bolder bg-light px-2 py-1">BOARD MEMBERS</h1>
        </center>
        <div class="container my-5">
           <div class="">
            <center>
            <div className='row'>
        {
        board_members&&board_members.map((b)=>
        
            <div className='col-sm-12 col-md-6 col-lg-4 my-2'>
        <div className="card border-0 fw-bolder" key={b.id} style={{width : "18rem"}}>
  <img className="card-img-top img-fluid border border-bottom-0 border-4 rounded-bottom rounded-4" src={b.photo} width="300" height="400"/>
  <center>
  <div className="card-bodybg-light border border-top-0 border-4 rounded-top rounded-4 py-3 mb-3">
  <h5 className='fw-bolder'>{b.name}</h5>
  <h6 className='fw-bolder' style={{color:"#FF512F"}}>{b.posting}</h6>
  </div>
  </center>
</div>
</div>

        )
        }
        </div>
        </center>
</div>
</div>
</div>
<footer className="container-fluid pb-3 pt-5 px-4 bg-dark">
    <div className="row px-lg-5">
      <div className="col-12 col-md me-lg-5">
        <span className="text-white fs-5 fst-italic fw-bolder pb-1 text-decoration-underline">Dakshin Sahodaya</span>
        <span className="d-block mb-3 text-white text-break text-wrap mt-2">
          Dakshin sahodaya laid stone for bringing the schools together and uniting them to cultivate healthy intercommunicate.
        </span>
      </div>
      <div className="col-6 col-md">
        <h6 className="text-white fw-bold fst-italic fs-5 text-decoration-underline">Useful Links</h6>
        <ul className="list-unstyled text-small">
          <li><Link href='/gallery' ><a className="link-light text-decoration-none fw-semibold mb-2" href="#">Gallery</a></Link></li>
          <li><Link href='/board-members' ><a className="link-light text-decoration-none fw-semibold mb-2" href="#">Board Members</a></Link></li>
          <li><a className="link-light text-decoration-none fw-semibold mb-2" href="#">Contact</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h6 className="text-white fw-bold fst-italic fs-5 text-decoration-underline">Contact</h6>
        <ul className="list-unstyled text-small">
          <li><a className="link-light text-decoration-none fw-semibold mb-2" href="#">+91 0000000000</a></li>
          <li><a className="link-light text-decoration-none fw-semibold mb-2 text-break text-wrap" href="mailto:info@dakshinsahodaya.com">info@dakshinsahodaya.com</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h6 className="text-white fw-bold fst-italic fs-5 text-decoration-underline">Social</h6>
        <ul className="list-unstyled text-small">
          <li className="my-2"><a className="link-light text-decoration-none fw-semibold mb-2" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
          </svg></a></li>
          <li className="my-2"><a className="link-light text-decoration-none fw-semibold mb-2" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
            </svg>
          </a></li>
          <li className="my-2"><a className="link-light text-decoration-none fw-semibold mb-2" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
          </svg>
        </a></li>
          <li className="my-2"><a className="link-light text-decoration-none fw-semibold mb-2" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <ul className="list-unstyled text-small">
          <li><img src="https://static.greengeeks.com/ggseal/Green_24.png"/></li>

        </ul>
      </div>
      
    </div>
   
  </footer>
  <nav className="navbar navbar-expand-lg bg-black px-lg-5 px-2">
    <div className="container-fluid">
      <span className="navbar-text me-auto text-white px-2">
        <span className="fw-bold">Copyright © 2022 Dakshin Sahodaya </span>
        <br/>
        <small className="fw-normal"><span className="fw-bold">Made by</span> <a target="new" href="https://jeshtechnology.com" className="fw-bolder text-decoration-none text-white">Jesh Technology Pvt. Ltd.</a></small>

      </span>
      
        <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0 text-white">
          <li className="nav-item px-lg-3">
            <a className="nav-link text-white fw-semibold px-3" href="#">FAQ</a>
          </li>
          <li className="nav-item px-lg-3">
            <a className="nav-link text-white fw-semibold px-3" href="#">Help Desk</a>
          </li>
          <li className="nav-item px-lg-3">
            <a className="nav-link text-white fw-semibold px-3" href="#">Support</a>
          </li>
        </ul>

    </div>
  </nav>  
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></script>
        </body></html>
  )
}

export default Boardmembers
