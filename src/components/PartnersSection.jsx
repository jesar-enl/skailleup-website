import Image from 'next/image'

export default function PartnersSection() {
   const images = [
     {
       key: 'capitalone',
       src: 'capitalone.jpg',
     },
     {
       key: 'amazon',
       src: 'amazon.jpg',
     },
     {
       key: 'pwc',
       src: 'pwc.jpg',
     },
     {
       key: 'mcdonald',
       src: 'mcdonald.jpg',
     },
     {
       key: 'slack',
       src: 'slack.jpg',
     },
     {
       key: 'samsung',
       src: 'samsung.jpg',
     },
   ];
   return (
     <div className="flex flex-col items-center text-gray-900 justify-center mt-3 mb-4">
       <div className="flex flex-col p-4 justify-center text-center">
         <h1 className="text-3xl mb-2 font-bold">
           Embark on your professional journey alongside the world&#39;s premier
           companies
         </h1>
         <p className="text-sm text-gray-700 tracking-wider">
           kickstarting your career with unparalleled opportunities. Join forces
           with industry leaders and shape your future success through our
           cutting-edge education platform.
         </p>
       </div>
       {/* // TODO: style this div better */}
       <div className="flex gap-16 justify-between p-4 whitespace-nowrap overflow-hidden">
         <div className="flex gap-0 p-1 mr-32 animate-slide ">
           {images.map(({ key, src }) => {
             return (
               <Image
                 key={key}
                 src={`/images/${src}`}
                 alt="company-logos"
                 width={100}
                 height={100}
                 className="m-2 md:w-1/6"
               />
             );
           })}
         </div>
         <div className="flex gap-0 p-1 animate-slide delay-1000">
           {images.map(({ key, src }) => (
             <Image
               key={key + 'dup'}
               src={`/images/${src}`}
               alt="company-logos"
               width={100}
               height={100}
               className="m-2 md:w-1/6"
             />
           ))}
         </div>
       </div>
     </div>
   );
}
