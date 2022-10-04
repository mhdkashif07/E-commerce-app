import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="containe">
            <div className="main__section">
                <div className="layout">
                    <div className="dashboard__sidebar">
                        <ul>
                            <li><Link href="/cart"><a href="">Page 1</a></Link></li>
                            <li><Link href="/cart"><a href="">Page 2</a></Link></li>
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