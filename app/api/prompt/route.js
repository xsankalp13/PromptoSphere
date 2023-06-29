import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
    try {
        await connectToDB();
        //here instead of just returning the ID or reference to the "creator" field, the actual referenced 
        //document will be fetched and included in the result

        const prompts = await Prompt.find({}).populate('creator');
        //console.log(prompts);
        return new Response(JSON.stringify(prompts),{
            status:200
        })
    } catch (error) {
        console.log(error);
        return new Response('failed to fetch all prompts', { status:500 })
    }
}

