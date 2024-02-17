'use server';
import { Guest } from "./models";
import connectToDb from "./utils";
import {revalidatePath} from 'next/cache';
import { redirect } from 'next/navigation'


function getBooleanValue(string){
    if(string == 'yes'){
        return true
    }else{
    return false
    }
}

export const addGuest = async (formData) => {
    let {
        name, 
        email, 
        attendingCeremony, 
        meal, 
        attendingBrunch,
        guests,
        hasAllergy, 
        allergyDesc,
        songChoice} = formData;
    
        console.log(allergyDesc)

    attendingCeremony = getBooleanValue(attendingCeremony)
    attendingBrunch = getBooleanValue(attendingBrunch)

    try{
        connectToDb();
    
        const newGuest = new Guest({
            name,
            email,
            attendingCeremony,
            meal,
            attendingBrunch,
            guests,
            hasAllergy,
            allergyDesc,
            songChoice
        })

        await newGuest.save()
        console.log('Saved to DB...')
        return {
            message: 'ok',
        }
    }catch(err){
        console.log(err)
        return {
            message: 'error',
        }
    }
}

 

 
export async function navigate() {
  redirect(`/`)
}