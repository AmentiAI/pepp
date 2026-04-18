import type { Product } from './products'

// Deterministic slug hash (FNV-1a 32-bit). Same slug → same variant choices, always.
// FNV-1a has strong avalanche: near-identical slugs (e.g. "ghk-cu-50mg" vs "ghk-cu-100mg")
// produce uncorrelated hash outputs, so modulo-picked variants don't collide.
export function hashSlug(slug: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return Math.abs(h | 0)
}

function pick<T>(slug: string, salt: number, arr: T[]): T {
  return arr[(hashSlug(slug) + salt) % arr.length]
}

// ─── Section ordering ──────────────────────────────────────────────────────
// The 4 middle content sections shuffle into one of 6 arrangements.
// "description" always leads, "research-findings" and "related" always trail.
export type SectionKey = 'benefits' | 'mechanism' | 'stacking' | 'quality'

const SECTION_ORDERS: SectionKey[][] = [
  ['benefits', 'mechanism', 'stacking', 'quality'],
  ['mechanism', 'benefits', 'quality', 'stacking'],
  ['benefits', 'stacking', 'mechanism', 'quality'],
  ['mechanism', 'stacking', 'benefits', 'quality'],
  ['benefits', 'quality', 'mechanism', 'stacking'],
  ['quality', 'mechanism', 'benefits', 'stacking'],
]

export function getSectionOrder(slug: string): SectionKey[] {
  return pick(slug, 0, SECTION_ORDERS)
}

// ─── Sidebar ordering ──────────────────────────────────────────────────────
export type SidebarKey = 'highlights' | 'ideal-for' | 'buy-box' | 'disclaimer'

const SIDEBAR_ORDERS: SidebarKey[][] = [
  ['highlights', 'ideal-for', 'buy-box', 'disclaimer'],
  ['buy-box', 'highlights', 'ideal-for', 'disclaimer'],
  ['ideal-for', 'highlights', 'buy-box', 'disclaimer'],
  ['highlights', 'buy-box', 'ideal-for', 'disclaimer'],
]

export function getSidebarOrder(slug: string): SidebarKey[] {
  return pick(slug, 7, SIDEBAR_ORDERS)
}

// ─── Prose variants ────────────────────────────────────────────────────────
// Each generator returns 1 of N genuinely different paragraph shapes.
// Facts (data from the Product) are identical; sentence structure + framing differ.

const lc = (s: string) => s ? s.charAt(0).toLowerCase() + s.slice(1) : s

export function getResearchContextParagraph(p: Product): string {
  const cat = p.category.toLowerCase()
  const ideal0 = p.idealFor[0]?.toLowerCase() ?? cat
  const h0 = p.researchHighlights[0]
  const variants = [
    // V0 — original "most studied compound" framing
    `As one of the most studied compounds in the ${cat} research space, ${p.shortName} has attracted sustained scientific interest across ${p.idealFor.slice(0, 3).join(', ')}. ${h0 ? `Peer-reviewed evidence indicates that ${lc(h0)}, which has positioned ${p.shortName} as a reference standard for researchers exploring ${ideal0} outcomes.` : `Its reproducible activity profile has made it a standard inclusion in ${cat} research panels across multiple independent laboratory groups.`} The compound's selectivity and documented tolerability in preclinical models have contributed to a rapidly growing body of literature over the past decade.`,

    // V1 — "literature growth" framing, opens differently
    `${p.shortName}'s presence in ${cat} research literature has expanded substantially over the last ten years, with publications spanning ${p.idealFor.slice(0, 3).join(', ')} and adjacent translational work. ${h0 ? `One consistent finding across the dataset is that ${lc(h0)} — a result that has been reproduced in multiple independent laboratory groups.` : `Reproducibility across independent labs has been a defining feature of the ${p.shortName} literature.`} That depth of coverage is part of why ${p.shortName} now appears in protocol designs well beyond its originally characterized use case.`,

    // V2 — "distinctive position / what sets apart" framing
    `Among ${cat} compounds currently under investigation, ${p.shortName} occupies a distinctive position: it is both well-characterized enough to serve as a reference standard and mechanistically interesting enough to anchor novel protocols. Researchers have applied it across ${p.idealFor.slice(0, 3).join(', ')}. ${h0 ? `A particularly cited finding is that ${lc(h0)}, which has shaped several follow-up study designs.` : `The selectivity profile documented in preclinical models continues to drive new study designs.`}`,

    // V3 — "peer-reviewed work spans" framing
    `Peer-reviewed work on ${p.shortName} spans multiple ${cat}-adjacent domains — ${p.idealFor.slice(0, 3).join(', ')} among them — and much of it traces back to the compound's reproducible activity profile in vitro and in preclinical models. ${h0 ? `The literature repeatedly returns to one observation: ${lc(h0)}.` : `Inter-laboratory reproducibility has been the dominant theme across the published dataset.`} That reliability is largely why ${p.shortName} remains a default inclusion in new ${cat} research panels.`,

    // V4 — direct, structural opening
    `What makes ${p.shortName} useful to ${cat} researchers is less any single dramatic finding and more the cumulative weight of the evidence across ${p.idealFor.slice(0, 3).join(', ')}. ${h0 ? `Reports consistently describe how ${lc(h0)}, which has given the compound a documented baseline that newer candidates are routinely measured against.` : `A documented baseline of consistent behavior gives newer compounds something to be measured against.`} The tolerability profile observed in preclinical work has further encouraged its inclusion in exploratory protocols.`,
  ]
  return pick(p.slug, 1, variants)
}

