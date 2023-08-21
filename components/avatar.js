export default function Avatar({ size , url }) {
    let width= 'w-12'
    if( size=== 'lg'){
        width=  'w-24 md:w-28'
    }
    return (
        <div className={`${width} rounded-full overflow-hidden`}>
            <img src={url} alt="" ></img>
        </div>
    )
}