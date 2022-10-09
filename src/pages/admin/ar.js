import React,{useState} from 'react'
import firebase from '../../../firebase/firebase'
import Head from 'next/head'

function AcademicRepository() {
  const [img, setimg] = useState()
  const [pdf, setpdf] = useState()
  const [title, settitle] = useState()


  const upload=async()=>{
       const str = firebase.storage()
       const db = firebase.firestore()
       await str.ref("academic_repository").child(title).child(pdf.name).put(pdf)
       await str.ref("academic_repository").child(title).child(img.name).put(img)
       const l1 =       await str.ref("academic_repository").child(title).child(pdf.name).getDownloadURL()
       const l2 =await str.ref("academic_repository").child(title).child(img.name).getDownloadURL()
       db.collection("academic_repository").doc().set({
        "title":title,
        "image":l2,
        "pdf":l1
       })
       
  }
  return (

<html>
<Head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>ACADEMIC REPOSITORY</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>

</Head>
<body className="bg-black">    
<nav className="navbar bg-black border-bottom border-top">
<div className="container-fluid justify-content-center px-0">
<h1 className="navbar-brand my-0 h1 fw-bolder text-white"><b>ACADEMIC REPOSITORY</b></h1>      
</div>
</nav>
<div className="container-fluid justify-content-center" style={{width:'20.25em'}}>
<form className="pb-lg-5 pt-lg-4 px-2 pb-5 pt-4">
<div className="form-floating">
<input type="text" className="form-control bg-dark text-white border-0" maxLength="30" placeholder="Title of the Repository" onChange={(e)=>{
        settitle(e.target.value)
      }}/>
<label className="text-secondary fw-bold">Title of the Repository</label>
</div>
<div className="my-2">
<label className="form-label text-white fw-bold">Image for the Repository</label>
<input className="form-control" type="file" accept=".png, .jpg, .jpeg" id="formFile" onChange={(e)=>{
        setimg(e.target.files[0])
      }} />
</div>
<div className="my-2">
<label className="form-label text-white fw-bold">File for the Repository</label>
<input className="form-control" type="file" accept=".pdf" id="formFile" onChange={(e)=>{
        setpdf(e.target.files[0])
      }} />
</div>

<div className="d-grid mt-3">
<button type="button" className="btn btn-lg text-black fw-bold bg-warning border-0 py-2" onClick={upload}>Upload</button>
</div>
</form>
</div>

</body>
</html>
  )
}

export default AcademicRepository