import { useState } from "react"
import idCardBack from '../../assets/image/Business-card-back.png'
import idCardImage from '../../assets/image/Business-card-front.png'
import Button from "../../components/ui/Button"
import UserIcon from "../../assets/icons/UserIcon"
import EmailIcon from "../../assets/icons/EmailIcon"
import RegionIcon from "../../assets/icons/RegionIcon"
import ProfilePhotoIcon from "../../assets/icons/ProfilePhotoIcon"
import CompanyIdIcon from "../../assets/icons/CompanyIdIcon"
import LogoTitleIcon from "../../assets/icons/LogoTitleIcon"
import DesignationIcon from "../../assets/icons/DesignationIcon"
import AddressIcon from "../../assets/icons/AddressIcon"
import CompanyInfoIcon from "../../assets/icons/CompanyInfoIcon"
import CompanyLogoIcon from "../../assets/icons/CompanyLogoIcon"
import cygnoz from '../../assets/image/cygnoz.com.png'
import profile from '../../assets/image/AvatarImg.png'
import PhoneIcon from "../../assets/icons/PhoneIcon"
import LocationIcon from "../../assets/icons/LocationIcon"
// import cygnozC from '../../assets/image/cygnoz c png.png'
import busniessIcon from '../../assets/image/businesscardLogo.png'
import c from '../../assets/image/card-c.png'
// import polygon from '../../assets/image/polygon.png'

type Props = {}

