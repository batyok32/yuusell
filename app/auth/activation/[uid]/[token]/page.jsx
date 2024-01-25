"use client";

import { useActivationMutation } from "@/redux/features/authAPISlice";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Activation() {
    const [activation] = useActivationMutation();
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        const { uid, token } = params;
        // console.log("UID", uid, "token", token);

        if (uid && token) {
            activation({ uid, token })
                .unwrap()
                .then(() => {
                    toast.success("Account activated", { className: "fs-14" });
                })
                .catch((error) => {
                    const firstKey = Object.keys(error.data)[0]; // Get the first key
                    const firstMessage = error.data[firstKey][0]; // Get the first message from the array under that key

                    toast.error(`${firstMessage}`, { className: "fs-14" });
                    // console.log("ERROR", error);
                })
                .finally(() => {
                    router.push("/auth/login");
                });
        }
    }, [params]);

    return (
        <div className="text-center py-5">
            <div className="h3">Activating your account...</div>
            <div class="spinner-border text-main my-3" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div>Thank you for your patience.</div>
        </div>
    );
}
