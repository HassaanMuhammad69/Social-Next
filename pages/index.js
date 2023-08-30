
import { Inter } from 'next/font/google'
import PostForm from '@/components/postFormCard'
import PostCard from '@/components/postCard'
import Layout from '@/components/layout'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import LoginPage from './login'
import { useEffect, useState } from 'react'
import { UserContext } from '@/context/userContext'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const supabase = useSupabaseClient();
  const [posts, setPosts] = useState([])
  const [profile, setProfile] = useState(null)
  const session = useSession();

useEffect(()=>{
  fetchPosts()
},[])


  useEffect(() => {
    if(!session?.user?.id){
      return
    }
    supabase.from('profiles')
      .select()
      .eq('id', session.user.id)
      .then(result => {
        if (result.data.length) {
          setProfile(result.data[0])
        }
      })
  }, [session?.user?.id])

  function fetchPosts() {
    supabase.from('posts')
      .select('id, content, created_at, photos, profiles(id, avatar, name)')
      .order('created_at', { ascending: false })
      .then(res => {
        console.log('posts', res)
        setPosts(res.data)
      })
  }

  // console.log(session)
  if (!session) {
    return <LoginPage />
  }


  return (
    <Layout>
      <UserContext.Provider value={{profile}}>
        <PostForm onPost={fetchPosts} />
        {posts?.length > 0 && posts.map(post => (
          <PostCard key={post.created_at} {...post} />
        )
        )}
      </UserContext.Provider>
    </Layout>
  )
}
