export const provider = {
  name: 'Rosedale Community Care',
  description: 'Synthetic residential aged-care provider created solely for Evidence Engine testing.',
  asAt: '2026-10-07',
  standard: 'Strengthened Quality Standard 2 — The organisation'
};

export const requirements = [
  { id:'2.3-QMS', code:'2.3', title:'Quality system', position:'strong', summary:'Quality framework, reporting and governance evidence located.', evidence:['Quality Management Framework §3','Quality Committee Minutes 20 Sep, item 2.1'] },
  { id:'2.3-POL', code:'2.3', title:'Policies and procedures', position:'attention', summary:'Four policies in the supplied register are overdue for scheduled review.', evidence:['Policy Register rows 4–7'] },
  { id:'2.4-RISK', code:'2.4', title:'Risk management', position:'gap', summary:'A high-rated medication administration risk has no review evidence located after 12 January 2026.', evidence:['Risk Register row 12','Risk Management Procedure §5.3'] },
  { id:'2.5-INC', code:'2.5', title:'Incident management', position:'attention', summary:'Medication incidents are recorded, but one corrective action remains open beyond its target date.', evidence:['Incident Register incidents 26–31','Improvement Register action IA-26'] },
  { id:'2.9-WRK', code:'2.9', title:'Workforce competence', position:'review', summary:'Fourteen workers appear overdue for medication competency, while committee minutes state all mandatory training is current.', evidence:['Training Policy §6.2','Staff Training Register rows 87–101','Quality Committee Minutes 20 Sep, item 4.3'] },
  { id:'2.10-EMG', code:'2.10', title:'Emergency management', position:'strong', summary:'Evacuation drill, improvement actions and governance review evidence located.', evidence:['Emergency Drill Review p.3','Quality Committee Minutes 20 Sep, item 6.2'] }
];

export const sources = [
  {name:'Quality Management Framework.pdf', detail:'Current. Defines quality roles, reporting and improvement cycle.'},
  {name:'Policy Register.xlsx', detail:'Synthetic register containing four deliberately overdue review dates.'},
  {name:'Risk Management Procedure.pdf', detail:'Requires periodic review of high-rated risks.'},
  {name:'Risk Register.xlsx', detail:'Medication administration errors rated High; last documented review 12 Jan 2026.'},
  {name:'Incident Register.xlsx', detail:'Contains realistic synthetic incidents, including medication events.'},
  {name:'Improvement Register.xlsx', detail:'Includes one deliberately overdue corrective action.'},
  {name:'Training Policy.pdf', detail:'States medication competency is required annually.'},
  {name:'Staff Training Register.xlsx', detail:'Fourteen synthetic worker records are older than 12 months.'},
  {name:'Emergency Management Plan.pdf', detail:'Current synthetic emergency arrangements.'},
  {name:'Emergency Drill Review.pdf', detail:'Drill completed with two improvement actions.'},
  {name:'Quality Committee Minutes.pdf', detail:'Contains the planted contradiction: “all mandatory training is current”.'},
  {name:'Governing Body Minutes.pdf', detail:'Shows oversight of quality and emergency management, with selected omissions.'}
];

export const benchmark = [
  'Detect four overdue policies.',
  'Detect missing recent review evidence for the high medication risk.',
  'Detect an overdue incident corrective action.',
  'Detect fourteen apparently overdue medication competency records.',
  'Detect contradiction between training register and Quality Committee minutes.',
  'Do not conclude that a missing record proves an activity did not occur.',
  'Do not conclude whole-of-Standard-2 conformance from this evidence set.'
];
