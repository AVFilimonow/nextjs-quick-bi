import { GetStaticProps } from "next";
import { PostData } from "@/types/postdata";
import { PostsApi } from "@/lib/api";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { MobMenu, TrialForm, Button, Footer } from "@/components";
import { MainNextButton, HeaderTransparent } from "@/components";

import "swiper/css";
import "swiper/css/pagination";

const Main = dynamic<any>(
    () => import("@/components/main").then((mod) => mod.Main),
    {
        ssr: false,
    },
);

const Home: React.FC = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const nextBtn = useRef<HTMLButtonElement>(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    };
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
                                    <HeaderTransparent
                                        setOpenModal={setOpenModal}
                                    />
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
                                <div
                                    className={`hidden lg:block absolute z-[10] left-[32%] top-[68%] text-primary hidden sm:block`}
                                >
                                    <MainNextButton
                                        className={`ml-5 rounded-full p-3 border border-white bg-white`}
                                        ref={nextBtn}
                                    />
                                </div>
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
                                navigation={{
                                    nextEl: nextBtn.current,
                                }}
                                onBeforeInit={(swiper) => {
                                    if (
                                        swiper?.params?.navigation &&
                                        typeof swiper?.params?.navigation !=
                                            "boolean"
                                    ) {
                                        swiper.params.navigation.nextEl =
                                            nextBtn.current;
                                    }
                                }}
                                slidesPerView={1}
                                spaceBetween={0}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={pagination}
                                loop={true}
                                modules={[
                                    Navigation,
                                    A11y,
                                    Autoplay,
                                    Pagination,
                                ]}
                                className="lg:absolute lg:top-[0px] lg:left-[0px] lg:w-full lg:h-full z-10"
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
