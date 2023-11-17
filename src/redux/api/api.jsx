import {createApi} from "@reduxjs/toolkit/query/react";
import { axios_instance } from "../../axios/instance";

export const api = createApi({
    reducerPath:"api",
    baseQuery: async(args, api, extraOptions)=>{
        // args -> includes the query parameters, request body, and other 
        //         information required for the API request.

        // api -> includes information about the base URL endpoints and 
        //        other configurations.

        // extraOptions -> it is an object that includes additional options 
        //                 passed to the baseQuery function.
        //              -> it provides extra information or configurations.
        const { endpoint, query, body } = args;
        try{
            const response = await axios_instance({
                url: `${endpoint}`,
                method: (extraOptions && extraOptions.method)||'GET',
                // parameter: defines the behaviour of query.
                params: query,
                data: body
            });
            return {data: response.data};
        } catch(error){
            console.log(error);
            throw error;
        }
    },

    tagTypes: ["Post"],

    endpoints: (builder)=>({
        getAllData: builder.query({
            query: ()=>({
                endpoint: "/posts"
            }),
            providesTags: ["Posts"]
        }),
        postData: builder.mutation({
            query: (post)=> ({
                endpoint: "/posts",
                body: post
            }),
            invalidatesTags: ["Posts"],
            extraOptions:{
                method: "POST"
            }
        }),
        updateData: builder.mutation({
            query:(post)=> ({
                endpoint: `/posts/${post.id}`,
                body: post.posts
            }),
            invalidatesTags: ["Posts"],
            extraOptions:{
                method: "PATCH"
            }
        }),
        deleteData: builder.mutation({
            query: (id)=>({
               endpoint: `/posts/${id}` 
            }),
            invalidatesTags: ["Posts"],
            extraOptions:{
                method: "DELETE",
            }
        })
    })
});

export const { 
    useGetAllDataQuery, 
    usePostDataMutation, 
    useUpdateDataMutation,
    useDeleteDataMutation
} =  api;