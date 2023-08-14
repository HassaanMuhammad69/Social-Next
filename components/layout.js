import Navigation from '@/components/navigationCard'



export default function Layout({ children, hideNavigation }) {
 let rightColoumnclass= '';
 if(rightColoumnclass){
  rightColoumnclass += 'w-full'
 }
 else{
  rightColoumnclass += 'mx-4 md:mx-0 md:w-9/12'
 }
 
  return (
    <div className='md:flex mt-4 max-w-4xl mx-auto gap-6 mb-24 md:mb-0 ' >
     {!hideNavigation && (
      <div className='fixed md:static w-full bottom-0 md:w-3/12 -mb-5'>
        <Navigation />
      </div>
     )}
      
      <div className={rightColoumnclass}>
        {children}
      </div>

    </div>
  )
}