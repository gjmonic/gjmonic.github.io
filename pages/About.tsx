
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto animate-fadeIn">
      <h2 className="text-4xl font-serif text-slate-900 mb-8 flex items-center">
        <span className="mr-4 w-12 h-px bg-orange-200"></span>
        About Me
      </h2>
      
      <div className="prose prose-slate prose-lg max-w-none text-slate-700 font-light leading-relaxed space-y-6">
        <p>
          I've been studying Economics continuously for over a decade, the most recent fifth of which has been 
          under the supervision of Eoin McLaughlin. This has helped me to engage with a latent long running 
          love of history which enriches my research, based in my training which has been largely based
          in the applications of microeconomics and econometrics. 
        </p>
        
        <p>
          Beyond my core research, I am an advocate for open-source scholarship and collaborative science. 
          I believe that the ivory tower should have more windows—and fewer doors. My work often involves 
          building public-facing digital archives that allow non-specialists to engage with primary source materials.
        </p>

        <blockquote className="border-l-4 border-orange-200 pl-6 italic font-serif text-xl text-slate-600 my-10">
          "History is not a burden on the memory, but an illumination of the soul."
        </blockquote>

        <p>
          Outside of research I enjoy exploring the beauty (and brutality!) of the Scottish Highlands: 
          here are some pictures from three of my favourite adventures!
        </p>

        <div className="grid grid-cols-3 gap-4 pt-10">
          <img src="images/IoR.jpg" alt="IoR" className="rounded-sm shadow-sm grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="images/CMD.jpg" alt="CMD" className="rounded-sm shadow-sm grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="images/CGM.jpg" alt="fire" className="rounded-sm shadow-sm grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </div>
    </div>
  );
};

export default About;
