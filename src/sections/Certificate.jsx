import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { MY_CERTIFICATES } from '../utils/data'
import CERTCard from '../components/CERTCard'

const Certificate = () => {
        const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align:"start"});
        const [canScrollPrev, setCanScrollPrev] = useState(false);
        const [canScrollNext, setCanScrollNext] = useState(false);
    
        const updateScrollButtons = useCallback(()=>{
            if (!emblaApi) return;
            setCanScrollPrev(emblaApi.canScrollPrev());
            setCanScrollNext(emblaApi.canScrollNext());
        }, [emblaApi]);
    
        useEffect(() => {
            if (!emblaApi) return;
            emblaApi.on("select", updateScrollButtons);
            updateScrollButtons();
        }, [emblaApi, updateScrollButtons]);


  return (
    <section id="certificate" className="bg-[#eef6eb] mt-14">
        <div className="container mx-auto px-8 md:px-10 py-10">
            <div className="w-full lg:w-[60vw] mx-auto">
                <h4 className="section-title">Gained Certificates</h4>
                <p className="text-xl text-center mt-4 leading-6">
                </p>
            </div>
            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex pt-14 pb-8">
                        {MY_CERTIFICATES.map((CERT) =>(
                            <div 
                                key={CERT.id}
                                className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]"
                                >
                                    <CERTCard
                                    key = {CERT.id}
                                    imgUrl = {CERT.image}
                                    title = {CERT.title}
                                    tags = {CERT.tag}
                                    />
                                    </div>
                        ))}
                    </div>
                    {/* Navigation Buttons */}
                    <button 
                        className={`arrow-btn -left-5 ${
                            !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        onClick={() => emblaApi && emblaApi.scrollPrev()} 
                        disabled={!canScrollPrev}
                    > 
                        <IoIosArrowForward className='rotate-180'/>
                    </button>

                    <button 
                        className={`arrow-btn -left-5 ${
                            !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        onClick={() => emblaApi && emblaApi.scrollPrev()} 
                        disabled={!canScrollPrev}
                    >
                        <IoIosArrowForward/>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Certificate