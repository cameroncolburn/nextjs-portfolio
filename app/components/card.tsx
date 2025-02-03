import Image from 'next/image';

export default function Card() {
    return (
        <div className="flex flex-col justify-between group p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 animate-fade-in max-w-sm">
            <div>
                <div className="flex justify-between">
                    <div className="ring-1 ring-zinc-100 rounded-full p-1.5 inline-block mb-2 dark:ring-zinc-800">
                        <Image 
                            alt="" 
                            loading="lazy" 
                            width="28" 
                            height="28" 
                            decoding="async" 
                            data-nimg="1" 
                            className="object-cover aspect-square h-7 w-7 rounded-full" 
                            srcSet="/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1735914317600%2F435d0e72-abf7-4308-8722-e83a174c820a.png%3Fauto%3Dcompress&amp;w=32&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1735914317600%2F435d0e72-abf7-4308-8722-e83a174c820a.png%3Fauto%3Dcompress&amp;w=64&amp;q=75 2x" 
                            src="/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1735914317600%2F435d0e72-abf7-4308-8722-e83a174c820a.png%3Fauto%3Dcompress&amp;w=64&amp;q=75" 
                            style={{color: "transparent"}}
                        />
                    </div>
                    <time className="text-zinc-500 text-xs">2025</time>
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors flex items-center gap-1 justify-between">
                        test.com
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                        Here is a description of the project
                    </p>
                </div>
            </div>
            <div className="">
                <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 rounded-full px-2 font-medium text-xs py-0.5 border bg-zinc-50 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag">
                            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z">
                            </path>
                            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </svg>
                        website
                    </div>
                    <div className="flex items-center gap-1 rounded-full px-2 font-medium text-xs py-0.5 border bg-zinc-50 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2">
                            </path>
                        </svg>
                        ongoing
                    </div>
                </div>
                <div className="z-20 flex items-end gap-4 pt-4 justify-between">
                    <div className="flex items-end gap-4">
                        <p className="cursor-pointer" data-state="closed">
                            <svg height="16" width="16" strokeLinejoin="round" viewBox="0 0 16 16" className="h-4 w-4">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 1L16 15H0L8 1Z" fill="currentColor">
                                </path>
                            </svg>
                        </p>
                        <p className="cursor-pointer" data-state="closed">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 hidden dark:inline">
                                <path d="M50 99.9996C77.6142 99.9996 100 77.6139 100 49.9996C100 22.3854 77.6142 -0.000366211 50 -0.000366211C22.3858 -0.000366211 0 22.3854 0 49.9996C0 77.6139 22.3858 99.9996 50 99.9996Z" fill="currentColor">
                                </path>
                                <path d="M83.06 87.511L38.4122 29.9996H30V69.983H36.7298V38.546L77.7773 91.5803C79.6294 90.3405 81.394 88.9804 83.06 87.511Z" fill="url(#paint0_linear_790_6564)">
                                </path>
                                <path d="M70.5558 29.9996H63.8892V69.9996H70.5558V29.9996Z" fill="url(#paint1_linear_790_6564)">
                                </path>
                                <defs>
                                    <linearGradient id="paint0_linear_790_6564" x1="60.5555" y1="64.7219" x2="80.2778" y2="89.1663" gradientUnits="userSpaceOnUse">
                                        <stop></stop>
                                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_790_6564" x1="67.2225" y1="29.9996" x2="67.1109" y2="59.3748" gradientUnits="userSpaceOnUse">
                                        <stop></stop>
                                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                    </linearGradient></defs>
                            </svg>
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 dark:hidden">
                                <path d="M50 99.9996C77.6142 99.9996 100 77.6139 100 49.9996C100 22.3854 77.6142 -0.000366211 50 -0.000366211C22.3858 -0.000366211 0 22.3854 0 49.9996C0 77.6139 22.3858 99.9996 50 99.9996Z" fill="black">
                                </path>
                                <path d="M83.06 87.511L38.4122 29.9996H30V69.983H36.7298V38.546L77.7773 91.5803C79.6294 90.3405 81.394 88.9804 83.06 87.511Z" fill="url(#paint0_linear_790_2961)">
                                </path>
                                <path d="M70.5558 29.9996H63.8892V69.9996H70.5558V29.9996Z" fill="url(#paint1_linear_790_2961)">
                                </path>
                                <defs>
                                    <linearGradient id="paint0_linear_790_2961" x1="60.5555" y1="64.7219" x2="80.2778" y2="89.1663" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white"></stop>
                                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_790_2961" x1="67.2225" y1="29.9996" x2="67.1109" y2="59.3748" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white"></stop>
                                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                                    </linearGradient></defs>
                            </svg>
                        </p>
                        <p className="cursor-pointer" data-state="closed">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                                <path d="M50.0002 20.0005C36.6665 20.0005 28.3334 26.6655 24.9996 39.9942C30.0002 33.3292 35.8337 30.8308 42.4999 32.4964C46.3039 33.4468 49.0224 36.2065 52.0323 39.2602C56.9341 44.2345 62.6075 49.9917 75.0009 49.9917C88.3334 49.9917 96.6677 43.3267 100 29.9967C95.0009 36.6617 89.1674 39.1614 82.4999 37.4958C78.6973 36.5454 75.9787 33.7856 72.9689 30.732C68.067 25.7576 62.3924 20.0005 50.0002 20.0005ZM24.9996 49.9917C11.6671 49.9917 3.33274 56.6567 0.000244141 69.9866C4.99962 63.3217 10.8331 60.822 17.5006 62.4888C21.3032 63.4405 24.0218 66.199 27.0316 69.2514C31.9335 74.2257 37.6081 79.9841 50.0002 79.9841C63.334 79.9841 71.6671 73.3191 75.0009 59.9892C70.0002 66.6542 64.1668 69.1538 57.5006 67.487C53.6966 66.5379 50.9781 63.7768 47.9682 60.7244C43.0664 55.7501 37.393 49.9917 24.9996 49.9917Z" fill="#06B6D4"></path>
                            </svg>
                        </p>
                        <p className="cursor-pointer" data-state="closed">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                                <path d="M0 0.000488281H100V100H0V0.000488281Z" fill="#017ACB"></path>
                                <path d="M48.0157 37.0317H52.8126V45.313H39.8438V82.1567L39.5 82.2505C39.0313 82.3755 32.8594 82.3755 31.5313 82.2349L30.4688 82.1411V45.313H17.5V37.0317L21.6094 36.9849C23.8594 36.9536 29.6406 36.9536 34.4532 36.9849C39.2657 37.0161 45.3594 37.0317 48.0157 37.0317ZM84.6251 78.2505C82.7189 80.2661 80.672 81.3911 77.2657 82.313C75.7813 82.7192 75.5313 82.7349 72.1876 82.7192C68.8438 82.7036 68.5782 82.7036 66.9532 82.2817C62.7501 81.2036 59.3594 79.0942 57.0469 76.1099C56.3907 75.2661 55.3126 73.5161 55.3126 73.2974C55.3126 73.2349 55.4688 73.0942 55.6719 73.0005C55.8751 72.9067 56.2969 72.6411 56.6407 72.438C56.9844 72.2349 57.6094 71.8599 58.0313 71.6411C58.4532 71.4224 59.6719 70.7036 60.7345 70.063C61.797 69.4224 62.7657 68.9067 62.8751 68.9067C62.9845 68.9067 63.1876 69.1255 63.3438 69.3911C64.2813 70.9692 66.4688 72.9849 68.0157 73.6724C68.9688 74.0786 71.0782 74.5317 72.0938 74.5317C73.0313 74.5317 74.7501 74.1255 75.672 73.7036C76.6563 73.2505 77.1564 72.7974 77.7501 71.8911C78.1564 71.2505 78.2032 71.0786 78.1876 69.8599C78.1876 68.7349 78.1251 68.4224 77.8126 67.9067C76.9376 66.4692 75.7501 65.7192 70.9376 63.5942C65.9688 61.3911 63.7345 60.0786 61.9219 58.313C60.5782 57.0005 60.3126 56.6411 59.4688 55.0005C58.3751 52.8911 58.2344 52.2036 58.2188 49.063C58.2032 46.8599 58.2501 46.1411 58.4844 45.3911C58.8126 44.2661 59.8751 42.0942 60.3594 41.5474C61.3594 40.3755 61.7188 40.0161 62.422 39.438C64.547 37.688 67.8595 36.5317 71.0313 36.4224C71.3907 36.4224 72.5782 36.4849 73.6876 36.563C76.8751 36.8286 79.047 37.6099 81.1407 39.2817C82.7189 40.5317 85.1095 43.4692 84.8751 43.8599C84.7189 44.0942 78.4845 48.2505 78.0782 48.3755C77.8282 48.4536 77.6564 48.3599 77.3126 47.9536C75.1876 45.4067 74.3282 44.8599 72.2657 44.7349C70.797 44.6411 70.0157 44.813 69.0313 45.4692C68.0001 46.1567 67.5001 47.2036 67.5001 48.6567C67.5157 50.7817 68.3282 51.7817 71.3282 53.2661C73.2657 54.2192 74.922 55.0005 75.047 55.0005C75.2345 55.0005 79.2501 57.0005 80.297 57.6255C85.172 60.4849 87.1564 63.4224 87.672 68.4849C88.047 72.2974 86.9689 75.7817 84.6251 78.2505Z" fill="white"></path>
                            </svg>
                        </p>
                        <p className="cursor-pointer" data-state="closed">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                                <path d="M50.1455 0.27356L52.8141 5.28569C53.414 6.21062 54.064 7.02931 54.8295 7.79175C57.074 10.0082 59.1661 12.3739 61.0916 14.8725C65.6131 20.8095 68.6629 27.4028 70.8409 34.5335C72.1471 38.8894 72.8564 43.3578 72.9095 47.8763C73.1282 61.3846 68.4973 72.9838 59.1605 82.6237C57.6417 84.1524 56.001 85.5548 54.2546 86.8171C53.3296 86.8171 52.8922 86.1078 52.511 85.4547C51.8167 84.2437 51.3547 82.9137 51.1486 81.5331C50.8205 79.8989 50.6048 78.2646 50.7111 76.5772V75.8148C50.6361 75.6523 49.8205 0.657906 50.1455 0.27356Z" fill="#599636">
                                </path>
                                <path d="M50.1455 0.10799C50.0361 -0.110744 49.9268 0.0548687 49.8174 0.161111C49.8705 1.25478 49.4893 2.22971 48.8925 3.16089C48.2363 4.08582 47.3676 4.79514 46.4958 5.55759C41.6524 9.75103 37.8401 14.8163 34.7872 20.4815C30.725 28.1059 28.6314 36.2772 28.0377 44.8797C27.7659 47.9826 29.0189 58.9318 29.997 62.0909C32.6655 70.4778 37.4589 77.5054 43.6679 83.6049C45.1927 85.0736 46.8239 86.436 48.5113 87.7453C49.0018 87.7453 49.055 87.3078 49.1675 86.9828C49.3825 86.2874 49.5465 85.5773 49.658 84.858L50.7517 76.6898L50.1455 0.10799Z" fill="#6CAC48">
                                </path>
                                <path d="M52.814 90.1357C52.9234 88.8858 53.5234 87.8484 54.1765 86.8141C53.5203 86.5422 53.0328 86.0016 52.6516 85.3986C52.3228 84.8276 52.0507 84.2258 51.8391 83.6018C51.0767 81.3145 50.9142 78.9147 50.6955 76.5774V75.1619C50.4236 75.3806 50.3673 77.2305 50.3673 77.5054C50.2083 79.9758 49.8805 82.4324 49.3862 84.858C49.2237 85.8391 49.1143 86.8172 48.5112 87.689C48.5112 87.7984 48.5112 87.9077 48.5644 88.0702C49.5455 90.9575 49.8143 93.8979 49.9799 96.8945V97.9882C49.9799 99.2943 49.9268 99.0194 51.0111 99.4568C51.4485 99.6193 51.936 99.6756 52.3735 100.001C52.7016 100.001 52.7547 99.7287 52.7547 99.5099L52.5922 97.7132V92.7011C52.5391 91.8262 52.7016 90.9575 52.8109 90.1388L52.814 90.1357Z" fill="#C2BFBF">
                                </path>
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <button data-state="closed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-zinc-500 cursor-pointer dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300">
                                <polygon points="6 3 20 12 6 21 6 3"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}