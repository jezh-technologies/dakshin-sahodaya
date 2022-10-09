import Router from 'next/router'
import React from 'react'
import Panel from '../components/panel'
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from '../../firebase/firebase'
import Error from '../components/error'
import Head from 'next/head'


function Admin() {
  const[user]=useAuthState(auth)
    
   
    
    
  return (
    <html>
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
      </Head>
      <body className="bg-black" >
        {user?((user.email==="admin@dakshinsahodaya.com")?<Panel/>:<Error/>):<Error/>}
      </body>
    </html>
    
    
  )
}

export default Admin