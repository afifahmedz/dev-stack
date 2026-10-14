import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="container mx-auto px-6 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
           
            <div className="flex-1 max-w-xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-tight">
                    Build Your Ideal
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-linear-to-r from-orange-500 via-pink-600 to-purple-700 bg-clip-text text-transparent mt-1 mb-6">
                    Development Stack
                </h1>
                
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>

              
                    <div className="flex flex-wrap items-center gap-4">
                    <button className="btn rounded-full border-none text-white font-medium bg-linear-to-r from-orange-500 to-pink-600 hover:opacity-95 shadow-md shadow-pink-500/20 px-6">
                        Explore Technologies
                    </button>
                    <button className="btn btn-outline rounded-full text-gray-700 font-medium border-gray-200 bg-white hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 px-6">
                        Learn More
                    </button>
                </div>
            </div>

            
            <div className="flex-1 flex justify-center lg:justify-end">
                <img 
                    src={BannerImg} 
                    alt="Banner" 
                 
                />
            </div>
        </section>
    );
};

export default Banner;