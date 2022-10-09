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
    </Head>
    <body className="">
    <header>
      <nav className="navbar navbar-expand-lg bg-white px-lg-5 pt-0">
        <div className="container-fluid">
        <img src="/images/dakshilogo.jpg" className="img-fluid rounded-1" width="80" height="60" alt="..."/>
          {/* <h3 className="fw-bold ms-2">Dakshin Sahodaya</h3> */}
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon border-0"></span>
          </button>
          <div className="collapse text-center navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold fs-5">
              <li className="nav-item px-lg-2">
                <Link href="/"><a className="nav-link "   >Home</a></Link>
              </li>
              <li className="nav-item px-lg-2">
                <Link href="/"><a className="nav-link "   >About Us</a></Link>
              </li>
              <li className="nav-item px-lg-2">
                <Link href='/gallery' ><a className="nav-link active " style={{color:"#f96e64"}} aria-current="page"  >Gallery</a></Link>
              </li>
              <li className="nav-item px-lg-2"  >
                <Link href='/board-members' ><a className="nav-link">Board Members</a></Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

</header>
    <div>{
        gallery&&gallery.map((g)=> <div key={g.id}> <center  >
            <h2>{g.folder}</h2>
            <img src={g.url} /></center>

        </div>)}</div> </body>
        
        </html> )
        
}

export default Gallery