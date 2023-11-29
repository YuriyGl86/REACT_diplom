import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const fetchApiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:'https://www.omdbapi.com'}),
    endpoints: (builder) => ({
        getFilm: builder.query({
            query: (filmID) => {
                const i = filmID
                const apikey = '64405bd2'
                return {
                    url:'',
                    params: {apikey,i}
                }
            }
        })
    })
})

export const {useGetFilmQuery} = fetchApiSlice