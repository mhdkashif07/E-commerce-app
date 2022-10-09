import { useRouter } from "next/router";
import { useEffect } from "react";
import { SingupForm } from "../../components";
import { useAuth } from "../../utils/utils";

const Index = () => {
    const auth = useAuth();
    const router = useRouter()

    //check if the user is already logged in we direct to the home page
    useEffect(() => {
        if(router.pathname === "/signup" && !auth.isUserAuthenticated()){
        router.push("/signup")
    }
    else{
        router.push("/")
    }
    }, [])
    
    return (
        <div className="main__section" data-aos="zoom-in" data-aos-duration="400">
            <SingupForm />
        </div>
    );
}

export default Index;