export function getMechanismExpansionParagraph(p: Product): string {
  const benefitTitles = p.benefits.slice(0, 3).map(b => b.title)
  const benefitInline = benefitTitles.length > 0 ? ` — ${benefitTitles.join(', ')} —` : ''
  const h1 = p.researchHighlights[1]
  const variants = [
    // V0
    `The ${p.benefits.length} primary research pathways identified for ${p.shortName}${benefitInline} collectively point to a compound with pleiotropic activity across interconnected biological systems. ${h1 ? `Studies have further shown that ${lc(h1)}, reinforcing the mechanistic picture established in earlier cell-line work.` : `This multi-target pharmacology means that research protocols can address several related endpoints simultaneously.`} Unlike single-pathway agents, ${p.shortName}'s broad receptor engagement profile continues to generate hypotheses for novel applications.`,

    // V1 — "converging mechanisms" framing
    `Mechanistically, the ${p.benefits.length} documented effects of ${p.shortName}${benefitInline} converge on a small set of upstream signaling nodes rather than acting through wholly independent pathways. ${h1 ? `This is consistent with reports that ${lc(h1)} — a finding more readily explained by shared upstream biology than by parallel mechanisms.` : `That convergence simplifies protocol design because dose-response behavior tends to be coherent across the various endpoints.`} The practical consequence for researchers is that a single well-titrated dose often captures multiple endpoints at once.`,

    // V2 — "question of mechanism" opening
    `The question of how ${p.shortName} produces its ${p.benefits.length} documented effects${benefitInline} has been addressed in a series of mechanistic studies that increasingly point toward receptor-level engagement followed by downstream transcriptional changes. ${h1 ? `Supporting this model, investigators have observed that ${lc(h1)} — a timing profile consistent with receptor–ligand kinetics.` : `The temporal profile of the observed effects is consistent with receptor–ligand kinetics rather than a nonspecific physicochemical action.`}`,

    // V3 — "pleiotropic without overlap" framing
    `${p.shortName}'s effect profile${benefitInline ? benefitInline.trim() : ''} looks pleiotropic at a glance but is cleaner than it appears: the underlying biology converges on a limited number of regulatory pathways that happen to sit upstream of several physiological endpoints. ${h1 ? `Illustrative of this is the report that ${lc(h1)}.` : `That upstream concentration of effect is why a single compound can appear to address several distinct research questions simultaneously.`} For protocol authors, it means fewer compounds are typically needed to cover a given research question.`,

    // V4 — "in practice" framing
    `In practice, the ${p.benefits.length} effects attributed to ${p.shortName}${benefitInline} rarely behave as independent variables. ${h1 ? `The literature notes, for instance, that ${lc(h1)}, which implies coordinated rather than parallel mechanisms.` : `They tend to move together in dose-response, which implies coordinated rather than parallel mechanisms.`} Researchers designing multi-endpoint studies around ${p.shortName} generally find that one dose titration produces a coherent picture across endpoints.`,
  ]
  return pick(p.slug, 2, variants)
}

