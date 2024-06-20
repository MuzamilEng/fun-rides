import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const API_KEY = import.meta.env.VITE_APP_API_KEY;
// console.log(API_KEY);
//  https://infra.chequelivros.net/bookstores

export const storeApi = createApi({
    reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_KEY}` }),
    endpoints: (builder) => ({
        getAllStore: builder.query({
            query: () => `/store`,
        }),
    })
})

export const {
    useGetAllStoreQuery,
} = storeApi