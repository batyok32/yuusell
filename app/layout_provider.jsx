"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import MobileBottom from "@/components/MobileBottom/MobileBottom";

export const LayoutProvider = ({ children }) => {
    const pathname = usePathname();
    console.log("PATHNAME", pathname);
    return (
        <>
            {!["/auth", "/checkout"].some((prefix) =>
                pathname.startsWith(prefix)
            ) && (
                <div className="d-none d-sm-block">
                    <Header />
                </div>
            )}
            {!["/auth", "/checkout"].some((prefix) =>
                pathname.startsWith(prefix)
            ) && (
                <div className="d-sm-none">
                    <MobileHeader />
                </div>
            )}

            {children}
            <div className="d-sm-none">
                <MobileBottom />
            </div>
            {!["/auth", "/checkout"].some((prefix) =>
                pathname.startsWith(prefix)
            ) && (
                <div className="d-none d-sm-block">
                    <Footer />
                </div>
            )}
        </>
    );
};
