'use client'
import { useGlobalState } from "@/app/context/globalProvider"
import Image from "next/image";
import styled from "styled-components"
import imageUrlstatic from "../../../public/avatar.png"

const Sidebar = () => {
  const {theme} =useGlobalState();
  const { firstName, lastName, imageUrl } ={
    firstName: "Md Saifur",
    lastName: "Rahman",
    imageUrl: "",
  };
  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image  width={70} height={70} src={imageUrlstatic} alt="profile" />
        </div>
        <div className="user-btn absolute z-20 top-0 w-full h-full">
          {/* <UserButton /> */}
        </div>
        <h1 className="capitalize">
          {firstName} {lastName}
        </h1>
      </div>
    </SidebarStyled>
  )
}

const SidebarStyled =styled.nav`
  position: relative; 
  width: ${(props)=>props.theme.sidebarWidth};
  background-color: ${(props)=>props.theme.colorBg2};
  border: 2px solid ${(props)=>props.theme.borderColor2};
  border-radius: 1rem;
`;

export default Sidebar