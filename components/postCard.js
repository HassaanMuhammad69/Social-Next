import Link from "next/link";
import Avatar from "./avatar";
import Card from "./card";

export default function PostCard() {
    return (
        <Card>
            <div className='flex gap-3'>
                <div>
                    <Link href={'/profile'}>
                    <Avatar />
                    </Link>
                </div>
                <div className='grow'>
                    <p>
                        <Link className='font-semibold' href={'/profile'} >Hassaan Muhammad</Link>  shared an <a className=' text-socialBlue'>album</a>
                    </p>
                    <p className='text-gray-500 text-sm'>2 hours ago</p>
                </div>

                <div>
                    <button className='text-gray-400  '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                    </button>
                </div>

            </div>
            <div>
                <p className='my-3 text-sm'>As long as there is love, there will be a hate _Minato Namikaza </p>
                <div className='rounded-md overflow-hidden'>
                    <img src="https://th.bing.com/th/id/R.93904a49335c8e32dd484888b07b600a?rik=NF%2bVnzFnuerXOw&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f18500000%2fMinato-naruto-shippuuden-18522625-1280-720.jpg&ehk=7jboACYSs9korceFFXYgs%2bEUkv2GSJrgThy0ttD2uI4%3d&risl=&pid=ImgRaw&r=0"></img>
                </div>
            </div>
            <div className="mt-5 flex gap-8">
                <button className='flex gap-2 items-center' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    72</button>
                <button className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>

                    11</button>
                <button className='flex gap-2 items-center' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                    4</button>
            </div>
            <div className='flex mt-4 gap-3'>
                <div>
                    <Avatar />
                </div>
                <div className='border grow rounded-full relative'>
                    <textarea className='block w-full rounded-full p-3 overflow-hidden px-4 h-12 ' placeholder="Leave a comment"></textarea>
                    <button className='absolute top-3 right-3 text-gray-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>

                    </button>
                </div>
            </div>
        </Card>
    )
}