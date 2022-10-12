import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { ReactElement, useEffect, useState } from 'react'
import Layout from '..'
import { firestoreDb } from '../../../utils/init-firebase';
import { getFromSessionStorage } from '../../../utils/utils';

interface Profile {
  emailVerified: boolean;
  userCountry: string;
  userEmail: string;
  userName: string;
}

const Profile = () => {
  const [profileData, setProfileData] = useState<Profile | null>(null)
  console.log(profileData);
  

  
  useEffect(() => {
    const userId = getFromSessionStorage("userUID") as string
  
// setUserId(userUid)
    
    
    const fetchData = async () => {
      //get specific doc of user profile
      const docRef = doc(firestoreDb, "profiles", userId);
      const docSnap = await getDoc(docRef);
      //const data = docSnap.data()
      setProfileData(docSnap.data() as Profile)
    }
    fetchData()

  }, [])

  return (
    <div className='container'>
      <div className="main__section">
        <h1>Profile Page</h1>
       <h3>UserName: {profileData?.userName}</h3>
       <h3>User Email: {profileData?.userEmail}</h3>
       <h3>User Country: {profileData?.userCountry}</h3>
       <h3>Email Verification: { profileData?.emailVerified === false ? "Not Verified" : "Verified"}</h3>
      </div>
    </div>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}


export default Profile