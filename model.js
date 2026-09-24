export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const draft = {
  revenue: [55500, 63000, 69500, 80500, 68000, 73500, 60000, 91500, 113500, 124000, 103500, 87000],
  direct: [-4000, -5955, -6250, -6152.5, -4805, -8025, -1125, -4550, -13770, -8497.5, -10240, -3825],
  opex: [-24725, -24225, -24225, -25525, -23225, -22725, -21225, -22225, -24725, -25225, -24225, -22725],
};

export const priorYear = {
  revenue: [44500, 50500, 45500, 63500, 43000, 29000, 15000, 33000, 60500, 65500, 40000, 38500],
};

export const employeeControls = {
  annaRevenueLines: {
    corporateManagement: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    salesTraining: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    openSeats: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  ellaProductivityRamp: [0, 0, 0, 0, 0, 0.25, 0.5, 1, 1, 1, 1, 1],
  externalInstructorRate: MONTHS.map((_, index) => index < 6 ? 700 : 770),
  assistantRateMultiplier: 0.25,
};

export const fixedCostAssumptions = {
  salesBaseMonthly: 1800,
  salesHeadcount: [4, 4, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4],
  deliveryCoordinationMonthly: 2500,
  administrationMonthly: 2000,
  employerCostRate: 0.25,
  rentUtilitiesMonthly: 1800,
  softwareMonthly: 450,
  accountingLegalMonthly: 600,
  adminTravelMonthly: 350,
  otherMonthly: 350,
  interestMonthly: 250,
  insuranceAnnual: 1800,
  existingDepreciationMonthly: 800,
  fitoutCost: 25000,
  fitoutUsefulLifeMonths: 60,
};

export const salesPayroll = MONTHS.map((_, index) => {
  const fixedSalaries = fixedCostAssumptions.salesHeadcount[index] * fixedCostAssumptions.salesBaseMonthly + fixedCostAssumptions.deliveryCoordinationMonthly + fixedCostAssumptions.administrationMonthly;
  return fixedSalaries * (1 + fixedCostAssumptions.employerCostRate);
});
export const payrollOpexDelta = salesPayroll.map((value, index) => -(value - (4 * fixedCostAssumptions.salesBaseMonthly + fixedCostAssumptions.deliveryCoordinationMonthly + fixedCostAssumptions.administrationMonthly) * (1 + fixedCostAssumptions.employerCostRate)));
export const studioDepreciationMonthly = fixedCostAssumptions.fitoutCost / fixedCostAssumptions.fitoutUsefulLifeMonths;
export const fixedOverheadAssumptions = MONTHS.map(() => ({
  rentUtilities: fixedCostAssumptions.rentUtilitiesMonthly,
  software: fixedCostAssumptions.softwareMonthly,
  accountingLegal: fixedCostAssumptions.accountingLegalMonthly,
  adminTravel: fixedCostAssumptions.adminTravelMonthly,
  other: fixedCostAssumptions.otherMonthly,
  interest: fixedCostAssumptions.interestMonthly,
  insurance: fixedCostAssumptions.insuranceAnnual / 12,
  existingDepreciation: fixedCostAssumptions.existingDepreciationMonthly,
  fitoutDepreciation: 0,
}));
fixedOverheadAssumptions.forEach((item, index) => { if (index >= 4) item.fitoutDepreciation = studioDepreciationMonthly; });

export const programRegister = [
  ["Jan", "Standard corporate", 2, 20, 5000, 2250, 2750], ["Jan", "Open", 1, 18, 3600, 1750, 1850],
  ["Feb", "Large corporate", 2, 60, 10200, 4860, 5340], ["Feb", "Standard corporate", 1, 18, 2500, 1095, 1405],
  ["Mar", "Standard corporate", 2, 20, 5000, 2550, 2450], ["Mar", "Open", 2, 20, 10000, 3700, 6300],
  ["Apr", "Standard corporate", 2, 20, 5000, 2500, 2500], ["Apr", "Large corporate", 1, 90, 7050, 3652.5, 3397.5],
  ["May", "Standard corporate", 1, 20, 2500, 1125, 1375], ["May", "Open", 2, 18, 10800, 3680, 7120],
  ["Jun", "Standard corporate", 2, 20, 5000, 2650, 2350], ["Jun", "Large corporate", 2, 70, 11500, 5375, 6125],
  ["Jul", "Standard corporate", 1, 20, 2500, 1125, 1375], ["Aug", "Standard corporate", 2, 20, 5000, 2750, 2250],
  ["Aug", "Open", 1, 20, 4000, 1800, 2200], ["Sep", "Large corporate", 2, 100, 15400, 7420, 7980],
  ["Sep", "Standard corporate", 2, 20, 5000, 2550, 2450], ["Sep", "Open", 2, 20, 12000, 3800, 8200],
  ["Oct", "Standard corporate", 2, 20, 5000, 2250, 2750], ["Oct", "Large corporate", 1, 50, 4450, 2547.5, 1902.5],
  ["Oct", "Open", 2, 20, 10000, 3700, 6300], ["Nov", "Standard corporate", 2, 20, 5000, 2500, 2500],
  ["Nov", "Large corporate", 2, 80, 12800, 5940, 6860], ["Nov", "Open", 1, 20, 4000, 1800, 2200],
  ["Dec", "Standard corporate", 1, 20, 2500, 1125, 1375], ["Dec", "Standard corporate", 2, 20, 5000, 2700, 2300],
];

export const sources = [
  { id: "brief", title: "00 Start Here Budget Review Assignment.docx", detail: "Part 1 and Part 2 rules; keep original evidence unchanged." },
  { id: "background", title: "01 Company Background and Management Targets.docx", detail: "Prices, delivery rules, open-program catalogue and board requirements." },
  { id: "workbook", title: "02 Historical Results and Draft P&L Budget.xlsx", detail: "Sheets 01–08 source budgets; Sheets 09–13 are the review model surfaces." },
  { id: "sales", title: "03 Sales Director Plan.docx", detail: "Sales cycle, revenue timing and sales-team claims." },
  { id: "marketing", title: "04 Marketing Director Plan.docx", detail: "Campaign calendar and untested conversion assumptions." },
  { id: "ops", title: "05 Operations and Trainer Plan.docx", detail: "Trainer, assistant, room and event-capacity constraints." },
  { id: "hr", title: "06 HR and Personnel Plan.docx", detail: "Employment dates, Ella's ramp-up and Anna's exit." },
  { id: "finance", title: "07 Finance and Administration Notes.docx", detail: "Supplier rate increase, fit-out depreciation and operating-cost rules." },
];

const zero = () => [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export const strategyDecisions = [
  { action: "Reallocate Anna's Big Chair Bank and other key accounts to Mark / contractor", startMonth: "Jun", cost: "10% commission on recovered revenue", effect: "Recover €10,000 per month from June after an eight-week handover; no recovery is booked before June.", evidence: "06 HR and Personnel Plan · Anna exit; 03 Sales Director Plan · 6–8 week sales cycle", rationale: "Only a conservative portion of the named account pipeline is recovered after handover; Part 1 leaves Anna's March–December revenue lines at zero.", leadTimeMonths: 2, revenueDelta: [0, 0, 0, 0, 0, 10000, 10000, 10000, 10000, 10000, 10000, 10000], directDelta: [0, 0, 0, 0, 0, -1000, -1000, -1000, -1000, -1000, -1000, -1000], opexDelta: zero(), deliveryDays: 0, participants: 0, programType: "Corporate", trainerBooked: true, roomReady: true, approved: true },
  { action: "Shift €15,000 from underperforming marketing into targeted search and executive breakfasts", startMonth: "Apr", cost: "€15,000 reallocation; net annual OpEx unchanged", effect: "Q2 channel test with a 6–8 week measurement lag; no unproven revenue uplift is booked.", evidence: "04 Marketing Director Plan · campaign calendar; 07 Draft Operating Costs!D11:O11", rationale: "The decision changes channel mix without manufacturing conversion; any future uplift requires evidence after the lag period.", leadTimeMonths: 2, revenueDelta: zero(), directDelta: zero(), opexDelta: zero(), deliveryDays: 0, participants: 0, programType: "Corporate", trainerBooked: true, roomReady: true, approved: true },
  { action: "Use internal senior instructor capacity before external trainers", startMonth: "Jan", cost: "No incremental fixed cost", effect: "Remove external instructor fees from retained calendar days within monthly internal capacity.", evidence: "05 Operations and Trainer Plan · 12/6/8/14/12 day rules; 07 Finance · €700/€770", rationale: "The retained register stays within capacity; assistant and other direct costs remain explicit.", revenueDelta: zero(), directDelta: [2100, 2100, 2800, 2100, 2100, 2800, 770, 2310, 3080, 3850, 2310, 2310], opexDelta: zero(), deliveryDays: 0, participants: 0, programType: "Corporate", trainerBooked: true, roomReady: true, approved: true },
  { action: "Enforce Ella Fast ramp and supervised selling gate", startMonth: "May", cost: "No incremental cost; payroll already corrected in Part 1", effect: "May 0%, June 25%, July 50%, August onward 100% productivity.", evidence: "06 HR and Personnel Plan · Ella Fast status; 03 Sales Director Plan · first meaningful contracts June", rationale: "The control prevents premature productivity assumptions and explicitly blocks all pre-August full productivity.", leadTimeMonths: 0, revenueDelta: zero(), directDelta: zero(), opexDelta: zero(), deliveryDays: 0, participants: 0, programType: "Corporate", trainerBooked: true, roomReady: true, approved: true },
  { action: "Require board gate for placeholder programmes", startMonth: "Jan", cost: "No incremental cost", effect: "Do not budget unsupported revenue without client, date, trainer, room and direct-cost evidence.", evidence: "05 Operations and Trainer Plan · calendar note; 00 Start Here · Part 2", rationale: "This protects the capacity cap and keeps Sheet 12 auditable.", revenueDelta: zero(), directDelta: zero(), opexDelta: zero(), deliveryDays: 0, participants: 0, programType: "Corporate", trainerBooked: true, roomReady: true, approved: true },
];

export const initialState = { part1: [
  { name: "Correct revenue to named programme register", owner: "Sales / Operations", category: "Revenue evidence", source: "05 Draft Sales Budget!D23:P23; 06 Draft Program Plan!J34", rationale: "The draft assigns €989,500 of delivery-month revenue, while named programmes support €170,800.", revenueDelta: [-46900, -50300, -54500, -68450, -54700, -57000, -57500, -82500, -81100, -104550, -81700, -79500], directDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], opexDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { name: "Zero Anna Power revenue lines from 1 March", owner: "HR / Sales", category: "Employment timing", source: "06 HR and Personnel Plan · Anna Power resignation 28 February", rationale: "Corporate Management, Sales Training and Open Seats attributed to Anna are all €0 from March–December; only a separately documented Part 2 handover may recover revenue.", revenueLines: employeeControls.annaRevenueLines, revenueDelta: [0, 0, 0, 0, 0, 0, 0, 0, -15400, 0, -5000, 0], directDelta: [0, 0, 0, 0, 0, 0, 0, 0, 7420, 0, 2500, 0], opexDelta: zero() },
  { name: "Apply Ella Fast 0% / 25% / 50% / 100% ramp", owner: "HR / Sales", category: "Ramp timing", source: "06 HR and Personnel Plan · Ella Fast onboarding and supervised ramp", rationale: "The model uses the explicit monthly ramp: May 0%, June 25%, July 50%, August–December 100%; no full productivity is assumed before August.", productivityRamp: employeeControls.ellaProductivityRamp, revenueDelta: [0, 0, 0, 0, 0, -3750, 0, 0, 0, 0, 0, 0], directDelta: zero(), opexDelta: zero() },
  { name: "Apply external instructor rate increase", owner: "Finance / Operations", category: "Direct cost", source: "07 Finance and Administration Notes · Supplier rates; 06 Draft Program Plan!K7:M32", rationale: "The supplier rate rises 10% from 1 July; assistants also use one quarter of the current-period rate.", revenueDelta: zero(), directDelta: [0, 0, 0, 0, 0, 0, -70, -210, -385, -367.5, -350, -210], opexDelta: zero() },
  { name: "Add training-studio depreciation", owner: "Finance", category: "Operating expense", source: "07 Finance and Administration Notes · Supplier rates and operating costs", rationale: "The €25,000 fit-out is ready 1 May and depreciates over five years.", revenueDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], directDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], opexDelta: [0, 0, 0, -0, -416.67, -416.67, -416.67, -416.67, -416.67, -416.67, -416.67, -416.67] },
  { name: "Correct sales payroll for Anna exit and Ella start", owner: "HR / Finance", category: "Timing", source: "06 HR and Personnel Plan · Person status; 07 Draft Operating Costs!D7:O10", rationale: "Anna leaves 28 February and Ella starts 1 May, so March and April have three active sales employees; the delta is formula-derived from €1,800 base pay plus 25% employer cost.", revenueDelta: zero(), directDelta: zero(), opexDelta: payrollOpexDelta },
], decisions: strategyDecisions };

