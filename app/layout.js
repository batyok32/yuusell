import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import { LayoutProvider } from "./layout_provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Yuusell online marketplace",
    description: "Cool ecommerce web app for shopping",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <BootstrapClient />

                {/* <Header /> */}
                <LayoutProvider>
                    <main>{children}</main>
                </LayoutProvider>
                {/* <Footer /> */}
            </body>
        </html>
    );
}
