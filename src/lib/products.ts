export interface Product {
  slug: string
  name: string
  shortName: string
  category: string
  categorySlug: string
  price: number
  originalPrice?: number
  size: string
  image: string
  heroImage?: string
  tag?: string
  tagColor?: string
  headline: string
  summary: string
  description: string
  benefits: { title: string; detail: string }[]
  mechanism: string
  researchHighlights: string[]
  idealFor: string[]
  keywords: string[]
  casNumber?: string
  relatedSlugs: string[]
}

export const AFFILIATE_BASE = 'https://apollopeptidesciences.com/?rfsn=9016964.3f1b1e'
export const AFFILIATE_PRODUCT = (slug: string) =>
  `https://apollopeptidesciences.com/product/${slug}/?rfsn=9016964.3f1b1e`

export const products: Product[] = [
  // ─── SKIN & ANTI-AGING ───────────────────────────────────────────────────
  {
    slug: 'ghk-cu',
    name: 'GHK-Cu Copper Peptide 50mg',
    shortName: 'GHK-Cu',
    category: 'Skin & Anti-Aging',
    categorySlug: 'skin-anti-aging',
    price: 50.0,
    size: '50mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/ghk-cu_50mg.webp',
    tag: 'Top Seller',
    tagColor: 'gold',
    headline: 'The Gold Standard Copper Peptide for Cellular Skin Regeneration',
    summary:
      'GHK-Cu is a naturally occurring copper peptide complex that activates skin remodeling, amplifies collagen synthesis, and triggers stem-cell-level tissue renewal — making it the cornerstone of any serious anti-aging or looksmaxxing protocol.',
    description:
      'GHK-Cu (Glycyl-L-Histidyl-L-Lysine Copper) is one of the most extensively studied peptides in modern dermatological science. Discovered in human plasma, this tripeptide-copper complex drops significantly with age — from roughly 200 ng/mL at age 20 to under 80 ng/mL by age 60. Scientists have identified GHK-Cu as a master regulator of skin biology, capable of resetting gene expression in aging skin toward a younger, healthier state. Studies show it modulates over 4,000 human genes, the majority of which are involved in skin regeneration, collagen production, and inflammation reduction.',
    benefits: [
      {
        title: 'Collagen & Elastin Synthesis',
        detail:
          'Research demonstrates GHK-Cu significantly upregulates collagen I, III, and elastin production, restoring structural integrity and firmness to aging skin.',
      },
      {
        title: 'Skin Tightening & Wrinkle Reduction',
        detail:
          'Clinical studies show GHK-Cu reduces fine lines and wrinkles by increasing dermis thickness and improving overall skin density within weeks of consistent application science.',
      },
      {
        title: 'Hair Follicle Stimulation',
        detail:
          'GHK-Cu has been shown in studies to activate hair follicle stem cells, enlarging follicle size and potentially addressing thinning hair — a critical factor for overall aesthetic optimization.',
      },
      {
        title: 'Wound Healing Acceleration',
        detail:
          'Demonstrated in multiple studies to accelerate wound closure, skin repair, and post-procedure recovery by stimulating keratinocyte migration and angiogenesis.',
      },
      {
        title: 'Anti-Inflammatory Action',
        detail:
          'Powerfully suppresses inflammatory cytokines including TGF-β1, IL-6, and TNF-α while promoting repair-phase cytokines, creating an optimal cellular environment for skin renewal.',
      },
      {
        title: 'Antioxidant Defense Upregulation',
        detail:
          'Activates SOD (Superoxide Dismutase) and other antioxidant enzymes, protecting skin cells from oxidative damage that accelerates visible aging.',
      },
    ],
    mechanism:
      'GHK-Cu binds to cell surface receptors and enters cells via endocytosis, where it acts as a transcription factor modulator. It reactivates fibroblasts, the cells responsible for producing collagen and extracellular matrix proteins. The copper component is essential for lysyl oxidase activity, which cross-links collagen and elastin fibers for structural strength. Additionally, GHK-Cu signals through the PI3K/Akt pathway to protect cells from apoptosis while simultaneously clearing damaged proteins through autophagy enhancement.',
    researchHighlights: [
      'Modulates expression of over 4,000 human genes related to skin health',
      'Shown to reverse gene expression patterns in lung fibrosis toward healthy tissue',
      'Clinically demonstrated 70% reduction in wrinkle depth in photoaged skin models',
      'Copper uptake shown to restore mitochondrial function in aged dermal fibroblasts',
    ],
    idealFor: ['Anti-aging skin studies', 'Dermal regeneration studies', 'Hair follicle biology', 'Wound healing investigation'],
    keywords: ['ghk-cu peptide', 'copper peptide anti-aging', 'skin regeneration peptide', 'collagen synthesis peptide', 'looksmax skin peptide'],
    casNumber: '89030-95-5',
    relatedSlugs: ['snap-8', 'epithalon-50mg', 'bpc157-10mg'],
  },
  {
    slug: 'snap-8',
    name: 'SNAP-8 Acetyl Octapeptide-3 10mg',
    shortName: 'SNAP-8',
    category: 'Skin & Anti-Aging',
    categorySlug: 'skin-anti-aging',
    price: 45.0,
    size: '10mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/snap-8_10mg.webp',
    tag: 'Anti-Wrinkle',
    tagColor: 'purple',
    headline: 'Premium Grade Neuropeptide That Targets Expression Lines at the Source',
    summary:
      'SNAP-8 is an advanced synthetic octapeptide that studies suggest may interfere with the neuromuscular junction mechanism responsible for repetitive facial muscle contractions — the root cause of dynamic wrinkles and expression lines.',
    description:
      'SNAP-8 (Acetyl Glutamyl Heptapeptide-3) is an 8-amino acid peptide extension of the well-known SNAP-25 protein — a target of botulinum toxin. Where conventional approaches operate systemically, SNAP-8 is studied as a localized neuromodulating peptide that competes with SNAP-25 for a position in the SNARE complex, potentially reducing the quantity of neurotransmitters released at the neuromuscular junction. The result in studies models is a relaxation of muscle contraction frequency in target areas, reducing the formation of dynamic wrinkles. It has gained significant interest in cosmetic science for periocular and perioral wrinkle reduction.',
    benefits: [
      {
        title: 'Dynamic Wrinkle Attenuation',
        detail:
          'By modulating the SNARE protein complex, SNAP-8 studies suggest reduced muscular contraction intensity leading to softening of crow\'s feet, forehead lines, and glabellar creases.',
      },
      {
        title: 'SNAP-25 Mimicry Without Systemic Effects',
        detail:
          'Unlike neurotoxin-based approaches, SNAP-8 studies focus on a targeted peptide mechanism that operates locally without systemic distribution concerns.',
      },
      {
        title: 'Periorbital & Perioral Line Research',
        detail:
          'Particularly studied for application in eye and mouth area expression lines, where repetitive muscle movement creates the deepest dynamic wrinkles over time.',
      },
      {
        title: 'Skin Texture Improvement',
        detail:
          'Combined with reduced micro-tension from muscle activity, lab models show improved overall skin surface texture and smoothness in treated areas.',
      },
    ],
    mechanism:
      'SNAP-8 mimics the N-terminal end of SNAP-25, one of three proteins forming the SNARE complex required for acetylcholine vesicle fusion with the presynaptic membrane. By competing with SNAP-25 for SNARE complex integration, SNAP-8 studies suggest it may reduce the efficiency of neuromuscular signaling — resulting in decreased muscle contraction at the micromovement level that causes expression wrinkles.',
    researchHighlights: [
      'Structural analog of the neurotoxin-targeted SNAP-25 protein region',
      'In vitro studies show SNARE complex modulation comparable to established neuropeptides',
      'Research indicates potential for up to 63% reduction in wrinkle volume in skin models',
      'Documented safety profile superior to neurotoxin-based approaches in cellular studies',
    ],
    idealFor: ['Neuropeptide cosmetic science', 'Wrinkle mechanism studies', 'SNARE complex investigation', 'Periorbital expression line science'],
    keywords: ['snap-8 peptide', 'acetyl octapeptide wrinkle', 'neuropeptide anti-aging', 'botox alternative peptide science', 'expression line reduction peptide'],
    casNumber: '868844-74-0',
    relatedSlugs: ['snap-8-2-pack', 'ghk-cu', 'epithalon-50mg'],
  },
  {
    slug: 'snap-8-2-pack',
    name: 'SNAP-8 Double Stack — 2x10mg Research Bundle',
    shortName: 'SNAP-8 2-Pack',
    category: 'Skin & Anti-Aging',
    categorySlug: 'skin-anti-aging',
    price: 80.0,
    size: '20mg (2×10mg)',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/snap-8_10mg_2pack.webp',
    tag: 'Best Value',
    tagColor: 'green',
    headline: 'Double Your SNAP-8 Research Supply — Maximum Duration Protocol Bundle',
    summary:
      'The SNAP-8 2-Pack delivers 20mg total of this precision neuropeptide at a significant savings over individual units, designed for lab useers conducting extended duration anti-wrinkle and facial muscle relaxation studies.',
    description:
      'For investigators requiring continuous or long-duration protocols, the SNAP-8 2-Pack provides uninterrupted supply of this specialized octapeptide. Extended study timelines with SNAP-8 allow investigators to evaluate cumulative effects on dynamic wrinkle formation, SNARE complex modulation consistency, and long-term dermal changes associated with reduced neuromuscular micro-tension. Each vial contains 10mg of Acetyl Glutamyl Heptapeptide-3 (CAS: 868844-74-0) verified for purity by third-party CoA testing.',
    benefits: [
      { title: 'Extended Protocol Supply', detail: 'Two full lab vials ensure uninterrupted extended-duration studies without supply gaps that can compromise data continuity.' },
      { title: 'Cost-Efficient Research Budget', detail: 'Meaningful per-milligram savings compared to individual purchases, making multi-phase science more economically viable.' },
      { title: 'Same Pharmaceutical-Grade Quality', detail: 'Identical purity specifications and third-party testing as single units — premium grade consistency across both vials.' },
      { title: 'Flexible Research Design', detail: 'Sufficient quantity for comparative studies, split-sample methodology, or side-by-side analysis with complementary peptides like GHK-Cu.' },
    ],
    mechanism:
      'Same SNARE complex modulation pathway as individual SNAP-8 units — competing with SNAP-25 for inclusion in the neurotransmitter release machinery at the neuromuscular junction, reducing acetylcholine release and subsequent muscle contraction intensity in studies models.',
    researchHighlights: [
      'Identical molecular composition to single-unit SNAP-8 vials',
      'Third-party CoA documentation included with batch',
      'Suitable for extended 8–12 week lab protocols',
      'Lyophilized format ensures stability across both vials',
    ],
    idealFor: ['Long-duration neuropeptide studies', 'Split-application study design', 'Comparative dermal biology', 'Budget-conscious programs'],
    keywords: ['snap-8 bulk peptide', 'snap-8 two pack', 'neuropeptide bundle science', 'anti-aging peptide multi-pack', 'acetyl octapeptide bundle'],
    casNumber: '868844-74-0',
    relatedSlugs: ['snap-8', 'ghk-cu', 'epithalon-50mg'],
  },

  // ─── LONGEVITY & HORMESIS ────────────────────────────────────────────────
  {
    slug: 'epithalon-50mg',
    name: 'Epithalon Tetrapeptide 50mg — Longevity Premium Grade',
    shortName: 'Epithalon 50mg',
    category: 'Longevity',
    categorySlug: 'longevity',
    price: 139.99,
    size: '50mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/epithalon_50mg.webp',
    tag: 'Longevity',
    tagColor: 'cyan',
    headline: 'The Telomere Peptide — Epithalon\'s Role in Cellular Lifespan Extension Research',
    summary:
      'Epithalon (Epitalon) is a synthetic tetrapeptide derived from Epithalamin — a polypeptide extract of the pineal gland. It is the most studied anti-aging peptide in existence, with over 40 years of data documenting its effects on telomere elongation, telomerase activation, and regulation of the neuroendocrine system.',
    description:
      'Developed by Professor Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology, Epithalon (Ala-Glu-Asp-Gly) has an unparalleled body of long-term data supporting its role in biological age modulation. The peptide is believed to stimulate the pineal gland to normalize melatonin production, optimize circadian rhythm, and — most remarkably — activate telomerase, the enzyme responsible for maintaining telomere length. Telomere shortening is one of the primary hallmarks of cellular aging, and Epithalon represents the most studied peptide approach to addressing this mechanism directly.',
    benefits: [
      {
        title: 'Telomerase Activation & Telomere Preservation',
        detail:
          'Epithalon is the only peptide with substantial published science demonstrating telomerase activation and telomere elongation in both in vitro and in vivo models — directly addressing one of the "hallmarks of aging."',
      },
      {
        title: 'Pineal Gland & Melatonin Normalization',
        detail:
          'Research indicates Epithalon restores age-related decline in pineal melatonin secretion, improving circadian rhythm regulation, sleep quality, and the downstream hormonal cascade dependent on proper melatonin signaling.',
      },
      {
        title: 'Neuroendocrine System Optimization',
        detail:
          'Shown in Russian clinical science to restore declining levels of multiple hormones including LH, FSH, and cortisol toward more youthful baselines, suggesting systemic neuroendocrine normalization.',
      },
      {
        title: 'Antioxidant & DNA Repair Enhancement',
        detail:
          'Studies demonstrate increased SOD and GPx activity in subjects receiving Epithalon, alongside improved DNA repair capacity — critical factors for reducing mutation accumulation that drives aging.',
      },
      {
        title: 'Longevity & Lifespan Research',
        detail:
          'Animal studies in fruit flies, mice, and rats consistently show 20–40% increases in mean lifespan with Epithalon treatment, providing strong preclinical evidence for anti-aging mechanisms.',
      },
      {
        title: 'Retinal & Visual System Research',
        detail:
          'Russian studies specifically investigated Epithalon in age-related retinal degeneration, showing preservation of photoreceptor cells and visual function — a unique benefit among anti-aging peptides.',
      },
    ],
    mechanism:
      'Epithalon\'s primary mechanism involves stimulation of telomerase (hTERT) expression in somatic cells, which normally lose this enzymatic activity after embryonic development. By reactivating telomerase, Epithalon studies suggest cells can maintain or even elongate telomeres during replication cycles. Secondarily, Epithalon signals to the hypothalamus-pituitary axis to normalize age-related hormonal decline. Its pineal gland affinity allows it to restore melatonin synthesis machinery that degrades with calcification of the pineal gland — a near-universal aging phenomenon.',
    researchHighlights: [
      'Over 40 years of published science from Russian gerontology institutions',
      'Human clinical trials showing improvements in lifespan markers and quality-of-life parameters',
      'Demonstrated telomere elongation in human fetal fibroblasts (Bl-4 cells) in vitro',
      '33–68% increase in animal model lifespans across multiple species in controlled studies',
    ],
    idealFor: ['Telomere biology science', 'Anti-aging biomarker studies', 'Neuroendocrine aging investigation', 'Pineal gland and melatonin studies'],
    keywords: ['epithalon peptide anti-aging', 'epitalon telomere peptide', 'telomerase activating peptide', 'pineal gland peptide science', 'longevity peptide looksmax'],
    casNumber: '307297-39-8',
    relatedSlugs: ['ghk-cu', 'nad', 'cjc1295-ipamorelin'],
  },
  {
    slug: 'nad',
    name: 'NAD+ Nicotinamide Adenine Dinucleotide 500mg',
    shortName: 'NAD+ 500mg',
    category: 'Longevity',
    categorySlug: 'longevity',
    price: 69.99,
    size: '500mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/nad_500mg.webp',
    tag: 'Cellular Energy',
    tagColor: 'cyan',
    headline: 'The Master Coenzyme Driving Cellular Energy, DNA Repair & Sirtuin Activation',
    summary:
      'NAD+ is the foundational coenzyme of life — found in every living cell and essential for over 500 enzymatic reactions. Its decline with age represents one of the most significant molecular events underlying the aging process, making it a critical target in longevity and metabolic science.',
    description:
      'Nicotinamide adenine dinucleotide (NAD+) has emerged from decades of relative obscurity to become one of the most important molecules in aging science. Concentrations of NAD+ fall by approximately 50% between youth and middle age, and this decline correlates with the hallmark features of metabolic dysfunction, mitochondrial deterioration, and genomic instability seen in aging tissues. Research led by pioneers like David Sinclair at Harvard has established NAD+ as the key activator of sirtuin proteins (SIRT1–7) — epigenetic regulators that govern gene expression, mitochondrial biogenesis, inflammation control, and DNA repair.',
    benefits: [
      {
        title: 'Sirtuin Pathway Activation',
        detail:
          'NAD+ is the essential substrate for SIRT1, SIRT3, and other sirtuin enzymes that regulate hundreds of age-related metabolic and epigenetic processes. Restoring NAD+ allows sirtuins to function at youthful activity levels.',
      },
      {
        title: 'Mitochondrial Biogenesis & Function',
        detail:
          'SIRT1 and SIRT3 activation by NAD+ drives PGC-1α expression — the master regulator of mitochondrial biogenesis — resulting in more numerous, efficient mitochondria and improved cellular energy output.',
      },
      {
        title: 'DNA Repair via PARP Activation',
        detail:
          'PARP enzymes that detect and repair DNA strand breaks are NAD+-dependent. Adequate NAD+ availability ensures rapid, accurate DNA repair — preventing mutation accumulation that drives cancer and aging.',
      },
      {
        title: 'Metabolic Rate & Insulin Sensitivity',
        detail:
          'Research in obese rodent models shows NAD+ restoration dramatically improves insulin sensitivity and metabolic rate, with implications for body composition optimization and metabolic syndrome science.',
      },
      {
        title: 'Neurological Protection & Cognitive Research',
        detail:
          'NAD+ supports neuron survival through sirtuin-mediated protection and PARP-mediated repair. Research in neurodegeneration models shows preservation of cognitive function with NAD+ restoration protocols.',
      },
      {
        title: 'Circadian Rhythm Synchronization',
        detail:
          'SIRT1 and CLOCK proteins are interdependent — NAD+ levels fluctuate circadianly and help drive the molecular clock that synchronizes metabolism, sleep cycles, and cellular maintenance windows.',
      },
    ],
    mechanism:
      'NAD+ operates as a hydride ion (H-) carrier in the electron transport chain, shuttling electrons from metabolic substrates to Complex I of the mitochondria for ATP synthesis. As a signaling molecule, it serves as the rate-limiting substrate for CD38 (which depletes NAD+ with age), PARP enzymes (DNA repair), and sirtuins (metabolic regulation). The NAD+/NADH ratio acts as a cellular redox sensor that modulates transcription of hundreds of genes in response to metabolic state.',
    researchHighlights: [
      'David Sinclair (Harvard) studies show NAD+ restoration reverses vascular aging in mice',
      'NMN and NR precursor studies consistently show 40–90% NAD+ tissue restoration in animal models',
      'PARP knockout studies demonstrate NAD+ depletion is central to aging-related DNA damage accumulation',
      'Human trials with NAD+ precursors show improvements in muscle function and metabolic markers in older adults',
    ],
    idealFor: ['Aging biology and longevity science', 'Metabolic syndrome investigation', 'Mitochondrial function studies', 'Sirtuin pathway science', 'Circadian biology'],
    keywords: ['nad+ peptide', 'nicotinamide adenine dinucleotide aging', 'nad+ longevity supplement science', 'sirtuin activator nad', 'nad+ anti-aging coenzyme'],
    casNumber: '53-84-9',
    relatedSlugs: ['epithalon-50mg', 'cjc1295-ipamorelin', 'igf-1lr3'],
  },

  // ─── RECOVERY & HEALING ──────────────────────────────────────────────────
  {
    slug: 'bpc157-10mg',
    name: 'BPC-157 Body Protection Compound 10mg',
    shortName: 'BPC-157',
    category: 'Recovery & Healing',
    categorySlug: 'recovery-healing',
    price: 59.99,
    size: '10mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/bpc157_10mg.webp',
    tag: '#1 Recovery',
    tagColor: 'gold',
    headline: 'BPC-157: The Systemic Healing Peptide Backed by 30+ Years of Research',
    summary:
      'BPC-157 is a 15-amino acid synthetic pentadecapeptide derived from a protective gastric protein. It is among the most studied healing peptides in scientific literature, with demonstrated effects on tissue repair across muscle, tendon, ligament, gut, and neural systems.',
    description:
      'Body Protection Compound 157 (BPC-157) was isolated from human gastric juice and has since been the subject of extensive preclinical investigation. Over 30 years of data, primarily from the University of Zagreb, has documented its remarkable tissue-healing properties across virtually every system in the body. Unlike growth factors that act in a single pathway, BPC-157 exhibits what scientists describe as "pleiotropic" healing activity — modulating multiple simultaneous repair mechanisms including angiogenesis, inflammation control, fibroblast activation, and neurological regeneration. It is strikingly resistant to enzymatic degradation and maintains stability even in harsh gastrointestinal environments.',
    benefits: [
      {
        title: 'Tendon & Ligament Repair Acceleration',
        detail:
          'BPC-157 studies show it dramatically accelerates tendon-to-bone healing by upregulating tendon fibroblast growth factor receptors (FGFR2) and increasing production of healing extracellular matrix proteins.',
      },
      {
        title: 'Gut Barrier Restoration & GI Healing',
        detail:
          'Being derived from gastric protein, BPC-157 has particularly potent effects on the GI tract — healing fistulas, lesions, and inflammatory bowel conditions in studies models with remarkable speed.',
      },
      {
        title: 'Angiogenesis & Blood Supply Enhancement',
        detail:
          'Studies show BPC-157 stimulates VEGF expression and new blood vessel formation in injured tissue, dramatically improving nutrient and oxygen delivery to healing areas — critical for rapid repair.',
      },
      {
        title: 'Anti-Inflammatory Modulation',
        detail:
          'BPC-157 modulates the NO-system and COX pathway to reduce chronic inflammation without suppressing the acute inflammatory response needed for proper healing — a key distinction from NSAIDs.',
      },
      {
        title: 'Neurological & Brain Protection',
        detail:
          'Research demonstrates BPC-157 protects dopaminergic and serotonergic neurons, reverses drug-induced neurotoxicity, and shows promising results in models of traumatic brain injury and spinal cord damage.',
      },
      {
        title: 'Muscle Tear Recovery',
        detail:
          'In muscle injury models, BPC-157 significantly reduces recovery time from muscle tears and contusions, with investigators observing near-complete functional restoration at timepoints where controls show incomplete healing.',
      },
    ],
    mechanism:
      'BPC-157 activates the FAK-paxillin pathway which governs cell migration and adhesion — fundamental processes in wound healing. It also acts on the NO-synthase system to modulate vascular tone and angiogenesis. Additionally, BPC-157 upregulates growth hormone receptors on fibroblasts and osteoblasts, amplifying endogenous GH signaling without requiring exogenous hormone. Its interaction with the VEGF signaling cascade drives the neovascularization essential for supplying new tissue formation.',
    researchHighlights: [
      'Over 120 published studies predominantly from the University of Zagreb study group',
      'Demonstrated systemic healing regardless of administration route in animal models',
      'Shown to counteract NSAID-induced GI damage and systemic toxicity in rat models',
      'Tendon-to-bone healing acceleration documented histologically within 2 weeks vs 4–6 weeks in controls',
    ],
    idealFor: ['Musculoskeletal repair science', 'GI biology and gut barrier studies', 'Neurological protection investigation', 'Angiogenesis and wound healing science'],
    keywords: ['bpc-157 peptide science', 'body protection compound healing', 'bpc157 tendon repair', 'gut healing peptide', 'bpc-157 looksmax recovery'],
    casNumber: '137525-51-0',
    relatedSlugs: ['tb500-10mg', 'igf-1lr3', 'cjc1295-ipamorelin'],
  },
  {
    slug: 'tb500-10mg',
    name: 'TB-500 Thymosin Beta-4 Fragment 10mg',
    shortName: 'TB-500',
    category: 'Recovery & Healing',
    categorySlug: 'recovery-healing',
    price: 59.99,
    size: '10mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/TB500_10mg.webp',
    tag: 'Tissue Repair',
    tagColor: 'blue',
    headline: 'TB-500: The Systemic Tissue Regeneration Peptide for Elite Physical Recovery',
    summary:
      'TB-500 is a synthetic fragment of Thymosin Beta-4 — a naturally occurring peptide found in virtually all human and animal cells. It is one of the most potent tissue-repair peptides identified in modern science, with a unique ability to travel systemically to sites of injury and orchestrate multi-phase healing responses.',
    description:
      'Thymosin Beta-4 (Tβ4) is one of the most abundant intracellular peptides in mammals, found at highest concentrations in wound fluid, platelets, and macrophages at injury sites. TB-500 represents the key active fragment of Tβ4 (specifically the Ac-SDKP sequence region) responsible for actin regulation and tissue repair signaling. What makes TB-500 exceptional in studies is its systemic mobility — while most healing peptides act locally, TB-500 studies suggest it can be administered remotely and still localize to areas of tissue damage, driven by the body\'s own inflammatory homing signals. This makes it uniquely suitable for studying widespread or multi-site repair processes.',
    benefits: [
      {
        title: 'Actin Polymerization & Cell Mobility',
        detail:
          'TB-500 binds to G-actin (monomeric actin) with high affinity, regulating actin polymerization and enabling rapid cell migration to injury sites — the fundamental first step in tissue repair.',
      },
      {
        title: 'New Blood Vessel Formation',
        detail:
          'Research confirms TB-500 stimulates endothelial cell differentiation and migration to form new blood vessels (angiogenesis) in ischemic tissue, restoring blood supply critical for healing.',
      },
      {
        title: 'Cardiac & Smooth Muscle Research',
        detail:
          'Extensively studied for cardiac repair after infarction, TB-500 studies show activation of cardiac stem cells and migration of existing cardiomyocytes toward damaged tissue in heart injury models.',
      },
      {
        title: 'Reduced Scar & Fibrosis Formation',
        detail:
          'Unlike many healing peptides, TB-500 studies show it favors regenerative over fibrotic healing — producing qualitatively better tissue repair with less scar formation and improved functional outcomes.',
      },
      {
        title: 'Anti-Inflammatory Coordination',
        detail:
          'TB-500 modulates macrophage differentiation toward M2 (repair-phase) phenotype and reduces TNF-α, IL-1β production, orchestrating the transition from inflammation to regeneration.',
      },
      {
        title: 'Flexibility & Connective Tissue Health',
        detail:
          'Research in athletes suggests TB-500 improves flexibility and reduces the risk of strains and tears by promoting healthy extracellular matrix remodeling and maintaining connective tissue hydration.',
      },
    ],
    mechanism:
      'TB-500\'s core mechanism involves sequestration of G-actin monomers, which reduces the pool available for F-actin (filamentous actin) formation. This signals cells to upregulate actin dynamics, facilitating cell motility. The Ac-SDKP tetrapeptide region specifically inhibits fibroblast proliferation (preventing fibrosis) while simultaneously stimulating endothelial cell migration. TB-500 also activates ILK (integrin-linked kinase) signaling, which transduces extracellular matrix signals to promote cell survival and differentiation in the healing microenvironment.',
    researchHighlights: [
      'AMP Foundation studies show significant cardiac repair after myocardial infarction in rat models',
      'Demonstrated hair follicle stem cell activation in alopecia models',
      'Systemic delivery shown to localize to injury sites across multiple tissue types',
      'Research in corneal injury models shows accelerated epithelial healing and reduced scarring',
    ],
    idealFor: ['Tissue regeneration and repair science', 'Cardiac biology investigation', 'Angiogenesis studies', 'Fibrosis reduction science', 'Athletic recovery optimization studies'],
    keywords: ['tb-500 thymosin beta-4', 'tissue repair peptide science', 'tb500 recovery peptide', 'thymosin beta 4 fragment', 'tb-500 looksmax healing'],
    casNumber: '77591-33-4',
    relatedSlugs: ['bpc157-10mg', 'igf-1lr3', 'cjc1295-ipamorelin'],
  },

  // ─── GROWTH & BODY COMPOSITION ───────────────────────────────────────────
  {
    slug: 'igf-1lr3',
    name: 'IGF-1 LR3 Long Arg3 Insulin-Like Growth Factor 1mg',
    shortName: 'IGF-1 LR3',
    category: 'Growth & Body Composition',
    categorySlug: 'growth-body-comp',
    price: 79.99,
    size: '1mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/igf-1lr3-1mg.webp',
    tag: 'Anabolic',
    tagColor: 'gold',
    headline: 'IGF-1 LR3: The Most Potent Anabolic Growth Factor for Muscle Hyperplasia Research',
    summary:
      'IGF-1 LR3 is an extended-half-life analog of Insulin-Like Growth Factor 1, engineered with an arginine substitution at position 3 and a 13-amino acid N-terminal extension. This structural modification makes it roughly 3x more potent than native IGF-1 and dramatically extends its half-life from minutes to hours.',
    description:
      'Insulin-Like Growth Factor 1 (IGF-1) is the primary mediator of growth hormone\'s anabolic effects — when GH binds to receptors in the liver, it triggers IGF-1 secretion which then signals virtually every cell type to grow and differentiate. The LR3 modification addresses native IGF-1\'s major limitation: extremely rapid binding to IGF binding proteins (IGFBPs) that inactivate it within minutes. By substituting glutamic acid at position 3 with arginine, the molecule has reduced affinity for IGFBPs, allowing it to remain active in circulation far longer. This makes IGF-1 LR3 the gold standard science tool for studying IGF-1 pathway effects without rapid clearance complications.',
    benefits: [
      {
        title: 'Muscle Hyperplasia — New Cell Creation',
        detail:
          'Unlike hypertrophy (enlarging existing cells), IGF-1 LR3 studies demonstrate it stimulates satellite cell activation and true muscle hyperplasia — the creation of new muscle fibers — a profound distinction for body composition science.',
      },
      {
        title: 'Fat Mobilization & Lipolysis',
        detail:
          'IGF-1 signaling activates hormone-sensitive lipase and promotes fatty acid oxidation, with science showing simultaneous muscle gain and fat loss — the "recomposition" effect coveted in body optimization science.',
      },
      {
        title: 'Protein Synthesis Amplification',
        detail:
          'Through PI3K/Akt/mTOR signaling, IGF-1 LR3 powerfully stimulates protein synthesis machinery, dramatically accelerating amino acid incorporation into new muscle protein.',
      },
      {
        title: 'Anti-Catabolic Muscle Preservation',
        detail:
          'IGF-1 LR3 inhibits the FOXO transcription factors that activate muscle-wasting proteolytic pathways, protecting lean mass even under conditions of caloric deficit or high cortisol.',
      },
      {
        title: 'Bone Density & Collagen Synthesis',
        detail:
          'Research shows IGF-1 stimulates osteoblast proliferation, increases bone mineral density, and promotes collagen type I synthesis — benefits that extend to structural aesthetics and injury resistance.',
      },
      {
        title: 'Enhanced IGF Signaling Duration',
        detail:
          'The LR3 modification provides a half-life of approximately 20–30 hours versus native IGF-1\'s 12–15 minutes, allowing scientists to study sustained IGF pathway activation in tissue culture and animal models.',
      },
    ],
    mechanism:
      'IGF-1 LR3 binds the IGF-1 receptor (IGF1R) — a receptor tyrosine kinase — triggering autophosphorylation and downstream activation of the PI3K/Akt/mTOR pathway (anabolic and anti-apoptotic) and the Ras/MAPK pathway (proliferative). The mTOR complex 1 (mTORC1) activation by Akt is the critical step for protein synthesis initiation via S6K1 phosphorylation and 4E-BP1 inhibition. The reduced IGFBP affinity of the LR3 variant ensures that a higher fraction of administered peptide remains biologically active at the receptor level.',
    researchHighlights: [
      'Demonstrated 3× higher biological potency than native IGF-1 in receptor binding studies',
      'Half-life extended from ~12 minutes (native) to ~20-30 hours (LR3 variant)',
      'Satellite cell activation confirmed in skeletal muscle fiber studies',
      'Simultaneous fat oxidation and muscle protein synthesis documented in metabolic science',
    ],
    idealFor: ['Muscle biology and hyperplasia science', 'Body recomposition mechanism studies', 'IGF signaling pathway investigation', 'Anti-catabolic mechanism science'],
    keywords: ['igf-1 lr3 peptide science', 'insulin like growth factor bodybuilding', 'igf-1 lr3 muscle hyperplasia', 'anabolic peptide looksmax', 'igf 1 lr3 body composition'],
    casNumber: '946870-92-4',
    relatedSlugs: ['cjc1295-ipamorelin', 'bpc157-10mg', 'tb500-10mg'],
  },
  {
    slug: 'cjc1295-ipamorelin',
    name: 'CJC-1295 / Ipamorelin Blend — GH Secretagogue Stack',
    shortName: 'CJC-1295 / Ipamorelin',
    category: 'Growth & Body Composition',
    categorySlug: 'growth-body-comp',
    price: 50.0,
    size: '5.5mg (blend)',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/01/cjc1295_5-5mg.webp',
    tag: 'GH Stack',
    tagColor: 'blue',
    headline: 'The Ultimate Growth Hormone Secretagogue Stack — CJC-1295 + Ipamorelin Synergy',
    summary:
      'CJC-1295 and Ipamorelin represent the gold-standard peptide combination for lab useing growth hormone pulse optimization. By simultaneously activating GHRH receptors (CJC-1295) and ghrelin receptors (Ipamorelin), this blend produces synergistic GH release that mimics and amplifies natural pulsatile secretion patterns.',
    description:
      'The CJC-1295/Ipamorelin combination has become the most widely studied GH secretagogue peptide blend due to its synergistic mechanism and favorable selectivity profile. CJC-1295 (without DAC) is a tetrasubstituted analog of growth hormone-releasing hormone (GHRH) that binds GHRH receptors on pituitary somatotroph cells with high affinity. Ipamorelin is a third-generation selective GH secretagogue and ghrelin receptor agonist that amplifies the GH pulse without significantly affecting cortisol, prolactin, or other hormones — a key advantage over older secretagogues. Together, they act through complementary receptor systems to produce GH pulses far exceeding either compound alone.',
    benefits: [
      {
        title: 'Synergistic Growth Hormone Pulse Amplification',
        detail:
          'Research confirms the CJC-1295 + Ipamorelin combination produces GH pulses 4–8× greater than either compound administered individually, through dual-pathway receptor amplification of pituitary somatotroph cells.',
      },
      {
        title: 'Deep Wave Sleep Architecture Enhancement',
        detail:
          'GH secretagogue administration timed with sleep onset dramatically amplifies slow-wave sleep GH pulses — the body\'s largest natural GH release event — improving sleep quality and overnight tissue repair.',
      },
      {
        title: 'Body Composition — Fat Loss & Muscle Preservation',
        detail:
          'GH-driven lipolysis targets stubborn visceral and subcutaneous fat while anabolically preserving lean muscle mass. Research models show simultaneous fat oxidation and muscle protein turnover optimization.',
      },
      {
        title: 'Selective Hormone Specificity',
        detail:
          'Ipamorelin\'s selectivity means GH release occurs without the cortisol, prolactin, or ACTH elevation seen with GHRP-6 and GHRP-2 — maintaining a clean hormonal environment in studies models.',
      },
      {
        title: 'Collagen & Connective Tissue Synthesis',
        detail:
          'GH stimulates IGF-1 production, which drives collagen type I and III synthesis in skin and connective tissue — contributing to skin thickness, elasticity, and joint structural integrity.',
      },
      {
        title: 'Immune Function Modulation',
        detail:
          'Research demonstrates GH and IGF-1 elevations following secretagogue use support thymic function, T-cell development, and NK cell activity — with implications for immune resilience and aging science.',
      },
    ],
    mechanism:
      'CJC-1295 (no DAC) binds GHRH receptors on pituitary somatotrophs, activating adenylyl cyclase and increasing intracellular cAMP — the primary signal for GH synthesis and secretion. Ipamorelin binds GHSR-1a (ghrelin receptor) on both pituitary and hypothalamic cells, activating phospholipase C and increasing intracellular calcium for GH exocytosis. The combination exploits two independent pituitary signaling pathways simultaneously, producing additive-to-synergistic GH secretion. Crucially, Ipamorelin does not significantly activate ACTH or cortisol pathways that older GHRPs stimulate.',
    researchHighlights: [
      'CJC-1295 shown to increase mean 24-hour GH concentrations 2–10× in human clinical studies',
      'Ipamorelin demonstrates highly selective GH release with minimal impact on prolactin or cortisol',
      'Combined administration in animal models shows superior GH pulse amplitude vs either alone',
      'Slow-wave sleep amplification documented with GH secretagogue administration in timing studies',
    ],
    idealFor: ['GH axis science', 'Sleep architecture and recovery studies', 'Body composition mechanism investigation', 'Pituitary somatotroph biology', 'GH secretagogue comparative science'],
    keywords: ['cjc-1295 ipamorelin blend', 'growth hormone secretagogue peptide', 'cjc1295 ipamorelin stack science', 'gh peptide looksmax', 'ghrh peptide body composition'],
    casNumber: '863288-34-0',
    relatedSlugs: ['igf-1lr3', 'nad', 'epithalon-50mg'],
  },

  // ─── FAT LOSS / METABOLIC ─────────────────────────────────────────────────
  {
    slug: 'glp-1s-5mg',
    name: 'GLP-1 S Semaglutide 5mg — Premium Grade',
    shortName: 'Semaglutide 5mg',
    category: 'Metabolic & Fat Loss',
    categorySlug: 'metabolic-fat-loss',
    price: 79.99,
    size: '5mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/10/semaglutide_5mg.webp',
    tag: 'Fat Loss',
    tagColor: 'gold',
    headline: 'Semaglutide 5mg — The GLP-1 Agonist Redefining Metabolic Research',
    summary:
      'Semaglutide is a modified GLP-1 receptor agonist with a structural lipidation that provides an extraordinary 7-day half-life. It has produced the most significant weight loss results of any pharmacological agent in the history of obesity science, now serving as the gold standard compound for GLP-1 pathway investigation.',
    description:
      'GLP-1 S (Semaglutide) is a synthetic analog of native glucagon-like peptide-1, engineered with a C18 fatty acid chain attached via a linker to lysine-26. This modification enables albumin binding, protecting the peptide from DPP-4 enzymatic degradation and enabling a half-life of approximately 165 hours — over 300× longer than native GLP-1\'s 2-minute half-life. Originally developed for type 2 diabetes management, semaglutide\'s weight loss effects have been so pronounced that it has since been approved specifically for obesity treatment, with Phase 3 clinical trials showing 15–20% body weight reduction over 68 weeks.',
    benefits: [
      {
        title: 'Appetite Suppression via Central GLP-1R Signaling',
        detail:
          'Semaglutide crosses the blood-brain barrier to activate GLP-1 receptors in the hypothalamic arcuate nucleus and brainstem, dramatically reducing appetite signals and food reward behavior.',
      },
      {
        title: 'Gastric Emptying Rate Modulation',
        detail:
          'GLP-1 receptor activation in the GI tract slows gastric emptying, prolonging satiety signals after meals and dramatically reducing caloric intake through physiological rather than behavioral mechanisms.',
      },
      {
        title: 'Blood Glucose Regulation',
        detail:
          'Glucose-dependent insulin secretion stimulation combined with glucagon suppression produces powerful glycemic control without hypoglycemia risk — a unique safety feature of GLP-1 receptor agonists.',
      },
      {
        title: 'Cardiovascular Risk Reduction Research',
        detail:
          'The SUSTAIN-6 and LEADER trials demonstrate significant reductions in major adverse cardiovascular events with semaglutide, establishing it as both metabolic and cardiovascular protective in studies.',
      },
      {
        title: 'Adipose Tissue Remodeling',
        detail:
          'Research shows semaglutide preferentially reduces visceral adipose tissue — the metabolically harmful fat surrounding organs — while preserving lean muscle mass to a greater degree than caloric restriction alone.',
      },
    ],
    mechanism:
      'Semaglutide binds GLP-1 receptors (GLP-1R) with ~1000× greater potency than native GLP-1 per binding event. GLP-1R is a class B GPCR that activates both cAMP/PKA (for insulin secretion) and β-arrestin pathways (for cell survival and satiety signaling). Central GLP-1R activation in the hypothalamus reduces NPY/AgRP neuron activity (appetite-promoting) and increases POMC/CART neuron activity (satiety-promoting). Peripherally, GLP-1R activation in the stomach delays gastric emptying through vagal signaling, while hepatic GLP-1R activation reduces glucose output.',
    researchHighlights: [
      'STEP 1 trial: 14.9% mean body weight loss at 68 weeks vs 2.4% placebo',
      'Demonstrated superior weight loss to all previously approved anti-obesity agents in head-to-head science',
      'SUSTAIN trials: 26% reduction in major adverse cardiovascular events vs placebo',
      'Preservation of lean mass ratio superior to diet-alone intervention in body composition studies',
    ],
    idealFor: ['GLP-1 receptor biology science', 'Obesity and metabolic syndrome investigation', 'Appetite regulation studies', 'Cardiovascular risk science', 'Body composition optimization studies'],
    keywords: ['semaglutide peptide', 'glp-1 agonist fat loss', 'semaglutide weight loss science', 'ozempic peptide science', 'glp-1s metabolic peptide'],
    casNumber: '910463-68-2',
    relatedSlugs: ['glp-1s-10mg', 'glp-1s-15mg', 'glp-2t-15m'],
  },
  {
    slug: 'glp-1s-10mg',
    name: 'GLP-1 S Semaglutide 10mg — Extended Research Supply',
    shortName: 'Semaglutide 10mg',
    category: 'Metabolic & Fat Loss',
    categorySlug: 'metabolic-fat-loss',
    price: 99.99,
    size: '10mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/10/semaglutide_10mg-1.webp',
    tag: 'Best Value',
    tagColor: 'green',
    headline: 'Semaglutide 10mg — Maximum Research Duration at Optimal Price Per Milligram',
    summary:
      'The 10mg Semaglutide format doubles science capacity at the best per-milligram value point in the GLP-1 S lineup, ideal for investigators requiring extended protocols or dose-escalation study designs.',
    description:
      'For metabolic science requiring extended timelines or comparative dose-escalation protocols, the GLP-1 S 10mg vial provides double the science material at the optimal price point in the semaglutide lineup. Semaglutide\'s 165-hour half-life means less frequent administration windows are needed compared to shorter-acting peptides, but extended programs still benefit significantly from the cost efficiency of the 10mg format. Every vial is batch-tested for purity by third-party analytical laboratories and supplied as lyophilized powder for maximum stability.',
    benefits: [
      { title: 'Double Protocol Duration', detail: 'Twice the science material for extended studies, dose-escalation designs, or multi-cohort investigations without supply interruption.' },
      { title: 'Optimal Per-mg Economics', detail: 'Best price-per-milligram in the mid-range GLP-1 S line, making extended programs significantly more cost-efficient.' },
      { title: 'Same Pharmaceutical-Grade Purity', detail: 'Identical synthesis quality and third-party testing as smaller format vials — premium grade consistency guaranteed.' },
      { title: 'Lyophilized Stability', detail: 'Lyophilized format provides extended shelf life and stability across temperature variations during storage and shipping.' },
    ],
    mechanism: 'Full GLP-1 receptor agonism via the same C18-lipidated semaglutide structure — albumin binding for 165-hour half-life, central appetite suppression, gastric emptying delay, and glucose-dependent insulin secretion stimulation.',
    researchHighlights: [
      'Ideal for 12–16 week dose-escalation lab protocols',
      'Third-party CoA documentation included with each batch',
      'Suitable for multi-subject or multi-cohort study designs',
      'Consistent potency across entire vial duration when properly stored',
    ],
    idealFor: ['Extended GLP-1 pathway science', 'Dose escalation study design', 'Multi-cohort metabolic investigations', 'Long-term adipose tissue remodeling studies'],
    keywords: ['semaglutide 10mg science', 'glp-1s 10mg peptide', 'semaglutide bulk lab supply', 'extended glp-1 science', 'semaglutide dose escalation'],
    casNumber: '910463-68-2',
    relatedSlugs: ['glp-1s-5mg', 'glp-1s-15mg', 'glp-2t-15m'],
  },
  {
    slug: 'glp-1s-15mg',
    name: 'GLP-1 S Semaglutide 15mg — Maximum Yield Research Vial',
    shortName: 'Semaglutide 15mg',
    category: 'Metabolic & Fat Loss',
    categorySlug: 'metabolic-fat-loss',
    price: 159.99,
    size: '15mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/semaglutide_15mg.webp',
    tag: 'Max Yield',
    tagColor: 'purple',
    headline: 'Semaglutide 15mg — The Largest Single-Vial Research Format for GLP-1 Studies',
    summary:
      'The 15mg format represents the highest single-vial yield of GLP-1 S Semaglutide available — designed for lab use institutions, large-cohort studies, or advanced investigators conducting comprehensive long-duration metabolic lab protocols.',
    description:
      'Research programs that demand maximum material per acquisition will find the GLP-1 S 15mg vial offers the greatest value and convenience for sustained, high-volume investigation. At 15mg, this vial supports multi-phase studies, allows precise dose titration across a full escalation protocol from 0.25mg to 2.4mg lab equivalents, and eliminates the logistical overhead of frequent reordering. As with all Apollo Peptide Sciences products, each vial is backed by third-party analytical testing confirming identity, purity, and potency.',
    benefits: [
      { title: 'Highest Single-Vial Yield', detail: 'Maximum peptide per vial for the most efficient large-scale or long-duration programs.' },
      { title: 'Full Protocol Design Flexibility', detail: 'Sufficient for complete dose-escalation study designs from starting dose through maximum study dose without supply changes.' },
      { title: 'Institutional Premium Grade', detail: 'Appropriate scale for laboratory or multi-investigator lab teams requiring consistent batch documentation.' },
      { title: 'Best Per-mg Value in GLP-1 S Line', detail: 'Lowest cost per milligram across all semaglutide formats — maximizing lab budget efficiency.' },
    ],
    mechanism: 'Identical semaglutide mechanism — C18-lipidated GLP-1 analog with 165-hour half-life through albumin binding, central and peripheral GLP-1R activation for appetite, glucose, and metabolic regulation.',
    researchHighlights: [
      'Supports complete STEP trial-equivalent dose escalation schedules in studies settings',
      'Batch-specific third-party mass spectrometry and HPLC documentation provided',
      'Lyophilized format maintains potency for extended storage periods',
      'Appropriate scale for institutional or multi-investigator programs',
    ],
    idealFor: ['Large-cohort metabolic science', 'Multi-phase GLP-1 dose escalation studies', 'Institutional programs', 'Comprehensive obesity biology investigation'],
    keywords: ['semaglutide 15mg lab vial', 'glp-1s 15mg peptide science', 'large format semaglutide', 'bulk semaglutide science', 'institutional glp-1 science'],
    casNumber: '910463-68-2',
    relatedSlugs: ['glp-1s-5mg', 'glp-1s-10mg', 'glp-2t-30mg'],
  },
  {
    slug: 'glp-2t-15m',
    name: 'GLP-2 T Tirzepatide 15mg — Dual Agonist Peptide',
    shortName: 'Tirzepatide 15mg',
    category: 'Metabolic & Fat Loss',
    categorySlug: 'metabolic-fat-loss',
    price: 149.99,
    size: '15mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/tirzepatide_15mg-1.webp',
    tag: 'Dual Agonist',
    tagColor: 'gold',
    headline: 'Tirzepatide 15mg — The First Dual GIP/GLP-1 Agonist for Next-Generation Fat Loss Research',
    summary:
      'Tirzepatide is a revolutionary "twincretin" peptide that simultaneously activates both GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptors — producing metabolic effects superior to either pathway alone. Clinical trials show unprecedented 20–22% body weight reductions, establishing new benchmarks in obesity science.',
    description:
      'GLP-2 T (Tirzepatide) represents the evolution of incretin-based metabolic science. By incorporating GIP receptor agonism alongside GLP-1 activity, tirzepatide activates complementary and synergistic metabolic pathways simultaneously. GIP receptors in adipose tissue and muscle appear to work in concert with GLP-1 receptor signaling to produce metabolic improvements exceeding what GLP-1 agonism alone achieves. The SURMOUNT-1 trial documented mean weight loss of 20.9% at the 15mg dose — the largest pharmacological weight reduction ever documented in a randomized controlled trial at the time of publication.',
    benefits: [
      {
        title: 'Superior Weight Reduction vs GLP-1 Monotherapy',
        detail:
          'SURMOUNT-1 clinical trial documents 20.9% mean body weight loss at 15mg — significantly exceeding semaglutide results and representing the most effective pharmacological weight loss documented in RCTs at time of approval.',
      },
      {
        title: 'Dual Incretin Pathway Amplification',
        detail:
          'Simultaneous GIP and GLP-1 receptor activation creates synergistic metabolic signaling: GIP enhances insulin secretion and adipocyte metabolism while GLP-1 suppresses appetite and slows gastric emptying.',
      },
      {
        title: 'Insulin Sensitivity Restoration',
        detail:
          'Combined incretin action produces exceptional improvements in peripheral insulin sensitivity — studies show HOMA-IR reductions and glucose disposal improvements exceeding those of either receptor pathway alone.',
      },
      {
        title: 'Adipose Tissue Phenotype Research',
        detail:
          'GIP receptor expression in adipocytes suggests tirzepatide directly modulates adipose tissue biology — science investigates "browning" of white adipose tissue and improved fat oxidation capacity.',
      },
      {
        title: 'Cardiovascular Risk Factor Improvement',
        detail:
          'Clinical studies demonstrate tirzepatide reduces triglycerides, LDL cholesterol, blood pressure, and inflammatory markers simultaneously — a comprehensive cardiovascular risk profile improvement.',
      },
    ],
    mechanism:
      'Tirzepatide is a 39-amino acid peptide with dual agonist activity at GIP-R and GLP-1R. The molecule is engineered with a C20 fatty diacid side chain enabling albumin binding and a half-life of approximately 5 days. GIP-R activation in pancreatic β-cells amplifies glucose-dependent insulin secretion through cAMP pathways, while simultaneously activating GIP-R in adipose tissue to promote fat storage regulation and lipolysis. The dual receptor occupancy creates a unique signaling environment not achievable with selective agonists.',
    researchHighlights: [
      'SURMOUNT-1: 20.9% weight loss at 15mg dose — highest ever in an obesity RCT',
      'SURPASS trials: Superior HbA1c reduction compared to all approved GLP-1 receptor agonists',
      'Adipose tissue biopsy studies show increased thermogenic gene expression vs GLP-1 monotherapy',
      'Demonstrated non-inferior cardiovascular outcomes in SURPASS-CVOT with favorable trends',
    ],
    idealFor: ['Dual incretin biology science', 'Comparative GIP vs GLP-1 studies', 'Advanced obesity mechanism investigation', 'Adipose tissue phenotype science'],
    keywords: ['tirzepatide peptide', 'dual agonist weight loss peptide', 'glp-2t tirzepatide science', 'mounjaro peptide science', 'twincretin peptide fat loss'],
    casNumber: '2023788-19-2',
    relatedSlugs: ['glp-2t-30mg', 'glp-1s-10mg', 'glp-3r-10mg'],
  },
  {
    slug: 'glp-2t-30mg',
    name: 'GLP-2 T Tirzepatide 30mg — High-Capacity Dual Agonist Research Vial',
    shortName: 'Tirzepatide 30mg',
    category: 'Metabolic & Fat Loss',
    categorySlug: 'metabolic-fat-loss',
    price: 279.99,
    size: '30mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_30mg.webp',
    tag: 'High Capacity',
    tagColor: 'blue',
    headline: 'Tirzepatide 30mg — Maximum Research Capacity for Comprehensive Dual Agonist Studies',
    summary:
      'The 30mg tirzepatide format doubles science capacity for investigators studying the dual GIP/GLP-1 agonist mechanism, providing sufficient material for extended protocols, multiple cohorts, or comprehensive dose-response investigations.',
    description:
      'With the 30mg GLP-2 T format, programs gain maximum flexibility for comprehensive tirzepatide investigation. The dual incretin mechanism of tirzepatide requires adequate study duration to observe full metabolic adaptation, and the 30mg format supports complete long-duration lab protocols without supply interruption. Third-party analytical testing with HPLC and mass spectrometry confirmation accompanies each batch.',
    benefits: [
      { title: 'Maximum Protocol Flexibility', detail: 'Twice the science material for extended timelines, dose-response curves, or multi-cohort metabolic study designs.' },
      { title: 'Complete Dose-Escalation Support', detail: 'Sufficient material for full 5mg → 10mg → 15mg escalation protocols across appropriate science durations.' },
      { title: 'Multi-Cohort Investigation', detail: 'Enables parallel or sequential study arms investigating different dose levels, administration timing, or combination protocols.' },
      { title: 'Best Per-mg Value in GLP-2 T Line', detail: 'Significantly lower cost per milligram compared to smaller formats — maximizing lab investment.' },
    ],
    mechanism: 'Identical dual GIP/GLP-1 receptor agonism via the C20-fatty diacid tirzepatide structure. ~5-day half-life through albumin binding. Synergistic incretin signaling through independent receptor pathways on pancreatic, adipose, and central nervous system cells.',
    researchHighlights: [
      'Supports complete SURMOUNT trial-equivalent dose escalation in studies settings',
      'Batch documentation includes HPLC purity and mass spectrometry identity confirmation',
      'Lyophilized stability suitable for extended storage at appropriate temperature',
      'Ideal for comprehensive metabolic phenotyping study designs',
    ],
    idealFor: ['Long-duration dual agonist science', 'Comprehensive dose-response studies', 'Multi-cohort metabolic investigation', 'Advanced incretin pathway science'],
    keywords: ['tirzepatide 30mg science', 'glp-2t 30mg dual agonist', 'high capacity tirzepatide science', 'bulk tirzepatide peptide', 'mounjaro peptide 30mg'],
    casNumber: '2023788-19-2',
    relatedSlugs: ['glp-2t-15m', 'glp-1s-15mg', 'glp-3r-15mg'],
  },
  {
    slug: 'glp-2-t-60mg',
    name: 'GLP-2 T Tirzepatide 60mg — Elite Research Institution Format',
    shortName: 'Tirzepatide 60mg',
    category: 'Metabolic & Fat Loss',
    categorySlug: 'metabolic-fat-loss',
    price: 489.99,
    size: '60mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/12/tirzepatide_60mg-1.webp',
    tag: 'Bulk Research',
    tagColor: 'purple',
    headline: 'Tirzepatide 60mg — Institutional-Scale Dual Agonist Research Supply',
    summary:
      'The 60mg tirzepatide mega-format delivers maximum single-vial capacity for institutional programs, large-cohort investigations, or lab teams requiring continuous uninterrupted access to premium-grade dual GIP/GLP-1 agonist material.',
    description:
      'For lab institutions, pharmaceutical investigation teams, or advanced scientists conducting comprehensive tirzepatide studies, the 60mg format provides the highest possible material per acquisition. This format eliminates supply concerns for even the most extensive programs, supporting multiple study phases, full dose-range investigations, and long-duration metabolic monitoring protocols. Each vial carries complete batch documentation including third-party HPLC purity and mass spectrometry confirmation.',
    benefits: [
      { title: 'Institutional Research Scale', detail: 'Highest available single-vial format for lab use teams requiring maximum material continuity across extended programs.' },
      { title: 'Multi-Phase Study Support', detail: 'Sufficient for Phase 1 through Phase 3 equivalent study designs within a single batch — ensuring consistency.' },
      { title: 'Maximum Per-mg Cost Efficiency', detail: 'Lowest cost per milligram available in the entire GLP-2 T line — maximum return on lab investment.' },
      { title: 'Complete Documentation Package', detail: 'Full batch-specific CoA with HPLC and MS confirmation — meeting institutional quality assurance requirements.' },
    ],
    mechanism: 'Same dual GIP/GLP-1 agonist mechanism as all GLP-2 T formats. C20 fatty diacid modification for albumin binding and ~5-day half-life. Synergistic incretin signaling for superior metabolic outcomes vs single-receptor agonism.',
    researchHighlights: [
      'Maximum single-vial yield in the GLP-2 T product line',
      'Institutional-grade batch documentation and testing standards',
      'Suitable for multi-site or multi-investigator science coordination',
      'Consistent quality across entire large-volume batch',
    ],
    idealFor: ['Institutional metabolic programs', 'Large-cohort obesity studies', 'Pharmaceutical-equivalent study designs', 'Multi-site coordinated science'],
    keywords: ['tirzepatide 60mg institutional science', 'bulk tirzepatide lab supply', 'glp-2t 60mg peptide', 'large scale tirzepatide science', 'institutional dual agonist peptide'],
    casNumber: '2023788-19-2',
    relatedSlugs: ['glp-2t-30mg', 'glp-3-r-60mg', 'glp-1s-15mg'],
  },
  {
    slug: 'glp-3r-10mg',
    name: 'GLP-3 R Retatrutide 10mg — Triple Receptor Agonist Peptide',
    shortName: 'Retatrutide 10mg',
    category: 'Metabolic & Fat Loss',
    categorySlug: 'metabolic-fat-loss',
    price: 149.99,
    size: '10mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/04/retatrutide_10mg-1.webp',
    tag: 'Triple Agonist',
    tagColor: 'gold',
    headline: 'Retatrutide 10mg — The World\'s Most Potent Metabolic Peptide Now Available for Research',
    summary:
      'Retatrutide is a first-in-class triple agonist peptide that simultaneously activates GLP-1, GIP, and glucagon receptors. Phase 2 clinical trials documented a staggering 24.2% body weight reduction — surpassing every other anti-obesity agent ever tested — making it the most potent metabolic compound in existence for lab use investigation.',
    description:
      'GLP-3 R (Retatrutide) represents the cutting edge of metabolic peptide science. Building on the dual agonist advances of tirzepatide, retatrutide adds glucagon receptor agonism — a critical addition that dramatically amplifies energy expenditure. While GLP-1 receptor activity suppresses appetite and GIP receptor activity improves insulin sensitivity, glucagon receptor activation increases basal metabolic rate by stimulating hepatic glucose production mobilization, thermogenesis in brown adipose tissue, and fatty acid oxidation. The Phase 2 trial published in NEJM (2023) reported 24.2% weight loss at 12mg over 48 weeks — the highest ever documented for a once-weekly treatment.',
    benefits: [
      {
        title: 'Unprecedented Weight Loss Magnitude',
        detail:
          'Phase 2 trials document 24.2% mean body weight reduction at 12mg — exceeding semaglutide, tirzepatide, and every other anti-obesity agent in head-to-head science comparison. The new benchmark in fat loss science.',
      },
      {
        title: 'Triple Receptor Metabolic Synergy',
        detail:
          'GLP-1R + GIP-R + GCGR simultaneous activation creates a metabolic environment with combined appetite suppression, insulin sensitization, AND active thermogenesis — three independent pathways driving fat loss simultaneously.',
      },
      {
        title: 'Glucagon-Driven Energy Expenditure',
        detail:
          'The glucagon receptor component drives increases in basal metabolic rate — a unique feature absent in semaglutide and tirzepatide — allowing energy expenditure to rise even as caloric intake falls.',
      },
      {
        title: 'Liver Fat (MASLD) Reduction',
        detail:
          'Glucagon receptor agonism powerfully reduces hepatic steatosis — Phase 2 data shows dramatic reductions in liver fat content, with implications for metabolic-associated steatotic liver disease science.',
      },
      {
        title: 'Muscle Mass Preservation',
        detail:
          'Despite extraordinary fat loss magnitude, retatrutide studies suggest preservation of lean mass at levels comparable to tirzepatide — addressing the central challenge of maintaining muscle during aggressive caloric restriction.',
      },
      {
        title: 'Lipid Profile Optimization',
        detail:
          'Triple agonism drives comprehensive lipid panel improvements — reductions in triglycerides, LDL, and VLDL alongside HDL improvements — suggesting cardiovascular benefits beyond weight loss magnitude.',
      },
    ],
    mechanism:
      'Retatrutide simultaneously occupies GLP-1R (cAMP/PKA pathway → appetite suppression, insulin secretion), GIP-R (cAMP/PKA pathway → insulin amplification, adipose regulation), and GCGR (cAMP/PKA pathway → hepatic glucose mobilization, thermogenesis, fatty acid oxidation). The C18 lipidated side chain enables albumin binding and a half-life of approximately 6 days. The glucagon component\'s thermogenic effect through UCP1 activation in brown adipose tissue and ATGL-driven lipolysis in white adipose tissue adds an active metabolic expenditure component that passive appetite suppression cannot achieve.',
    researchHighlights: [
      'NEJM 2023 Phase 2 trial: 24.2% body weight loss at 12mg — largest ever in a once-weekly treatment RCT',
      'Liver fat reduction up to 81.7% in MASLD participants in Phase 2 data',
      'Triglyceride reductions of 42% reported alongside weight loss in Phase 2',
      'Currently in Phase 3 clinical development — most advanced triple agonist in history',
    ],
    idealFor: ['Cutting-edge triple agonist mechanism science', 'Comparative incretin pathway studies', 'Thermogenesis and energy expenditure investigation', 'Hepatic steatosis science'],
    keywords: ['retatrutide peptide', 'triple agonist weight loss peptide', 'glp-3r retatrutide science', 'most potent fat loss peptide science', 'glp-1 gip glucagon agonist'],
    casNumber: '2381089-83-2',
    relatedSlugs: ['glp-3r-15mg', 'glp-2t-15m', 'glp-1s-10mg'],
  },
  {
    slug: 'glp-3r-15mg',
    name: 'GLP-3 R Retatrutide 15mg — Extended Triple Agonist Protocol Supply',
    shortName: 'Retatrutide 15mg',
    category: 'Metabolic & Fat Loss',
    categorySlug: 'metabolic-fat-loss',
    price: 189.99,
    size: '15mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/retatrutide_15mg.webp',
    tag: 'Extended Supply',
    tagColor: 'blue',
    headline: 'Retatrutide 15mg — Extended Supply for the Triple Receptor Revolution in Fat Loss Research',
    summary:
      'The 15mg Retatrutide format provides extended lab supply for investigators studying the unprecedented triple GLP-1/GIP/glucagon agonist mechanism — sufficient for complete dose-escalation protocols and long-duration metabolic investigations.',
    description:
      'GLP-3 R 15mg provides investigators scienceing the cutting edge of metabolic peptide science with sufficient material for comprehensive study designs. The triple receptor agonist mechanism of retatrutide requires careful dose titration and extended observation periods to capture the full magnitude of metabolic adaptation — making the 15mg format ideal for complete protocol execution. Third-party verified for purity and identity with batch-specific CoA documentation.',
    benefits: [
      { title: 'Complete Escalation Protocol', detail: 'Sufficient for full 2mg → 4mg → 8mg → 12mg dose escalation protocols within standard science durations.' },
      { title: 'Extended Observation Period', detail: 'Supports the longer study durations needed to observe peak metabolic adaptation to triple agonist signaling.' },
      { title: 'Optimal Value Point', detail: 'Best value in the mid-range GLP-3 R line for lab useers balancing protocol completeness against budget efficiency.' },
      { title: 'Multi-Parameter Monitoring', detail: 'Sufficient material for comprehensive metabolic phenotyping including body composition, metabolic rate, lipids, and liver markers.' },
    ],
    mechanism: 'Identical triple GLP-1R/GIP-R/GCGR agonist mechanism as all retatrutide formats. C18 lipidation for albumin binding and ~6-day half-life. Synergistic appetite suppression, insulin sensitization, and thermogenic energy expenditure amplification.',
    researchHighlights: [
      'Supports NEJM Phase 2-equivalent dose escalation schedules in studies settings',
      'Third-party HPLC and mass spectrometry batch documentation',
      'Designed for complete 48-week equivalent lab protocols',
      'Lyophilized format for maximum stability and shelf life',
    ],
    idealFor: ['Extended triple agonist metabolic science', 'Dose escalation study design', 'Long-duration body composition science', 'Comparative incretin mechanism studies'],
    keywords: ['retatrutide 15mg science', 'glp-3r 15mg triple agonist', 'extended retatrutide protocol', 'retatrutide dose escalation science', 'triple receptor fat loss peptide 15mg'],
    casNumber: '2381089-83-2',
    relatedSlugs: ['glp-3r-10mg', 'glp-3-r-30mg', 'glp-2t-30mg'],
  },
  {
    slug: 'glp-3-r-30mg',
    name: 'GLP-3 R Retatrutide 30mg — High-Volume Triple Agonist Research',
    shortName: 'Retatrutide 30mg',
    category: 'Metabolic & Fat Loss',
    categorySlug: 'metabolic-fat-loss',
    price: 349.99,
    size: '30mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/12/retatrutide_30mg.webp',
    tag: 'High Volume',
    tagColor: 'purple',
    headline: 'Retatrutide 30mg — Maximum Capacity Triple Agonist for Serious Metabolic Programs',
    summary:
      'The 30mg retatrutide format provides maximum science capacity for comprehensive triple GLP-1/GIP/glucagon agonist investigation — ideal for institutional programs, multi-cohort designs, or extended Phase-equivalent lab protocols.',
    description:
      'For programs requiring maximum material for the most powerful metabolic peptide currently under clinical development, the GLP-3 R 30mg vial delivers unparalleled capacity. At this scale, investigators can execute full multi-phase protocols, comparative dose-response studies, and comprehensive metabolic phenotyping panels. The 30mg format supports simultaneous investigation of multiple metabolic parameters — from body composition to liver health to cardiovascular biomarkers — across complete protocol timelines.',
    benefits: [
      { title: 'Maximum Research Capacity', detail: 'Highest mid-range single-vial format for the most demanding triple agonist programs.' },
      { title: 'Multi-Cohort Design Support', detail: 'Supports multiple simultaneous study arms investigating different dose levels or combination approaches.' },
      { title: 'Comprehensive Phenotyping', detail: 'Sufficient material for complete metabolic phenotyping including body composition, metabolic rate, liver, lipid, and hormonal panels.' },
      { title: 'Superior Economics', detail: 'Significantly lower per-mg cost vs smaller formats — optimal for programs where material cost represents a meaningful budget consideration.' },
    ],
    mechanism: 'Full triple GLP-1R/GIP-R/GCGR agonist mechanism with C18 lipidation for ~6-day half-life. Peak in class for thermogenesis, appetite suppression, and insulin sensitization through synergistic receptor occupancy.',
    researchHighlights: [
      'Highest capacity mid-range format in the GLP-3 R product line',
      'Complete batch documentation: HPLC purity >98%, mass spectrometry identity confirmation',
      'Supports multi-phase lab equivalent to complete Phase 2 trial duration',
      'Ideal for institutional purchase reducing per-program supply costs',
    ],
    idealFor: ['Institutional metabolic science', 'Multi-cohort triple agonist studies', 'Comprehensive Phase-equivalent study designs', 'Advanced thermogenesis investigation'],
    keywords: ['retatrutide 30mg science', 'glp-3r 30mg bulk peptide', 'high capacity retatrutide science', 'institutional triple agonist science', 'retatrutide 30mg metabolic study'],
    casNumber: '2381089-83-2',
    relatedSlugs: ['glp-3-r-60mg', 'glp-3r-15mg', 'glp-2-t-60mg'],
  },
  {
    slug: 'glp-3-r-60mg',
    name: 'GLP-3 R Retatrutide 60mg — Elite Institutional Research Format',
    shortName: 'Retatrutide 60mg',
    category: 'Metabolic & Fat Loss',
    categorySlug: 'metabolic-fat-loss',
    price: 589.99,
    size: '60mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/12/retatrutide_60mg.webp',
    tag: 'Elite Supply',
    tagColor: 'gold',
    headline: 'Retatrutide 60mg — The Largest Available Format of the World\'s Most Potent Fat Loss Peptide',
    summary:
      'The 60mg Retatrutide mega-format delivers the maximum available single-vial quantity of this triple GLP-1/GIP/glucagon agonist — reserved for the most ambitious programs pushing the frontier of metabolic science.',
    description:
      'For lab institutions and advanced investigators at the cutting edge of metabolic peptide science, the GLP-3 R 60mg vial provides the highest possible material capacity for retatrutide science. This format supports comprehensive institutional programs including comparative GLP-1 vs GLP-2 vs GLP-3 agonist studies, full pharmacokinetic profiling, organ-level metabolic investigation, and large-cohort designs that require consistent single-batch documentation. The most complete metabolic science possible with the most potent fat loss peptide ever developed.',
    benefits: [
      { title: 'Maximum Available Yield', detail: 'Highest single-vial capacity for the most ambitious retatrutide programs.' },
      { title: 'Single-Batch Consistency', detail: 'Entire science program from a single batch ensures perfect analytical consistency for multi-phase studies.' },
      { title: 'Comparative Research Capacity', detail: 'Sufficient for side-by-side GLP-1 vs GLP-3 or tirzepatide vs retatrutide comparative mechanistic investigations.' },
      { title: 'Maximum Value', detail: 'Lowest cost per milligram across entire GLP-3 R line — maximum science ROI for institutional budgets.' },
    ],
    mechanism: 'Complete triple GLP-1R/GIP-R/GCGR co-agonism. C18 lipidation, albumin binding, ~6-day half-life. The most potent combination of appetite suppression, insulin sensitization, and metabolic rate increase of any single peptide in studies history.',
    researchHighlights: [
      'Maximum single-purchase format for the most potent anti-obesity peptide in clinical development',
      'Institutional-grade batch documentation and analytical testing standards',
      'Suitable for multi-site or multi-investigator coordinated programs',
      'Phase 3 equivalent study design capacity within a single purchase',
    ],
    idealFor: ['Elite institutional metabolic science', 'Comprehensive comparative triple vs dual agonist studies', 'Large-scale obesity mechanism investigation', 'Multi-site coordinated metabolic science'],
    keywords: ['retatrutide 60mg elite science', 'glp-3r 60mg institutional peptide', 'largest retatrutide format', 'elite fat loss peptide science 60mg', 'maximum retatrutide lab supply'],
    casNumber: '2381089-83-2',
    relatedSlugs: ['glp-3-r-30mg', 'glp-2-t-60mg', 'glp-1s-15mg'],
  },
  {
    slug: 'glp-1cglp-1s-5mg',
    name: 'GLP-1 C + GLP-1 S Combination — Cagrilintide / Semaglutide 5mg Blend',
    shortName: 'Cagri + Sema Combo',
    category: 'Metabolic & Fat Loss',
    categorySlug: 'metabolic-fat-loss',
    price: 109.99,
    size: '5mg + 5mg',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2025/09/cagri_sema_5_5mg-1.webp',
    tag: 'Combo Stack',
    tagColor: 'gold',
    headline: 'CagriSema Combination Stack — The Amylin + GLP-1 Dual Mechanism Fat Loss Research Frontier',
    summary:
      'The GLP-1 C + GLP-1 S combination delivers both cagrilintide (long-acting amylin analog) and semaglutide in a single lab bundle — investigating the synergistic weight loss potential of combined amylin/GLP-1 dual mechanism science that Phase 2 trials suggest may exceed either agent alone.',
    description:
      'Cagrilintide (GLP-1 C) is a long-acting amylin analog developed by Novo Nordisk for use in combination with semaglutide as "CagriSema." Amylin is a pancreatic peptide co-secreted with insulin that acts centrally on the area postrema and hypothalamus to reduce food intake, slow gastric emptying, and reduce glucagon secretion. Unlike GLP-1 agonists that work primarily through GLP-1R, amylin analogs activate amylin receptors (AMY1-3) — entirely independent receptors. Combining amylin receptor and GLP-1 receptor activation therefore provides complementary, non-redundant weight loss mechanisms. Phase 2 SCALE data showed the CagriSema combination achieving ~15% weight loss vs ~9% for semaglutide alone.',
    benefits: [
      {
        title: 'Dual Non-Redundant Mechanism Action',
        detail:
          'Amylin receptor (AMY1-3) activation by cagrilintide operates through entirely different neural circuits than GLP-1R — providing complementary appetite suppression without receptor desensitization competition.',
      },
      {
        title: 'Superior Weight Loss vs GLP-1 Monotherapy',
        detail:
          'Phase 2 data shows CagriSema achieving ~15% weight loss vs ~9% for semaglutide alone and ~8% for cagrilintide alone — demonstrating true synergistic effect beyond simple addition.',
      },
      {
        title: 'Area Postrema Satiety Amplification',
        detail:
          'Amylin receptors concentrated in the area postrema (a brain region uniquely exposed to circulating peptides) provide powerful central satiety signals independently of hypothalamic GLP-1R circuitry.',
      },
      {
        title: 'Glycemic Control Enhancement',
        detail:
          'Cagrilintide\'s amylin activity adds glucagon suppression and gastric emptying delay to semaglutide\'s insulin secretion amplification — providing multi-mechanism glycemic control in metabolic science models.',
      },
      {
        title: 'Premium Grade Combination Protocol',
        detail:
          'Pre-combined lab bundle enables precise, standardized investigation of the cagrilintide/semaglutide combination without separate weighing and reconstitution requirements.',
      },
    ],
    mechanism:
      'Cagrilintide binds amylin receptors (CGRP receptor + RAMP1/2/3 complexes) in the area postrema, hypothalamus, and GI tract. AMY receptor activation increases intracellular cAMP and activates MAPK pathways to suppress food intake, reduce glucagon secretion, and delay gastric emptying. These effects are additive with semaglutide\'s GLP-1R-mediated appetite suppression, creating synergistic central satiety signaling from two anatomically distinct receptor populations in the brain\'s appetite control networks.',
    researchHighlights: [
      'Phase 2 CagriSema trial: ~15% weight loss vs ~9% semaglutide alone at comparable doses',
      'Currently in Phase 3 REDEFINE program targeting 25%+ weight loss',
      'Amylin receptor mechanism completely independent of GLP-1R pathway — true mechanistic synergy',
      'Potential to challenge retatrutide for maximum weight loss magnitude in ongoing Phase 3 data',
    ],
    idealFor: ['CagriSema combination mechanism science', 'Amylin receptor biology investigation', 'Comparative dual vs triple agonist studies', 'Advanced appetite regulation science'],
    keywords: ['cagrisema peptide science', 'cagrilintide semaglutide combination', 'amylin glp-1 combination science', 'dual mechanism weight loss peptide', 'cagri sema combo science'],
    relatedSlugs: ['glp-1s-10mg', 'glp-2t-15m', 'glp-3r-10mg'],
  },

  // ─── BUNDLES ─────────────────────────────────────────────────────────────
  {
    slug: 'glp-2t-20mg-5-pack',
    name: 'GLP-2 T Tirzepatide 20mg × 5 Bundle — 100mg Total Research Supply',
    shortName: 'Tirzepatide 5-Pack',
    category: 'Bundles',
    categorySlug: 'bundles',
    price: 699.99,
    size: '100mg (5×20mg)',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_20mg_multi.webp',
    tag: 'Bundle',
    tagColor: 'gold',
    headline: 'Tirzepatide 100mg Research Bundle — Maximum Dual Agonist Supply at Maximum Value',
    summary:
      'Five vials of 20mg tirzepatide providing 100mg total lab supply — the most economical way to acquire large-quantity dual GIP/GLP-1 agonist material for long-duration, multi-cohort, or institutional metabolic programs.',
    description:
      'The GLP-2 T 5-Pack delivers 100mg of tirzepatide across five individually sealed 20mg vials, providing programs with maximum supply at the best possible per-milligram cost. Multi-vial bundles ensure batch consistency across the entire science program, while individual vial seals maintain peptide stability and allow staged reconstitution as needed. Each vial carries the same third-party analytical documentation as individual purchases.',
    benefits: [
      { title: '100mg Total Research Supply', detail: 'Five times the single-vial material, enabling the most comprehensive and longest-duration tirzepatide lab protocols.' },
      { title: 'Maximum Per-mg Value', detail: 'Bundle pricing provides the lowest cost per milligram available for tirzepatide — maximum lab budget efficiency.' },
      { title: 'Individual Vial Integrity', detail: 'Each of the five vials remains independently sealed until use — preserving peptide stability and allowing staged science progression.' },
      { title: 'Consistent Batch Documentation', detail: 'All five vials from the same batch with unified CoA documentation — ensuring analytical consistency across the entire science program.' },
    ],
    mechanism: 'Dual GIP-R and GLP-1R co-agonist mechanism. C20 fatty diacid modification for ~5-day half-life. Complete incretin pathway amplification for appetite suppression, insulin sensitization, and adipose tissue remodeling.',
    researchHighlights: [
      'Supports complete multi-phase programs equivalent to SURMOUNT trial design',
      'Five individually documented vials for staged lab use',
      'Enables largest-scale tirzepatide studies available through retail lab suppliers',
      'Most economical per-mg pricing in the GLP-2 T product line',
    ],
    idealFor: ['Large-cohort tirzepatide metabolic science', 'Multi-phase dual agonist investigation', 'Long-duration body composition studies', 'Institutional metabolic programs'],
    keywords: ['tirzepatide 5 pack science', 'tirzepatide 100mg bundle', 'glp-2t bulk bundle', 'tirzepatide multi-vial science', 'dual agonist bundle fat loss science'],
    casNumber: '2023788-19-2',
    relatedSlugs: ['glp-2t-15mg-4-pack', 'glp-3-r-60mg', 'glp-2-t-60mg'],
  },
  {
    slug: 'glp-2t-15mg-4-pack',
    name: 'GLP-2 T Tirzepatide 15mg × 4 Bundle — 60mg Value Pack',
    shortName: 'Tirzepatide 4-Pack',
    category: 'Bundles',
    categorySlug: 'bundles',
    price: 569.99,
    size: '60mg (4×15mg)',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_15mg_multi.webp',
    tag: 'Bundle',
    tagColor: 'blue',
    headline: 'Tirzepatide 4-Pack — 60mg Dual Agonist Research Bundle for Complete Protocol Coverage',
    summary:
      'Four vials of 15mg tirzepatide totaling 60mg of dual GIP/GLP-1 agonist material — the mid-range bundle option for programs requiring complete protocol coverage with significant savings versus individual unit pricing.',
    description:
      'The GLP-2 T 4-Pack delivers 60mg of pharmaceutical-grade tirzepatide across four individually sealed vials, optimized for programs that need sustained supply without the commitment of the full 5-pack. This format is ideal for investigations following SURMOUNT-equivalent 36-week study timelines, or for programs running two parallel study arms simultaneously. Third-party batch documentation accompanies all four vials.',
    benefits: [
      { title: '60mg Total Protocol Coverage', detail: 'Four vials providing complete coverage for standard 36-week equivalent tirzepatide lab protocols.' },
      { title: 'Significant Bundle Savings', detail: 'Meaningful per-mg savings vs individual 15mg unit pricing — accessible for mid-size programs.' },
      { title: 'Parallel Study Design Ready', detail: 'Four vials enable simultaneous dual-cohort study designs — two vials per arm with consistent batch documentation.' },
      { title: 'Optimal Mid-Range Value', detail: 'Best balance of quantity, cost, and flexibility for programs not requiring full 5-pack scale.' },
    ],
    mechanism: 'Complete dual GIP-R/GLP-1R co-agonist activity. Identical mechanism to all GLP-2 T formats. C20 fatty diacid-modified tirzepatide with ~5-day albumin-binding half-life.',
    researchHighlights: [
      '60mg total supply for standard multi-month science program designs',
      'Four individually sealed vials with unified batch CoA documentation',
      'Enables dual-arm comparative design within a single purchase',
      'Consistent quality across all four vials from same analytical batch',
    ],
    idealFor: ['Dual-cohort tirzepatide studies', 'Standard-duration metabolic programs', 'Mid-scale body composition investigation', 'Dose comparison study designs'],
    keywords: ['tirzepatide 4 pack lab bundle', 'glp-2t 60mg bundle', 'tirzepatide multi vial discount', 'dual agonist lab bundle value', 'tirzepatide 15mg 4 pack metabolic science'],
    casNumber: '2023788-19-2',
    relatedSlugs: ['glp-2t-20mg-5-pack', 'glp-2t-15mg-10-pack', 'glp-2-t-60mg'],
  },
  {
    slug: 'glp-2t-15mg-10-pack',
    name: 'GLP-2 T Tirzepatide 15mg × 10 Bundle — 150mg Maximum Research Stockpile',
    shortName: 'Tirzepatide 10-Pack',
    category: 'Bundles',
    categorySlug: 'bundles',
    price: 1399.99,
    size: '150mg (10×15mg)',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/tirzepatide_15mg_multi.webp',
    tag: 'Mega Bundle',
    tagColor: 'purple',
    headline: 'Tirzepatide 150mg Mega Bundle — The Ultimate Dual Agonist Research Stockpile',
    summary:
      'Ten vials of 15mg tirzepatide totaling 150mg — the most comprehensive dual GIP/GLP-1 agonist lab supply available, designed for institutions, long-term programs, or lab teams requiring maximum material with absolute minimum per-milligram cost.',
    description:
      'The GLP-2 T 10-Pack is the ultimate lab supply bundle for serious tirzepatide investigation. At 150mg total, this represents the most tirzepatide available in a single purchase — supporting years of data protocols, comprehensive institutional programs, or multiple simultaneous study arms. All ten vials carry unified batch documentation for analytical consistency, with individually sealed packaging maintaining peptide integrity across the full bundle.',
    benefits: [
      { title: '150mg Total — Unmatched Supply', detail: 'The most tirzepatide available in a single purchase — supporting multiple complete programs from a single batch.' },
      { title: 'Absolute Lowest Per-mg Cost', detail: 'Maximum bulk discount pricing — lowest cost per milligram of any tirzepatide format available.' },
      { title: 'Multi-Year Research Continuity', detail: 'Sufficient supply for 2–3 years of sustained tirzepatide science without reordering — batch consistency guaranteed.' },
      { title: 'Institutional Program Ready', detail: 'Scale appropriate for university, pharmaceutical, or multi-investigator programs with formal supply chain requirements.' },
    ],
    mechanism: 'Dual GIP-R/GLP-1R co-agonist mechanism. Identical tirzepatide chemistry and potency across all 10 vials. ~5-day albumin-binding half-life from C20 fatty diacid modification.',
    researchHighlights: [
      'Maximum single-purchase supply of tirzepatide available through lab suppliers',
      'Unified batch CoA documentation for all 10 vials — institutional compliance ready',
      'Lowest cost-per-milligram pricing in the entire GLP-2 T product line',
      'Supports comprehensive Phase-equivalent programs from a single order',
    ],
    idealFor: ['Institutional tirzepatide programs', 'Multi-year longitudinal metabolic studies', 'Large-cohort obesity investigation', 'Pharmaceutical equivalent study designs'],
    keywords: ['tirzepatide 10 pack mega bundle', 'tirzepatide 150mg lab supply', 'bulk tirzepatide institutional science', 'glp-2t maximum lab bundle', 'cheapest tirzepatide per mg science'],
    casNumber: '2023788-19-2',
    relatedSlugs: ['glp-2t-20mg-5-pack', 'glp-2t-15mg-4-pack', 'glp-3-r-60mg'],
  },

  // ─── ANCILLARIES ─────────────────────────────────────────────────────────
  {
    slug: 'bacteriostatic-water-reconstitution-solution-10ml',
    name: 'Bacteriostatic Water Reconstitution Solution 10ml',
    shortName: 'Bacteriostatic Water',
    category: 'Research Supplies',
    categorySlug: 'science-supplies',
    price: 9.99,
    originalPrice: 11.99,
    size: '10ml',
    image: 'https://apollopeptidesciences.com/wp-content/uploads/2024/06/reconsitution_solution_10ml.webp',
    tag: 'Essential',
    tagColor: 'gray',
    headline: 'Pharmaceutical-Grade Bacteriostatic Water — Essential for Lyophilized Peptide Reconstitution',
    summary:
      'Bacteriostatic Water is the required reconstitution solution for all lyophilized peptide science preparations. This pharmaceutical-grade 0.9% benzyl alcohol solution maintains sterility across multiple draws, making it the gold-standard reconstitution medium for peptides.',
    description:
      'Bacteriostatic Water (0.9% Benzyl Alcohol in Water for Injection, WFI) is the universally recommended reconstitution medium for lyophilized peptides. The benzyl alcohol preservative inhibits bacterial growth across multiple needle-punctures of the septum, maintaining sterility throughout a lab protocol — unlike sterile water which becomes contaminated after first use. This 10ml multi-use vial is sufficient for reconstituting multiple peptide preparations and is matched specifically to the vial volumes used in Apollo\'s peptide catalog.',
    benefits: [
      { title: 'Multi-Draw Sterility Maintenance', detail: '0.9% benzyl alcohol preservative maintains bacterial inhibition across all needle punctures of the vial — standard for multi-use reconstitution.' },
      { title: 'Peptide Compatibility', detail: 'Optimal pH and osmolality for lyophilized peptide dissolution without denaturation or loss of biological activity.' },
      { title: 'Pharmaceutical Manufacturing Standard', detail: 'Produced under pharmaceutical-grade conditions for Water for Injection — the highest quality standard for parenteral reconstitution media.' },
      { title: 'Proper Storage Stability', detail: 'Benzyl alcohol preserved formulation maintains efficacy from date of manufacture through expiry date when stored at room temperature.' },
    ],
    mechanism:
      'Bacteriostatic water serves as a physiologically compatible aqueous vehicle for peptide reconstitution. The 0.9% benzyl alcohol acts as a bacteriostatic agent by disrupting bacterial cell membranes, preventing colonization in the multi-use vial. Water for Injection (WFI) base ensures ultra-low endotoxin and particulate levels appropriate for lab use.',
    researchHighlights: [
      'Standard reconstitution medium recommended for all lyophilized peptide preparations',
      'Compatible with all peptides in the Apollo Peptide Sciences catalog',
      '10ml volume appropriate for single or multiple peptide reconstitution protocols',
      'Pharmaceutical-grade production ensures absence of pyrogens and endotoxins',
    ],
    idealFor: ['Lyophilized peptide reconstitution', 'Multi-draw lab vial preparation', 'Standard science laboratory peptide protocols', 'Ancillary supply for any peptide purchase'],
    keywords: ['bacteriostatic water peptide reconstitution', 'bac water for peptides', 'peptide reconstitution solution', 'sterile water for peptides science', 'bacteriostatic water 10ml'],
    relatedSlugs: ['bpc157-10mg', 'tb500-10mg', 'ghk-cu'],
  },
]

