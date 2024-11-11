import '../App.css'
import { useState, useEffect } from 'react';
import Logo from '/logo_white.svg'
import Carousel from './Carousel'

function Phone() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen lg:w-full">
                <div className="w-[380px] lg:w-[480px] bg-[#F6FAFF] p-5 rounded-xlg border-2 border-[#3584ED] shadow-md">
                    <div className="flex flex-row justify-between w-full mb-5">
                        <div className="h-2 w-2/12 bg-[#E1E1E1] rounded ml-2"></div>
                        <div className="flex flex-row h-2 w-5/12 justify-end space-x-1">
                            <div className="h-2 w-2/12 bg-[#E1E1E1] rounded"></div>
                            <div className="h-2 w-4/12 bg-[#E1E1E1] rounded"></div>
                        </div>
                    </div>
                    {/* <!-- Top large section --> */}
                    <div className="flex flex-col items-center mb-4">
                        <div className="w-full h-56 lg:h-80 bg-white border-2 border-[#3584ED] rounded-xlg relative mb-5">
                        <Carousel />
                        </div>

                        {/* <!-- Text lines under top section --> */}
                        <div className="flex flex-row justify-between items-center w-full">
                            <div className="flex flex-col space-y-1 w-full">
                                <div className="h-2 w-1/4 bg-[#3584ED] rounded"></div>
                                <div className="h-2 w-2/4 bg-[#3584ED] rounded"></div>
                            </div>
                            <div className="flex justify-center items-center bg-[#3584ED] p-1 rounded-md">
                            <img src={Logo} alt={"logo"} className="w-[15px] h-[15px] lg:w-[18px] lg:h-[18px]"/>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Grid of small sections --> */}
                    <div className="flex flex-wrap -mx-2">
                        {/* <!-- Single card item --> */}
                        <div className="w-1/2 p-2">
                            <div className="flex flex-col rounded-lg p-1 relative">
                                <div className="w-full h-36 lg:h-48 bg-white border-2 border-[#3584ED] rounded-xl mb-2"></div>
                                <div className="flex flex-row justify-between items-center w-full">
                                    <div className="flex flex-col space-y-1 w-full">
                                        <div className="h-2 w-1/4 bg-[#E1E1E1] rounded"></div>
                                        <div className="h-2 w-2/4 bg-[#E1E1E1] rounded"></div>
                                    </div>
                                    <div className="flex justify-center items-center bg-[#3584ED] p-1 rounded-md">
                                        <img src={Logo} alt={"logo"} className="w-[15px] h-[15px] lg:w-[18px] lg:h-[18px]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Repeat for other items --> */}
                        <div className="w-1/2 p-2">
                            <div className="flex flex-col rounded-lg p-1 relative">
                                <div className="w-full h-36 lg:h-48 bg-white border-2 border-[#3584ED] rounded-xl mb-2"></div>
                                <div className="flex flex-row justify-between items-center w-full">
                                    <div className="flex flex-col space-y-1 w-full">
                                        <div className="h-2 w-1/4 bg-[#E1E1E1] rounded"></div>
                                        <div className="h-2 w-2/4 bg-[#E1E1E1] rounded"></div>
                                    </div>
                                    <div className="flex justify-center items-center bg-[#3584ED] p-1 rounded-md">
                                        <img src={Logo} alt={"logo"} className="w-[15px] h-[15px] lg:w-[18px] lg:h-[18px]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 p-2">
                            <div className="flex flex-col rounded-lg p-1 relative">
                                <div className="w-full h-48 bg-white border-2 border-[#3584ED] rounded-xl mb-2"></div>
                                <div className="flex flex-row justify-between items-center w-full">
                                    <div className="flex flex-col space-y-1 w-full">
                                        <div className="h-2 w-1/4 bg-[#E1E1E1] rounded"></div>
                                        <div className="h-2 w-2/4 bg-[#E1E1E1] rounded"></div>
                                    </div>
                                    <div className="flex justify-center items-center bg-[#3584ED] p-1 rounded-md">
                                        <img src={Logo} alt={"logo"} className="w-[18px] h-[18px]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-1/2 p-2">
                            <div className="flex flex-col rounded-lg p-1 relative">
                                <div className="w-full h-48 bg-white border-2 border-[#3584ED] rounded-xl mb-2"></div>
                                <div className="flex flex-row justify-between items-center w-full">
                                    <div className="flex flex-col space-y-1 w-full">
                                        <div className="h-2 w-1/4 bg-[#E1E1E1] rounded"></div>
                                        <div className="h-2 w-2/4 bg-[#E1E1E1] rounded"></div>
                                    </div>
                                    <div className="flex justify-center items-center bg-[#3584ED] p-1 rounded-md">
                                        <img src={Logo} alt={"logo"} className="w-[18px] h-[18px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Phone;