
import React from 'react';

interface WorkingPaperProps {
  title: string;
  coAuthors?: string[];
  year: string;
  abstract?: string;
  tags: string[];
}

const WorkingPaper = ({ title, coAuthors, year, abstract, tags }: WorkingPaperProps) => {
  const [showAbstract, setShowAbstract] = React.useState(false);

  return (
    <div className="p-6 bg-white border border-sky-100 hover:border-orange-200 transition-colors shadow-sm rounded-lg group">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest text-orange-400 font-bold bg-orange-50 px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-serif text-slate-900 mb-1">{title}</h3>
      {coAuthors && coAuthors.length > 0 && (
        <p className="text-sm text-slate-500 mb-2">
          With: <span className="italic">{coAuthors.join(', ')}</span>
        </p>
      )}
      <p className="text-slate-400 text-sm mb-4 italic font-medium">{year}</p>
      
      {abstract && (
        <div className="mt-4">
          <button 
            onClick={() => setShowAbstract(!showAbstract)}
            className="text-xs font-bold text-sky-400 hover:text-orange-400 uppercase tracking-widest transition-colors flex items-center"
          >
            {showAbstract ? 'Hide Abstract' : 'Show Abstract'}
            <span className={`ml-2 transform transition-transform ${showAbstract ? 'rotate-180' : ''}`}>↓</span>
          </button>
          {showAbstract && (
            <p className="mt-4 text-sm text-slate-600 leading-relaxed font-light border-l-2 border-orange-100 pl-4 py-1">
              {abstract}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const Research: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <header className="mb-16">
        <h2 className="text-4xl font-serif text-slate-900 mb-4">Research</h2>
        <p className="text-slate-600 font-light max-w-2xl text-lg">
          My research applies microeconometric techniques to historical datasets, focusing on the evolution of mutualism and cooperative production in the 19th century.
        </p>
      </header>

      <div className="grid gap-12">
        <section>
          <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 mb-8 flex items-center">
            Working Papers
            <span className="ml-4 flex-grow h-px bg-sky-100"></span>
          </h3>
          <div className="grid gap-6">
            <WorkingPaper 
              title="Mutual Insurance and the Industrial Revolution: Evidence from Friendly Society Returns"
              year="2024"
              tags={['Economic History', 'Mutualism']}
              abstract="This paper uses newly digitised returns from 1855-1880 to examine how mutual insurance networks adapted to the shocks of late-stage industrialisation in Britain."
            />
            <WorkingPaper 
              title="The Political Economy of Co-operative Production in Victorian Ireland"
              coAuthors={['Eoin McLaughlin']}
              year="2023"
              tags={['Political Economy', 'Cooperatives']}
              abstract="We investigate the factors predicting the success of early co-operative creameries, highlighting the role of local political stability and existing credit networks."
            />
            <WorkingPaper 
              title="Digitising the Past: A New Dataset of British Friendly Society Financial Records"
              year="2023"
              tags={['Data Science', 'Methodology']}
              abstract="A methodological overview of the OCR and data cleaning pipeline developed to extract structured longitudinal data from Parliamentary returns."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;
