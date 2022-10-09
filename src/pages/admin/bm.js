import React,{useState} from 'react'
import firebase from '../../../firebase/firebase'
import Head from 'next/head'
function BoardMembers() {
  const [img, setimg] = useState()
  const [name, setname] = useState()
  const [posting, setposting] = useState()
  const post=async()=>{
    const db = firebase.firestore()
    const str = firebase.storage()
    await str.ref("board_members").child(img.name).put(img)
    db.collection("board_members").doc(name).set({
      "name": name,
      "posting":posting,
      "photo": await str.ref("board_members").child(img.name).getDownloadURL()

    })

  }
  return (
     <html>
     <Head>
     <meta charset="utf-8"/>
     <meta name="viewport" content="width=device-width, initial-scale=1"/>
     <title>Board Members</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous"/>

</Head>
<body className="bg-black">    
<nav className="navbar bg-black border-bottom border-top">
 <div className="container-fluid justify-content-center px-0">
   <h1 className="navbar-brand my-0 h1 fw-bolder text-white"><b>BOARD MEMBERS</b></h1>      
 </div>
</nav>
 <div className="container-fluid justify-content-center" style={{width:'20.25em'}}>
 <form className="pb-lg-5 pt-lg-4 px-2 pb-5 pt-4">
   <div className="form-floating">
     <input type="text" className="form-control bg-dark text-white border-0" maxLength="30" placeholder="Name" onChange={(e)=>{
      setname(e.target.value)
    }}/>
     <label className="text-secondary fw-bold">Name of the Board Member</label>
   </div>
   <div className="form-floating mt-3">
     <input type="text" className="form-control bg-dark text-white border-0" maxLength="30" placeholder="Posting" onChange={(e)=>{
      setposting(e.target.value)
    }}/>
     <label className="text-secondary fw-bold">Posting of the Board Member</label>
   </div>
   <div className="my-2">
  <label className="form-label text-white fw-bold">Image of the Board Member</label>
  <input className="form-control" type="file" accept=".png, .jpg, .jpeg" id="formFile" onChange={(e)=>{
      setimg(e.target.files[0])
    }}/>
</div>

<div className="d-grid mt-3">
<button type="button" className="btn btn-lg text-black fw-bold bg-warning border-0 py-2" onClick={post}>Post</button>
</div>
</form>
</div>

</body>
 </html>
  )
}

export default BoardMembers