export function getStackingParagraph(p: Product, relatedShortNames: string[]): string {
  const cat = p.category.toLowerCase()
  const ideal0 = p.idealFor[0]?.toLowerCase() ?? 'this area'
  const h2 = p.researchHighlights[2]
  const names = relatedShortNames.slice(0, 2)
  if (names.length === 0) {
    // Standalone variants
    const variants = [
      `${p.shortName} functions effectively as both a standalone reference compound and as part of larger ${cat} research panels. Its well-characterized ${ideal0} profile makes it a common inclusion in head-to-head comparative studies. Investigators designing multi-endpoint protocols often anchor a panel around ${p.shortName} due to its consistent inter-laboratory reproducibility.`,
      `Used alone, ${p.shortName} offers a clean signal-to-noise ratio that makes it useful for isolating ${ideal0}-specific effects without the confound of parallel-acting compounds. That isolation is why it frequently appears as the reference arm in comparative ${cat} protocols.`,
      `Most protocols that include ${p.shortName} treat it as an anchor rather than a pairing partner: the breadth of its published activity profile means a single arm of a study can address several ${cat} endpoints without requiring a second compound.`,
      `Researchers often select ${p.shortName} specifically because it performs reliably as a standalone. Inter-laboratory agreement on its baseline behavior makes it a low-variance control arm in ${cat} study designs.`,
    ]
    return pick(p.slug, 3, variants)
  }
  const nameList = names.join(' and ')
  const variants = [
    // V0
    `${p.shortName} is routinely studied alongside ${nameList} in ${cat}-focused compound panels. Researchers investigating ${ideal0} have found that pairing compounds with complementary receptor profiles can produce additive results while keeping individual doses within well-characterized ranges. ${h2 ? `Preliminary evidence that ${lc(h2)} has informed several of these multi-compound protocol designs.` : `This synergy-based methodology mirrors patterns now common in translational study design.`}`,

    // V1 — "why together" opening
    `The reason ${p.shortName} appears so often with ${nameList} in ${cat} protocols is pharmacological rather than marketing: the compounds engage non-overlapping receptor systems, so additive effects can be captured at sub-maximal doses of each individual agent. ${h2 ? `Work showing that ${lc(h2)} has been cited as justification for this pairing logic.` : `This is the same design principle behind most current ${cat} combination research.`}`,

    // V2 — "panel design" opening
    `When ${cat} panels include ${p.shortName}, they almost always include ${nameList} as well. The rationale is that no single compound in the set fully covers the ${ideal0} endpoint space, but the combination converges on it cleanly. ${h2 ? `Findings that ${lc(h2)} have shaped the dosing ratios typically used in these panels.` : `Dosing ratios in these panels are generally guided by the published single-compound kinetics of each constituent.`}`,

    // V3 — "tradeoff" framing
    `Pairing ${p.shortName} with ${nameList} lets researchers keep individual compound doses low while still hitting the full set of ${cat} endpoints of interest. ${h2 ? `The observation that ${lc(h2)} is often the specific justification cited for this pairing.` : `Lower per-compound dosing generally improves the cleanliness of the resulting dose-response data.`} The tradeoff is protocol complexity, which tends to be worth it on multi-endpoint studies.`,
  ]
  return pick(p.slug, 3, variants)
}

export function getQualityParagraph(p: Product): string {
  const variants = [
    // V0 — original
    `All ${p.shortName} research material offered through this catalog is manufactured under controlled conditions and independently verified by a third-party laboratory prior to release. Each lot undergoes High-Performance Liquid Chromatography (HPLC) analysis to confirm ≥98% purity, with identity confirmed via mass spectrometry. The accompanying Certificate of Analysis (CoA) documents the exact purity, molecular weight confirmation, and lot-specific testing date — data that should accompany any reproducible research protocol. Lyophilized powder formulation ensures maximum stability during shipping and storage at −20°C long-term or 4°C for short-term use.`,

    // V1 — lot-level framing
    `Lot-level documentation is the backbone of reproducible ${p.shortName} research. Every vial shipped from this catalog is tied to a specific manufacturing lot with its own HPLC purity trace (≥98%), mass-spectrometry-confirmed identity, and third-party CoA. The CoA includes the exact purity percentage, the molecular weight reference used, and the testing date — the three data points protocols typically require to remain auditable. Lyophilized powder format extends shelf stability and tolerates standard research-grade storage (−20°C long-term, 4°C short-term).`,

    // V2 — question-then-answer framing
    `What separates research-grade ${p.shortName} from general-purpose material is documentation rather than chemistry alone. The material shipped through this catalog undergoes HPLC analysis to verify ≥98% purity, mass-spec-based identity confirmation, and third-party testing before release. The lot-specific Certificate of Analysis that accompanies each order captures the purity reading, identity verification, and testing date in a form that can be referenced in protocol write-ups. The compound itself is supplied as lyophilized powder, stable under standard −20°C long-term and 4°C short-term storage.`,

    // V3 — process-narrative framing
    `From manufacture to shipping, each lot of ${p.shortName} passes through a documented chain: controlled synthesis, HPLC purity verification (≥98% threshold), mass-spectrometry identity confirmation, independent third-party audit, and finally a Certificate of Analysis that travels with the vial. That CoA — with purity, molecular weight, and lot date — is what distinguishes a usable research input from a nominal one. The lyophilized powder form chosen for this catalog keeps the compound stable during transit and at standard research-grade storage temperatures.`,
  ]
  return pick(p.slug, 4, variants)
}

