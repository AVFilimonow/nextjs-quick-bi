import { GetStaticProps } from "next";
import { PostData } from "@/types/postdata";
import { PostsApi } from "@/lib/api";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { MobMenu, TrialForm, Button } from "@/components";

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
    const [openMenu, setOpenMenu] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            {openModal && <TrialForm setOpenModal={setOpenModal} />}
            {!openModal && (
                <div className="">
                    {openMenu && (
                        <MobMenu
                            setOpenMenu={setOpenMenu}
                            setOpenModal={setOpenModal}
                        />
                    )}

                    {!openMenu && (
                        <div className={"lg:relative"}>
                            <div
                                className={
                                    "absolute top-[32px] w-full h-full z-20 px-[16px] lg:px-[176px]"
                                }
                            >
                                <div
                                    className={`flex flex-col justify-between relative z-30 left-[0px] top-[0px]`}
                                >
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
                                            <li className="lg:mr-[40px] hover:underline">
                                                <a href="#">Направления</a>
                                            </li>
                                            <li className="lg:mr-[40px] hover:underline">
                                                <a href="#">Студии</a>
                                            </li>
                                            <li className="lg:mr-[40px] hover:underline">
                                                <a href="#">Тренеры</a>
                                            </li>
                                            <li className="hover:underline">
                                                <a href="#">Контакты</a>
                                            </li>
                                        </ul>
                                        <Button
                                            onClick={() => {
                                                setOpenModal(true);
                                            }}
                                            className={`hidden lg:block lg:mb-[32px] text-white border-2 border-white px-[48px] py-[20px] lg:text-[20px] lg:leading-[22px] hover:bg-[#F5F5F5] hover:text-[#292929] hover:border-[#292929]`}
                                        >
                                            Присоединиться
                                        </Button>
                                    </div>
                                    <button
                                        className="absolute top-[3%] right-[5%]"
                                        onClick={() => {
                                            setOpenMenu(true);
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
                                            <img
                                                src="/images/main/telegram.png"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li className="mb-[30px]">
                                        <a href="#">
                                            <img
                                                src="/images/main/instagram.png"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="/images/main/youtube.png"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                </u>
                            </div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Navigation, A11y, Autoplay]}
                                className="mySwiper lg:absolute lg:top-[0px] lg:left-[0px] lg:w-full lg:h-full z-10"
                            >
                                <SwiperSlide>
                                    <div
                                        className="lg:bg-[url('/images/main-bg_1.jpg')] bg-[url('/images/mob-bg_1.jpg')] bg-no-repeat bg-cover bg-top-center h-screen
"
                                    ></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className="lg:bg-[url('/images/main-bg_2.jpg')] bg-[url('/images/mob-bg_2.jpg')] bg-no-repeat bg-cover bg-top-center h-screen
"
                                    ></div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div
                                        className="lg:bg-[url('/images/main-bg_3.jpg')] bg-[url('/images/mob-bg_3.jpg')] bg-no-repeat bg-cover bg-top-center h-screen
"
                                    ></div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    )}
                    <Main setOpenModal={setOpenModal} />
                    <Footer setOpenModal={setOpenModal} />
                </div>
            )}
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
