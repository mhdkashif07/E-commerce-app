import Link from "next/link";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    );
}

export default PrimaryLayout;