import React, { useState } from 'react'
import firebase from '../../firebase/firebase'
import Head from 'next/head'

function Sign() {
    const [school, setschool] = useState()
    const [principal, setprincipal] = useState("")
    const [logo, setlogo] = useState("")
    const [payment, setpayment] = useState()
    const [email, setemail] = useState()
    const [code, setcode] = useState()
    const [contact, setcontact] = useState()
    const [address, setaddress] = useState()
    const db =firebase.firestore()
    
    const sign=async()=>{
        const storage =firebase.storage()
        await storage.ref("logo").child(school).child(logo.name).put(logo)
        await storage.ref("payment").child(school).child(payment.name).put(payment)
        const loglink =  await storage.ref("logo").child(school).child(logo.name).getDownloadURL()
        const paylink = await storage.ref("payment").child(school).child(payment.name).getDownloadURL()
        await db.collection("schools").doc(school).set(
            {
                "adress" : address,
                "approved":false,
                "contact":contact,
                "logo":loglink,
                "payment": paylink,
                "principal":principal,
                "schoolname":school,
                "email":email,
                "code":code


            }
        )
        setaddress("")
        setcode("")
        setcontact("")
        setemail("")
        setlogo("")
        setpayment("")
        setprincipal("")
        setschool("")
    }

  return (
   
    <html className="bg-black">
    <Head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>DSSC - School Portal</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"/>

</Head>
<body className="bg-black d-none d-lg-block">    
<nav className="navbar bg-black border-bottom">
<div className="container-fluid justify-content-center px-0">
  <h1 className="navbar-brand my-0 h1 fw-bolder text-white"><b>Dakshin Sahodaya</b></h1>      
  <span className="badge text-bg-light text-black mt-1">School Portal</span>
</div>
</nav>

<div className="container-fluid justify-content-center bg-black py-5" style={{width:'60em'}}>
<form class="row g-3">
  <div class="col-md-4">
  <div class="form-floating">
  <input type="text" class="form-control bg-dark text-white border-0" placeholder="Password" required  onChange={(e)=>{setprincipal(e.target.value)}} value={principal} />
  <label class="text-secondary fw-bold">Principal name</label>
</div>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
  <div class="form-floating">
  <input type="email" class="form-control bg-dark text-white border-0" placeholder="Password" required value={email} onChange={(e)=>{setemail(e.target.value)}}/>
  <label class="text-secondary fw-bold">E-mail address</label>
</div>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
  <div class="form-floating">
  <input type="tel" class="form-control bg-dark text-white border-0" placeholder="Password" value={contact} onChange={(e)=>{setcontact(e.target.value)}}/>
  <label class="text-secondary fw-bold">Contact number</label>
</div>
  </div>
  <div class="col-md-9">
  <div class="form-floating">
  <input type="text" class="form-control bg-dark text-white border-0" placeholder="Password" value={school} onChange={(e)=>{setschool(e.target.value)}}/>
  <label class="text-secondary fw-bold">School name</label>
</div>
  </div>
  <div class="col-md-3">
  <div class="form-floating">
  <input type="" class="form-control bg-dark text-white border-0" placeholder="Password" value={code} onChange={(e)=>{setcode(e.target.value)}}/>
  <label class="text-secondary fw-bold">Affiliation Code</label>
</div>
  </div>
  
  <div class="col-md-12">
  <div class="form-floating">
  <textarea type="text" class="form-control bg-dark text-white border-0" rows={10} cols={5} placeholder="Password" value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
  <label class="text-secondary fw-bold">Address</label>
</div>
<div class="col-md-12">
<div class="form-floating">
  <textarea class="form-control bg-dark text-white border-0" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
</div>
  </div>
  <div class="col-md-6">
  <div class="">
  <label for="formFile" class="form-label text-white fw-bold">Upload the School's logo</label>
  <input class="form-control bg-dark border-0 text-secondary fw-bold" type="file" id="formFile" onChange={(e)=>{setlogo(e.target.files[0])}}/>
</div>
</div>
<div class="col-md-6">
<div class="">
  <label for="formFile" class="form-label text-white fw-bold">Upload the Payment photo</label>
  <input class="form-control bg-dark border-0 text-secondary fw-bold" type="file" id="formFile"  onChange={(e)=>{setpayment(e.target.files[0])}}/>
</div>
</div>
<div class="d-grid mt-3">
  <button class="btn btn-lg text-black fw-bold bg-warning border-0 py-2" type="button" onClick={sign}>submit</button>
</div>
</form>
</div>









<div className="container-fluid bg-black border-top border-secondary ">
  <footer className="d-flex flex-wrap justify-content-between align-items-center bg-black py-2">
    <p className="col-md-4 mb-0 fw-bold text-secondary">© 2022 Dakshin Sahodaya</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
    <img src="/images/dakshilogo.jpg" className="img-fluid rounded-1" width="50" height="50" alt="..."/>
    </a>
    
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item"><a href="https://jeshtechnology.com/" className="nav-link px-2 fw-semibold text-secondary">Designed And Developed By
<b> Jesh Technology Pvt. Ltd.</b></a></li>
      </ul>
    </footer>
</div>  

</body>
</html>
  )
}

export default Sign
