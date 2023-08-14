import Avatar from "./avatar"

export default function FriendInfo() {
    return (
        <div className='flex gap-2'>
            <Avatar />
            <div>
                <h3 className='font-bold text-lg'>I have none, bitch im lonely af</h3>
                <div className='text-sm leading-3'>5 mutual friends</div>
            </div>
        </div>
    )
}