"use client";
import { Dialog,
     DialogContent,
    DialogDescription,
    DialogHeader, 
    DialogTitle 
} from "@/components/ui/dialog";

 //To use client component 
//by default, all components on NextJS 13 inside the App folder are server components.


interface ModalProps{
    title:string;
    description: string;
    isOpen: boolean;
    onClose: ()=>void;
    children?:React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
title,
description,
isOpen,
onClose,
children
})=>{
   const onChange = (open:boolean) =>{
    if(!open){
        onClose();
    }
   };

   return(
    <Dialog open={isOpen} onOpenChange={onChange}>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
                {description}
            </DialogDescription>
        </DialogHeader>
        <div>
            {children}
        </div>
    </DialogContent>
    </Dialog>
   );
};