"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  // Handle modal close on ESC key or click outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const openModal = () => {
    setOpen(true);
    // Autoplay video when modal opens
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Video play failed:", error);
        });
      }
    }, 100);
  };

  const closeModal = () => {
    setOpen(false);
    // Pause video when modal closes
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="Master in-demand tech skills while building real robots—your path to innovation starts with visibility and confidence."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[100/50] items-center justify-center">
                <Image src="/images/video/banner.jpg" alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={openModal}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark bg-opacity-80 p-4">
          <div 
            ref={modalRef} 
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-dark"
          >
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white bg-opacity-25 text-white hover:bg-opacity-40"
              aria-label="Close video"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <video
              ref={videoRef}
              className="max-h-[85vh]"
              controls
              width="1024"
              height="576"
            >
              {/* Replace the path with your actual video file path */}
              <source src="images\video\botshala.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;