// ─── Size-variant extra framing ────────────────────────────────────────────
// If this product shares a shortName with a different-sized sibling,
// prepend a sentence that explicitly differentiates its research use case.

export function getSizeVariantFraming(
  p: Product,
  allProducts: Product[],
): string | null {
  const siblings = allProducts.filter(
    o => o.shortName === p.shortName && o.slug !== p.slug,
  )
  if (siblings.length === 0) return null

  const parseMg = (s: string): number => {
    const m = s.match(/([\d.]+)/)
    return m ? parseFloat(m[1]) : 0
  }
  const thisMg = parseMg(p.size)
  const maxSibMg = Math.max(...siblings.map(s => parseMg(s.size)))
  const minSibMg = Math.min(...siblings.map(s => parseMg(s.size)))

  if (thisMg >= maxSibMg) {
    return `The ${p.size} vial of ${p.shortName} is positioned for extended research protocols and multi-site application studies where a single larger-volume lot reduces batch-to-batch variability. Researchers typically select this size for longitudinal designs lasting 8+ weeks or for parallel-arm studies where consistent lot provenance matters across treatment sites.`
  }
  if (thisMg <= minSibMg) {
    return `The ${p.size} vial of ${p.shortName} is designed as an entry point for exploratory protocols and single-endpoint studies where a smaller working quantity is preferred over commitment to a larger lot. It is the variant most commonly selected for pilot work, method development, and short-duration research passes.`
  }
  return `The ${p.size} vial of ${p.shortName} sits between the smallest and largest available quantities in this catalog and is typically selected for mid-scope research protocols where neither a pilot-scale vial nor a bulk-scale vial is a natural fit.`
}

// ─── Category-specific bonus block ─────────────────────────────────────────
// Returns a { heading, body } pair unique to each category; null if none.

export interface CategoryBonus {
  heading: string
  body: string
}

