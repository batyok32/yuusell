import { setUserData } from "../features/authSlice";
import ApiManager from "../globalaxios";

export const getMe = () => async (dispatch) => {
    try {
        const res = await ApiManager.get("/api/users/me/");
        dispatch(setUserData(res.data));
        return res.data;
    } catch (error) {
        // dispatch(gotError(error.message));
    }
};

export const submitSellerData = (data) => async (dispatch) => {
    try {
        console.log("BODY", data);
        const res = await ApiManager.post("/api/create_seller_profile/", data, {
            headers: {
                "Content-Type": "multipart/form-data;",
                Accept: "application/json",
            },
            withCredentials: true,
            formData: true,
        });
        console.log("REES", res);
        return res;
    } catch (error) {
        console.log("ERROR", error);
        return error.response;
    }
};

export const checkStoreName = (storeName) => async (dispatch) => {
    try {
        console.log("CHECKING ", storeName);
        const res = await ApiManager.get(
            `/api/check_store_name/?store_name=${storeName}`
        );
        return res.data;
    } catch (error) {
        console.log("ERROR");
        return error;
    }
};

export const checkPhoneNumber = (phoneNumber) => async (dispatch) => {
    try {
        const res = await ApiManager.get(
            `/api/check_phone_number/?phone_number=${phoneNumber}`
        );
        return res.data;
    } catch (error) {
        console.log("ERROR");
        return error;
    }
};
