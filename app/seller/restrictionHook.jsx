"use client";

import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

export const RestrictionSellerLayout = ({ children }) => {
    const router = useRouter();
    const { isAuthenticated, user } = useAppSelector((state) => state.auth);

    // If not user.is_seller
    // If not user.is_verified_seller

    if (
        isAuthenticated &&
        user &&
        user?.is_seller === true &&
        user?.is_verified_seller == true
    ) {
        return <>{children}</>;
    } else {
        toast.error(`You dont have access seller page`, { className: "fs-14" });
        router.push("/");
    }
};
