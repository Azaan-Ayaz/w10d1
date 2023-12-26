import React from 'react'
import Layout from './../Components/Layout/Layout';
import { useAuth } from '../context/auth';



const Home = () => {
const [ auth, setAuth ] = useAuth()
  return (
    <>
    <Layout>
    <div>Hey Its A Home Page</div>    
    <pre>{JSON.stringify(auth, null, 404)}</pre>
    </Layout>
    </>
  )
}

export default Home
