// Illustrative sample data for the landing-page demo only.
// Facility names and prices are fictional and do not reflect real providers.

export type Procedure = { id: string; name: string; code: string };

export type Plan = {
  id: string;
  name: string;
  deductibleLeft: number | null;
  coinsurance: number;
};

export type Facility = {
  id: number;
  name: string;
  type: string;
  miles: number;
  rating: number;
  // prices[procedureId] = [cash price, insurer-negotiated rate]
  prices: Record<string, [number, number]>;
};

export const procedures: Procedure[] = [
  { id: "mri-knee", name: "MRI of the knee (no contrast)", code: "CPT 73721" },
  { id: "colonoscopy", name: "Screening colonoscopy", code: "CPT 45378" },
  { id: "ct-head", name: "CT scan of the head", code: "CPT 70450" },
  { id: "blood-panel", name: "Comprehensive metabolic panel", code: "CPT 80053" },
  { id: "xray-chest", name: "Chest X-ray (2 views)", code: "CPT 71046" },
];

export const plans: Plan[] = [
  { id: "cash", name: "Self-pay / cash", deductibleLeft: null, coinsurance: 1 },
  { id: "ppo", name: "PPO — $500 deductible left, 20% coinsurance", deductibleLeft: 500, coinsurance: 0.2 },
  { id: "hdhp", name: "High-deductible — $2,500 left, 30% coinsurance", deductibleLeft: 2500, coinsurance: 0.3 },
];

export const facilities: Facility[] = [
  {
    id: 1, name: "Riverside Imaging Center", type: "Independent imaging", miles: 3.2, rating: 4.7,
    prices: { "mri-knee": [450, 610], "ct-head": [295, 380], "xray-chest": [45, 70] },
  },
  {
    id: 2, name: "St. Elm Regional Hospital", type: "Hospital outpatient", miles: 1.4, rating: 4.1,
    prices: { "mri-knee": [2850, 1980], colonoscopy: [3400, 2450], "ct-head": [1650, 1200], "blood-panel": [180, 95], "xray-chest": [290, 210] },
  },
  {
    id: 3, name: "Lakeview Medical Center", type: "Hospital outpatient", miles: 6.8, rating: 4.5,
    prices: { "mri-knee": [1900, 1350], colonoscopy: [2600, 1750], "ct-head": [980, 760], "blood-panel": [120, 62], "xray-chest": [160, 120] },
  },
  {
    id: 4, name: "Northgate Ambulatory Surgery", type: "Surgery center", miles: 4.9, rating: 4.8,
    prices: { colonoscopy: [1250, 1100] },
  },
  {
    id: 5, name: "Cedar Community Clinic", type: "Community clinic", miles: 2.1, rating: 4.3,
    prices: { "blood-panel": [28, 35], "xray-chest": [60, 85] },
  },
  {
    id: 6, name: "University Health Downtown", type: "Academic medical center", miles: 8.5, rating: 4.9,
    prices: { "mri-knee": [3200, 2300], colonoscopy: [3900, 2900], "ct-head": [1900, 1450], "blood-panel": [210, 110], "xray-chest": [340, 240] },
  },
];

// Estimate what the patient actually pays, given their plan.
export function estimateOutOfPocket(cash: number, negotiated: number, plan: Plan): number {
  if (plan.deductibleLeft === null) return cash;
  const towardDeductible = Math.min(plan.deductibleLeft, negotiated);
  return Math.round(towardDeductible + (negotiated - towardDeductible) * plan.coinsurance);
}
