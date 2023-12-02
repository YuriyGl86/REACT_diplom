import { createApi, defaultSerializeQueryArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const catalogFetchAPI = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_FETCH_API}),
    reducerPath: "api",
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `/categories`
        }),
        getHits: builder.query({
            query: () => `/top-sales`
        }),
        getCatalogItems: builder.query({
            query: ({selected, q, offset}) =>  {
                return {
                    url:'/items',
                    params: {
                        ...(selected !=="Все" && {categoryId:selected}),
                        ...(q && {q}),
                        ...(offset && {offset})
                    }
                }
            },        
            keepUnusedDataFor: 1,
            serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName })=>{ // Для себя: исключаем из ключа кэширования offset 
                const {selected, q} = queryArgs
                return defaultSerializeQueryArgs({
                    endpointName,
                    queryArgs: { selected, q },
                    endpointDefinition
                })
            },
            merge: (currentCache, newItems) => {  // Для себя: данные нового запроса пушим к данным прошлых
                currentCache.push(...newItems)
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
        }),
    })
})

export const {useGetCategoriesQuery} = catalogFetchAPI
export const {useGetHitsQuery} = catalogFetchAPI
export const {useGetCatalogItemsQuery} = catalogFetchAPI