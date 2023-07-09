import React from "react";
import CustomNavbar from "./CustomNavbar";
import Base from "./Base";
import { getCurrentUserDetail } from "./auth";
import { useState } from "react";
const Profile_page = () => {
    

    const [user , setUser] = useState(getCurrentUserDetail());
    return (
        <div>
            <Base>
            <CustomNavbar/>
            <h1>WellCome to the user dashboard</h1>
            <h3> Name : {user.name}</h3>
            <h3> Email : {user.email}</h3>
            
            </Base>
            


        </div>
        
    )
}
export default Profile_page;