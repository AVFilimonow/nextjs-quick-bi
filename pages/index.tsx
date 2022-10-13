import { GetStaticProps } from "next";
import { PostData } from "@/types/postdata";
import { PostsApi } from "@/lib/api";
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
    MobMenu,
    TrialForm,
    Button,
    Footer,
    MainNextButton,
    Header,
} from "@/components";

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
    SwiperCore.use([Pagination]);
    const pagination = {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
            return '<div class="' + className + '">' + "</div>";
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
                            <div className={"absolute w-full h-full z-20"}>
                                <div
                                    className={`flex flex-col justify-between relative z-30`}
                                >
                                    <Header
                                        logo={"/images/main/logo.svg"}
                                        text={"white"}
                                        border={"white"}
                                        text_hover={"[#292929]"}
                                        bg_hover={"white"}
                                        border_hover={"white"}
                                    />

                                    <button
                                        className="absolute top-[25%] right-[5%]"
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

                                <div className="relative left-[10%] top-[45%] lg:left-[7%] lg:top-[26%] w-[75%] lg:w-[90%] h-[100px] lg:h-[300px] lg:max-w-[1000px] text-white uppercase text-h1 text-left">
                                    <h1 className="absolute lg:left-[0%] left-[0%] lg:top-[0%] top-[0%] lg:w-full w-[280px]">
                                        Бесконечная <br />
                                        энергия Фитнеса
                                    </h1>
                                    <div
                                        className={
                                            "absolute lg:left-[50%] lg:top-[80%] md:left-[40%] sm:left-[40%] left-[60%] top-[125%] flex justify-between items-center"
                                        }
                                    >
                                        {/* <MainNextButton
                                            className={`z-10 block lg:mr-[20px] mr-[10px] rounded-full p-3 border border-white bg-white transition ease-in-out active:-translate-y-1 active:scale-110 duration-300`}
                                            ref={nextBtn}
                                        /> */}

                                        <button
                                            ref={nextBtn}
                                            className={`z-10 block lg:mr-[20px] mr-[10px] rounded-full p-3 border border-white bg-white transition ease-in-out active:-translate-y-1 active:scale-110 duration-300`}
                                        >
                                            <svg
                                                width="64"
                                                height="64"
                                                viewBox="0 0 64 64"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                            >
                                                <path
                                                    d="M52.6666 31.2682L12.6666 31.2682"
                                                    stroke="#737373"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M36.5338 15.2033L52.6671 31.2673L36.5338 47.334"
                                                    stroke="#737373"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                        <style>
                                            {`
                                            :root {
                                                --swiper-theme-color: #c42020;
                                                --swiper-pagination-bullet-inactive-opacity: .5;
                                                --swiper-pagination-bullet-opacity: 1;
                                                --swiper-pagination-bullet-inactive-color: #ffffff;
                                                --swiper-pagination-bullet-width: 8px;
                                                --swiper-pagination-bullet-height: 8px;
                                                --swiper-pagination-bullet-size: 8px;
                                            }                                           
                                            .swiper-pagination{
                                               width: auto !important;
                                               position: absolute;
                                               transition: .3s opacity;
                                                transform: translate3d(0, 0, 0);
                                                z-index: 10;
                                                left:100px !important;
                                                bottom: 40px !important;
                                            }                                          
                                            .swiper-pagination-bullet {
                                                display:block;
                                                margin-right:12px;                                                
                                                width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
                                                height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
                                                display: inline-block;
                                                border-radius: 50%;
                                                background: var(--swiper-pagination-bullet-inactive-color, #000);
                                                opacity: var(--swiper-pagination-bullet-inactive-opacity, .2);
                                            }                                                 
                                            .swiper-pagination-bullet-active {
                                                width: 24px !important;
                                                height: 24px !important;
                                                display: inline-block;
                                                opacity: .8 !important;
                                                background: none !important;
                                                background-image: url(../../images/main/active-bullet.png)!important;
                                            }                                          
                                            @media (max-width: 1024px) {
                                                .swiper-pagination {                                                                                                     
                                                    left: 70px !important;
                                                    bottom: 20px !important;
                                                    overflow-x: hidden !important;
                                                    }         
                                            }                                                                                              
                                        `}
                                        </style>
                                        <div className="swiper-pagination flex justify-start items-center"></div>
                                    </div>
                                    <img
                                        src="/images/main/ellipse.svg"
                                        className="absolute left-[20%] -top-[30%] lg:left-[18%] lg:-top-[35%] w-[200px] h-[200px] lg:w-[456px] lg:h-[456px] "
                                        alt=""
                                    />
                                </div>

                                <u className="hidden lg:flex flex-col list-none w-full items-end absolute right-[5%] bottom-[10%]">
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
                                className="mySwiper1 lg:absolute lg:top-[0px] lg:left-[0px] lg:w-full lg:h-full z-10"
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
