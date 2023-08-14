export default function Avatar({ size }) {
    let width= 'w-12'
    if( size=== 'lg'){
        width=  'w-24 md:w-28'
    }
    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img src="https://th.bing.com/th/id/OIP.AgB4fxyW5fZVvjfMChtjDAHaKF?pid=ImgDet&rs=1"></img>
        </div>
    )
}