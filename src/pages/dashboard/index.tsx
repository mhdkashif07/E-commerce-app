import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth-context";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const authContext = useContext(AuthContext);
  
  useEffect(() => {
    // checks if the user is authenticated
    console.log(authContext.isUserAuthenticated());
    authContext.isUserAuthenticated()
    ? router.push("/dashboard")
    : router.push("/login");
  }, []);
    useEffect(() => {
        router.push("/dashboard/cart")
    },[])
    return (
        <div className="containe">
            <div className="main__section">
                <div className="layout">
                    <div className="dashboard__sidebar">
                        <ul>
                            <li><Link href="/dashboard/cart"><a href="">Cart</a></Link></li>
                            <li><Link href="/dashboard/profile"><a href="">Profile</a></Link></li>
                        </ul>
                    </div>
                    <div className="layout__content--main">
                        {children}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Layout;