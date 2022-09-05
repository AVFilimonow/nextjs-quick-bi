import { NextPage } from "next";
import { PostDataProps } from "@/types/postdata";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const PostPage: NextPage<PostDataProps> = ({ postData }: PostDataProps) => {
    return (
        <main>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <h1>{postData.title}</h1>

            <p>{postData.body}</p>

            <Link href="/">
                <a>Go back to home</a>
            </Link>
        </main>
    );
};
export { PostPage };
