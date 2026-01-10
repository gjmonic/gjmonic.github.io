
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center animate-fadeIn">
      <div className="relative mb-12 group">
        <div className="absolute inset-0 bg-orange-100 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <div className="w-64 h-80 overflow-hidden arch-top border-4 border-white shadow-xl relative">
          <img 
            src="images/profile.jpg" 
            alt="George Marten" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Fallback if the local image is missing
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/georgemarten/600/800";
            }}
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-300 rotate-45 border-4 border-white shadow-md"></div>
      </div>
      
      <div className="max-w-2xl text-center space-y-8">
        <header>
          <h1 className="text-5xl font-serif text-slate-900 mb-2">George Marten</h1>
          <p className="text-orange-400 uppercase tracking-widest text-sm font-semibold">PhD Student in Economics at Heriot-Watt University</p>
        </header>

        <div className="space-y-6 text-lg leading-relaxed text-slate-700 font-light">
          <p>
            Welcome to my website. Have a look around!
          </p>
          
          <div className="h-px w-24 bg-sky-200 mx-auto my-8"></div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="p-6 bg-white/50 border border-sky-100 rounded-lg">
              <h3 className="font-serif text-xl text-slate-900 mb-3 border-b border-orange-100 pb-2">Research Summary</h3>
              <ul className="space-y-2 text-base">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-300 rounded-full"></span>
                  <span>I study the century following the First Industrial Revolution </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-300 rounded-full"></span>
                  <span>Focused on mutual insurance, co-operative production, microfinance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-300 rounded-full"></span>
                  <span>I recently digitised Friendly Society Returns to Parliament 1855-1880</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-white/50 border border-sky-100 rounded-lg">
              <h3 className="font-serif text-xl text-slate-900 mb-3 border-b border-orange-100 pb-2">My Approach</h3>
              <p className="text-base">
                I am interested in documenting lessons from British and Irish economic history using applied microeconometrics. 
                I use modern empirical methods to unpick formative historical episodes in order to test persistent political economy ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
