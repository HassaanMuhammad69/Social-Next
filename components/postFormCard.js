import { useContext, useEffect, useState } from "react";
import Avatar from "./avatar";
import Card from "./card";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContext } from "@/context/userContext";


export default function PostForm({onPost}) {

    const [content, setContent] = useState('')
    const supabase = useSupabaseClient();
    const session = useSession();
    const {profile}= useContext(UserContext)
    

    

    function createPost(){
        supabase.from('posts').insert({
            author: session.user.id,
            content,
        }).then(
            response =>{
                if(!response.error){
                    setContent('');
                    if(onPost){
                        onPost()
                    }
                }
            }
        )
    }

    return (
        <Card>
            <div className='flex gap-1'>
                <div>
                    <Avatar url={profile?.avatar} />
                </div>
                {profile && (
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className='grow p-3 h-14 ' placeholder={`Whats on your mind,${profile?.name} ?`}></textarea>
                )}

            </div>
            <div className='flex gap-3 items-center mt-2'>
                <div>
                    <button className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        <span className='hidden md:block'>People</span>  </button>
                </div>
                <div>
                    <button className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span className='hidden md:block'>Check in</span>  </button>
                </div>
                <div>
                    <button className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                        <span className='hidden md:block'>Mood</span> </button>
                </div>
                <div className='grow text-right'>
                    <button
                        onClick={createPost}
                        className='bg-socialBlue text-white px-6 py-1 rounded-md'>
                        Share</button>
                </div>
            </div>
        </Card>
    )
}