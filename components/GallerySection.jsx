import Image from 'next/image'
import React from 'react'

const GallerySection = () => {
    return (
        <div className="w-full max-h-[10%] flex items-center justify-center overflow-clip bg-black">
            <div className="w-[98%]">
                <Image
                    src="/gallery.png"
                    alt="gallery"
                    layout="responsive"  // Adjusts height based on width while maintaining aspect ratio
                    width={0}           // leave at 0 (wrap with a div and that will choose the width)
                    height={0}          // leave at 0
                />
            </div>

        </div>
    )
}

export default GallerySection