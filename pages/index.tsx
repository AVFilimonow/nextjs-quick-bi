import { GetStaticProps } from "next";
import { PostData } from "@/types/postdata";
import { PostsListPage } from "@/views/posts";
import { PostsApi } from "@/lib/api";

export const getStaticProps: GetStaticProps = async (_context) => {
    // fetch list of posts
    const posts: PostData[] = await PostsApi.getPosts();
    return {
        props: {
            postDataList: posts,
        },
    };
};
export default PostsListPage;
