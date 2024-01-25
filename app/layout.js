import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import { LayoutProvider } from "./layout_provider";
import ReduxProvider from "@/redux/provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthValidateLayout } from "./authValidateLayout";

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

                <ReduxProvider>
                    <AuthValidateLayout>
                        <LayoutProvider>
                            <ToastContainer />

                            <main>{children}</main>
                        </LayoutProvider>
                    </AuthValidateLayout>
                </ReduxProvider>
            </body>
        </html>
    );
}
