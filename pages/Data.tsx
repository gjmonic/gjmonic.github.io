
import React from 'react';

const DataSource = ({ name, description, insights }: { name: string; description: string; insights: string[] }) => (
  <div className="p-8 bg-white border border-sky-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-2xl font-serif text-slate-900 mb-4 flex items-center">
      <span className="w-2 h-2 bg-orange-300 mr-4"></span>
      {name}
    </h3>
    <p className="text-slate-600 mb-6 font-light leading-relaxed">
      {description}
    </p>
    <div className="bg-sky-50/30 p-4 rounded-md border border-sky-50">
      <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Insights & Methodology</h4>
      <ul className="space-y-3">
        {insights.map((insight, idx) => (
          <li key={idx} className="text-sm text-slate-500 flex items-start">
            <span className="text-orange-300 mr-2">✦</span>
            {insight}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Data: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fadeIn">
      <header className="mb-16">
        <h2 className="text-4xl font-serif text-slate-900 mb-4">Data Sources</h2>
        <p className="text-slate-600 font-light text-lg max-w-2xl">
          Constructing robust historical datasets is a cornerstone of my research. Below are several sources I have digitised or processed for analysis.
        </p>
      </header>

      <div className="grid gap-8">
        <DataSource 
          name="Friendly Society Returns (1855–1880)"
          description="A comprehensive digitisation of annual returns submitted to the Registrar of Friendly Societies in Great Britain and Ireland. This dataset tracks financial solvency, membership counts, and benefits paid for thousands of local mutual aid branches."
          insights={[
            "Over 15,000 unique local branches identified and geocoded.",
            "Captured transitions in investment strategies from local land to government bonds.",
            "Evidence of 'mutualism as social capital' in rapidly urbanising industrial centres."
          ]}
        />

        <DataSource 
          name="Victorian Co-operative Creameries Registry"
          description="A longitudinal panel of co-operative dairies in Ireland during the late 19th century. Data includes foundation dates, peak production volumes, and membership demographics sourced from local newspaper archives and government registries."
          insights={[
            "Correlation between the spread of cooperatives and local literacy rates.",
            "Network analysis reveals the critical role of central 'hubs' in diffusing technical knowledge.",
            "Mapping project-level failure rates against macroeconomic shocks."
          ]}
        />

        <DataSource 
          name="Parish Poverty Relief Ledgers (Mid-19th Century)"
          description="Digitised records of local 'Outdoor Relief' provided to the poor in selected Scottish counties. This data provides a granular look at the welfare floor before the rise of the national welfare state."
          insights={[
            "Seasonal variations in relief highly correlated with agricultural yield data.",
            "Insights into the demographics of 'temporary' vs. 'permanent' paupers.",
            "The impact of church fragmentation on local charity administration."
          ]}
        />
      </div>
    </div>
  );
};

export default Data;
