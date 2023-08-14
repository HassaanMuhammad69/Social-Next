import Layout from "@/components/layout";
import PostCard from "@/components/postCard";

export default function Save(){
    return(
        <Layout>
            <h1 className='text-3xl mb-2 text-gray-400'>Saved posts</h1>
            <PostCard/>
        </Layout>
    )
}