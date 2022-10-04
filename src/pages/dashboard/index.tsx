import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    useEffect(() => {
        router.push("/cart")
    },[])
    return (
        <div className="containe">
            <div className="main__section">
                <div className="layout">
                    <div className="dashboard__sidebar">
                        <ul>
                            <li><Link href="/cart"><a href="">Cart</a></Link></li>
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