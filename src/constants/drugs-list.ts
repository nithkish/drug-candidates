import { DrugType } from "@/types/drug";

export const mockDrugsData: DrugType[] = [
  {
    id: "1",
    name: "Aspirin",
    status: "approved",
    description:
      "A common pain reliever and anti-inflammatory medication used to treat pain, fever, and inflammation. Also used as a blood thinner to prevent heart attacks and strokes.",
    category: "Analgesic",
    manufacturer: "Bayer Pharmaceuticals",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Ibuprofen",
    status: "approved",
    description:
      "Nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever and treat pain or inflammation caused by many conditions such as headache, toothache, back pain, arthritis, menstrual cramps, or minor injury.",
    category: "NSAID",
    manufacturer: "Pfizer Inc.",
    createdAt: "2024-01-16T14:20:00Z",
    updatedAt: "2024-01-16T14:20:00Z",
  },
  {
    id: "3",
    name: "Lisinopril",
    status: "approved",
    description:
      "Angiotensin-converting enzyme (ACE) inhibitor used to treat high blood pressure, heart failure, and to improve survival after heart attacks.",
    category: "ACE Inhibitor",
    manufacturer: "Merck & Co.",
    createdAt: "2024-01-17T09:15:00Z",
    updatedAt: "2024-01-17T09:15:00Z",
  },
  {
    id: "4",
    name: "Metformin",
    status: "approved",
    description:
      "First-line medication for the treatment of type 2 diabetes, particularly in people who are overweight. It works by decreasing glucose production by the liver and increasing insulin sensitivity.",
    category: "Antidiabetic",
    manufacturer: "Bristol-Myers Squibb",
    createdAt: "2024-01-18T11:45:00Z",
    updatedAt: "2024-01-18T11:45:00Z",
  },
  {
    id: "5",
    name: "Atorvastatin",
    status: "approved",
    description:
      "Statin medication used to lower cholesterol levels in the blood and reduce the risk of cardiovascular disease. It works by blocking an enzyme that the body needs to make cholesterol.",
    category: "Statin",
    manufacturer: "Pfizer Inc.",
    createdAt: "2024-01-19T16:30:00Z",
    updatedAt: "2024-01-19T16:30:00Z",
  },
  {
    id: "6",
    name: "Omeprazole",
    status: "approved",
    description:
      "Proton pump inhibitor that decreases stomach acid production. Used to treat acid reflux, ulcers, and other conditions caused by excess stomach acid.",
    category: "Proton Pump Inhibitor",
    manufacturer: "AstraZeneca",
    createdAt: "2024-01-20T13:20:00Z",
    updatedAt: "2024-01-20T13:20:00Z",
  },
  {
    id: "7",
    name: "Amlodipine",
    status: "approved",
    description:
      "Calcium channel blocker used to treat high blood pressure and chest pain (angina). It works by relaxing blood vessels so blood can flow more easily.",
    category: "Calcium Channel Blocker",
    manufacturer: "Pfizer Inc.",
    createdAt: "2024-01-21T08:45:00Z",
    updatedAt: "2024-01-21T08:45:00Z",
  },
  {
    id: "8",
    name: "Sertraline",
    status: "approved",
    description:
      "Selective serotonin reuptake inhibitor (SSRI) antidepressant used to treat depression, obsessive-compulsive disorder, panic disorder, and social anxiety disorder.",
    category: "Antidepressant",
    manufacturer: "Pfizer Inc.",
    createdAt: "2024-01-22T12:10:00Z",
    updatedAt: "2024-01-22T12:10:00Z",
  },
  {
    id: "9",
    name: "Albuterol",
    status: "approved",
    description:
      "Bronchodilator that relaxes muscles in the airways and increases air flow to the lungs. Used to treat and prevent bronchospasm in people with asthma or chronic obstructive pulmonary disease.",
    category: "Bronchodilator",
    manufacturer: "GlaxoSmithKline",
    createdAt: "2024-01-23T15:25:00Z",
    updatedAt: "2024-01-23T15:25:00Z",
  },
  {
    id: "10",
    name: "Hydrochlorothiazide",
    status: "approved",
    description:
      "Thiazide diuretic used to treat high blood pressure and fluid retention caused by various conditions. It works by causing the kidneys to get rid of unneeded water and salt from the body.",
    category: "Diuretic",
    manufacturer: "Merck & Co.",
    createdAt: "2024-01-24T10:50:00Z",
    updatedAt: "2024-01-24T10:50:00Z",
  },
  {
    id: "11",
    name: "Candesartan",
    status: "pending",
    description:
      "Angiotensin II receptor blocker (ARB) under review for treatment of high blood pressure and heart failure. Works by blocking the action of angiotensin II, a substance that narrows blood vessels.",
    category: "ARB",
    manufacturer: "Takeda Pharmaceutical",
    createdAt: "2024-02-01T09:30:00Z",
    updatedAt: "2024-02-01T09:30:00Z",
  },
  {
    id: "12",
    name: "Empagliflozin",
    status: "pending",
    description:
      "SGLT2 inhibitor under regulatory review for treatment of type 2 diabetes and heart failure. Works by causing the kidneys to remove more glucose from the blood.",
    category: "SGLT2 Inhibitor",
    manufacturer: "Boehringer Ingelheim",
    createdAt: "2024-02-02T14:15:00Z",
    updatedAt: "2024-02-02T14:15:00Z",
  },
  {
    id: "13",
    name: "Rivaroxaban",
    status: "in_dev",
    description:
      "Direct oral anticoagulant currently in clinical trials for extended use in preventing blood clots. Works by blocking a protein called factor Xa, which is involved in blood clotting.",
    category: "Anticoagulant",
    manufacturer: "Bayer Pharmaceuticals",
    createdAt: "2024-02-03T11:20:00Z",
    updatedAt: "2024-02-03T11:20:00Z",
  },
  {
    id: "14",
    name: "Dapagliflozin",
    status: "in_dev",
    description:
      "SGLT2 inhibitor in phase III clinical trials for treatment of chronic kidney disease. Shows promise in reducing proteinuria and slowing kidney function decline.",
    category: "SGLT2 Inhibitor",
    manufacturer: "AstraZeneca",
    createdAt: "2024-02-04T16:40:00Z",
    updatedAt: "2024-02-04T16:40:00Z",
  },
  {
    id: "15",
    name: "Tofacitinib",
    status: "in_dev",
    description:
      "JAK inhibitor in clinical trials for treatment of moderate to severe ulcerative colitis. Works by blocking the activity of enzymes that cause inflammation.",
    category: "JAK Inhibitor",
    manufacturer: "Pfizer Inc.",
    createdAt: "2024-02-05T13:55:00Z",
    updatedAt: "2024-02-05T13:55:00Z",
  },
  {
    id: "16",
    name: "Dupilumab",
    status: "rejected",
    description:
      "Monoclonal antibody that was rejected for treatment of severe asthma due to safety concerns. Works by blocking interleukin-4 and interleukin-13, proteins that cause inflammation.",
    category: "Monoclonal Antibody",
    manufacturer: "Regeneron Pharmaceuticals",
    createdAt: "2024-01-10T08:20:00Z",
    updatedAt: "2024-01-25T17:30:00Z",
  },
  {
    id: "17",
    name: "Varenicline",
    status: "rejected",
    description:
      "Nicotine receptor partial agonist that was rejected for smoking cessation due to psychiatric side effects. Designed to reduce nicotine cravings and withdrawal symptoms.",
    category: "Smoking Cessation",
    manufacturer: "Pfizer Inc.",
    createdAt: "2024-01-12T10:45:00Z",
    updatedAt: "2024-01-28T14:15:00Z",
  },
  {
    id: "18",
    name: "Rofecoxib",
    status: "rejected",
    description:
      "COX-2 inhibitor that was rejected due to increased risk of heart attack and stroke. Was previously used to treat pain and inflammation in conditions like osteoarthritis.",
    category: "COX-2 Inhibitor",
    manufacturer: "Merck & Co.",
    createdAt: "2023-06-15T12:00:00Z",
    updatedAt: "2023-12-01T09:30:00Z",
  },
  {
    id: "19",
    name: "Vioxx",
    status: "rejected",
    description:
      "Nonsteroidal anti-inflammatory drug that was withdrawn from the market due to cardiovascular safety concerns. Was used to treat pain and inflammation.",
    category: "NSAID",
    manufacturer: "Merck & Co.",
    createdAt: "2023-05-20T15:30:00Z",
    updatedAt: "2023-11-15T11:45:00Z",
  },
  {
    id: "20",
    name: "Thalidomide",
    status: "rejected",
    description:
      "Sedative and anti-nausea medication that was rejected due to severe birth defects. Now used under strict controls for certain conditions like multiple myeloma.",
    category: "Immunomodulator",
    manufacturer: "Celgene Corporation",
    createdAt: "2023-04-10T09:15:00Z",
    updatedAt: "2023-10-20T16:20:00Z",
  },
];

// Helper function to get drugs by status
export const getDrugsByStatus = (status: DrugType["status"]) => {
  return mockDrugsData.filter((drug) => drug.status === status);
};

// Helper function to search drugs by name
export const searchDrugsByName = (searchTerm: string) => {
  return mockDrugsData.filter((drug) =>
    drug.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

// Helper function to get drugs by category
export const getDrugsByCategory = (category: string) => {
  return mockDrugsData.filter((drug) =>
    drug.category.toLowerCase().includes(category.toLowerCase())
  );
};
