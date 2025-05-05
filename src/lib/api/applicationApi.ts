import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const candidateAPI = createApi({
  reducerPath: "candidateAPI",
  tagTypes: ["candidate"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllCandidate: builder.query({
      query: (params) => {
        return {
          url: "/register",
          method: "GET",
          params,
        };
      },
      providesTags: ["candidate"],
    }),
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
export const { useRegisterCandidateMutation, useGetAllCandidateQuery } =
  candidateAPI;
