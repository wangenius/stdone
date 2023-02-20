import React from "react";
import {TypeAnimation} from "react-type-animation";

export default function Example() {
    return (
        <div className="bg-white pb-6 sm:pb-4 lg:pb-8">
                <section className="flex flex-col items-center">
                    <div
                        className="max-w-xl flex flex-col items-center text-center pt-8 lg:pt-32 pb-0 sm:pb-8 lg:pb-16">
                        <p className="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">原来神仙鱼横渡大海会断魂,听不到世人爱听的福音</p>

                        <TypeAnimation
                            className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-12 whitespace-nowrap"
                            sequence={["Study Alone, Study Done", 2000, "Welcome to STDONE🍭", 2000]}/>
                        <div className={'mb-8'}>
                            <img className={'avatar m-2'}
                                 src={"./icon.png"}
                                 style={{display: "inline-block", width: 100, borderRadius: 150}}
                                 alt={'avatar'}/>
                            <img className={'avatar m-2'}
                                 src={"./avatar.jpg"}
                                 style={{display: "inline-block", width: 100, borderRadius: 150}}
                                 alt={'avatar'}/>
                        </div>

                        <p className="text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">Hey
                            bro, This is wangenius. Here
                            is my personal webpage, recording something I've learned, created,
                            explored. There also exists my experience and resume. thank you for
                            browsing.</p>

                        <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                            <a href="src/components/index/Panel#"
                               className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Start Exploring </a>

                            <a href="src/components/index/Panel#"
                               className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">visit my bilibili 🎉</a>
                        </div>
                    </div>
                </section>

        </div>
    )
}
