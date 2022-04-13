import { Image, SearchOff } from "@mui/icons-material";
import { Button, Menu } from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
    <div>
        <div>
        <div className="languageSelection">
            <Link to={"/"}>
                <div>BA</div>
            </Link>
            <div>|</div>
            <Link to={"/1"}>
                <div>ENG</div>
            </Link>
        </div>
        <div className="goreDesno">
        <h3>register/login</h3>
        <h3>srce</h3>
        <h3>cart</h3>
        </div>
        </div>
        <div className="dioIspodHeadera">
            <Image className="headerLogo"></Image>
            <SearchOff className="searchBar"></SearchOff>
            <Button className="menuButton"></Button>
        </div>
    </div>
    );
}

export default Navbar