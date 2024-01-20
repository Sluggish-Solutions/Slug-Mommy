
import { json, type RequestHandler } from '@sveltejs/kit'

import type { Config } from '@sveltejs/adapter-vercel';
export const config: Config = {
	runtime: 'edge'
};
export const POST: RequestHandler = async (event) => {
    // const data = await event.request.formData();
    const request = await event.request.json()
    const user_id = request["user_id"];
    const message = request["message"];

    // sending to supabase
    // const { data, error } = await event.locals.supabase
    //     .from("comments")
    //     .insert({ parent_post: post_id, author: user_id , body: comment_body})
    //     .select()
    // if (error) {
    //     console.log(error);
    //     return json({ success: false })
    // }
    //
    // after sucess returns from supabase, then you send request to gpt for 
    // a text message response
    // 
    // need to send context to gpt for better response, so send the last
    // few messages to it as well
    //
    //
    // then you return the message returned by gpt and the message
    // you send to supabase

    //console.log("data returned from insert", data);

    return json({ success: true,  comment: data })
}