export const opexBreakdown = [
  { label: "Sales salaries", value: 86400 }, { label: "Delivery team", value: 30000 }, { label: "Administration", value: 24000 },
  { label: "Employer payroll", value: 35100 }, { label: "Marketing", value: 53500 }, { label: "Rent & utilities", value: 21600 },
  { label: "Software", value: 5400 }, { label: "Accounting & legal", value: 7200 }, { label: "Insurance", value: 1800 },
  { label: "Admin travel", value: 4200 }, { label: "Depreciation", value: 9600 }, { label: "Interest", value: 3000 }, { label: "Other", value: 3200 },
];

export function sum(values) { return values.reduce((total, value) => total + (Number.isFinite(value) ? value : 0), 0); }
export function addSeries(...series) { const flattened = series.flatMap((item) => Array.isArray(item) && Array.isArray(item[0]) ? item : [item]); return MONTHS.map((_, i) => flattened.reduce((total, values) => total + (Number(values?.[i]) || 0), 0)); }
export function monthIndex(month) { return MONTHS.indexOf(month); }
export function blankSeries() { return MONTHS.map(() => null); }

export function calculatePnl({ revenue = blankSeries(), direct = blankSeries(), opex = blankSeries() }) {
  const complete = revenue.every(Number.isFinite) && direct.every(Number.isFinite) && opex.every(Number.isFinite);
  const contribution = addSeries(revenue, direct);
  const operatingProfit = addSeries(contribution, opex);
  return { revenue, direct, contribution, opex, operatingProfit, complete, totals: {
    revenue: sum(revenue), direct: sum(direct), contribution: sum(contribution), opex: sum(opex), operatingProfit: sum(operatingProfit),
  }};
}

