// ============================================================================
// MOCK DATA — South African QSR (Quick Service Restaurant) Intelligence Dashboard
// Replace any of these arrays with live API data later. Shapes are kept
// flat and predictable on purpose so a real data source can drop straight in.
// ============================================================================

export const provinces = [
  'Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape',
  'Free State', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape'
]

export const qsrBrands = [
  'KFC', "Nando's", 'Steers', 'Chicken Licken', 'Debonairs Pizza',
  "Romans Pizza", 'Wimpy', "McDonald's", 'Burger King', 'Fishaways'
]

export const marketingChannels = [
  'TV', 'Radio', 'Outdoor', 'Meta', 'Google', 'YouTube', 'TikTok', 'X',
  'Programmatic Display', 'Sponsorships', 'In-Store Activations'
]

export const digitalChannels = ['Meta', 'Google', 'YouTube', 'TikTok', 'X', 'Programmatic Display']

export const channelTypeNames = ['Dine-in', 'Drive-Thru', 'Delivery', 'Takeaway']

export const lsmSegments = [
  'LSM 1–4 (Lower)', 'LSM 5–6 (Emerging middle)', 'LSM 7–8 (Middle)', 'LSM 9–10 (Upper)'
]

export const consumerGroups = [
  'Students', 'Young professionals', 'Families', 'Shift workers',
  'Delivery-first households', 'Price-sensitive shoppers', 'Premium treat-seekers'
]

export const priceTiers = ['Value tier', 'Standard tier', 'Premium tier']

export const deliveryPlatforms = ['Mr D Food', 'Uber Eats', 'Bolt Food']

// ----------------------------------------------------------------------------
// Ad spend by brand (last 12 months, ZAR) — sample/estimated
// ----------------------------------------------------------------------------
export const adSpendByBrand = [
  { brand: 'KFC', adSpend: 214_600_000, marketingSpend: 268_900_000, digitalShare: 0.49, momChange: 3.4 },
  { brand: "Nando's", adSpend: 168_300_000, marketingSpend: 201_700_000, digitalShare: 0.58, momChange: 5.9 },
  { brand: 'Steers', adSpend: 142_800_000, marketingSpend: 179_400_000, digitalShare: 0.52, momChange: 2.7 },
  { brand: 'Chicken Licken', adSpend: 131_500_000, marketingSpend: 163_200_000, digitalShare: 0.61, momChange: 8.1 },
  { brand: 'Debonairs Pizza', adSpend: 118_900_000, marketingSpend: 148_600_000, digitalShare: 0.55, momChange: 4.3 },
  { brand: "Romans Pizza", adSpend: 76_400_000, marketingSpend: 95_100_000, digitalShare: 0.63, momChange: 9.6 },
  { brand: 'Wimpy', adSpend: 61_200_000, marketingSpend: 78_800_000, digitalShare: 0.44, momChange: 1.2 },
  { brand: "McDonald's", adSpend: 189_700_000, marketingSpend: 236_500_000, digitalShare: 0.57, momChange: -0.6 },
  { brand: 'Burger King', adSpend: 97_300_000, marketingSpend: 121_900_000, digitalShare: 0.60, momChange: 6.8 },
  { brand: 'Fishaways', adSpend: 42_100_000, marketingSpend: 53_600_000, digitalShare: 0.46, momChange: 2.9 }
]

// ----------------------------------------------------------------------------
// Marketing spend by channel (ZAR, current month) — sample/estimated
// ----------------------------------------------------------------------------
export const marketingSpendByChannel = [
  { channel: 'TV', spend: 241_800_000, isDigital: false },
  { channel: 'Radio', spend: 118_400_000, isDigital: false },
  { channel: 'Outdoor', spend: 96_700_000, isDigital: false },
  { channel: 'In-Store Activations', spend: 84_200_000, isDigital: false },
  { channel: 'Sponsorships', spend: 61_900_000, isDigital: false },
  { channel: 'Meta', spend: 198_500_000, isDigital: true },
  { channel: 'Google', spend: 164_300_000, isDigital: true },
  { channel: 'TikTok', spend: 152_900_000, isDigital: true },
  { channel: 'YouTube', spend: 118_600_000, isDigital: true },
  { channel: 'Programmatic Display', spend: 94_100_000, isDigital: true },
  { channel: 'X', spend: 47_800_000, isDigital: true }
]

