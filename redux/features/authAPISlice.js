import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        retrieveUser: builder.query({
            query: () => "/users/me/",
        }),
        socialAuthenticate: builder.mutation({
            query: ({ provider, state, code }) => ({
                url: `/o/${provider}/?state=${encodeURIComponent(
                    state
                )}&code=${encodeURIComponent(code)}`,
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }),
        }),
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/jwt/create/",
                method: "POST",
                body: { email, password },
            }),
        }),
        register: builder.mutation({
            query: ({
                first_name,
                last_name,
                email,
                password,
                re_password,
            }) => ({
                url: "/users/",
                method: "POST",
                body: { first_name, last_name, email, password, re_password },
            }),
        }),
        verify: builder.mutation({
            query: () => ({
                url: "/jwt/verify/",
                method: "POST",
            }),
        }),
        editProfile: builder.mutation({
            query: ({ first_name, last_name }) => ({
                url: "/users/me/",
                method: "PATCH",
                body: { first_name, last_name },
            }),
        }),
        refreshToken: builder.mutation({
            query: () => ({
                url: "/jwt/refresh/",
                method: "POST",
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/logout/",
                method: "POST",
            }),
        }),
        activation: builder.mutation({
            query: ({ uid, token }) => ({
                url: "/users/activation/",
                method: "POST",
                body: { uid, token },
            }),
        }),
        resetPassword: builder.mutation({
            query: (email) => ({
                url: "/users/reset_password/",
                method: "POST",
                body: { email },
            }),
        }),
        resetPasswordConfirm: builder.mutation({
            query: ({ uid, token, new_password, re_new_password }) => ({
                url: "/users/reset_password_confirm/",
                method: "POST",
                body: { uid, token, new_password, re_new_password },
            }),
        }),
        sendVerificationSms: builder.mutation({
            query: ({ phone_number }) => ({
                url: "/send_sms/",
                method: "POST",
                body: { phone_number },
            }),
        }),
        verifySmsCode: builder.mutation({
            query: ({ phone_number, verification_code }) => ({
                url: "/verify_sms/",
                method: "POST",
                body: { phone_number, verification_code },
            }),
        }),
        submitVenderData: builder.mutation({
            query: (data) => ({
                url: "/create_seller_profile/",
                method: "POST",
                body: data,
                formData: true,
                headers: {
                    "Content-Type": undefined,
                },
            }),
        }),
    }),
});

export const {
    useRetrieveUserQuery,
    useSocialAuthenticateMutation,
    useLoginMutation,
    useRegisterMutation,
    useVerifyMutation,
    useLogoutMutation,
    useActivationMutation,
    useResetPasswordMutation,
    useResetPasswordConfirmMutation,
    useRefreshTokenMutation,
    useEditProfileMutation,
    useSendVerificationSmsMutation,
    useVerifySmsCodeMutation,
    useSubmitVenderDataMutation,
} = authApiSlice;
