'use server';
import { Guest } from "./models";
import connectToDb from "./utils";
import {revalidatePath} from 'next/cache';


export const addGuest = async (formData) => {

    const {name, attending} = formData;
    
    try{
        connectToDb();

        const newGuest = new Guest({
            name,
            attending
        })

        await newGuest.save()
        console.log('Saved to DB...')
        return {
            message: 'ok',
        }
        // revalidatePath('/')
    }catch(err){
        console.log(err)
        return {
            message: 'error',
        }
    }
}
