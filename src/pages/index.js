import Head from 'next/head'
import Router from 'next/router'
import firebase from '../../firebase/firebase'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Script from 'next/script'
import style from '../styles/index.module.css'
import Link from "next/link"


function Home() {
  const[Academic_repository]=useCollectionData(firebase.firestore().collection("academic_repository"))
  const[schools]=useCollectionData(firebase.firestore().collection("schools"))
  const[latest_news]=useCollectionData(firebase.firestore().collection("latest_news").orderBy("created").limitToLast(3))
  const[upcoming_events]=useCollectionData(firebase.firestore().collection("upcoming_events").orderBy("created"))
  const[ongoing_events]=useCollectionData(firebase.firestore().collection("ongoing_events").orderBy("created"))
  latest_news&&latest_news.splice(3)
  var i =null
  if(Academic_repository!=undefined){
    i=Academic_repository[0]
   
  }  
  var ue =null
  var oe =null
  
  if(upcoming_events!=undefined){
    if(ue===null){
   
      var n1=Math.floor((Math.random()*upcoming_events.length))
      ue=upcoming_events[n1]
      
  }
     
   
  }
  
  if(upcoming_events!=undefined){
    if(oe===null){
   
      var n2=Math.floor((Math.random()*upcoming_events.length))
      oe=upcoming_events[n2]
    }
     
   
  }
 
  
   
  return (
<html>
      <Head>
      <title>DSSC - Home</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
      </Head>
      <body className="">
      <header>
        <nav className="navbar navbar-expand-lg bg-white px-lg-5 px-0 pt-0 bg-light">
          <div className="container-fluid">
          <img src="/images/dakshilogo.jpg" className="img-fluid rounded-1" width="80" height="60" alt=""/>
            {/* <h3 className="fw-bold ms-2">Dakshin Sahodaya</h3> */}
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon border-0 text-black"></span>
            </button>
            <div className="collapse text-center navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold fs-5 bg-light rounded-5 px-2 py-1">
                <li className="nav-item px-lg-2">
                  <a className="nav-link rounded-3 px- active " style={{color:"#FF512F"}} aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item px-lg-2">
                  <a className="nav-link rounded-3 px-" href="#">About Us</a>
                </li>
                <li className="nav-item px-lg-2">
                <Link href='/gallery' ><a className='nav-link rounded-3 px-' >Gallery</a></Link>
                </li>
                <li className="nav-item px-lg-2">
                <Link href='/board-members' ><a className="nav-link rounded-3 px-">Board Members</a></Link>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>

</header>



<section className="hero">
<div className="container-fluid text-center py-lg-3 px-lg-5 mx-lg-2">
  <div className="row align-items-center">
    <div className="col-sm-6" align="left">
      <div className="align-middle fw-bolder">
      <h1 className="display-4 fw-bolder fst-italic mb-0">Dakshin Sahodaya</h1>
      <h2 className="display-5 fst-italic fw-bold mt-0">Schools Complex</h2>
      <p className="fw-semibold fs-sm-1 fs-5" align="justify2">Dakshin Sahodaya Schools Complex emerged as a common platform for all CBSE- affiliated schools in the districts of Kanyakumari, Tirunelveli and Tuticorin. At present there are 61 schools from these southern districts that are active members of Dakshin Sahodaya, its head office is positioned at Nagercoil. There are diverse array of activities carried out by Dakshin Sahodaya schools complex.</p>
      <button type="button" className="btn btn-success btn-lg border-0 rounded-4 fw-bold px-5 py-3 mt-3 me-3 shadow" style={{backgroundImage:`linear-gradient(90deg,#1D976C,#93F9B9)`}} onClick={()=>{Router.push("/signup")}} >Register now</button>
      <div class="d-grid gap-2 col-6 mx-auto">
    </div>
      </div>
    </div>
    <div className="col-sm-6 ">
    <div className="d-none d-lg-block">
      <img src="/images/img.png" className="img-fluid " width="590" height="250" alt=""/>
      </div>
    </div>
  </div>
</div>
</section>
<section className="tabs py-5">
  <div className="container-fluid text-center px-lg-5 mx-lg-2">
  <div className="row align-items-center">
    <div className="col-sm-6 mb-3">
      <div className="card border-0 py-lg-5">
        <div className="card-body bg-warning border-0 rounded-4 p-4" align="left" style={{backgroundImage:`linear-gradient(90deg,#FF512F,#DD2476)`}}>
          <h4 className="card-title text-white fw-bolder">Subscription</h4>
          <p className="card-text text-white fw-semibold fs-6">To become a member you have to Subscribe to these accounts</p>
          <a href="#" className="btn bg-light border-none rounded-3 fw-bold px-4 py-2 shadow">Read more</a>
        </div>
      </div>
    </div>
    <div className="col-sm-6 mb-3">
      <div className="card border-0 py-lg-5">
        <div className="card-body bg-warning border-0 rounded-4 p-4" align="left" style={{backgroundImage:`linear-gradient(90deg,#FF512F,#DD2476)`}}>
          <h4 className="card-title text-white fw-bolder">Registration</h4>
          <p className="card-text text-white fw-semibold fs-6">To become a user you have to register here</p>
          <a href="#" class="btn bg-light border-none rounded-3 fw-bold px-4 py-2 shadow" onClick={()=>{Router.push("/signup")}}>Register now</a>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
<section className="py-3 px-lg-5">
  <h2 className="fw-bolder justify-content-centre mb-5" align="center">Academic <span style={{color:"#FF512F"}}>Repository</span></h2>
  <div id="carouselExampleControls" className="carousel slide align-items-center" data-bs-ride="carousel">
   
    <div className="carousel-inner">
    <div className={`carousel-item active  ` } align="center">  
    <div className="card rounded-4 border-0 shadow-lg bg-light mb-5 rounded border border-4" style={{"width":"18rem"}}>
      <img src={i && i.image} className="card-img-top rounded-4 border-0" alt="" onClick={()=>{Router.push(i && i.pdf)}} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{i && i.title}</h5>
      </div>
    </div>
  </div>
    
    {Academic_repository && Academic_repository.map((e)=>
    <div className={`carousel-item ` } align="center">
    <div className="card rounded-4 border-0 shadow-lg bg-light mb-5 rounded border border-4" style={{"width":"18rem"}}>
      <img src={e.image} className="card-img-top rounded-4 border-0" alt="" onClick={()=>{Router.push(e.pdf)}} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{e.title}</h5>
      </div>
    </div>
  </div>
    )}
     
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon bg-black rounded-circle px-2" aria-hidden="true"></span>
      <span className="visually-hidden ">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon bg-black rounded-circle p-2" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</section>
<section className="py-5">

  <div className="container-fluid p-lg-5 text-center">
    <div className="row">
      <div className="col-sm-6">
        <h2 className="fw-bolder justify-content-centre mb-3" align="center">Ongoing <span style={{color:"#FF512F"}}>Events</span></h2>
        <div className="card shadow-lg rounded-4 me-lg-3 mb-3 border border-4">
        <div class="container text-center">
  <div class="row">
    <div class="col-sm-6">
      <img src={oe && oe.url} className="card-img-top p-0" alt="" height="300"/>
    </div>
    <div class="col-sm-6 ">
    <div className="card-body fw-bolder" align="justify">
            <h5 className="card-title fw-bolder">{oe&&oe.title}</h5>
            <p className="card-text fw-semibold">{oe&&oe.detail}</p>  
    </div>
    </div>
  </div>
</div>
        </div>
        
      </div>
      <div className="col-sm-6">
        <h2 className="fw-bolder justify-content-centre mb-3" align="center">Upcoming <span style={{color:"#FF512F"}}>Events</span></h2>
        <div className="card shadow-lg rounded-4 ms-lg-3 mb-3 border border-4">
        <div class="container text-center">
  <div class="row">
    <div class="col-sm-6">
      <img src={ue && ue.url} className="card-img-top p-0" alt="" height="300"/>
    </div>
    <div class="col-sm-6">
    <div className="card-body fw-bolder" align="justify">
            <h5 className="card-title fw-bolder">{ue&&ue.title}</h5>
            <p className="card-text fw-semibold">{ue&&ue.detail}</p>  
    </div>
    </div>
  </div>
</div>
        </div>        
      </div>
    </div>
  </div>
  
</section>
<section className="py-5 py-md-5">
  <h2 className="fw-bolder justify-content-centre mb-5" align="center">Registered <span style={{color:"#FF512F"}}>Schools</span></h2>
  <div className="container-fluid">
    <marquee behavior="smooth" direction="">
    <div className="row align-items-center justify-content-center">
    <div class="grid text-center">
      {schools&&schools.map((e)=>{
      if(e.approved==true){
        return(
       

           
          
          <img src={e.logo} width="200" height="200"/>
    
        )

      }
    }
      )}
      </div>
    </div>
  </marquee>
  </div> 

</section>

<section className="py-5 py-md-5">
  <h2 className="fw-bolder justify-content-centre mb-5" align="center">Latest <span style={{color:"#FF512F"}}>News</span></h2>
  <div className="card-group px-lg-5" >
    {latest_news&&latest_news.map((e)=>
      <div className="card rounded-4 shadow-lg mx-2 border border-4">
      <img src={e.photo} className="card-img-top rounded-4" width="100" height="250"/>
      <div className="card-body mx-2">
        
        <p className="card-text fw-semibold">{e.detail}</p>
      </div>
      
    </div>
    )}
    
    </div>
  
</section>
  <footer className="container-fluid pb-3 pt-5 px-4 bg-dark ">
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

<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous"></Script>
      </body>
  </html>
  )
}

export default Home