function BusinessCard({ }: Props) {
    const tabs = ["Layout", "Content"]
    const [activeTab, setActiveTab] = useState<string>("Layout");

    const [isToggled, setIsToggled] = useState(false);
    return (
        <>

            <div className="mb-4">
                <p className="text-[#303F58] text-lg font-bold">Business Card</p>
            </div>
            <div className="flex gap-24 bg-[#FEFBF8] rounded-xl px-4 py-2 text-base font-bold border-b border-gray-200">
                {tabs.map((tab) => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer py-2 px-[16px] ${activeTab === tab
                            ? "text-[#303F58] text-sm font-bold border-b-2 shadow-lg rounded-md border-[#97998E]"
                            : "text-gray-400"
                            }`}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-12">
                <div className="col-span-8">
                    <div className="me-4 p-2 bg-[#FFFFFF] rounded-lg mt-4">

                        {activeTab === "Layout" && (
                            <div>
                                <div className="flex justify-between mt-4">
                                    <p className="my-2 text-[#303F58] text-base font-bold">Select Template</p>
                                    <div className="flex items-center border bg-[#FFFFFF] rounded-lg w-80 h-9 px-3 my-2">
                                        <input
                                            type="text"
                                            placeholder="Search template"
                                            className="flex-grow outline-none text-sm text-[#8F99A9]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-2 p-2">
                                    <div className="bg-[#184D81] rounded-lg w-full">
                                        <div className="flex gap-4 p-3">
                                            <div>
                                                <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                                            </div>
                                            <div className="border-r">
                                                <p className="text-[#FFFFFF] font-light text-[10px] mx-2">Name</p>
                                                <p className="text-[#FFFFFF] font-semibold text-xs mx-2">John Doe</p>
                                            </div>
                                            <div>
                                                <p className="text-[#FFFFFF] font-light text-[10px]">Designation</p>
                                                <p className="text-[#FFFFFF] font-semibold text-xs">Regional Manager</p>
                                            </div>
                                            <div className="-mt-3">
                                                <img src={c} alt="" />
                                            </div>
                                        </div>

                                        <div className="flex py-3">
                                            <div className="bg-[#2795FB] w-56 h-fit p-1 rounded-e-full">
                                                <div className="flex justify-between px-2">
                                                    <div>
                                                        <p className="text-[#FFFFFF] font-light text-[10px]">Employee ID</p>
                                                        <p className="text-[#FFFFFF] font-medium text-xs">RM-210215</p>
                                                    </div>
                                                    <div className="me-6">
                                                        <p className="text-[#FFFFFF] font-light text-[10px]">Region</p>
                                                        <p className="text-[#FFFFFF] font-medium text-xs">Ernakulam</p>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="px-3">
                                            <p className="text-[#FFFFFF] font-light text-[10px] my-1">Personal Address & Mail</p>
                                            <div className="grid grid-cols-2 gap-1">
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                                        <div className="p-1">
                                                            <EmailIcon size={11} color="#FFFFFF" />
                                                        </div>

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> john.doe@example.com</p>

                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                        <PhoneIcon size={11} color="#FFFFFF" />

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p>

                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                        <LocationIcon size={12} color="#FFFFFF" />

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>

                                                </div>


                                            </div>
                                        </div>

                                        <div className="flex justify-between p-3">
                                            <img src={cygnoz} className="w-14 h-5" alt="" />
                                            <p className="text-[#FFFFFF] font-normal text-[10px] py-1">Engineering your business for the world</p>
                                        </div>
                                        <div >
                                            <img className="w-40 h-40 -mt-40 rounded-b-lg ml-auto" src={busniessIcon} alt="" />
                                        </div>

                                        {/* <div className="-mt-32 ms-52">
                                        <div className="w-60 h-7 -rotate-45 rounded-s-full bg-[#2795FB]"></div>
                                        <div className="w-60 h-7 -rotate-45 mt-3 bg-[#63B9F5]"></div>
                                        <div className="w-60 h-7 -rotate-45 mt-3 bg-[#2795FB]"></div>
                                        </div> */}
                                    </div>

                                    <div className="bg-[#184D81] rounded-lg w-full">
                                        <div className="flex gap-4 p-3">
                                            <div>
                                                <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                                            </div>
                                            <div>
                                                <p className="text-[#FFFFFF] font-light text-[10px]">Name</p>
                                                <p className="text-[#FFFFFF] font-semibold text-xs">John Doe</p>
                                            </div>
                                            <div>
                                                <p className="text-[#FFFFFF] font-light text-[10px]">Designation</p>
                                                <p className="text-[#FFFFFF] font-semibold text-xs">Regional Manager</p>
                                            </div>
                                        </div>

                                        <div className="flex p-3 justify-between">
                                            <div className="bg-[#2795FB] w-fit h-6 p-1 rounded-xl">
                                                <div className="flex gap-3 px-1">
                                                    <p className="text-[#FFFFFF] font-light text-xs">Employee ID</p>
                                                    <p className="text-[#FFFFFF] font-semibold text-xs">RM-210215</p>
                                                </div>
                                            </div>
                                            <div className="bg-[#2795FB] w-fit h-fit p-1 rounded-xl">
                                                <div className="flex gap-3 px-1">
                                                    <p className="text-[#FFFFFF] font-light text-xs">Region</p>
                                                    <p className="text-[#FFFFFF] font-semibold text-xs">Ernakulam</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-3">
                                            <p className="text-[#FFFFFF] font-light text-[10px] my-1">Personal Address & Mail</p>
                                            <div className="grid grid-cols-2 gap-1">
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                                        <div className="p-1">
                                                            <EmailIcon size={11} color="#FFFFFF" />
                                                        </div>

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> john.doe@example.com</p>

                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                        <PhoneIcon size={11} color="#FFFFFF" />

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p>

                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                        <LocationIcon size={12} color="#FFFFFF" />

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>

                                                </div>


                                            </div>
                                        </div>

                                        <div className="flex justify-between p-3">
                                            <img src={cygnoz} className="w-16 h-6" alt="" />
                                            <p className="text-[#FFFFFF] font-normal text-[10px] py-2">Engineering your business for the world</p>
                                        </div>

                                    </div>

                                    <div className="bg-[#184D81] rounded-lg w-full">
                                        <div className="flex gap-2 p-3 justify-between">
                                            <div className="flex gap-1">
                                                <img className="w-8 h-8 rounded-full" src={profile} alt="abc" />
                                                <div>
                                                    <p className="text-[#FFFFFF] font-semibold text-[10px]">John Doe</p>
                                                    <p className="text-[#FFFFFF] font-semibold text-[10px]">Regional Manager</p>
                                                </div>
                                            </div>
                                            <div className="bg-[#2795FB] w-fit h-6 p-1 rounded-xl">
                                                <div className="flex gap-3 px-1">
                                                    <p className="text-[#FFFFFF] font-light text-xs">Employee ID</p>
                                                    <p className="text-[#FFFFFF] font-semibold text-xs">RM-210215</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex px-3 gap-4">
                                            <p className="text-[#FFFFFF] font-light text-xs">Region</p>
                                            <p className="text-[#FFFFFF] font-semibold text-xs">Ernakulam</p>
                                        </div>

                                            {/* <div className="justify-center">
                                                <img className="-rotate-45" src={cygnozIcon} alt="" />
                                                <div className="flex gap-1 justify-end">
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>


                                            </div>

                                            <div className="flex gap-1 justify-end mt-1">
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>


                                            </div>
                                            <div className="flex gap-1 justify-end mt-1">
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            </div>
                                            <div className="flex gap-1 justify-end mt-1">
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            </div>
                                            <div className="flex gap-1 justify-end mt-1">
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                                <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            </div>
                                            </div> */}

                                        <div className="px-3 mt-6">
                                            <p className="text-[#FFFFFF] font-light text-[10px] my-1">Personal Address & Mail</p>
                                            <div className="gap-1">
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5">
                                                        <div className="p-1">
                                                            <EmailIcon size={11} color="#FFFFFF" />
                                                        </div>

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> john.doe@example.com</p>

                                                </div>
                                                <div className="flex gap-2 mt-1">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                        <PhoneIcon size={11} color="#FFFFFF" />

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]"> +919633564547</p>

                                                </div>
                                                <div className="flex py-1">
                                                <div className="flex gap-2">
                                                    <div className="bg-gradient-to-l from-[#87D2FE] to-[#248DE5] rounded-full w-5 h-5 p-1">
                                                        <LocationIcon size={12} color="#FFFFFF" />

                                                    </div>
                                                    <p className="text-[#FFFFFF] font-light text-[9px]">2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>

                                                </div>   
                                                <div>
                                                <img src={cygnoz} className="w-16 h-6" alt="" />
                                                <p className="text-[#FFFFFF] font-light text-[8px]">Engineering your business for the world</p>
                                                </div>
                                                </div>
                                           </div>
                                        </div>

                                        {/* <div className="flex justify-between p-3">
                                            <img src={cygnoz} className="w-16 h-6" alt="" />
                                            <p className="text-[#FFFFFF] font-normal text-[10px] py-2">Engineering your business for the world</p>
                                        </div> */}

                                    </div>

                                </div>
                            </div>

                        )}

                        {/* {activeTab === "Design" && (
                            <div>
                                <div className="flex justify-between mt-4">
                                    <p className="my-2 text-[#303F58] text-base font-bold">Select Color</p>
                                    <div className="flex items-center border bg-[#FFFFFF] rounded-lg w-80 h-9 px-3 my-2">
                                        <input
                                            type="text"
                                            placeholder="Search Color"
                                            className="flex-grow outline-none text-sm text-[#FFFFFF]"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-6 my-8">
                                    <div className="bg-[#FF3E3E] w-14 h-9 rounded-md"></div>
                                    <div className="bg-[#184D81] w-14 h-9 rounded-md"></div>
                                    <div className="bg-[#6DCB5A] w-14 h-9 rounded-md"></div>
                                    <div className="bg-[#3F44A4] w-14 h-9 rounded-md"></div>
                                    <div className="bg-[#6C2285] w-14 h-9 rounded-md"></div>
                                    <div className="bg-[#DFB93A] w-14 h-9 rounded-md"></div>
                                    <div className="bg-[#FB8D10] w-14 h-9 rounded-md"></div>
                                    <div className="bg-[#000000] w-14 h-9 rounded-md"></div>

                                </div>

                                <div className="flex justify-between mt-4">
                                    <p className="my-2 text-[#303F58] text-base font-bold">Select Background Element</p>
                                    <div className="flex items-center border bg-[#FFFFFF] rounded-lg w-80 h-9 px-3 my-2">
                                        <input
                                            type="text"
                                            placeholder="Search Element"
                                            className="flex-grow outline-none text-sm text-[#FFFFFF]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-8 mb-6 mt-2 p-2">
                                    <div className="bg-[#184D81] w-44 h-24 rounded-lg">

                                    </div>
                                    <div className="bg-[#184D81] w-44 h-24 rounded-lg">
                                        <div className="bg-[#2795FB] rounded-full w-8 h-8 mt-6 ms-20"></div>
                                        <div className="bg-[#57B1F2] rounded-full w-20 h-20 ms-24 -mt-4"></div>
                                    </div>
                                    <div className="bg-[#184D81] w-44 h-24 rounded-lg">
                                        <div className="ms-20 p-1 mt-[17px]">
                                            <Polygon size={80} />
                                        </div>
                                    </div>
                                    <div className="bg-[#184D81] w-44 h-24 rounded-lg">
                                        <div className="bg-[#57B1F2] w-16 h-3 my-1 rotate-45 ms-28 mt-[58px]"></div>
                                        <div className="bg-[#57B1F2] w-16 h-3 my-1 -rotate-45 ms-28 -mt-4"></div>
                                        <div className="bg-[#57B1F2] w-16 h-3 my-1 rotate-90 ms-28 -mt-4"></div>
                                    </div>
                                    <div className="bg-[#184D81] w-44 h-24 rounded-lg">
                                        <div className="ms-[104px] mt-1">
                                            <ArrowPolygon size={60} />
                                            <div className="-mt-7">
                                                <Polygon8 size={60} />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="bg-[#184D81] w-44 h-24 rounded-lg">
                                        <div className="flex gap-1 justify-end mt-10">
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>


                                        </div>
                                        <div className="flex gap-1 justify-end mt-1">
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>


                                        </div>
                                        <div className="flex gap-1 justify-end mt-1">
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                        </div>
                                        <div className="flex gap-1 justify-end mt-1">
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                        </div>
                                        <div className="flex gap-1 justify-end mt-1">
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                            <div className="w-2 h-2 bg-[#57B1F2] rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )} */}

                        {activeTab === "Content" && (
                            <div>
                                <div className="">
                                    <div className="p-3">
                                        <p className="text-[#303F58] text-base font-bold">Edit Details</p>
                                        <p className="text-[#8F99A9] text-xs font-normal my-1">A preview of the business card with dynamically changing visibility of fields</p>
                                    </div>
                                    <hr />

                                    <div>
                                        <div className="flex p-3 justify-between">
                                            <div className="flex gap-4">
                                                <div className="py-2">
                                                    <ProfilePhotoIcon color="#768294" size={24} />
                                                </div>
                                                <div>
                                                    <p className="text-[#4B5C79] text-sm font-medium">Profile Photo</p>
                                                    <p className="text-[#B0B0B0] text-sm font-normal">Update your profile photo for display within the application.</p>
                                                </div>
                                            </div>
                                            {/* <div>
                                                <p className="text-[#4B5C79] text-sm font-medium">Profile Photo</p>
                                                <p className="text-[#B0B0B0] text-sm font-normal">Update your profile photo for display within the application.</p>
                                            </div> */}
                                            <div className="">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value=""
                                                        className="sr-only peer"
                                                        onChange={() => setIsToggled(!isToggled)}
                                                    />
                                                    <div
                                                        className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                                    ></div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex p-4 gap-4">
                                            <div className="py-2">
                                                <CompanyLogoIcon color="#768294" size={22} />
                                            </div>
                                            <div>
                                                <p className="text-[#4B5C79] text-sm font-medium">Company Logo</p>
                                                <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Picture</p>
                                            </div>
                                            <div className="ml-auto justify-end">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value=""
                                                        className="sr-only peer"
                                                        onChange={() => setIsToggled(!isToggled)}
                                                    />
                                                    <div
                                                        className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                                    ></div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex p-4 gap-4">
                                            <div className="py-2">
                                                <UserIcon color="#768294" size={22} />
                                            </div>
                                            <div>
                                                <p className="text-[#4B5C79] text-sm font-medium">Name</p>
                                                <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Name</p>
                                            </div>
                                            <div className="ml-auto justify-end">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value=""
                                                        className="sr-only peer"
                                                        onChange={() => setIsToggled(!isToggled)}
                                                    />
                                                    <div
                                                        className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                                    ></div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex p-4 gap-4">
                                            <div className="py-2">
                                                <CompanyIdIcon color="#768294" size={22} />
                                            </div>
                                            <div>
                                                <p className="text-[#4B5C79] text-sm font-medium">Employee ID</p>
                                                <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable ID</p>
                                            </div>
                                            <div className="ml-auto justify-end">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value=""
                                                        className="sr-only peer"
                                                        onChange={() => setIsToggled(!isToggled)}
                                                    />
                                                    <div
                                                        className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                                    ></div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex p-4 gap-4">
                                            <div className="py-2">
                                                <EmailIcon color="#768294" size={22} />
                                            </div>
                                            <div>
                                                <p className="text-[#4B5C79] text-sm font-medium">Email</p>
                                                <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Email</p>
                                            </div>
                                            <div className="ml-auto justify-end">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value=""
                                                        className="sr-only peer"
                                                        onChange={() => setIsToggled(!isToggled)}
                                                    />
                                                    <div
                                                        className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                                    ></div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex p-4 gap-4">
                                            <div className="py-2">
                                                <LogoTitleIcon color="#768294" size={22} />
                                            </div>
                                            <div>
                                                <p className="text-[#4B5C79] text-sm font-medium">Logo Title</p>
                                                <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Title</p>
                                            </div>
                                            <div className="ml-auto justify-end">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value=""
                                                        className="sr-only peer"
                                                        onChange={() => setIsToggled(!isToggled)}
                                                    />
                                                    <div
                                                        className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                                    ></div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex p-4 gap-4">
                                            <div className="py-2">
                                                <DesignationIcon color="#768294" size={22} />
                                            </div>
                                            <div>
                                                <p className="text-[#4B5C79] text-sm font-medium">Designation</p>
                                                <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Designation</p>
                                            </div>
                                            <div className="ml-auto justify-end">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value=""
                                                        className="sr-only peer"
                                                        onChange={() => setIsToggled(!isToggled)}
                                                    />
                                                    <div
                                                        className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                                    ></div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex p-4 gap-4">
                                            <div className="py-2">
                                                <RegionIcon color="#768294" size={22} />
                                            </div>
                                            <div>
                                                <p className="text-[#4B5C79] text-sm font-medium">Region Name</p>
                                                <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Region</p>
                                            </div>
                                            <div className="ml-auto justify-end">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value=""
                                                        className="sr-only peer"
                                                        onChange={() => setIsToggled(!isToggled)}
                                                    />
                                                    <div
                                                        className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                                    ></div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex p-4 gap-4">
                                            <div className="py-2">
                                                <AddressIcon color="#768294" size={22} />
                                            </div>
                                            <div>
                                                <p className="text-[#4B5C79] text-sm font-medium">Personal Address</p>
                                                <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Address</p>
                                            </div>
                                            <div className="ml-auto justify-end">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value=""
                                                        className="sr-only peer"
                                                        onChange={() => setIsToggled(!isToggled)}
                                                    />
                                                    <div
                                                        className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                                    ></div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex p-4 gap-4">
                                            <div className="py-2">
                                                <CompanyInfoIcon color="#768294" size={22} />
                                            </div>
                                            <div>
                                                <p className="text-[#4B5C79] text-sm font-medium">Company Info</p>
                                                <p className="text-[#B0B0B0] text-sm font-normal">Enable/Disable Info</p>
                                            </div>
                                            <div className="ml-auto justify-end">
                                                <label className="relative inline-flex items-center cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value=""
                                                        className="sr-only peer"
                                                        onChange={() => setIsToggled(!isToggled)}
                                                    />
                                                    <div
                                                        className={`w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 
                                                                     peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
                                                                     peer-checked:bg-gray-700 peer-checked:after:translate-x-full 
                                                                     peer-checked:after:border-white after:content-[''] after:absolute 
                                                                    after:top-1 after:left-1 after:bg-white after:border-gray-300 
                                                                     after:border after:rounded-full after:h-4 after:w-4 after:transition-all`}
                                                    ></div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>
                </div>
                <div className="col-span-4">
                    <div className="p-4 bg-[#F5F9FC] rounded-lg mt-4">
                        <p className="my-2 text-[#000000] text-base font-medium">Preview</p>
                        <div className="my-4">
                            <img src={idCardImage} alt="" />
                        </div>
                        <div className="my-2">
                            <img src={idCardBack} alt="" />
                        </div>

                        <div className="flex gap-2 my-4 justify-between">
                            <Button variant="tertiary" className="w-28 h-10">
                                <p className="ms-6">Cancel</p>
                            </Button>
                            <Button variant="primary" className="w-32 h-10">
                                <p className="ms-9">Save</p>
                            </Button>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}

export default BusinessCard