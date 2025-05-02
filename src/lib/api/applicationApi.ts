import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const candidateAPI = createApi({
  reducerPath: "candidateAPI",
  tagTypes: ["candidate"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    registerCandidate: builder.mutation({
      query: (credentials) => {
        return {
          url: "/register",
          method: "POST",
          body: credentials,
        };
      },
      invalidatesTags: ["candidate"],
    }),
  }),
});
export const { useRegisterCandidateMutation } = candidateAPI;
