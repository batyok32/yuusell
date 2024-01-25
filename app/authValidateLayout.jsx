"use client";

import LoadingScreen from "@/components/Loading/LoadingScreen";
import {
    useRefreshTokenMutation,
    useRetrieveUserQuery,
    useVerifyMutation,
} from "@/redux/features/authAPISlice";
import { finishInitialLoad, logout, setAuth } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cookie from "js-cookie";
import { getMe } from "@/redux/actions/authActions";

export const AuthValidateLayout = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();
    const [verify] = useVerifyMutation();
    const [refreshToken] = useRefreshTokenMutation();
    const { isAuthenticated, user } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const [canShowPage, setCanShowPage] = useState(false);

    useEffect(() => {
        if (isAuthenticated && !user) {
            dispatch(getMe());
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (!isAuthenticated) {
            verify()
                .unwrap()
                .then((res) => {
                    dispatch(setAuth());
                    dispatch(getMe());
                    console.log("LOGGED IN EKENI");
                })
                .catch(async (error) => {
                    console.log("LOG IN DAL EKENI", error);
                    try {
                        const refreshResult = await refreshToken().unwrap();
                        dispatch(setAuth()); // Update auth state with new tokens
                        console.log("Token refreshed successfully");
                    } catch (refreshError) {
                        console.log("Token refresh failed", refreshError);
                        dispatch(logout()); // Or handle the failure appropriately
                    }
                })
                .finally(() => {
                    dispatch(finishInitialLoad());
                    setCanShowPage(true);
                });
        } else {
            setCanShowPage(true);
        }
    }, []);

    if (canShowPage) {
        if (
            !isAuthenticated &&
            ["/account", "/business/register/"].some((prefix) =>
                pathname.startsWith(prefix)
            )
        ) {
            // Redirect to login page
            toast.error(`Login required`, { className: "fs-14" });
            return router.push("/auth/login");
        } else if (
            isAuthenticated &&
            ["/auth"].some((prefix) => pathname.startsWith(prefix))
        ) {
            // Redirect to login page
            const afterLogin = Cookie.get("after_login_page");
            if (afterLogin) {
                console.log("AFTER LOGIN", afterLogin);

                router.push(afterLogin);
                Cookie.remove("after_login_page");
                return;
            } else {
                toast.error(`Already logged in`, { className: "fs-14" });
                return router.push("/");
            }
        }
        return <>{children}</>;
    } else {
        return (
            <>
                <LoadingScreen />
                {children}
            </>
        );
    }
};
