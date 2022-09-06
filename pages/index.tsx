import { GetStaticProps } from "next";
import { PostData } from "@/types/postdata";
import { PostsApi } from "@/lib/api";
import { Button } from "@/components/button/index";
import dynamic from "next/dynamic";

const Main = dynamic<any>(
    () => import("@/components/main").then((mod) => mod.Main),
    {
        ssr: false,
    },
);

const Footer = dynamic<any>(
    () => import("@/components/footer").then((mod) => mod.Footer),
    {
        ssr: false,
    },
);

const Home: React.FC = () => {
    return (
        <div className="">
            <div
                className={`bg-center h-screen bg-no-repeat px-[176px] pt-[37px] relative`}
                style={{
                    backgroundImage: `url("/images/main-bg.jpg")`,
                    backgroundPosition: `contain`,
                }}
            >
                <div className={`flex flex-col justify-between`}>
                    <div
                        className={`flex items-center justify-between mb-[230px]`}
                    >
                        <a href="#">
                            <img src="/images/main/logo.svg" alt="" />
                        </a>
                        <ul className="text-white text-p4 uppercase font-familyBold flex">
                            <li className="mr-[40px]">
                                <a href="#">Направления</a>
                            </li>
                            <li className="mr-[40px]">
                                <a href="#">Студии</a>
                            </li>
                            <li className="mr-[40px]">
                                <a href="#">Тренеры</a>
                            </li>
                            <li className="mr-[40px]">
                                <a href="#">Франшиза</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                        <Button
                            className={`text-white border-2 border-white px-[60px]`}
                        >
                            Присоединиться
                        </Button>
                    </div>
                    <h1 className="block text-white uppercase text-h1 text-left">
                        Бесконечная <br />
                        энергия Фитнеса
                    </h1>
                </div>
                <img
                    src="/images/main/ellipse.svg"
                    className="absolute left-[17%] top-[25%]"
                    alt=""
                />

                <u className="flex flex-col list-none w-full items-end absolute right-[180px] bottom-[150px]">
                    <li className="mb-[30px]">
                        <a href="#">
                            <img src="/images/main/telegram.png" alt="" />
                        </a>
                    </li>
                    <li className="mb-[30px]">
                        <a href="#">
                            <img src="/images/main/instagram.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/main/youtube.png" alt="" />
                        </a>
                    </li>
                </u>
            </div>
            <Main />
            <Footer />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async (_context) => {
    // fetch list of posts
    const posts: PostData[] = await PostsApi.getPosts();
    return {
        props: {
            postDataList: posts,
        },
    };
};
export default Home;
