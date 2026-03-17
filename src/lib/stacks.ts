export interface StackCompound {
  name: string
  role: string
  dose: string
  slug: string
}

export interface Stack {
  id: string
  name: string
  level: string
  levelColor: string
  iconName: string
  color: string
  tagline: string
  description: string
  compounds: StackCompound[]
  benefits: string[]
  duration: string
  stat: string
  statLabel: string
  seoTitle: string
  seoDescription: string
}

export const stacks: Stack[] = [
  {
    id: 'aesthetic-starter',
    name: 'The Aesthetic Starter Stack',
    level: 'Beginner',
    levelColor: '#a78bfa',
    iconName: 'Sparkles',
    color: '#a78bfa',
    tagline: 'Maximum skin quality + overnight GH optimization with minimal complexity',
    description: 'The ideal entry point for anyone focused on skin quality and early anti-aging. GHK-Cu resets aging skin biology at the gene level while CJC-1295 + Ipamorelin amplifies your natural GH pulse during deep sleep — the most anabolic window of every 24 hours.',
    compounds: [
      { name: 'GHK-Cu', role: 'Skin regeneration & collagen', dose: '1–2mg/day topical or subQ', slug: 'ghk-cu' },
      { name: 'CJC-1295', role: 'GHRH analog — GH pulse', dose: '100mcg pre-sleep', slug: 'cjc1295-ipamorelin' },
      { name: 'Ipamorelin', role: 'GHRP — GH release', dose: '200mcg pre-sleep', slug: 'cjc1295-ipamorelin' },
    ],
    benefits: [
      'Improved skin texture and tone within 4–6 weeks',
      'Deeper, more restorative sleep',
      '4–8× GH pulse amplification overnight',
      'Collagen and elastin upregulation',
    ],
    duration: '8–12 weeks',
    stat: '4–8×',
    statLabel: 'GH amplification',
    seoTitle: 'Aesthetic Starter Peptide Stack | GHK-Cu + CJC-1295 + Ipamorelin Protocol',
    seoDescription: 'The beginner peptide stack for skin quality and overnight GH optimization. GHK-Cu for collagen, CJC-1295/Ipamorelin for 4–8× GH pulse amplification. Research protocol.',
  },
  {
    id: 'fat-loss',
    name: 'The Fat Loss & Vascularity Stack',
    level: 'Intermediate',
    levelColor: '#d4a843',
    iconName: 'TrendingUp',
    color: '#d4a843',
    tagline: 'Triple-receptor GLP-1 agonism + GH axis for maximum fat oxidation',
    description: 'Combining a next-generation GLP-1/GIP/glucagon tri-agonist with CJC-1295/Ipamorelin creates a metabolic environment optimized for fat oxidation while preserving lean tissue. Retatrutide produced the highest pharmacological fat loss ever documented in a Phase 2 trial.',
    compounds: [
      { name: 'Retatrutide', role: 'GLP-1/GIP/Glucagon tri-agonist', dose: '2–12mg/week escalating', slug: 'glp-3r-10mg' },
      { name: 'CJC-1295', role: 'GH axis preservation', dose: '100mcg 2× daily', slug: 'cjc1295-ipamorelin' },
      { name: 'Ipamorelin', role: 'Lean mass protection', dose: '200mcg 2× daily', slug: 'cjc1295-ipamorelin' },
      { name: 'BPC-157', role: 'Gut health during deficit', dose: '250mcg 2× daily', slug: 'bpc157-10mg' },
    ],
    benefits: [
      'Up to 24.2% total body weight reduction (NEJM Phase 2)',
      'Preserved lean muscle mass during deficit',
      'Improved insulin sensitivity and lipid profile',
      'BPC-157 supports gut barrier integrity during caloric restriction',
    ],
    duration: '12–24 weeks',
    stat: '24.2%',
    statLabel: 'Body weight reduction',
    seoTitle: 'Fat Loss Peptide Stack | Retatrutide + CJC-1295 + BPC-157 Protocol',
    seoDescription: 'Research fat loss stack using Retatrutide (24.2% weight loss, NEJM 2023), CJC-1295/Ipamorelin GH axis, and BPC-157 gut protection. Intermediate protocol.',
  },
  {
    id: 'body-recomp',
    name: 'The Body Recomposition Stack',
    level: 'Intermediate',
    levelColor: '#fb923c',
    iconName: 'Zap',
    color: '#fb923c',
    tagline: 'True muscle hyperplasia + GH amplification + accelerated recovery',
    description: 'IGF-1 LR3 activates satellite cells for genuine muscle hyperplasia — new fiber creation, not just swelling. Stacked with CJC-1295/Ipamorelin for continuous GH optimization and BPC-157 for accelerated recovery between sessions, this is the complete muscle recomposition protocol.',
    compounds: [
      { name: 'IGF-1 LR3', role: 'Satellite cell activation / hyperplasia', dose: '50–100mcg post-training', slug: 'igf-1lr3' },
      { name: 'CJC-1295', role: 'Sustained GH elevation', dose: '100mcg 2× daily', slug: 'cjc1295-ipamorelin' },
      { name: 'Ipamorelin', role: 'GH pulse amplification', dose: '200mcg 2× daily', slug: 'cjc1295-ipamorelin' },
      { name: 'BPC-157', role: 'Recovery & joint protection', dose: '250–500mcg daily', slug: 'bpc157-10mg' },
    ],
    benefits: [
      'Muscle hyperplasia — new fiber creation beyond normal hypertrophy',
      '4–8× GH pulse amplification',
      'Faster recovery between training sessions',
      'Joint and connective tissue protection',
    ],
    duration: '8–12 weeks',
    stat: '4–8×',
    statLabel: 'GH pulse amplification',
    seoTitle: 'Body Recomposition Stack | IGF-1 LR3 + CJC-1295 + BPC-157 Protocol',
    seoDescription: 'Research body recomposition stack. IGF-1 LR3 for muscle hyperplasia, CJC-1295/Ipamorelin for 4–8× GH amplification, BPC-157 for recovery. Intermediate protocol.',
  },
  {
    id: 'recovery',
    name: 'The Recovery & Healing Stack',
    level: 'Beginner–Intermediate',
    levelColor: '#22d3ee',
    iconName: 'Activity',
    color: '#22d3ee',
    tagline: 'Systemic tissue repair, angiogenesis, and tendon/joint healing',
    description: 'BPC-157 and TB-500 are the most studied peptides for tissue repair. Together they provide localized healing (BPC-157) and systemic repair signaling (TB-500), making this the standard protocol for injury recovery, joint health, and training continuity.',
    compounds: [
      { name: 'BPC-157', role: 'Tendon, joint & gut healing', dose: '250–500mcg daily', slug: 'bpc157-10mg' },
      { name: 'TB-500', role: 'Systemic tissue repair', dose: '2–5mg 2× per week', slug: 'tb500-10mg' },
    ],
    benefits: [
      '2× faster tendon healing vs control groups',
      'Angiogenesis — improved blood supply to injured tissue',
      'Anti-inflammatory signaling without cortisol suppression',
      'Gut barrier repair and microbiome support',
    ],
    duration: '4–8 weeks acute / 8–12 weeks chronic',
    stat: '2×',
    statLabel: 'Faster tendon healing',
    seoTitle: 'Recovery Peptide Stack | BPC-157 + TB-500 Healing Protocol',
    seoDescription: 'Research recovery stack: BPC-157 for localized tendon, joint and gut repair, TB-500 for systemic tissue healing and angiogenesis. 120+ published studies.',
  },
  {
    id: 'longevity',
    name: 'The Longevity & Anti-Aging Stack',
    level: 'Advanced',
    levelColor: '#a78bfa',
    iconName: 'Shield',
    color: '#a78bfa',
    tagline: 'Telomere extension, epigenetic reset, and cellular rejuvenation',
    description: 'Epithalon is the most studied telomerase-activating peptide, extending telomere length in published human trials. GHK-Cu resets gene expression in aging cells. Together they form the foundational longevity protocol used in Russian anti-aging science since the 1980s.',
    compounds: [
      { name: 'Epithalon', role: 'Telomerase activation / lifespan', dose: '5–10mg daily × 10 days', slug: 'epithalon-50mg' },
      { name: 'GHK-Cu', role: 'Gene expression reset', dose: '1–2mg daily', slug: 'ghk-cu' },
    ],
    benefits: [
      'Telomere lengthening documented in human subjects',
      'Modulates 4,000+ genes toward youthful expression',
      'Improved sleep architecture and circadian rhythm',
      'Antioxidant upregulation and DNA repair enhancement',
    ],
    duration: '10-day cycles, 2× per year',
    stat: '4,000+',
    statLabel: 'Genes modulated',
    seoTitle: 'Longevity Peptide Stack | Epithalon + GHK-Cu Anti-Aging Protocol',
    seoDescription: 'Research longevity stack. Epithalon activates telomerase for telomere extension. GHK-Cu modulates 4,000+ genes. Based on 40+ years of Russian longevity science.',
  },
  {
    id: 'elite-optimization',
    name: 'The Elite Optimization Stack',
    level: 'Advanced',
    levelColor: '#d4a843',
    iconName: 'Layers',
    color: '#d4a843',
    tagline: 'Total physical optimization — fat loss, growth, skin, recovery, and longevity',
    description: 'The comprehensive stack for lab useers pursuing total physical optimization. Every axis is addressed: fat loss via Retatrutide, muscle hyperplasia via IGF-1 LR3, skin regeneration via GHK-Cu, systemic repair via BPC-157, and cellular longevity via Epithalon.',
    compounds: [
      { name: 'Retatrutide', role: 'Fat loss & metabolic optimization', dose: '4–8mg/week', slug: 'glp-3r-10mg' },
      { name: 'IGF-1 LR3', role: 'Muscle hyperplasia', dose: '50–100mcg post-training', slug: 'igf-1lr3' },
      { name: 'GHK-Cu', role: 'Skin & gene expression', dose: '1–2mg daily', slug: 'ghk-cu' },
      { name: 'BPC-157', role: 'Recovery & gut health', dose: '250–500mcg daily', slug: 'bpc157-10mg' },
      { name: 'Epithalon', role: 'Longevity & telomeres', dose: '5–10mg daily × 10 days', slug: 'epithalon-50mg' },
    ],
    benefits: [
      'Simultaneous fat loss + muscle gain + skin improvement',
      'Full-spectrum biological optimization',
      'GH axis enhancement without exogenous GH',
      'Cellular longevity alongside physical performance',
    ],
    duration: '12–16 weeks',
    stat: '5',
    statLabel: 'Biological systems targeted',
    seoTitle: 'Elite Optimization Peptide Stack | Complete Physical Optimization Protocol',
    seoDescription: 'Advanced science stack targeting all 5 biological systems: fat loss (Retatrutide), muscle (IGF-1 LR3), skin (GHK-Cu), recovery (BPC-157), longevity (Epithalon).',
  },
]

export function getStackById(id: string): Stack | undefined {
  return stacks.find(s => s.id === id)
}