// ----------------------------------------------------------------------------
// Monthly ad spend trend — 12 months, digital vs traditional (ZAR millions)
// ----------------------------------------------------------------------------
export const monthlyAdSpendTrend = [
  { month: 'Jul 2025', digital: 498, traditional: 452, total: 950 },
  { month: 'Aug 2025', digital: 512, traditional: 448, total: 960 },
  { month: 'Sep 2025', digital: 531, traditional: 441, total: 972 },
  { month: 'Oct 2025', digital: 549, traditional: 456, total: 1005 },
  { month: 'Nov 2025', digital: 578, traditional: 471, total: 1049 },
  { month: 'Dec 2025', digital: 634, traditional: 512, total: 1146 },
  { month: 'Jan 2026', digital: 601, traditional: 468, total: 1069 },
  { month: 'Feb 2026', digital: 612, traditional: 459, total: 1071 },
  { month: 'Mar 2026', digital: 629, traditional: 463, total: 1092 },
  { month: 'Apr 2026', digital: 648, traditional: 471, total: 1119 },
  { month: 'May 2026', digital: 671, traditional: 478, total: 1149 },
  { month: 'Jun 2026', digital: 697, traditional: 486, total: 1183 }
]

// ----------------------------------------------------------------------------
// Social trends — platform, hashtag, mentions, sentiment, growth, related brands
// ----------------------------------------------------------------------------
export const socialTrends = [
  { platform: 'TikTok', topic: 'Value meal hacks', hashtag: '#ValueMealHack', mentions: 52_400, sentiment: 0.61, growth: 27.8, relatedBrands: ['KFC', 'Chicken Licken', 'Debonairs Pizza'] },
  { platform: 'TikTok', topic: 'Peri-peri flavour', hashtag: '#PeriPeriChallenge', mentions: 44_100, sentiment: 0.74, growth: 19.3, relatedBrands: ["Nando's"] },
  { platform: 'TikTok', topic: 'Load-shedding meals', hashtag: '#LoadsheddingLunch', mentions: 31_800, sentiment: 0.22, growth: 33.6, relatedBrands: ['KFC', 'Steers', 'Wimpy'] },
  { platform: 'TikTok', topic: 'Combo deal reviews', hashtag: '#ComboDealSA', mentions: 28_600, sentiment: 0.58, growth: 14.1, relatedBrands: ['Burger King', "McDonald's"] },
  { platform: 'X', topic: 'Drive-thru wait times', hashtag: '#DriveThruFail', mentions: 39_700, sentiment: -0.48, growth: 11.2, relatedBrands: ['KFC', "McDonald's", 'Burger King'] },
  { platform: 'X', topic: 'Price increases', hashtag: '#FastFoodPrices', mentions: 47_300, sentiment: -0.55, growth: 21.4, relatedBrands: ['KFC', 'Steers', "McDonald's"] },
  { platform: 'X', topic: 'Delivery app complaints', hashtag: '#MrDFail', mentions: 22_900, sentiment: -0.38, growth: 6.8, relatedBrands: ['Debonairs Pizza', "Romans Pizza"] },
  { platform: 'X', topic: 'Streetwise campaign chatter', hashtag: '#StreetwiseTwo', mentions: 34_500, sentiment: 0.52, growth: 9.7, relatedBrands: ['KFC'] },
  { platform: 'Meta', topic: 'Family bucket deals', hashtag: '#FamilyBucket', mentions: 41_200, sentiment: 0.49, growth: 5.9, relatedBrands: ['KFC', 'Chicken Licken'] },
  { platform: 'Meta', topic: 'Pizza Tuesday specials', hashtag: '#PizzaTuesday', mentions: 36_800, sentiment: 0.63, growth: 8.4, relatedBrands: ['Debonairs Pizza', "Romans Pizza"] },
  { platform: 'Meta', topic: 'Breakfast menu launch', hashtag: '#BreakfastWrapSA', mentions: 19_400, sentiment: 0.56, growth: 16.9, relatedBrands: ['Wimpy', "McDonald's"] },
  { platform: 'Meta', topic: 'Plant-based options', hashtag: '#PlantBasedSA', mentions: 15_700, sentiment: 0.44, growth: 24.6, relatedBrands: ['Burger King', "Nando's"] },
  { platform: 'TikTok', topic: 'Spicy chicken LTOs', hashtag: '#SpicyChickenSA', mentions: 33_100, sentiment: 0.67, growth: 22.1, relatedBrands: ['KFC', 'Chicken Licken', 'Burger King'] },
  { platform: 'X', topic: 'Flame-grilled campaign', hashtag: '#FlameGrilled', mentions: 24_600, sentiment: 0.51, growth: 7.3, relatedBrands: ['Steers'] },
  { platform: 'TikTok', topic: 'Loaded fries trend', hashtag: '#LoadedFriesSA', mentions: 29_900, sentiment: 0.59, growth: 18.5, relatedBrands: ['Burger King', "McDonald's", 'Steers'] },
  { platform: 'Meta', topic: 'Fishaways seafood specials', hashtag: '#FishawaysSA', mentions: 9_800, sentiment: 0.53, growth: 4.2, relatedBrands: ['Fishaways'] }
]

