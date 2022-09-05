import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { PostData, PostDataProps } from "@/types/postdata";
import { PostsApi } from "@/lib/api";
import { PostPage } from "@/views/post";

export interface Params extends ParsedUrlQuery {
    id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const postList: PostData[] = await PostsApi.getPosts();
    return {
        paths: postList.map((post) => {
            return {
                params: {
                    id: post.id.toString(),
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<PostDataProps, Params> = async (
    context,
) => {
    const { id } = context.params! as Params;
    const postData: PostData = await PostsApi.getPost(id);
    return {
        props: {
            postData,
        },
    };
};

export default PostPage;
