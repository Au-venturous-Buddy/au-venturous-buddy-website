import React from "react"
import {Button} from "react-bootstrap";
import { IoArrowUpOutline } from "react-icons/io5";
import ResponsiveSize from "../hooks/responsive-size";

export default function UpFolderButton({previousFolder}) {
    return(
        <Button style={{fontSize: ResponsiveSize(0.8, "rem", 0.001, 500)}} aria-label="Up" href={previousFolder}>
            <span aria-hidden={true}><IoArrowUpOutline aria-hidden={true} /></span>
        </Button>
    )
}