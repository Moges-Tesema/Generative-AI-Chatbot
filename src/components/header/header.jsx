import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Header = () => (
    <div className="flex flex-row justify-between bg-blue-500 pr-4">
        <img src="src/assets/download.png " alt="logo"  className="h-8 w-8 rounded-full"/>
        <div className="flex flex-row gap-6">
            <SignIn/>
            <SignUp/>
        </div>

    </div>
);

export default Header;
