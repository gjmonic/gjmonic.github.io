import React, { useState } from 'react';

const SectionHeader = ({ title }: { title: string }) => (
  <div className="mt-8 mb-4">
    <div className="w-full h-[1px] bg-slate-300 mb-1"></div>
    <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900">{title}</h3>
  </div>
);

const EducationItem = ({ inst, degree, date, field }: { inst: string, degree: string, date: string, field: string }) => (
  <div className="grid grid-cols-12 gap-2 text-sm mb-2">
    <div className="col-span-4 font-medium">{degree}, {field}</div>
    <div className="col-span-5 italic text-slate-600">{inst}</div>
    <div className="col-span-3 text-right tabular-nums">{date}</div>
  </div>
);

const PaperItem = ({ number, title, detail, link }: { number: number, title: string, detail?: string, link?: string }) => (
  <div className="flex gap-4 text-sm mb-4">
    <div className="w-4 flex-shrink-0 text-slate-400">{number}.</div>
    <div>
      <div className="font-medium">
        "{title}" {link && <a href={link} className="text-sky-500 hover:text-orange-400 ml-1">link</a>}
      </div>
      {detail && <div className="italic text-slate-500 mt-1">{detail}</div>}
    </div>
  </div>
);

const TeachingItem = ({ inst, role, courses }: { inst: string, role: string, courses: { name: string, date: string }[] }) => (
  <div className="mb-4 text-sm">
    <div className="font-bold mb-1">{role}, {inst}</div>
    {courses.map((c, i) => (
      <div key={i} className="flex justify-between pl-4 mb-0.5">
        <span className="text-slate-700">{c.name}</span>
        <span className="text-slate-400 tabular-nums">{c.date}</span>
      </div>
    ))}
  </div>
);