export function buildFromDraft(corrections = [], approvedDecisions = []) {
  const p1 = calculatePnl({
    revenue: addSeries(draft.revenue, corrections.map((item) => item.revenueDelta || blankSeries())),
    direct: addSeries(draft.direct, corrections.map((item) => item.directDelta || blankSeries())),
    opex: addSeries(draft.opex, corrections.map((item) => item.opexDelta || blankSeries())),
  });
  const p2 = calculatePnl({
    revenue: addSeries(p1.revenue, approvedDecisions.map((item) => item.revenueDelta || blankSeries())),
    direct: addSeries(p1.direct, approvedDecisions.map((item) => item.directDelta || blankSeries())),
    opex: addSeries(p1.opex, approvedDecisions.map((item) => item.opexDelta || blankSeries())),
  });
  return { p1, p2 };
}

export function priceProgram(type, days, participants, seatPrice = 0) {
  if (type === "Open") return participants * seatPrice;
  if (type === "Large corporate") { const cappedParticipants = Math.min(Math.max(0, participants), 100); return (2500 + Math.ceil(Math.max(0, cappedParticipants - 20) / 10) * 650) * days; }
  return 2500 * days;
}

export function directCost({ type, days, participants, month, travel = 0, seatPrice = 0 }) {
  const rate = employeeControls.externalInstructorRate[monthIndex(month)];
  const assistants = type === "Large corporate" ? Math.max(0, Math.ceil(participants / 30) - 1) : 0;
  const revenue = priceProgram(type, days, participants, seatPrice);
  return { instructor: days * rate, assistants: assistants * days * rate * employeeControls.assistantRateMultiplier, venue: type === "Open" ? days * 600 : 0, materials: days * participants * 15, commission: revenue * 0.05, travel, total: days * rate + assistants * days * rate * employeeControls.assistantRateMultiplier + (type === "Open" ? days * 600 : 0) + days * participants * 15 + revenue * 0.05 + travel };
}

