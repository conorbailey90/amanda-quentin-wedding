import { Guest } from "./models"
import connectToDb from "./utils";

export const getGuests = async () => {
    try{
        connectToDb();
        const guests = await Guest.find();
        return guests;
    }catch(err){

        console.log(connectToDb)
    }

}