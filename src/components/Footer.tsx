import React from 'react'

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <div className='flex flex-col w-full bg-dark text-white mt-[4rem]'>
            {/* google map goes here */}
            <div className="w-full h-full">
            <iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=futru%20%20Nkwen&t=k&z=13&ie=UTF8&iwloc=&output=embed"  scrolling="no"  ></iframe>
  </div>


            

            { /* contact details */}
            <div className="flex justify-between items-center px-5 sm:flex-col gap-3 md:justify-center md:iyems-center">
                <h3>conatct : 672 792 563 </h3>
                <p>fonyuyjudegita@gmail,com</p>
            </div>

            
        </div>
    )
}

export default Footer
