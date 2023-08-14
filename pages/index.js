
import { Inter } from 'next/font/google'
import PostForm from '@/components/postFormCard'
import PostCard from '@/components/postCard'
import Layout from '@/components/layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <PostForm />
      <PostCard />
    </Layout>
  )
}
