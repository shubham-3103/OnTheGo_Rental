import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Web3 from 'web3'
import profileimg from '../images/profile.png';

const Nav = styled.div`
  background: #15171c;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
`;
 
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
 
const SidebarNav = styled.nav`
  background: #15171c;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
 
const SidebarWrap = styled.div`
  width: 100%;
  
`;
 
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
 
  const showSidebar = () => setSidebar(!sidebar);
  
  const [isConnected,setIsConnected] = useState(false);
	const [ethBalance,setEthBalance] = useState("");
	const detectCurrentProvider = () =>{
		let provider;
		if(window.ethereum){
			provider = window.ethereum;;
		}else if(window.web3){
			provider = window.web3.currentProvider;
		}else{
			console.log("Non ethereum browser detected. ou should install Metamask ")
		}
		return provider;
	}
	const onConnect = async() =>{
		try{
			const currentProvider = detectCurrentProvider();
			if(currentProvider){
				await currentProvider.request({method:'eth_requestAccounts'});
				const web3 = new Web3(currentProvider);
				const userAccount = await web3.eth.getAccounts();
				const account = userAccount[0];
				let ethBalance = await web3.eth.getBalance(account);
				setEthBalance(ethBalance);
				setIsConnected(true);
			}
		}catch(error){
			console.log(error); 
		}
	}

	const onDisconnect = () =>{
		setIsConnected(false);
	}
 
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1
            style={{ textAlign: "center",
                     marginLeft: "200px",
                     color: "blue" }}
          >
            OnTheGo Rentals
          </h1>
          
          {!isConnected && (
            <div>
              <button className="app-button_login" onClick={onConnect}>
                Login
              </button>
            </div>
          )}
        
        {isConnected && (
				<div className="app-wrapper">
					<div className="app-details">
						<div className="app-balance">
							<span>Balance:
							{parseFloat(ethBalance.slice(0,3)).toFixed(5)} ETH </span>
						</div>
					</div>
					<div>
            
						<button className="app-buttons_logout" onClick={onDisconnect}> 
							Disconnect
						</button>
					</div>
				</div>
		  	)}
        <img style={{background: "white"}} src={profileimg} className="user" />
        </Nav>
        
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav> 
      </IconContext.Provider>
    </>
  );
};
 
export default Sidebar;