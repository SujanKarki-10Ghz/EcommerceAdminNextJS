"use client";
import { StoreModal } from "@/components/modals/store-modal";

import { useEffect, useState } from "react";
//to avoid hydration error
export const ModalProvider = ()=>{
    const[isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[]);
    if(!isMounted){
        //not going to return anything on the server side
        return null;
    }
    //for client side
    return(
        <>
        <StoreModal/>
        </>
    )
}