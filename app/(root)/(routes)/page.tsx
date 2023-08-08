"use client";
import { Modal } from '@/components/ui/modal';
import { userStoreModal } from '@/hooks/use-store-modal';
import { UserButton } from '@clerk/nextjs';
import { useEffect } from 'react';

const SetupPage = ()=> {
  const onOpen = userStoreModal((state)=>state.onOpen);
  const isOpen = userStoreModal((state)=>state.isOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen, onOpen])

  return null;
}
export default SetupPage;