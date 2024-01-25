"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import MobileBottom from "@/components/MobileBottom/MobileBottom";
// import { Head } from "next/document";

export const LayoutProvider = ({ children }) => {
    const pathname = usePathname();
    // console.log("PATHNAME", pathname);
    return (
        <>
            {!["/auth", "/checkout", "/seller", "/business"].some((prefix) =>
                pathname.startsWith(prefix)
            ) && (
                <div className="d-none d-sm-block">
                    <Header />
                </div>
            )}
            {!["/auth", "/checkout", "/seller", "/business"].some((prefix) =>
                pathname.startsWith(prefix)
            ) && (
                <div className="d-sm-none">
                    <MobileHeader />
                </div>
            )}

            {children}
            {!["/seller", "/business"].some((prefix) =>
                pathname.startsWith(prefix)
            ) && (
                <div className="d-sm-none mt-5 pt-5">
                    <MobileBottom />
                </div>
            )}
            {!["/auth", "/checkout", "/seller", "/business"].some((prefix) =>
                pathname.startsWith(prefix)
            ) && (
                <div className="d-none d-sm-block">
                    <Footer />
                </div>
            )}
        </>
    );
};