export function capacityChecks(events = programRegister) {
  const senior = { Jan: 12, Feb: 12, Mar: 12, Apr: 12, May: 12, Jun: 12, Jul: 6, Aug: 8, Sep: 14, Oct: 14, Nov: 12, Dec: 12 };
  const days = Object.fromEntries(MONTHS.map((month) => [month, 0]));
  const assistants = Object.fromEntries(MONTHS.map((month) => [month, 0]));
  const openSeats = Object.fromEntries(MONTHS.map((month) => [month, 0]));
  events.forEach(([month, type, deliveryDays, participants]) => {
    days[month] += deliveryDays;
    assistants[month] += type === "Large corporate" ? deliveryDays * Math.max(0, Math.ceil(participants / 30) - 1) : 0;
    openSeats[month] += type === "Open" ? participants : 0;
  });
  return MONTHS.map((month) => ({ month, days: days[month], capacity: senior[month], trainerOver: days[month] > senior[month], assistantDays: assistants[month], assistantOver: assistants[month] > 4, openSeats: openSeats[month], openOver: openSeats[month] > 20 }));
}

export function feasibilityChecks(decisions = strategyDecisions, events = programRegister) {
  const capacity = capacityChecks(events);
  return decisions.map((decision) => {
    const index = monthIndex(decision.startMonth);
    const month = capacity[index] || { month: decision.startMonth, capacity: 0, days: 0, assistantDays: 0, openSeats: 0 };
    const salesTiming = decision.action.includes("Anna") ? index >= 5 : true;
    const conversionDiscipline = decision.action.includes("marketing") ? !decision.revenueDelta?.some((value) => value > 0) : true;
    const requestedDays = Number(decision.deliveryDays || 0);
    const requestedAssistants = decision.programType === "Large corporate" ? Math.max(0, Math.ceil(Number(decision.participants || 0) / 30) - 1) * requestedDays : 0;
    const roomOk = decision.programType !== "Open" || Number(decision.participants || 0) <= 20;
    const seniorOk = month.days + requestedDays <= month.capacity || requestedDays === 0;
    const assistantOk = month.assistantDays + requestedAssistants <= 4 || requestedAssistants === 0;
    return { action: decision.action, month: decision.startMonth, pass: salesTiming && conversionDiscipline && roomOk && seniorOk && assistantOk, salesTiming, conversionDiscipline, roomOk, seniorOk, assistantOk, detail: [!salesTiming && "Anna recovery starts before the eight-week handover", !conversionDiscipline && "Marketing decision books uplift without a stated ramp", !roomOk && "Open programme exceeds 20 paid seats", !seniorOk && "Senior instructor capacity exceeded", !assistantOk && "Regular assistant capacity exceeded"].filter(Boolean) };
  });
}

export function revenueTimingChecks(events = programRegister) {
  return events.map(([month, type, days, participants, revenue]) => ({ month, type, days, participants, revenue, status: "Assumption", detail: "The named delivery register supports delivery-month recognition; qualifying-conversation dates were not supplied, so no earlier pipeline timing is invented." }));
}

export function validateDecision(item) {
  const required = ["action", "startMonth", "cost", "effect", "evidence", "revenueDelta", "directDelta", "opexDelta"];
  const missing = required.filter((key) => item[key] === undefined || item[key] === null || item[key] === "");
  return { valid: missing.length === 0, missing };
}
