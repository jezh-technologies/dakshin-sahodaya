import React, { useState } from 'react'
import firebase from '../../firebase/firebase'
import Head from 'next/head'

function Sign() {
    const [school, setschool] = useState()
    const [principal, setprincipal] = useState()
    const [logo, setlogo] = useState()
    const [payment, setpayment] = useState()
    const [contact, setcontact] = useState()
    const [address, setaddress] = useState()
    const db =firebase.firestore()
    
    const sign=async()=>{
        const storage =firebase.storage()
        await storage.ref("logo").child(school).child(logo.name).put(logo)
        await storage.ref("payment").child(school).child(payment.name).put(payment)
        const loglink =  await storage.ref("logo").child(school).child(logo.name).getDownloadURL()
        const paylink = await storage.ref("payment").child(school).child(payment.name).getDownloadURL()
        db.collection("schools").doc(school).set(
            {
                "adress" : address,
                "approved":false,
                "contact":contact,
                "logo":loglink,
                "payment": paylink,
                "principal":principal,
                "schoolname":school

            }
        )
    }

  return (
   
    <html>
    <Head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>DS - School Portal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>

</Head>
<body className="bg-black">    
<nav className="navbar bg-black border-bottom">
<div className="container-fluid justify-content-center px-0">
  <h1 className="navbar-brand my-0 h1 fw-bolder text-white"><b>Dakshin Sahodaya</b></h1>      
  <span className="badge text-bg-light text-black mt-1">School Portal</span>
</div>
</nav>
<div className="container-fluid justify-content-center" style={{width:'20.5em'}}>
<form className="pb-lg-5 pt-lg-4 px-2 pb-5 pt-4">




<div className="form-floating mb-3">
  <input type="text" className="form-control bg-dark text-white border-0" id="floatingInput" placeholder="Password" onChange={(e)=>{setschool(e.target.value)}}/>
  <label className="text-secondary fw-bold">School name</label>
</div>
<div className="form-floating mb-3">
  <input type="text" className="form-control bg-dark text-white border-0" id="floatingPassword" placeholder="Password" onChange={(e)=>{setprincipal(e.target.value)}}/>
  <label className="text-secondary fw-bold">Principal name</label>
</div>
<div className="form-floating">
  <textarea type="text" className="form-control bg-dark text-white border-0" id="floatingPassword" placeholder="Password" onChange={(e)=>{setaddress(e.target.value)}}/>
  <label className="text-secondary fw-bold">Address</label>
</div>
<div className="my-3">
  <label htmlFor="formFile" className="form-label text-white fw-bold">Upload the School&apos;s logo</label>
  <input className="form-control" type="file" id="formFile" onChange={(e)=>{setlogo(e.target.files[0])}}/>
</div>
<div className="my-3">
  <label htmlFor="formFile" className="form-label text-white fw-bold">Upload the Payment photo</label>
  <input className="form-control" type="file" id="formFile" onChange={(e)=>{setpayment(e.target.files[0])}}/>
</div>
<div className="form-floating">
  <input type="number" className="form-control bg-dark text-white border-0" id="floatingPassword" placeholder="Password" onChange={(e)=>{setcontact(e.target.value)}}/>
  <label className="text-secondary fw-bold">Contact Number</label>
</div>
<div className="d-grid my-3">
  <button className="btn btn-lg text-black fw-bold bg-warning border-0 py-2" type="button" onClick={sign}>submit</button>
</div>
        
        
</form>
</div>

</body>
</html>
  )
}

export default Sign