// ----------------------------------------------------------------------------
// Load-shedding stage — 12 month trend (national average stage, 0–6)
// ----------------------------------------------------------------------------
export const loadSheddingTrend = [
  { month: 'Jul 2025', avgStage: 2.1 },
  { month: 'Aug 2025', avgStage: 2.4 },
  { month: 'Sep 2025', avgStage: 1.8 },
  { month: 'Oct 2025', avgStage: 1.5 },
  { month: 'Nov 2025', avgStage: 1.2 },
  { month: 'Dec 2025', avgStage: 0.9 },
  { month: 'Jan 2026', avgStage: 1.4 },
  { month: 'Feb 2026', avgStage: 2.0 },
  { month: 'Mar 2026', avgStage: 2.6 },
  { month: 'Apr 2026', avgStage: 3.1 },
  { month: 'May 2026', avgStage: 2.8 },
  { month: 'Jun 2026', avgStage: 2.3 }
]

export const currentLoadSheddingStage = loadSheddingTrend[loadSheddingTrend.length - 1].avgStage
export const loadSheddingStageMomChange =
  ((currentLoadSheddingStage - loadSheddingTrend[loadSheddingTrend.length - 2].avgStage) /
    loadSheddingTrend[loadSheddingTrend.length - 2].avgStage) * 100

// ----------------------------------------------------------------------------
// Channel sensitivity to load-shedding — estimated revenue impact per stage
// estimated_impact_pct = stage * stageSensitivity
// ----------------------------------------------------------------------------
const rawChannelImpact = [
  { channelType: 'Dine-in', backupPowerDependency: 82, stageSensitivity: -3.4, direction: 'decrease' },
  { channelType: 'Drive-Thru', backupPowerDependency: 74, stageSensitivity: -2.6, direction: 'decrease' },
  { channelType: 'Delivery', backupPowerDependency: 45, stageSensitivity: 1.8, direction: 'increase' },
  { channelType: 'Takeaway', backupPowerDependency: 38, stageSensitivity: 0.6, direction: 'resilient' }
]

export function computeChannelImpact(stage = currentLoadSheddingStage) {
  return rawChannelImpact.map(c => ({
    ...c,
    estimatedRevenueImpact: Math.round(c.stageSensitivity * stage * 10) / 10
  }))
}

export const channelImpact = computeChannelImpact()

// ----------------------------------------------------------------------------
// Consumer segments (LSM) — channel preference index (0–100)
// ----------------------------------------------------------------------------
export const consumerSegments = lsmSegments.map((segment, i) => ({
  segment,
  dineIn: [22, 41, 58, 76][i],
  driveThru: [31, 54, 68, 61][i],
  delivery: [9, 28, 57, 84][i],
  takeaway: [64, 59, 48, 32][i]
}))

