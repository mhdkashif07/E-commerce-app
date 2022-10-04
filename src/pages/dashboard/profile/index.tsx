import React, { ReactElement } from 'react'
import Layout from '..'


const Profile = () => {
  return (
    <div className='container'>
        <div className="main__section">
        <h1>Profile Page</h1>
        </div>
    </div>
  )
}

Profile.getLayout = function getLayout(page: ReactElement){
    return  <Layout>{page}</Layout>
  }
  

export default Profile