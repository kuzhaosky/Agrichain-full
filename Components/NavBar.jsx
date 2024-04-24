import { useEffect,useState,useContext } from "react";

import { TrackingContext } from "@/Conetext/Tracking";
import { Nav1,Nav2,Nav3 } from "../Components/index";
export default ()=>{
  const [state , setState] = useState(false);
  const {currentUser, connectWallet } = useContext(TrackingContext);

  const navigation = [
    {title: "Home",path:"#"},
    {title: "Services",path:"#"},
    {title: "ContactUs",path:"#"},
    {title: "Erc20",path:"#"},
  ];

  useEffect(()=>{
    document.onClick = (e)=>{
      const target = e.target;
      if(!target.closest(".menu-btn")) setState(false);
    };
  },[]);

  return (
    <nav
      className={`bg-gray-800 pb-5 md:text-sm ${
        state
          ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mt-0"
          : ""
      }`}
    >
      <div className=" gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
      
        <div className="flex items-center justify-center">
          <h1 className="text-white text-2xl">
            Agrichain Tracking System
          </h1>
        </div>

        <div 
          className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
            state ? "block" : "hidden"
          }`}>
            
 
            <div className="flex items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0 w-full">
              {currentUser ? (
                <p className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                  UserID:  {currentUser.slice(0,25)}..
                </p>
              ) : (
                <button 
                  onClick={()=>connectWallet()}
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                    Connect Wallet
                    <Nav3 />
                  </button>
              )}
            </div>
        </div>
      </div>
    </nav>
  );
};