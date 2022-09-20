import { GetStaticProps } from "next";
import { PostData } from "@/types/postdata";
import { PostsApi } from "@/lib/api";
import { Button } from "@/components/button/index";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import {
    MobMenu,
    StudioOnMap,
    StudioQuiz,
    Thankyou,
    Trainer,
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
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className="">
            {openMenu && <MobMenu setOpenMenu={setOpenMenu} />}

            {!openMenu && (
                <div
                    className={`bg-center h-screen bg-no-repeat px-[23px] lg:px-[176px] pt-[37px] relative`}
                    style={{
                        backgroundImage: `url("/images/main-bg.jpg")`,
                        backgroundSize: `cover`,
                        backgroundPosition: `top center`,
                    }}
                >
                    <div className={`flex flex-col justify-between relative`}>
                        <div
                            className={`flex flex-wrap items-center justify-between mb-[260px] lg:mb-[230px]`}
                        >
                            <div
                                className={
                                    "min-w-[15%] lg:min-w-[15%] lg:h-[52px] lg:mb-[32px] lg:mr-[20px]"
                                }
                            >
                                <a
                                    href="#"
                                    className={`mx-auto lg:mx-0 lg:block`}
                                >
                                    <img
                                        className="w-[150px] h-[40px] lg:w-[195px] lg:h-[52px]"
                                        src="/images/main/logo.svg"
                                        alt=""
                                    />
                                </a>
                            </div>

                            <ul className="hidden lg:flex lg:mb-[32px] lg:justify-between text-white text-[20px] uppercase font-familyBold">
                                <li className="lg:mr-[40px]">
                                    <a href="#">Направления</a>
                                </li>
                                <li className="lg:mr-[40px]">
                                    <a href="#">Студии</a>
                                </li>
                                <li className="lg:mr-[40px]">
                                    <a href="#">Тренеры</a>
                                </li>
                                <li>
                                    <a href="#">Контакты</a>
                                </li>
                            </ul>
                            <Button
                                className={`hidden lg:block lg:mb-[32px] text-white border-2 border-white px-[48px] py-[20px] lg:text-[20px] lg:leading-[22px]`}
                            >
                                Присоединиться
                            </Button>
                        </div>
                        <button
                            className="absolute top-[3%] right-[5%]"
                            onClick={() => {
                                setOpenMenu(true);
                                console.log(openMenu);
                            }}
                        >
                            <img
                                className={`lg:hidden`}
                                src="/images/main/mob_menu.svg"
                                alt=""
                            />
                        </button>
                    </div>
                    <h1 className="absolute left-[10%] top-[58%] lg:left-[7%] lg:top-[45%] text-white uppercase text-h1 text-left">
                        Бесконечная <br />
                        энергия Фитнеса
                    </h1>
                    <img
                        src="/images/main/ellipse.svg"
                        className="absolute left-[21%] top-[52%] lg:left-[14%] lg:top-[35%] w-[200px] h-[200px] lg:w-[456px] lg:h-[456px] "
                        alt=""
                    />

                    <u className="hidden lg:flex flex-col list-none w-full items-end absolute right-[176px] bottom-[15%]">
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
            )}
            <Main />
            <Footer />
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