// ----------------------------------------------------------------------------
// Channel intent by consumer group (score 0–100)
// ----------------------------------------------------------------------------
export const channelIntent = consumerGroups.map(group => {
  const base = {
    'Students': { dineIn: 38, driveThru: 44, delivery: 61, takeaway: 71 },
    'Young professionals': { dineIn: 49, driveThru: 52, delivery: 78, takeaway: 55 },
    'Families': { dineIn: 72, driveThru: 68, delivery: 44, takeaway: 51 },
    'Shift workers': { dineIn: 21, driveThru: 79, delivery: 38, takeaway: 66 },
    'Delivery-first households': { dineIn: 12, driveThru: 24, delivery: 91, takeaway: 33 },
    'Price-sensitive shoppers': { dineIn: 34, driveThru: 46, delivery: 29, takeaway: 74 },
    'Premium treat-seekers': { dineIn: 68, driveThru: 41, delivery: 56, takeaway: 38 }
  }[group]
  return { group, ...base }
})

// ----------------------------------------------------------------------------
// Executive KPIs — derived summary values
// ----------------------------------------------------------------------------
export const executiveKpis = {
  totalAdSpend: adSpendByBrand.reduce((sum, b) => sum + b.adSpend, 0),
  totalAdSpendMom: 4.6,
  totalMarketingSpend: adSpendByBrand.reduce((sum, b) => sum + b.marketingSpend, 0),
  totalMarketingSpendMom: 3.9,
  digitalAdSpendShare: marketingSpendByChannel.filter(c => c.isDigital).reduce((s, c) => s + c.spend, 0) /
    marketingSpendByChannel.reduce((s, c) => s + c.spend, 0),
  digitalAdSpendShareMom: 3.2,
  avgSpeedOfServiceSeconds: 198,
  avgSpeedOfServiceMom: -4.1,
  avgOrderValue: 84.60,
  avgOrderValueMom: 2.3,
  digitalOrderMixShare: 0.41,
  digitalOrderMixShareMom: 5.8,
  currentLoadSheddingStage,
  loadSheddingStageMomChange,
  comboPurchaseInterest: 79,
  comboPurchaseInterestMom: 3.1,
  plantBasedInterest: 34,
  plantBasedInterestMom: 11.6,
  valueMealAffordabilityIndex: 57,
  valueMealAffordabilityIndexMom: -4.8
}

// ----------------------------------------------------------------------------
// Auto-generated insight cards
// ----------------------------------------------------------------------------
export const insights = [
  {
    id: 1,
    title: 'Delivery gains ground during load-shedding',
    body: 'Delivery order share rises an estimated 1.8% per load-shedding stage as dine-in and drive-thru volumes soften, with delivery-first households the fastest-growing segment.',
    tag: 'Load-Shedding Impact',
    tone: 'neutral'
  },
  {
    id: 2,
    title: 'Value meal hacks driving TikTok growth',
    body: 'Value meal content is the fastest-growing food topic on TikTok this month, up 27.8%, as price-sensitive shoppers look for combo deals.',
    tag: 'Social Trends',
    tone: 'positive'
  },
  {
    id: 3,
    title: 'Chicken Licken and Romans Pizza lead spend growth',
    body: 'Chicken Licken (+8.1%) and Romans Pizza (+9.6%) posted the fastest month-on-month ad spend growth of any tracked brand.',
    tag: 'Advertising Spend',
    tone: 'positive'
  },
  {
    id: 4,
    title: 'Drive-thru wait times drawing complaints',
    body: 'Drive-thru wait time complaints are up on X, with KFC, McDonald\'s and Burger King most frequently mentioned in negative sentiment posts.',
    tag: 'Social Trends',
    tone: 'negative'
  },
  {
    id: 5,
    title: 'Plant-based interest climbing from a low base',
    body: 'Plant-based menu interest is up 11.6% month-on-month, still a small share of total demand but growing fastest among young professionals.',
    tag: 'Consumer Behaviour',
    tone: 'positive'
  },
  {
    id: 6,
    title: 'Value meal affordability under pressure',
    body: 'The value meal affordability index has slipped to 57, down 4.8% month-on-month, as menu price increases outpace wage growth for lower LSM segments.',
    tag: 'Consumer Behaviour',
    tone: 'negative'
  }
]

export const whatChangedThisMonth = {
  headline: 'Digital ad spend crossed 58% of total spend for the first time this year',
  points: [
    'Load-shedding averaged Stage 2.3 nationally, up from Stage 2.8 the prior month.',
    "Nando's ad spend grew 5.9% MoM, outpacing most other tracked brands.",
    'Digital order mix rose to 41% of total orders, up 5.8% MoM.',
    'Value meal affordability index fell to 57, the lowest reading in six months.'
  ]
}
