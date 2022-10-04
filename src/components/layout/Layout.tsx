import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="layout">
               <ul>
                <li><Link href="/page1"><a href="">Page 1</a></Link></li>
                <li><Link href="/page2"><a href="">Page 2</a></Link></li>
               </ul>
            </div>
            {children}
        </div>
    );
}

export default Layout;