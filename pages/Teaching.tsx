
import React from 'react';

const Course = ({ code, title, role, semester, description }: { code: string; title: string; role: string; semester: string; description: string }) => (
  <div className="p-8 bg-sky-50/50 border-l-4 border-orange-200 rounded-r-lg shadow-sm">
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
      <div>
        <span className="text-xs font-bold text-orange-400 uppercase tracking-widest block mb-1">{code}</span>
        <h3 className="text-2xl font-serif text-slate-900">{title}</h3>
      </div>
      <div className="text-right mt-2 md:mt-0">
        <span className="text-sm font-medium text-slate-500 block">{role}</span>
        <span className="text-xs text-slate-400 block italic">{semester}</span>
      </div>
    </div>
    <p className="text-slate-600 leading-relaxed font-light">{description}</p>
  </div>
);

const Teaching: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      <h2 className="text-4xl font-serif text-slate-900 mb-12">Teaching</h2>
      
      <div className="space-y-10">
        <section>
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 mb-6">Current Courses</h4>
          <div className="grid gap-6">
            <Course 
              code="ECON101" 
              title="Principles of Microeconomics" 
              role="Tutorial Lead" 
              semester="Autumn 2023"
              description="Leading weekly tutorials for first-year undergraduates, focusing on consumer theory and market equilibrium."
            />
          </div>
        </section>

        <section>
          <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 mb-6">Past Courses</h4>
          <div className="grid gap-6">
            <Course 
              code="HIST210" 
              title="Economic History of the British Isles" 
              role="Teaching Assistant" 
              semester="Spring 2022"
              description="Assisted in curriculum development and grading for a survey course covering the 17th to 20th centuries."
            />
            <Course 
              code="QUAN300" 
              title="Applied Econometrics for Social Science" 
              role="Lab Instructor" 
              semester="Winter 2021"
              description="Taught introductory Stata and R for quantitative data analysis in a laboratory setting."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Teaching;