export function getCategoryBonus(p: Product): CategoryBonus | null {
  switch (p.categorySlug) {
    case 'skin-anti-aging':
      return {
        heading: `${p.shortName} Topical vs Subcutaneous Research Considerations`,
        body: `Skin-targeted ${p.shortName} research splits cleanly into topical-application and subcutaneous-delivery designs, and the two routes produce different pharmacokinetic and endpoint profiles. Topical protocols generally focus on dermal bioavailability, stratum-corneum penetration, and surface-layer transcriptional changes; subcutaneous protocols look at systemic distribution, half-life, and cross-tissue effects. Researchers should fix the delivery route at protocol design time — mixing data across routes tends to obscure effect sizes and confound dose-response curves.`,
      }
    case 'longevity':
      return {
        heading: `${p.shortName} in Telomere and Epigenetic Research Contexts`,
        body: `Within longevity research, ${p.shortName} is studied against a backdrop of telomere-length, epigenetic-clock, and senescent-cell endpoints — endpoints that typically require long observation windows and careful baseline characterization. Protocol designs in this space tend to favor repeated-measure sampling over single-timepoint comparisons because the underlying biology changes slowly and baseline variance is high. Researchers pairing ${p.shortName} with an epigenetic readout usually plan for at least one pre-treatment baseline and one late-stage follow-up sample per subject.`,
      }
    case 'recovery-healing':
      return {
        heading: `${p.shortName} Tissue Remodeling Timeline`,
        body: `Recovery and healing research on ${p.shortName} tends to be organized around a predictable tissue-remodeling timeline: an initial inflammatory and signaling phase (roughly 0–72 hours), a proliferative phase with angiogenesis and matrix deposition (1–3 weeks), and a remodeling phase where newly formed tissue is reorganized (3 weeks onward). Observable effect sizes look very different depending on which phase the measurement lands in. Protocol authors generally align their sampling schedule to this phase structure rather than to calendar intervals.`,
      }
    case 'growth-body-comp':
      return {
        heading: `${p.shortName} GH Pulse Architecture and Receptor Desensitization`,
        body: `Growth-hormone-axis research with ${p.shortName} has to account for two moving parts that purely body-composition endpoints will not reveal: the pulse architecture of endogenous GH secretion and the possibility of receptor-level desensitization across longer dosing cycles. Single-timepoint GH readings tend to be misleading because the axis is strongly pulsatile; downstream markers like IGF-1 integrate over longer windows and are usually the more stable readout. Cycle length and washout periods should be planned with desensitization risk in mind.`,
      }
    case 'metabolic-fat-loss':
      return {
        heading: `${p.shortName} Incretin Receptor Profile and Dose Escalation`,
        body: `Metabolic research involving ${p.shortName} is shaped by which incretin receptors (GLP-1, GIP, glucagon) the compound engages and in what ratio — a question that directly determines the tolerability-to-efficacy curve observed in the protocol. Dose escalation is the norm rather than the exception in this space because GI tolerability at full target dose is rare without a ramp. Researchers typically build in 2–4 week titration periods before initiating the measurement window, and weight/body-composition readings taken during titration are generally treated as baseline rather than as treatment data.`,
      }
    case 'bundles':
      return {
        heading: `${p.shortName} Blend Composition and Per-Compound Bioequivalence`,
        body: `Blend-format research material introduces a characterization question that single-compound vials do not: the per-compound concentration within the lyophilized mixture and whether the measured ratio matches the labeled ratio within an acceptable tolerance band. The CoA for ${p.shortName} includes per-component breakdown so that downstream dose calculations can be performed on the active-ingredient basis rather than on total vial mass. Protocols using blends usually document both the labeled ratio and the assayed ratio for transparency.`,
      }
    case 'science-supplies':
      return {
        heading: `${p.shortName} Solvent Compatibility and Storage Data`,
        body: `Research supplies like ${p.shortName} are characterized less by pharmacology and more by solvent compatibility, osmolality, pH range, and storage stability at the temperatures likely to be encountered during a multi-week protocol. The product documentation covers compatibility with the reconstitution solvents most commonly paired with research peptides, along with stability data under refrigerated and ambient conditions. Matching the supply to the protocol's solvent environment is usually the single most important compatibility check.`,
      }
    default:
      return null
  }
}

// ─── Quality specs variance (replaces hardcoded 4-card grid) ───────────────

const SPEC_SETS: { label: string; value: string; color: string }[][] = [
  [
    { label: 'Purity Standard', value: '≥98% HPLC', color: '#d4a843' },
    { label: 'Identity Confirm', value: 'Mass Spec (MS)', color: '#a78bfa' },
    { label: 'Documentation', value: 'CoA Every Order', color: '#22d3ee' },
    { label: 'Testing Type', value: 'Third-Party Lab', color: '#34d399' },
  ],
  [
    { label: 'HPLC Threshold', value: '≥98% Pure', color: '#34d399' },
    { label: 'MW Confirmation', value: 'Mass Spectrometry', color: '#d4a843' },
    { label: 'Lot Traceability', value: 'CoA Per Lot', color: '#fb923c' },
    { label: 'Audit Chain', value: 'Independent Lab', color: '#a78bfa' },
  ],
  [
    { label: 'Assayed Purity', value: '>98% (HPLC)', color: '#22d3ee' },
    { label: 'Molecular Identity', value: 'MS-Verified', color: '#d4a843' },
    { label: 'Release Docs', value: 'CoA Attached', color: '#34d399' },
    { label: 'Verification', value: 'Third-Party Audit', color: '#60a5fa' },
  ],
  [
    { label: 'Purity Cutoff', value: '≥98% by HPLC', color: '#fb923c' },
    { label: 'ID Confirmation', value: 'MS (Exact Mass)', color: '#a78bfa' },
    { label: 'CoA', value: 'Included Per Order', color: '#34d399' },
    { label: 'Testing Source', value: 'External Lab', color: '#d4a843' },
  ],
]

export function getQualitySpecs(slug: string) {
  return pick(slug, 5, SPEC_SETS)
}

// Deterministic insertion position for the category bonus section.
// Returns an index in [0, sectionCount] so the bonus can land before, between, or after the shuffled middle sections.
export function getCategoryBonusPosition(slug: string, sectionCount: number): number {
  return (hashSlug(slug) + 13) % (sectionCount + 1)
}
