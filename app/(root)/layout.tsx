import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetupLayout({
    children
}:{
    children:React.ReactNode;
}) {
    const {userId} = auth();
    if(!userId){
        redirect('/sign-in');
    }

// We are loading the first store available with currently logged in user

    const store = await prismadb.store.findFirst({
        where:{
            userId
        }
    });

    //if that store exist, we are going to redirect to / store.id
    if(store){
        redirect(`/${store.id}`);
    }
    return(
        <>
        {children}
        </>
    )
}