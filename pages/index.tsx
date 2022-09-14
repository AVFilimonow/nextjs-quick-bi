import { GetStaticProps } from "next";
import { PostData } from "@/types/postdata";
import { PostsApi } from "@/lib/api";
import { Button } from "@/components/button/index";
import dynamic from "next/dynamic";
import {
    StudioOnMap,
    StudioQuiz,
    Thankyou,
    TrainerQuiz,
    Training,
    TrainingQuiz,
} from "@/components";

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

const TrialForm = dynamic<any>(
    () => import("@/components/trial_form").then((mod) => mod.TrialForm),
    {
        ssr: false,
    },
);

const Home: React.FC = () => {
    return (
        <div className="">
            <div className="bg-white h-screen lg:hidden flex flex-col justify-between">
                <div className="pt-[64px] px-[16px] ml-auto">
                    <button>
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="px-[32px] pb-[20px] mt-auto flex flex-col justify-between h-[80%]">
                    <ul className="flex flex-col text-black text-h2 uppercase font-familyBold">
                        <li className="mb-[40px]">
                            <a href="#">Направления</a>
                        </li>
                        <li className="mb-[40px]">
                            <a href="#">Студии</a>
                        </li>
                        <li className="mb-[40px]">
                            <a href="#">Тренеры</a>
                        </li>
                        <li className="mb-[40px]">
                            <a href="#">Франшиза</a>
                        </li>
                        <li className="">
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                    <Button className={`w-[100%] bg-[#D08884] text-white`}>
                        Присоединиться
                    </Button>
                    <div className="flex w-[50%] mx-auto justify-between">
                        <a href="#">
                            <img
                                src="../../../images/modal/telegram_color.svg"
                                alt=""
                            />
                        </a>
                        <a href="#">
                            <img
                                src="../../../images/modal/instagram_color.svg"
                                alt=""
                            />
                        </a>
                        <a href="#">
                            <img
                                src="../../../images/modal/youtube_color.svg"
                                alt=""
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div
                className={`bg-center h-screen bg-no-repeat px-[23px] lg:px-[176px] pt-[37px] relative`}
                style={{
                    backgroundImage: `url("/images/main-bg.jpg")`,
                    backgroundSize: `cover`,
                    backgroundPosition: `top center`,
                }}
            >
                <div className={`flex flex-col justify-between`}>
                    <div
                        className={`flex items-center justify-between mb-[260px] lg:mb-[230px]`}
                    >
                        <a href="#" className={`mx-auto lg:mx-0`}>
                            <img
                                className="w-[150px] h-[40px] lg:w-[195px] lg:h-[52px]"
                                src="/images/main/logo.svg"
                                alt=""
                            />
                        </a>
                        <ul className="hidden lg:flex text-white text-p4 uppercase font-familyBold">
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
                            className={`hidden lg:block text-white border-2 border-white px-[60px]`}
                        >
                            Присоединиться
                        </Button>
                        <button>
                            <img
                                className={`lg:hidden`}
                                src="/images/main/mob_menu.svg"
                                alt=""
                            />
                        </button>
                    </div>
                    <h1 className="absolute left-[10%] top-[58%] lg:left-[176px] lg:top-[425px] text-white uppercase text-h1 text-left">
                        Бесконечная <br />
                        энергия Фитнеса
                    </h1>
                </div>
                <img
                    src="/images/main/ellipse.svg"
                    className="w-[200px] h-[200px] lg:w-[456px] lg:h-[456px] absolute left-[21%] top-[52%] lg:left-[17%] lg:top-[35%]"
                    alt=""
                />

                <u className="hidden lg:flex flex-col list-none w-full items-end absolute right-[180px] bottom-[150px]">
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
            {/* <Main />
            <Footer />*/}
            <StudioOnMap />
        </div>
    );
};

// export const getStaticProps: GetStaticProps = async (_context) => {
//     // fetch list of posts
//     const posts: PostData[] = await PostsApi.getPosts();
//     return {
//         props: {
//             postDataList: posts,
//         },
//     };
// };
export default Home;