const CV: React.FC = () => {
  const [showLatex, setShowLatex] = useState(false);

  // Updated to georgemarten.net
  const latexCode = `% Academic CV LaTeX Template - George Marten
\\documentclass[11pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[margin=1in]{geometry}
\\usepackage{hyperref}
\\usepackage{titlesec}
\\usepackage{enumitem}

% Section formatting
\\titleformat{\\section}{\\small\\bfseries\\uppercase}{}{0pt}{}[\\titlerule]
\\titlespacing*{\\section}{0pt}{1.5ex plus .1ex minus .2ex}{1pc}

\\begin{document}
\\begin{center}
    {\\huge \\textbf{George J. Marten}} \\\\[0.5em]
    Email: \\href{mailto:gjm2004@hw.ac.uk}{gjm2004@hw.ac.uk} \\\\
    Webpage: \\href{https://georgemarten.net}{georgemarten.net} \\\\
    Edinburgh Business School, Heriot-Watt University
\\end{center}

\\section{Education}
\\noindent Ph.D., Economics, Heriot-Watt University \\hfill (expected) 2026 \\\\
\\noindent M.Sc., Economics, University of Edinburgh \\hfill 2022 \\\\
\\noindent B.Sc., Economics, Royal Holloway College \\hfill 2020

\\section{Research Interests}
\\noindent Political Economy of Welfare Systems, Friendly Societies, English Poor Laws, Co-operation, Applied Econometrics.

\\section{Working Papers}
\\begin{enumerate}[label=\\arabic*., leftmargin=2em]
    \\item \`\`Mutual Insurance and the Industrial Revolution: Evidence from Friendly Society Returns\'\'
    \\item \`\`The Political Economy of Co-operative Production in Victorian Ireland\'\' \\\\
    \\textit{with Eoin McLaughlin}
\\end{enumerate}

\\section{Teaching Experience}
\\textbf{Teaching Assistant, Heriot-Watt University} \\\\
Intermediate Economics 2 (MSc) \\hfill 2025 \\\\
The Economy (1) \\hfill 2021--2023

\\section{Awards and Fellowships}
\\noindent Full PhD Scholarship, Centre for Social \\& Economic Data Analytics \\hfill 2023--2026 \\\\
\\noindent Economics Prize, St. Crispin's Secondary School \\hfill 2017

\\vfill
\\begin{flushright}
\\footnotesize Updated on \\today
\\end{flushright}
\\end{document}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(latexCode).then(() => {
      alert('LaTeX source code copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="max-w-4xl mx-auto animate-fadeIn pb-20 px-4">
      <div className="bg-white shadow-xl p-8 md:p-16 border border-slate-200 min-h-[1100px] text-slate-900 font-serif leading-relaxed">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">George J. Marten</h1>
          <div className="text-sm space-y-1 text-slate-600">
            <p>Email: <a href="mailto:gjm2004@hw.ac.uk" className="text-sky-600 hover:underline">gjm2004@hw.ac.uk</a></p>
            <p>Webpage: <a href="https://georgemarten.net" className="text-sky-600 hover:underline">georgemarten.net</a></p>
            <p>Edinburgh Business School, Heriot-Watt University</p>
          </div>
        </header>

        <SectionHeader title="Education" />
        <div className="space-y-1">
          <EducationItem inst="Heriot-Watt University" degree="Ph.D." field="Economics" date="(expected) 2026" />
          <EducationItem inst="University of Edinburgh" degree="M.Sc." field="Economics" date="2022" />
          <EducationItem inst="Royal Holloway College" degree="B.Sc." field="Economics" date="2020" />
        </div>

        <SectionHeader title="Research Interests" />
        <p className="text-sm text-slate-700">
          Political Economy of Welfare Systems, Friendly Societies in Britain 19th Century, English Poor Laws Post-1834, Co-operation (both Irish and British), Emissions-Development Modelling, Applied Econometrics.
        </p>

        <SectionHeader title="Working Papers" />
        <PaperItem 
          number={1} 
          title="Mutual Insurance and the Industrial Revolution: Evidence from Friendly Society Returns" 
          detail="Job Market Paper"
        />
        <PaperItem 
          number={2} 
          title="The Political Economy of Co-operative Production in Victorian Ireland" 
          detail="with Eoin McLaughlin (R&R at Journal of Economic History)"
        />

        <SectionHeader title="Teaching and Research Experience" />
        <TeachingItem 
          inst="Heriot-Watt University" 
          role="Teaching Assistant" 
          courses={[
            { name: "Intermediate Economics 2 (MSc)", date: "2025" },
            { name: "The Economy (1)", date: "2021, 2022, 2023" },
            { name: "Introductory Economics (1)", date: "2021" }
          ]}
        />
        <TeachingItem 
          inst="University of Edinburgh" 
          role="Tutor in Economics" 
          courses={[
            { name: "Firms, Markets, and Competition (4)", date: "2022" },
            { name: "Statistical Methods for Economics (2)", date: "2021, 2022" },
            { name: "Economic Principles (1)", date: "2021, 2022" }
          ]}
        />

        <SectionHeader title="Awards and Fellowships" />
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Full scholarship for Ph.D. (Economics), CSED Analytics, Heriot-Watt</span>
            <span className="tabular-nums">2023–2026</span>
          </div>
          <div className="flex justify-between">
            <span>Economics Prize, St. Crispin’s Secondary School, Wokingham</span>
            <span className="tabular-nums">2017</span>
          </div>
        </div>

        <div className="mt-20 text-right text-[10px] text-slate-400 italic">
          Updated on {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>

      <div className="mt-12 max-w-2xl mx-auto">
        <button 
          onClick={() => setShowLatex(!showLatex)}
          className="w-full py-4 border-2 border-dashed border-sky-200 text-sky-400 hover:border-orange-300 hover:text-orange-400 transition-all font-serif italic text-lg rounded-lg bg-white/50"
        >
          {showLatex ? 'Hide LaTeX Source' : 'Show LaTeX Source (Matching Layout)'}
        </button>
        
        {showLatex && (
          <div className="mt-6 p-6 bg-slate-900 rounded-lg shadow-inner animate-fadeIn relative">
            <button 
              onClick={copyToClipboard}
              className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 text-white text-xs px-3 py-1 rounded transition-colors"
            >
              Copy Code
            </button>
            <pre className="text-sky-300 text-[10px] md:text-xs overflow-x-auto leading-relaxed whitespace-pre-wrap">
              {latexCode}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default CV;