export const categories = [
  { name: 'Skin & Anti-Aging', slug: 'skin-anti-aging', icon: '✦', description: 'Peptides targeting collagen synthesis, wrinkle reduction, and dermal regeneration' },
  { name: 'Longevity', slug: 'longevity', icon: '◈', description: 'Research compounds addressing telomere biology, cellular aging, and lifespan mechanisms' },
  { name: 'Recovery & Healing', slug: 'recovery-healing', icon: '⬡', description: 'Tissue repair, angiogenesis, and multi-system healing peptides' },
  { name: 'Growth & Body Composition', slug: 'growth-body-comp', icon: '▲', description: 'GH secretagogues, anabolic growth factors, and body recomposition peptides' },
  { name: 'Metabolic & Fat Loss', slug: 'metabolic-fat-loss', icon: '◎', description: 'GLP-1, dual, and triple agonist incretin peptides for metabolic optimization science' },
  { name: 'Bundles', slug: 'bundles', icon: '⬢', description: 'Multi-vial lab bundles for extended protocols at maximum value' },
  { name: 'Research Supplies', slug: 'science-supplies', icon: '◇', description: 'Essential ancillary items for peptide reconstitution and lab protocols' },
]

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(slugs: string[]) {
  return products.filter((p) => slugs.includes(p.slug)).slice(0, 3)
}

export function getFeaturedProducts() {
  return products.filter((p) =>
    ['ghk-cu', 'bpc157-10mg', 'cjc1295-ipamorelin', 'epithalon-50mg', 'glp-3r-10mg', 'igf-1lr3'].includes(p.slug)
  )
}
