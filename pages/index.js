
import { Inter } from 'next/font/google'
import PostForm from '@/components/postFormCard'
import PostCard from '@/components/postCard'
import Layout from '@/components/layout'
import { useSession } from '@supabase/auth-helpers-react'
import LoginPage from './login'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const session= useSession();
  console.log(session)
  if(!session){
    return <LoginPage/>
  }


  return (
    <Layout>
      <PostForm />
      <PostCard />
    </Layout>
  )
}
