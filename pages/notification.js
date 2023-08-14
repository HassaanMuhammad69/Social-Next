import Avatar from "@/components/avatar";
import Layout from "@/components/layout";
import Card from "@/components/card";

export default function NotificationPage() {
    return (
        <Layout>
            <h1 className='text-3xl mb-2 text-gray-400'>Notifications</h1>
            <Card noPadding={true}>
                <div className=''>
                    <div className='flex gap-3 items-center border-b border-b-gray-100 p-4'>
                        <Avatar />
                        <div>
                            You liked your own post, lonely mf
                        </div>
                    </div>
                    <div className='flex gap-3 items-center border-b border-b-gray-100 p-4'>
                        <Avatar />
                        <div>
                            You liked your own post, lonely mf
                        </div>
                    </div>
                    <div className='flex gap-3 items-center border-b border-b-gray-100 p-4'>
                        <Avatar />
                        <div>
                            You liked your own post, lonely mf
                        </div>
                    </div>
                </div>
            </Card>

        </Layout>
    )
}