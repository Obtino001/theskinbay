/* ═══════════════════════════════════════════════════════
   THESKINBAY — INGREDIENTS LIBRARY
   Ingredient database + search + filter + modal + products
   ═══════════════════════════════════════════════════════ */
'use strict';

/* ── INGREDIENT DATABASE ────────────────────────────── */
var LF_INGREDIENTS = [
  {
    id: 'alcohol-denat',
    name: 'Alcohol Denat',
    letter: 'A',
    aliases: ['Denatured Alcohol', 'SD Alcohol', 'Ethanol'],
    category: 'Solvent',
    safety: 'red',
    safetyLabel: 'Higher Concern',
    safetyNote: 'Some studies indicate that denatured alcohol may disrupt the skin barrier with prolonged use, particularly in high concentrations. May cause dryness and irritation, especially in sensitive or dry skin types.',
    summary: 'A fast-drying solvent commonly used to improve product texture and help other ingredients penetrate the skin. While effective at dissolution and delivery, concerns exist around its impact on the skin barrier at higher concentrations.',
    benefits: ['Improves product texture', 'Speeds drying time', 'Enhances ingredient penetration', 'Antimicrobial properties'],
    concerns: ['Acne', 'Fragrance free'],
    skinTypes: ['Oily skin (low concentration)', 'Not recommended for dry or sensitive skin'],
    pregnancySafe: 'caution',
    pregnancyNote: 'Generally considered low-risk in small amounts. Consult your midwife or doctor if concerned.',
    compatibility: [],
    contraindications: ['Dry skin', 'Sensitive skin', 'Rosacea', 'Eczema'],
    layering: 'Products with high alcohol content are best used before water-based serums. Avoid layering directly over compromised or dry skin.',
    clinical: 'The impact of denatured alcohol on skin barrier function is concentration-dependent. Low levels in formulations (under 5%) are generally considered safe; higher concentrations may impair ceramide synthesis.',
    searchTags: ['toner', 'essence', 'mist'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'azelaic-acid',
    name: 'Azelaic Acid',
    letter: 'A',
    aliases: ['Azelaic Acid 10%', 'Azelaic Acid 15%', 'Azeloyl Diglycine'],
    category: 'Multi-active',
    safety: 'yellow',
    safetyLabel: 'Moderate Concern',
    safetyNote: 'Current research suggests azelaic acid is very well tolerated by most skin types, including sensitive skin. Mild tingling or flushing may occur initially, especially at higher concentrations.',
    summary: 'A naturally occurring dicarboxylic acid found in grains such as wheat and barley. Clinically used to treat acne, hyperpigmentation, and rosacea. One of the most versatile and well-tolerated skin actives available.',
    benefits: ['Reduces hyperpigmentation', 'Antibacterial — targets acne-causing bacteria', 'Reduces redness and rosacea symptoms', 'Gentle exfoliation', 'Brightening', 'Anti-inflammatory'],
    concerns: ['Acne', 'Pigmentation', 'Rosacea', 'Brightening', 'Sensitive skin'],
    skinTypes: ['All skin types', 'Sensitive skin', 'Rosacea-prone', 'Acne-prone'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Azelaic acid is widely considered safe during pregnancy. Always confirm with your healthcare provider.',
    compatibility: ['Hyaluronic Acid', 'Niacinamide', 'SPF', 'Ceramides', 'Retinol (alternate use)'],
    contraindications: [],
    layering: 'Apply to clean, dry skin after cleansing. Can be used morning or evening. If using with retinol, alternate nights. Always follow with SPF in the morning.',
    clinical: 'Azelaic acid inhibits tyrosinase activity, reducing melanin production. It also has antibacterial and anti-inflammatory effects, making it uniquely suited for acne with post-inflammatory hyperpigmentation.',
    searchTags: ['azelaic', 'rosacea', 'brightening', 'acne'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'bakuchiol',
    name: 'Bakuchiol',
    letter: 'B',
    aliases: ['Babchi Seed Extract', 'Psoralea corylifolia Extract'],
    category: 'Retinol Alternative',
    safety: 'green',
    safetyLabel: 'Low Concern',
    safetyNote: 'Current research suggests bakuchiol is very well tolerated, even by sensitive skin. No known photosensitivity or reproductive concerns, making it a preferred alternative for those who cannot use retinoids.',
    summary: 'A plant-derived compound from the seeds of Psoralea corylifolia (babchi plant). Clinically shown to produce retinol-comparable results in reducing fine lines and improving skin texture, without the irritation associated with retinoids.',
    benefits: ['Reduces fine lines and wrinkles', 'Improves skin firmness', 'Stimulates collagen production', 'Brightening and evening skin tone', 'Antioxidant protection', 'Safe during pregnancy'],
    concerns: ['Anti-ageing', 'Brightening', 'Sensitive skin', 'Pregnancy safe'],
    skinTypes: ['All skin types', 'Sensitive skin', 'Mature skin', 'Pregnant skin'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Bakuchiol is widely considered safe during pregnancy and is a recommended retinol alternative.',
    compatibility: ['Hyaluronic Acid', 'Vitamin C', 'Niacinamide', 'Ceramides', 'SPF', 'AHAs (caution)'],
    contraindications: [],
    layering: 'Can be used morning and evening. Apply before moisturiser. Can be combined with SPF in the AM. Suitable to use with most actives.',
    clinical: 'A 2019 clinical study in the British Journal of Dermatology found bakuchiol comparable to retinol in reducing fine lines and wrinkles, with significantly lower incidence of irritation and peeling.',
    searchTags: ['bakuchiol', 'retinol alternative', 'anti-ageing serum'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'benzoyl-peroxide',
    name: 'Benzoyl Peroxide',
    letter: 'B',
    aliases: ['BPO', 'Benzoylperoxide'],
    category: 'Acne Treatment',
    safety: 'yellow',
    safetyLabel: 'Moderate Concern',
    safetyNote: 'Current research supports benzoyl peroxide as an effective acne treatment. May cause dryness, peeling, and irritation, particularly at higher concentrations. May bleach fabrics and hair on contact.',
    summary: 'A clinically proven bactericidal agent that eliminates Cutibacterium acnes (the bacteria responsible for acne). Available in concentrations ranging from 2.5% to 10%. Lower concentrations (2.5–5%) are equally effective with reduced irritation.',
    benefits: ['Kills acne-causing bacteria', 'Reduces inflammatory lesions', 'Prevents antibiotic resistance', 'Unclogs pores', 'Reduces excess sebum'],
    concerns: ['Acne'],
    skinTypes: ['Oily skin', 'Acne-prone skin'],
    pregnancySafe: 'caution',
    pregnancyNote: 'Use is generally considered low risk in small amounts. Consult your doctor or midwife before use during pregnancy.',
    compatibility: ['Hyaluronic Acid', 'Gentle moisturisers', 'SPF'],
    contraindications: ['Sensitive skin', 'Dry skin', 'Eczema', 'Not for use with retinol simultaneously', 'Vitamin C (reduces efficacy)'],
    layering: 'Apply to clean, dry skin. Start with a lower concentration (2.5%) and build tolerance. Do not apply with retinol at the same time. Always follow with SPF.',
    clinical: 'Studies consistently show 2.5% BPO is as effective as 5% or 10% concentrations with fewer side effects. BPO is recommended as a first-line acne treatment as it does not contribute to antibiotic resistance.',
    searchTags: ['acne', 'blemish', 'spot treatment'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'ceramides',
    name: 'Ceramides',
    letter: 'C',
    aliases: ['Ceramide NP', 'Ceramide AP', 'Ceramide EOP', 'Phytosphingosine', 'Sphingolipids'],
    category: 'Barrier Repair',
    safety: 'green',
    safetyLabel: 'Low Concern',
    safetyNote: 'Current research confirms ceramides are extremely well tolerated by all skin types, including sensitive, eczema-prone, and infant skin. No known irritation potential or systemic concerns.',
    summary: 'Lipid molecules that naturally form the structural foundation of the skin\'s protective barrier. Making up approximately 50% of the stratum corneum\'s composition, ceramides act like "mortar" between skin cells, preventing moisture loss and protecting against environmental aggressors.',
    benefits: ['Strengthens and restores the skin barrier', 'Prevents transepidermal water loss (TEWL)', 'Soothes dry, irritated, or sensitised skin', 'Improves skin texture and plumpness', 'Long-term moisture retention'],
    concerns: ['Barrier repair', 'Hydration', 'Sensitive skin', 'Anti-ageing'],
    skinTypes: ['All skin types', 'Dry skin', 'Sensitive skin', 'Eczema-prone', 'Mature skin'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Ceramides are completely safe to use during pregnancy.',
    compatibility: ['Hyaluronic Acid', 'Peptides', 'Niacinamide', 'Retinol', 'AHAs', 'Bakuchiol', 'All actives'],
    contraindications: [],
    layering: 'Best used as part of a moisturiser applied after serums. Ceramide-rich products are particularly important after using exfoliating actives to help restore barrier integrity.',
    clinical: 'Ceramide deficiency has been directly linked to atopic dermatitis (eczema) and compromised barrier function. Clinical studies demonstrate that topical ceramide application significantly reduces TEWL and improves skin hydration.',
    searchTags: ['ceramide', 'barrier', 'moisturiser', 'dry skin'],
    vegan: false,
    fragranceFree: true,
  },
  {
    id: 'essential-oils',
    name: 'Essential Oils',
    letter: 'E',
    aliases: ['Lavandula angustifolia Oil', 'Rosmarinus officinalis Oil', 'Melaleuca alternifolia Oil', 'Citrus aurantifolia Oil'],
    category: 'Fragrance / Botanical',
    safety: 'red',
    safetyLabel: 'Higher Concern',
    safetyNote: 'Some studies indicate essential oils carry a significant risk of skin sensitisation, particularly with repeated use or in those with sensitive skin. Citrus-derived oils can be phototoxic. Many essential oils are not considered safe during pregnancy.',
    summary: 'Highly concentrated plant extracts that carry potent fragrance compounds. While some have antimicrobial or antioxidant properties, the presence of sensitising fragrance molecules (linalool, limonene, geraniol) makes them a common cause of allergic contact dermatitis.',
    benefits: ['Antimicrobial properties (some oils)', 'Aromatherapy experience', 'Antioxidant potential (some oils)'],
    concerns: ['Sensitive skin', 'Fragrance free'],
    skinTypes: ['Not recommended for sensitive skin', 'Not recommended for rosacea-prone skin'],
    pregnancySafe: 'avoid',
    pregnancyNote: 'Many essential oils are not considered safe during pregnancy. Avoid unless specifically approved by your healthcare provider.',
    compatibility: [],
    contraindications: ['Sensitive skin', 'Rosacea', 'Eczema', 'Atopic dermatitis', 'Broken skin'],
    layering: 'If using products containing essential oils, avoid applying to inflamed or broken skin. Patch test before use.',
    clinical: 'Essential oils contain numerous sensitising molecules classified as fragrance allergens under EU Cosmetics Regulation. The EU requires disclosure of 26 specific fragrance allergens above 0.001% in leave-on products.',
    searchTags: ['botanical', 'facial oil', 'natural serum'],
    vegan: true,
    fragranceFree: false,
  },
  {
    id: 'fragrance',
    name: 'Fragrance / Parfum',
    letter: 'F',
    aliases: ['Parfum', 'Fragrance', 'Aroma', 'Flavor', 'Natural Fragrance'],
    category: 'Sensitiser',
    safety: 'red',
    safetyLabel: 'Higher Concern',
    safetyNote: 'Fragrance is the leading cause of cosmetic allergic contact dermatitis. The term "fragrance" can represent a mixture of hundreds of undisclosed chemicals. Some studies indicate even natural fragrance ingredients can sensitise skin with repeated exposure.',
    summary: 'A broad term on ingredient labels that may encompass hundreds of individual chemical compounds, both synthetic and naturally derived. Added for sensory appeal, fragrance offers no skin benefit and is the number one cause of allergic reactions to cosmetics.',
    benefits: ['Enhances sensory experience of products'],
    concerns: ['Sensitive skin', 'Rosacea', 'Fragrance free', 'Acne'],
    skinTypes: ['Not recommended for sensitive skin', 'Not recommended for reactive skin'],
    pregnancySafe: 'caution',
    pregnancyNote: 'Many fragrance compounds have not been evaluated for use during pregnancy. A fragrance-free routine is generally recommended.',
    compatibility: [],
    contraindications: ['Sensitive skin', 'Rosacea', 'Eczema', 'Atopic dermatitis', 'Broken or compromised skin'],
    layering: 'If you experience redness, stinging, or itching after using a product, fragrance is frequently the cause. Patch test all new products.',
    clinical: 'According to the European Scientific Committee on Consumer Safety (SCCS), fragrance mixtures are the most common cause of cosmetic-related contact allergy. It is estimated that fragrance sensitivity affects up to 1.7% of the general population.',
    searchTags: ['fragrance free', 'sensitive', 'clean beauty'],
    vegan: true,
    fragranceFree: false,
  },
  {
    id: 'glycolic-acid',
    name: 'Glycolic Acid',
    letter: 'G',
    aliases: ['GA', 'Alpha-Hydroxy Acid', 'AHA', 'Hydroxyacetic Acid'],
    category: 'AHA Exfoliant',
    safety: 'yellow',
    safetyLabel: 'Moderate Concern',
    safetyNote: 'Current research supports glycolic acid as an effective exfoliant when used at appropriate concentrations. May cause tingling, redness, and increased photosensitivity. SPF is essential. May cause irritation in sensitive skin types.',
    summary: 'The smallest alpha-hydroxy acid (AHA), derived from sugar cane. Its small molecular size allows it to penetrate the skin effectively, making it one of the most potent chemical exfoliants. Clinically proven to improve skin texture, tone, and reduce the appearance of fine lines.',
    benefits: ['Chemical exfoliation — dissolves the bonds between dead skin cells', 'Brightening and skin tone evening', 'Stimulates collagen synthesis', 'Reduces the appearance of fine lines', 'Improves texture and smoothness', 'Treats hyperpigmentation'],
    concerns: ['Pigmentation', 'Anti-ageing', 'Brightening', 'Acne', 'Exfoliating'],
    skinTypes: ['Normal skin', 'Oily skin', 'Combination skin', 'Not ideal for sensitive skin'],
    pregnancySafe: 'caution',
    pregnancyNote: 'Low concentrations (under 10%) are generally considered low risk. Consult your healthcare provider before use during pregnancy.',
    compatibility: ['Hyaluronic Acid', 'Niacinamide (separate application)', 'Ceramides', 'SPF'],
    contraindications: ['Sensitive skin', 'Rosacea', 'Broken skin', 'Active eczema', 'Do not layer with retinol or vitamin C simultaneously'],
    layering: 'Use in the evening on cleansed skin. Start with 1-2 times per week and build. Do not use on the same evening as retinol. Always use SPF the following morning.',
    clinical: 'At concentrations of 8-15%, glycolic acid is clinically proven to increase dermal collagen production. It also promotes desquamation by breaking intracorneocyte cohesion in the stratum corneum.',
    searchTags: ['glycolic', 'exfoliant', 'aha', 'peel', 'toner'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'hyaluronic-acid',
    name: 'Hyaluronic Acid',
    letter: 'H',
    aliases: ['HA', 'Sodium Hyaluronate', 'Hyaluronan', 'Hyaluronic Acid Crosspolymer'],
    category: 'Humectant / Hydrator',
    safety: 'green',
    safetyLabel: 'Low Concern',
    safetyNote: 'Current research confirms hyaluronic acid is exceptionally well tolerated across all skin types, including sensitive, reactive, and infant skin. No meaningful irritation potential has been identified in the scientific literature.',
    summary: 'A naturally occurring glycosaminoglycan found throughout the body, particularly in the skin, eyes, and connective tissue. As a humectant, it draws and binds water molecules, capable of holding up to 1,000 times its own weight in moisture, making it one of the most effective hydrating ingredients in skincare.',
    benefits: ['Intense hydration at multiple skin depths', 'Reduces the appearance of fine lines', 'Plumps and firms skin', 'Supports the skin barrier', 'Soothes and calms irritation', 'Non-comedogenic'],
    concerns: ['Hydration', 'Barrier repair', 'Sensitive skin', 'Anti-ageing'],
    skinTypes: ['All skin types', 'Dry skin', 'Oily skin', 'Sensitive skin', 'Mature skin'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Hyaluronic acid is completely safe to use during pregnancy.',
    compatibility: ['All actives', 'Vitamin C', 'Retinol', 'Niacinamide', 'AHAs', 'BHAs', 'Peptides', 'SPF'],
    contraindications: [],
    layering: 'Apply to damp skin immediately after cleansing for best results. Follows cleansers, toners, and essences; precedes serums and moisturisers. Works at every step of a routine.',
    clinical: 'HA exists in multiple molecular weights. High molecular weight HA (>1000 kDa) forms a moisture-retaining film on the skin surface. Low molecular weight HA (<50 kDa) penetrates deeper layers to support dermal hydration. Multi-weight formulas provide comprehensive hydration.',
    searchTags: ['hyaluronic', 'hydration', 'serum', 'moisturiser'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'kojic-acid',
    name: 'Kojic Acid',
    letter: 'K',
    aliases: ['Kojic Acid Dipalmitate', '5-Hydroxy-2-(hydroxymethyl)-4H-pyran-4-one'],
    category: 'Brightening / Tyrosinase Inhibitor',
    safety: 'yellow',
    safetyLabel: 'Moderate Concern',
    safetyNote: 'Some studies indicate kojic acid may cause contact dermatitis in some individuals with extended use. Generally well tolerated at concentrations below 1%. The EU has restrictions on concentration levels in leave-on products.',
    summary: 'A naturally derived compound produced during the fermentation process of certain fungi, most commonly Aspergillus oryzae. A powerful tyrosinase inhibitor — meaning it reduces the enzyme responsible for melanin production, making it one of the most effective brightening agents in skincare.',
    benefits: ['Inhibits melanin production', 'Reduces hyperpigmentation and dark spots', 'Brightens overall skin tone', 'Treats melasma', 'Antifungal properties'],
    concerns: ['Pigmentation', 'Brightening', 'Anti-ageing'],
    skinTypes: ['Normal skin', 'Combination skin', 'Hyperpigmented skin'],
    pregnancySafe: 'caution',
    pregnancyNote: 'There is limited safety data on kojic acid during pregnancy. Consult your healthcare provider before use.',
    compatibility: ['Hyaluronic Acid', 'Niacinamide', 'SPF', 'Vitamin C (synergistic brightening)'],
    contraindications: ['Sensitive skin (patch test required)', 'Broken skin'],
    layering: 'Use in the evening. Apply after cleansing and before moisturiser. Always use SPF the following morning — kojic acid can increase photosensitivity.',
    clinical: 'Kojic acid competitively inhibits tyrosinase by chelating copper at the active site. Studies show efficacy comparable to hydroquinone in reducing hyperpigmentation, with a generally safer profile.',
    searchTags: ['brightening', 'dark spots', 'pigmentation', 'serum'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'lactic-acid',
    name: 'Lactic Acid',
    letter: 'L',
    aliases: ['Alpha-Hydroxy Acid', 'AHA', '2-Hydroxypropanoic Acid'],
    category: 'AHA Exfoliant',
    safety: 'yellow',
    safetyLabel: 'Moderate Concern',
    safetyNote: 'Current research supports lactic acid as a well-tolerated AHA, gentler than glycolic acid due to its larger molecular size. May cause mild tingling. Increases photosensitivity — SPF is essential.',
    summary: 'An alpha-hydroxy acid naturally derived from milk (or produced synthetically). Larger in molecular size than glycolic acid, lactic acid exfoliates more gently, making it suitable for those new to chemical exfoliation or with sensitive skin. Also acts as a humectant, improving skin hydration alongside exfoliation.',
    benefits: ['Gentle chemical exfoliation', 'Improves skin texture and radiance', 'Dual action: exfoliates and hydrates', 'Reduces dry, flaky skin', 'Fades hyperpigmentation gradually', 'Suitable for sensitive skin at lower concentrations'],
    concerns: ['Exfoliating', 'Brightening', 'Hydration', 'Pigmentation', 'Sensitive skin'],
    skinTypes: ['All skin types', 'Sensitive skin', 'Dry skin', 'Normal skin'],
    pregnancySafe: 'caution',
    pregnancyNote: 'Low concentrations are generally considered low risk. Consult your healthcare provider before use during pregnancy.',
    compatibility: ['Hyaluronic Acid', 'Ceramides', 'SPF', 'Niacinamide'],
    contraindications: ['Do not combine with other AHAs on the same evening', 'Avoid with retinol on the same night', 'Broken or sensitised skin'],
    layering: 'Use in the evening, 2-3 times per week. Apply after cleansing and before serums. Always follow with SPF the next morning.',
    clinical: 'Lactic acid has a larger molecular weight than glycolic acid, resulting in slower but gentler penetration. At concentrations of 5-12%, it effectively reduces corneocyte cohesion and promotes desquamation while simultaneously acting as a humectant.',
    searchTags: ['lactic acid', 'aha', 'exfoliant', 'toner', 'sensitive'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'mandelic-acid',
    name: 'Mandelic Acid',
    letter: 'M',
    aliases: ['Alpha-Hydroxy Acid', 'AHA', 'Amygdalic Acid'],
    category: 'AHA Exfoliant',
    safety: 'yellow',
    safetyLabel: 'Moderate Concern',
    safetyNote: 'Current research indicates mandelic acid is among the gentlest AHAs available, with a low risk of irritation. Its larger molecular size results in slower skin penetration. Increases photosensitivity — SPF required.',
    summary: 'The largest and gentlest alpha-hydroxy acid, derived from bitter almonds. Its large molecular size means it penetrates the skin slowly, making it a particularly well-tolerated exfoliant for sensitive, darker, or rosacea-prone skin types that cannot tolerate stronger AHAs.',
    benefits: ['Gentle chemical exfoliation', 'Treats acne and blackheads', 'Reduces hyperpigmentation', 'Antibacterial properties', 'Improves skin texture', 'Safe for darker skin tones'],
    concerns: ['Acne', 'Pigmentation', 'Brightening', 'Sensitive skin', 'Exfoliating'],
    skinTypes: ['All skin types', 'Sensitive skin', 'Darker skin tones', 'Acne-prone skin'],
    pregnancySafe: 'caution',
    pregnancyNote: 'Consult your healthcare provider before use during pregnancy.',
    compatibility: ['Hyaluronic Acid', 'Ceramides', 'Niacinamide', 'SPF'],
    contraindications: ['Broken skin', 'Tree nut allergy (may cross-react, consult doctor)'],
    layering: 'Use in the evening. Apply after cleansing and before moisturiser. Begin with 1-2 times per week. Always use SPF the following morning.',
    clinical: 'Mandelic acid\'s larger molecular structure (152 g/mol vs glycolic acid\'s 76 g/mol) results in a slower, more uniform penetration. Studies show it to be effective for acne and PIH with a superior tolerability profile.',
    searchTags: ['mandelic', 'exfoliant', 'aha', 'sensitive', 'toner'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'niacinamide',
    name: 'Niacinamide',
    letter: 'N',
    aliases: ['Vitamin B3', 'Nicotinamide', 'Nicotinic Acid Amide'],
    category: 'Multi-active',
    safety: 'green',
    safetyLabel: 'Low Concern',
    safetyNote: 'Current research confirms niacinamide is exceptionally well tolerated across all skin types. Rare cases of flushing have been reported at very high concentrations (above 10%), but this is uncommon in correctly formulated products.',
    summary: 'A water-soluble form of Vitamin B3 and one of the most clinically versatile skincare ingredients available. Addresses a wide spectrum of skin concerns simultaneously — from acne and pore appearance to pigmentation, barrier function, and ageing — with a safety profile suitable for the most sensitive skin types.',
    benefits: ['Minimises appearance of pores', 'Regulates sebum production', 'Reduces hyperpigmentation and dark spots', 'Strengthens the skin barrier', 'Anti-inflammatory — soothes redness', 'Brightening', 'Reduces fine lines', 'Non-comedogenic'],
    concerns: ['Acne', 'Pigmentation', 'Hydration', 'Barrier repair', 'Sensitive skin', 'Anti-ageing', 'Brightening', 'Rosacea'],
    skinTypes: ['All skin types', 'Oily skin', 'Sensitive skin', 'Acne-prone', 'Mature skin'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Niacinamide is considered completely safe during pregnancy.',
    compatibility: ['Hyaluronic Acid', 'Ceramides', 'Peptides', 'Retinol', 'AHAs', 'BHAs', 'Vitamin C (use separately if concerned)', 'SPF', 'All actives'],
    contraindications: [],
    layering: 'Suitable for morning and evening use. Apply after cleansing and toning. Can be layered under virtually any other skincare ingredient.',
    clinical: 'Niacinamide inhibits the transfer of melanosomes from melanocytes to keratinocytes, reducing pigmentation. It also increases ceramide production, strengthens the stratum corneum, and has demonstrated anti-inflammatory activity via NF-κB pathway inhibition.',
    searchTags: ['niacinamide', 'vitamin b3', 'serum', 'pores', 'brightening'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'panthenol',
    name: 'Panthenol',
    letter: 'P',
    aliases: ['Pro-Vitamin B5', 'D-Panthenol', 'DL-Panthenol', 'Pantothenic Acid'],
    category: 'Soothing / Humectant',
    safety: 'green',
    safetyLabel: 'Low Concern',
    safetyNote: 'Current research confirms panthenol is extremely well tolerated across all skin types, including infant skin. No known irritation potential or systemic safety concerns have been identified.',
    summary: 'The provitamin form of Vitamin B5, which converts to pantothenic acid (an essential skin nutrient) upon absorption. A multi-functional ingredient that simultaneously hydrates, soothes inflammation, accelerates wound healing, and strengthens the skin barrier.',
    benefits: ['Deep humectant hydration', 'Soothes and calms irritation and redness', 'Accelerates skin barrier repair', 'Promotes wound healing', 'Anti-inflammatory', 'Softens skin texture'],
    concerns: ['Hydration', 'Barrier repair', 'Sensitive skin', 'Rosacea'],
    skinTypes: ['All skin types', 'Sensitive skin', 'Dry skin', 'Irritated skin', 'Post-procedure skin'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Panthenol is completely safe to use during pregnancy.',
    compatibility: ['All ingredients', 'Particularly effective paired with ceramides, HA, and niacinamide'],
    contraindications: [],
    layering: 'Can be used morning and evening. Works at every step of a skincare routine — in cleansers, serums, and moisturisers. Particularly beneficial after procedures or when using strong actives.',
    clinical: 'Panthenol is metabolised in skin to pantothenic acid, which is integral to coenzyme A — critical for fatty acid synthesis and cellular repair. Studies demonstrate accelerated re-epithelialization in damaged skin models.',
    searchTags: ['panthenol', 'soothing', 'sensitive', 'moisturiser', 'barrier'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'parabens',
    name: 'Parabens',
    letter: 'P',
    aliases: ['Methylparaben', 'Ethylparaben', 'Propylparaben', 'Butylparaben', 'Isobutylparaben'],
    category: 'Preservative',
    safety: 'red',
    safetyLabel: 'Higher Concern',
    safetyNote: 'Some studies indicate certain parabens (propyl, butyl, isopropyl, isobutyl) may exhibit weak oestrogenic activity. The EU has restricted or banned several parabens. Current research on health impacts at typical cosmetic concentrations remains debated.',
    summary: 'A class of chemical preservatives widely used in cosmetics to prevent microbial contamination. While their safety at low cosmetic concentrations is still debated in the scientific community, increasing regulatory scrutiny and consumer preference has led many brands to reformulate without them.',
    benefits: ['Highly effective preservation', 'Extended product shelf life', 'Prevents microbial growth'],
    concerns: ['Fragrance free', 'Sensitive skin', 'Pregnancy safe'],
    skinTypes: ['All (preservative consideration, not skin type specific)'],
    pregnancySafe: 'caution',
    pregnancyNote: 'Some healthcare providers recommend avoiding parabens during pregnancy as a precaution, particularly butylparaben and propylparaben. Consult your doctor or midwife.',
    compatibility: [],
    contraindications: ['Those with paraben sensitivity or allergy'],
    layering: 'Parabens are a formulation ingredient — not applied intentionally as an active. Read full ingredient lists when seeking paraben-free products.',
    clinical: 'The European Commission has banned isopropylparaben, isobutylparaben, phenylparaben, benzylparaben, and pentylparaben in cosmetics. Methylparaben and ethylparaben at concentrations up to 0.4% remain permitted. Research continues on the endocrine-disrupting potential of longer-chain parabens.',
    searchTags: ['paraben free', 'clean', 'sensitive', 'natural'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'peptides',
    name: 'Peptides',
    letter: 'P',
    aliases: ['Signal Peptides', 'Carrier Peptides', 'Matrikines', 'Palmitoyl Tripeptide-1', 'Copper Peptides', 'Argireline (Acetyl Hexapeptide-3)'],
    category: 'Anti-ageing',
    safety: 'green',
    safetyLabel: 'Low Concern',
    safetyNote: 'Current research confirms peptides are extremely well tolerated across all skin types. No known irritation potential, systemic concerns, or contraindications have been identified.',
    summary: 'Short chains of amino acids — the building blocks of proteins. Peptides in skincare act as biological messengers that signal skin cells to perform specific functions, most commonly stimulating collagen and elastin production. Different peptide types target different skin concerns.',
    benefits: ['Stimulates collagen and elastin synthesis', 'Reduces the depth of fine lines and wrinkles', 'Improves skin firmness and elasticity', 'Supports skin barrier integrity', 'Improves skin texture', 'Gentle enough for daily use'],
    concerns: ['Anti-ageing', 'Hydration', 'Barrier repair', 'Sensitive skin'],
    skinTypes: ['All skin types', 'Mature skin', 'Sensitive skin', 'All ages preventatively'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Peptides are considered safe during pregnancy.',
    compatibility: ['Hyaluronic Acid', 'Ceramides', 'Niacinamide', 'Vitamin C', 'SPF', 'Bakuchiol', 'All actives'],
    contraindications: ['Caution when combining with AHAs (may cleave peptide bonds — use separately)'],
    layering: 'Best applied in a serum or moisturiser after cleansing. For best efficacy, avoid applying immediately after strong AHA exfoliants which may reduce peptide potency.',
    clinical: 'Signal peptides upregulate genes responsible for collagen I, III, and IV synthesis. Carrier peptides like GHK-Cu (copper peptide) have demonstrated antioxidant, anti-inflammatory, and wound-healing properties in clinical studies.',
    searchTags: ['peptide', 'anti-ageing', 'collagen', 'firming', 'serum'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'retinal',
    name: 'Retinal',
    letter: 'R',
    aliases: ['Retinaldehyde', 'Vitamin A Aldehyde', 'RAL'],
    category: 'Retinoid',
    safety: 'yellow',
    safetyLabel: 'Moderate Concern',
    safetyNote: 'Current research suggests retinal is more potent than retinol but generally better tolerated than prescription retinoids. May cause initial dryness, peeling, and purging. Not recommended during pregnancy or breastfeeding.',
    summary: 'The aldehyde form of Vitamin A, positioned one conversion step closer to retinoic acid than retinol, making it approximately 11 times more potent. Retinal delivers clinically meaningful anti-ageing results with fewer of the side effects associated with prescription retinoids.',
    benefits: ['Powerful anti-ageing: reduces fine lines and wrinkles', 'Stimulates collagen production', 'Accelerates cell turnover', 'Improves skin texture and firmness', 'Reduces hyperpigmentation', 'Antibacterial — effective for acne', 'Faster results than retinol'],
    concerns: ['Anti-ageing', 'Pigmentation', 'Acne', 'Brightening'],
    skinTypes: ['Normal skin', 'Oily skin', 'Acne-prone skin', 'Mature skin', 'Not for sensitive skin beginners'],
    pregnancySafe: 'avoid',
    pregnancyNote: 'Retinal (all forms of Vitamin A) is contraindicated during pregnancy and breastfeeding. Use bakuchiol as a safe alternative.',
    compatibility: ['Hyaluronic Acid', 'Ceramides', 'Squalane', 'Peptides', 'Niacinamide'],
    contraindications: ['Pregnancy', 'Breastfeeding', 'Extremely sensitive skin', 'Do not combine with AHAs on the same night', 'Do not combine with benzoyl peroxide'],
    layering: 'Use in the evening only. Start with 2-3 nights per week and build tolerance gradually. Apply after cleansing. Follow with ceramide-rich moisturiser. Always use SPF 50 the following morning.',
    clinical: 'Retinal is converted to retinoic acid by skin enzymes in a single step (vs retinol\'s two-step conversion). Medik8\'s Crystal Retinal technology has been clinically validated with studies showing significant improvement in wrinkle depth and skin tone within 12 weeks.',
    searchTags: ['retinal', 'retinaldehyde', 'vitamin a', 'anti-ageing', 'crystal retinal', 'medik8'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'retinol',
    name: 'Retinol',
    letter: 'R',
    aliases: ['Vitamin A', 'Retinoids', 'Retinyl Palmitate', 'HPR (Hydroxypinacolone Retinoate)'],
    category: 'Retinoid',
    safety: 'yellow',
    safetyLabel: 'Moderate Concern',
    safetyNote: 'Current research establishes retinol as one of the most clinically validated anti-ageing ingredients. May cause an initial adjustment period with dryness, flaking, and purging. Not recommended during pregnancy or breastfeeding.',
    summary: 'The gold-standard over-the-counter form of Vitamin A. Retinol must be converted by the skin first to retinaldehyde and then to retinoic acid (the active form) before it exerts its effects. This multi-step conversion makes it less potent but better tolerated than retinal or tretinoin.',
    benefits: ['Proven reduction of fine lines and wrinkles', 'Stimulates collagen and elastin production', 'Accelerates cellular turnover', 'Treats and prevents acne', 'Fades hyperpigmentation', 'Improves skin texture', 'Refines pores'],
    concerns: ['Anti-ageing', 'Pigmentation', 'Acne', 'Exfoliating'],
    skinTypes: ['Normal skin', 'Oily skin', 'Mature skin', 'Introduce cautiously for sensitive skin'],
    pregnancySafe: 'avoid',
    pregnancyNote: 'All retinoids — including retinol — are contraindicated during pregnancy and breastfeeding. Use bakuchiol as a safe alternative.',
    compatibility: ['Hyaluronic Acid', 'Ceramides', 'Niacinamide (buffer)', 'Squalane', 'Peptides'],
    contraindications: ['Pregnancy', 'Breastfeeding', 'Do not combine with AHAs or BHAs on the same night', 'Do not combine with benzoyl peroxide', 'Introduce slowly for sensitive skin'],
    layering: 'Apply in the evening, on cleansed and fully dry skin. Begin with twice weekly, gradually increasing frequency. Always follow with a rich moisturiser. SPF 50+ is non-negotiable in the morning.',
    clinical: 'Retinol normalises epidermal differentiation and increases dermal collagen via RAR and RXR nuclear receptor binding. Multiple randomised controlled trials confirm significant improvements in periorbital wrinkling, mottled hyperpigmentation, and overall photodamage.',
    searchTags: ['retinol', 'vitamin a', 'anti-ageing', 'serum', 'night cream'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'salicylic-acid',
    name: 'Salicylic Acid',
    letter: 'S',
    aliases: ['BHA', 'Beta-Hydroxy Acid', '2-Hydroxybenzoic Acid', 'SA'],
    category: 'BHA Exfoliant',
    safety: 'yellow',
    safetyLabel: 'Moderate Concern',
    safetyNote: 'Current research supports salicylic acid as a well-tolerated acne treatment at concentrations up to 2%. May cause dryness, peeling, and mild irritation. Not recommended during pregnancy above 2% or in large amounts.',
    summary: 'A beta-hydroxy acid (BHA) derived from willow bark. Unlike AHAs, salicylic acid is oil-soluble, allowing it to penetrate into pores and dissolve the sebum and debris responsible for blackheads, whiteheads, and acne. An essential ingredient in acne management.',
    benefits: ['Exfoliates inside the pore — unclogs blackheads and whiteheads', 'Reduces acne and breakouts', 'Controls sebum production', 'Anti-inflammatory', 'Prevents future breakouts', 'Reduces pore appearance'],
    concerns: ['Acne', 'Exfoliating', 'Brightening', 'Anti-ageing'],
    skinTypes: ['Oily skin', 'Acne-prone skin', 'Combination skin'],
    pregnancySafe: 'caution',
    pregnancyNote: 'Low concentrations in rinse-off products (up to 2%) are generally considered low risk. High concentrations and leave-on products should be avoided during pregnancy. Always consult your healthcare provider.',
    compatibility: ['Hyaluronic Acid', 'Niacinamide', 'Ceramides (evening routine)', 'SPF'],
    contraindications: ['Sensitive skin', 'Dry skin', 'Do not use with other exfoliants on the same evening', 'Aspirin allergy (cross-reactivity possible)'],
    layering: 'Best used in the evening after cleansing. Apply before moisturiser. Start with 2-3 times per week. Do not combine with AHAs, retinol, or vitamin C on the same evening.',
    clinical: 'Salicylic acid\'s lipophilic nature allows it to dissolve in sebum, making it uniquely effective for intrafollicular exfoliation. At 2% it normalises follicular keratinisation and reduces inflammatory and non-inflammatory acne lesions.',
    searchTags: ['salicylic', 'bha', 'acne', 'pores', 'toner', 'blackheads'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'squalane',
    name: 'Squalane',
    letter: 'S',
    aliases: ['Plant-derived Squalane', 'Olive-derived Squalane', 'Sugarcane Squalane'],
    category: 'Emollient / Skin-identical',
    safety: 'green',
    safetyLabel: 'Low Concern',
    safetyNote: 'Current research confirms squalane is exceptionally well tolerated across all skin types, including oily and acne-prone skin. Non-comedogenic and mimics the skin\'s natural lipids.',
    summary: 'A stable, hydrogenated form of squalene — a lipid naturally produced by the skin\'s sebaceous glands. Squalane is a lightweight, non-greasy emollient that is highly compatible with skin due to its structural similarity to the skin\'s own lipids, making it rapidly absorbed and universally tolerated.',
    benefits: ['Intense moisturisation without heaviness', 'Strengthens the skin barrier', 'Non-comedogenic — suitable for oily and acne-prone skin', 'Antioxidant protection', 'Softens and smoothes skin texture', 'Locks in moisture', 'Reduces fine lines'],
    concerns: ['Hydration', 'Barrier repair', 'Sensitive skin', 'Anti-ageing'],
    skinTypes: ['All skin types', 'Oily skin', 'Sensitive skin', 'Dry skin', 'Acne-prone skin'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Squalane is completely safe to use during pregnancy.',
    compatibility: ['All ingredients', 'All actives', 'Retinol (excellent buffer/carrier)', 'Vitamin C', 'AHAs'],
    contraindications: [],
    layering: 'Can be used morning and evening. Apply as the final step before SPF in the AM, or as a final layer in the PM. Can also be mixed into moisturisers or used as a carrier for active serums.',
    clinical: 'Human sebum naturally contains approximately 12% squalene. The saturated, stable form (squalane) prevents oxidation and rancidity. Squalane supplementation has been shown to improve TEWL and increase skin surface lipid levels in clinical studies.',
    searchTags: ['squalane', 'facial oil', 'moisturiser', 'hydration', 'dry skin'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'sulphates',
    name: 'Sulphates (SLS / SLES)',
    letter: 'S',
    aliases: ['Sodium Lauryl Sulfate', 'Sodium Laureth Sulfate', 'SLS', 'SLES', 'Ammonium Lauryl Sulfate'],
    category: 'Surfactant / Cleansing Agent',
    safety: 'red',
    safetyLabel: 'Higher Concern',
    safetyNote: 'Some studies indicate SLS in particular may disrupt the skin barrier, reduce skin surface lipids, and cause irritation with repeated use. SLES is generally considered milder. Those with sensitive skin, eczema, or a compromised barrier should consider sulphate-free alternatives.',
    summary: 'Powerful surfactants used as foaming and cleansing agents in shampoos, body washes, and cleansers. While effective at removing oils, makeup, and debris, their high cleansing efficacy comes at the cost of potential barrier disruption, particularly for sensitive and dry skin types.',
    benefits: ['Powerful cleansing efficacy', 'Rich foam production', 'Effective oil and makeup removal'],
    concerns: ['Sensitive skin', 'Fragrance free', 'Barrier repair'],
    skinTypes: ['May be appropriate for very oily skin only', 'Not recommended for sensitive or dry skin'],
    pregnancySafe: 'caution',
    pregnancyNote: 'SLS/SLES are generally considered low risk at typical concentrations. Sulphate-free alternatives are available if preferred.',
    compatibility: [],
    contraindications: ['Sensitive skin', 'Dry skin', 'Eczema', 'Rosacea', 'Compromised barrier'],
    layering: 'Sulphates are rinse-off cleansing ingredients. To minimise irritation, use sulphate-free alternatives or choose products with SLES (gentler) over SLS.',
    clinical: 'SLS is a recognised skin irritant at concentrations above 0.5-1%. It disrupts the lipid bilayer of the stratum corneum, increasing TEWL. SLES has lower irritancy due to its ethoxylated structure.',
    searchTags: ['sulphate free', 'gentle cleanser', 'sensitive cleanser', 'clean beauty'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'titanium-dioxide',
    name: 'Titanium Dioxide',
    letter: 'T',
    aliases: ['CI 77891', 'TiO2', 'Titanium(IV) Oxide'],
    category: 'Mineral SPF Filter',
    safety: 'green',
    safetyLabel: 'Low Concern',
    safetyNote: 'Current research confirms titanium dioxide is very well tolerated as a topical ingredient. The FDA has approved it as a safe and effective mineral sunscreen filter. Nano vs non-nano particle size debates are ongoing; most evidence suggests topically applied nanoparticles do not penetrate the skin.',
    summary: 'A naturally occurring mineral used as a broad-spectrum UV filter that works by physically reflecting and scattering UV radiation. Titanium dioxide provides excellent UVB protection and some UVA protection, and is one of only two mineral sunscreen ingredients approved by the FDA.',
    benefits: ['Broad-spectrum UVB and partial UVA protection', 'Photostable — does not degrade in sunlight', 'Non-irritating and non-sensitising', 'Suitable for sensitive skin and children', 'Immediate protection upon application'],
    concerns: ['SPF', 'Sensitive skin', 'Pregnancy safe', 'Rosacea'],
    skinTypes: ['All skin types', 'Sensitive skin', 'Rosacea-prone', 'Children'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Titanium dioxide is considered one of the safest sunscreen ingredients during pregnancy.',
    compatibility: ['All skincare ingredients', 'Pairs with zinc oxide for enhanced broad-spectrum coverage'],
    contraindications: [],
    layering: 'Apply as the final step in your morning skincare routine, after serums and moisturisers. Reapply every 2 hours when outdoors.',
    clinical: 'Titanium dioxide\'s UV-blocking mechanism is physical scattering of photons. Its refractive index of 2.49-2.61 makes it one of the most effective light-scattering particles available. Less broad-spectrum than zinc oxide for UVA but excellent for UVB.',
    searchTags: ['spf', 'sunscreen', 'mineral sunscreen', 'titanium dioxide'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C',
    letter: 'V',
    aliases: ['L-Ascorbic Acid', 'Ascorbic Acid', 'Ascorbyl Glucoside', 'Sodium Ascorbyl Phosphate', 'Magnesium Ascorbyl Phosphate', '3-O-Ethyl Ascorbic Acid'],
    category: 'Antioxidant / Brightener',
    safety: 'yellow',
    safetyLabel: 'Moderate Concern',
    safetyNote: 'Current research strongly supports vitamin C as a safe and highly effective skincare ingredient. Pure L-ascorbic acid may cause stinging in sensitive skin at higher concentrations (above 15%). Formulation stability is critical — look for airless packaging to prevent oxidation.',
    summary: 'A powerful water-soluble antioxidant that neutralises free radical damage, stimulates collagen synthesis, and inhibits melanin production. L-ascorbic acid is the most bioactive form but is also the least stable. Vitamin C derivatives offer greater stability with slightly reduced efficacy.',
    benefits: ['Potent antioxidant — neutralises UV and pollution-induced free radicals', 'Stimulates collagen synthesis', 'Brightening — reduces hyperpigmentation', 'Inhibits melanin production', 'Enhances SPF efficacy when combined with sunscreen', 'Reduces fine lines', 'Improves skin radiance'],
    concerns: ['Pigmentation', 'Anti-ageing', 'Brightening', 'SPF', 'Acne'],
    skinTypes: ['All skin types', 'Mature skin', 'Hyperpigmented skin', 'Dull skin'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Vitamin C is completely safe to use during pregnancy.',
    compatibility: ['Hyaluronic Acid', 'Vitamin E (synergistic antioxidant)', 'Ferulic Acid (synergistic)', 'SPF (enhances protection)', 'Niacinamide'],
    contraindications: ['Do not combine with niacinamide at very high concentrations (may form niacin in some conditions)', 'Use separately from benzoyl peroxide', 'Very sensitive skin (start with lower % or derivatives)'],
    layering: 'Best applied in the morning after cleansing, before SPF. Allow to absorb for 2-3 minutes before applying other products. Store in a cool, dark place to preserve stability.',
    clinical: 'CE Ferulic (SkinCeuticals) is the gold-standard vitamin C formulation — a patented combination of 15% L-ascorbic acid, 1% vitamin E, and 0.5% ferulic acid that triples antioxidant protection. Studies show topical vitamin C at 5-15% produces statistically significant collagen synthesis.',
    searchTags: ['vitamin c', 'ascorbic acid', 'brightening', 'serum', 'ce ferulic', 'skinceuticals'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'vitamin-e',
    name: 'Vitamin E',
    letter: 'V',
    aliases: ['Tocopherol', 'Alpha-Tocopherol', 'Tocopheryl Acetate', 'DL-Alpha Tocopherol'],
    category: 'Antioxidant',
    safety: 'green',
    safetyLabel: 'Low Concern',
    safetyNote: 'Current research confirms vitamin E is very well tolerated topically. A small subset of individuals may experience contact sensitisation to tocopheryl acetate. Pure tocopherol is generally better tolerated.',
    summary: 'A fat-soluble antioxidant naturally found in human sebum. Protects skin cell membranes from oxidative damage and works synergistically with vitamin C, significantly amplifying both antioxidants\' protective efficacy. Also provides emollient and soothing benefits.',
    benefits: ['Antioxidant protection against UV and pollution damage', 'Synergistic with Vitamin C (triples photoprotection)', 'Moisturising and emollient', 'Soothing and anti-inflammatory', 'Supports wound healing', 'Protects lipid cell membranes'],
    concerns: ['Anti-ageing', 'Brightening', 'Barrier repair', 'Sensitive skin'],
    skinTypes: ['All skin types', 'Dry skin', 'Sensitive skin', 'Mature skin'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Vitamin E is considered safe to use during pregnancy.',
    compatibility: ['Vitamin C (synergistic)', 'Ferulic Acid (synergistic)', 'SPF', 'Ceramides', 'Hyaluronic Acid'],
    contraindications: [],
    layering: 'Often incorporated into moisturisers or serums. When combined with Vitamin C and Ferulic Acid, best applied in the morning for maximum antioxidant benefit.',
    clinical: 'Vitamin E and Vitamin C work synergistically: Vitamin C regenerates oxidised Vitamin E, while Vitamin E stabilises Vitamin C formulations. Combined with ferulic acid, photoprotection is tripled in published studies.',
    searchTags: ['vitamin e', 'tocopherol', 'antioxidant', 'serum', 'moisturiser'],
    vegan: true,
    fragranceFree: true,
  },
  {
    id: 'zinc-oxide',
    name: 'Zinc Oxide',
    letter: 'Z',
    aliases: ['ZnO', 'CI 77947'],
    category: 'Mineral SPF Filter',
    safety: 'green',
    safetyLabel: 'Low Concern',
    safetyNote: 'Current research confirms zinc oxide is extremely well tolerated topically and is considered the broadest-spectrum single mineral sunscreen filter available. FDA-approved as a safe and effective sunscreen ingredient.',
    summary: 'A naturally occurring mineral that provides the broadest-spectrum UV protection of any single sunscreen ingredient, covering both UVA1, UVA2, and UVB wavelengths. Works by physically reflecting and scattering UV radiation. Favoured for sensitive skin due to its inherent anti-inflammatory and soothing properties.',
    benefits: ['True broad-spectrum UVA and UVB protection', 'Anti-inflammatory — soothes redness and irritation', 'Non-comedogenic', 'Photostable', 'Suitable for all skin types including sensitive and rosacea-prone', 'Safe for children', 'Immediate protection upon application'],
    concerns: ['SPF', 'Sensitive skin', 'Rosacea', 'Acne', 'Pregnancy safe'],
    skinTypes: ['All skin types', 'Sensitive skin', 'Rosacea-prone', 'Acne-prone', 'Children', 'Mature skin'],
    pregnancySafe: 'safe',
    pregnancyNote: 'Zinc oxide is considered the safest sunscreen ingredient during pregnancy and is recommended by most dermatologists.',
    compatibility: ['All skincare ingredients', 'Synergistic with titanium dioxide for coverage'],
    contraindications: [],
    layering: 'Apply as the very last step in your morning skincare routine, after all serums and moisturisers. Mineral SPFs sit on top of the skin. Reapply every 2 hours when exposed to sunlight.',
    clinical: 'Zinc oxide provides the broadest single-filter UV coverage (280-400nm), including UVA1 (340-400nm) which is inadequately covered by many chemical filters and titanium dioxide. Its photostability means it does not degrade or lose efficacy in sunlight.',
    searchTags: ['spf', 'sunscreen', 'zinc oxide', 'mineral spf', 'sensitive sunscreen'],
    vegan: true,
    fragranceFree: true,
  },
];

/* ── STATE ─────────────────────────────────────────── */
var _search   = '';
var _filters  = new Set();
var _filtered = LF_INGREDIENTS.slice();

/* ── SAFETY HELPERS ────────────────────────────────── */
var SAFETY_LABELS = { green: 'Low Concern', yellow: 'Moderate Concern', red: 'Higher Concern' };

function safetyBarClass(s)  { return 'safety-' + s; }
function safetyDotClass(s)  { return 'safety-dot-' + s; }

/* ── RENDER CARDS ──────────────────────────────────── */
function renderCard(ing, delay) {
  var topBenefits = ing.benefits.slice(0, 3);
  var tags = topBenefits.map(function(b) {
    return '<span class="lf-ing-card__benefit-tag">' + esc(b) + '</span>';
  }).join('');

  return '<div class="lf-ing-card" data-id="' + ing.id + '" style="animation-delay:' + (delay * 40) + 'ms" role="button" tabindex="0" aria-label="View ' + esc(ing.name) + ' details">' +
    '<div class="lf-ing-card__safety-bar ' + safetyBarClass(ing.safety) + '"></div>' +
    '<div class="lf-ing-card__body">' +
      '<div class="lf-ing-card__top">' +
        '<span class="lf-ing-card__cat">' + esc(ing.category) + '</span>' +
        '<span class="lf-ing-card__safety-dot ' + safetyDotClass(ing.safety) + '" title="' + SAFETY_LABELS[ing.safety] + '"></span>' +
      '</div>' +
      '<h3 class="lf-ing-card__name">' + esc(ing.name) + '</h3>' +
      '<p class="lf-ing-card__alias">' + esc(ing.aliases.slice(0,2).join(' · ')) + '</p>' +
      '<div class="lf-ing-card__benefits">' + tags + '</div>' +
      '<div class="lf-ing-card__cta">Learn more <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></div>' +
    '</div>' +
  '</div>';
}

function renderGrid(data) {
  var content  = document.getElementById('lf-ing-content');
  var empty    = document.getElementById('lf-ing-empty');
  var countEl  = document.getElementById('lf-ing-count');

  if (!content) return;

  if (countEl) {
    countEl.innerHTML = '<strong>' + data.length + '</strong> ingredient' + (data.length !== 1 ? 's' : '');
  }

  if (data.length === 0) {
    content.innerHTML = '';
    if (empty) empty.classList.add('visible');
    return;
  }
  if (empty) empty.classList.remove('visible');

  // Group by letter
  var groups = {};
  data.forEach(function(ing) {
    if (!groups[ing.letter]) groups[ing.letter] = [];
    groups[ing.letter].push(ing);
  });

  var html = '';
  var letters = Object.keys(groups).sort();
  var cardIdx = 0;

  letters.forEach(function(letter) {
    html += '<div class="lf-ing-letter-group" id="lf-letter-' + letter + '">';
    html += '<div class="lf-ing-letter-heading">' + letter + '</div>';
    html += '<div class="lf-ing-cards">';
    groups[letter].forEach(function(ing) {
      html += renderCard(ing, cardIdx++);
    });
    html += '</div></div>';
  });

  content.innerHTML = html;
  bindCardClicks();
  updateAZHighlight(data);
}

/* ── SEARCH ────────────────────────────────────────── */
function applySearch(query) {
  if (!query) return LF_INGREDIENTS.slice();
  var q = query.toLowerCase();
  return LF_INGREDIENTS.filter(function(ing) {
    return ing.name.toLowerCase().includes(q) ||
      ing.aliases.some(function(a) { return a.toLowerCase().includes(q); }) ||
      ing.category.toLowerCase().includes(q) ||
      ing.benefits.some(function(b) { return b.toLowerCase().includes(q); }) ||
      (ing.summary && ing.summary.toLowerCase().includes(q));
  });
}

function applyFilters(data, filters) {
  if (!filters.size) return data;
  return data.filter(function(ing) {
    return Array.from(filters).every(function(f) {
      var fl = f.toLowerCase();
      if (fl === 'pregnancy safe') return ing.pregnancySafe === 'safe';
      if (fl === 'fragrance free')  return ing.fragranceFree === true;
      if (fl === 'vegan')           return ing.vegan === true;
      return ing.concerns.some(function(c) { return c.toLowerCase() === fl; });
    });
  });
}

function refreshGrid() {
  var searched = applySearch(_search);
  _filtered    = applyFilters(searched, _filters);
  renderGrid(_filtered);
}

/* ── A-Z NAV ───────────────────────────────────────── */
var ALL_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function buildAZ() {
  var az = document.getElementById('lf-ing-az');
  if (!az) return;

  var withData = {};
  LF_INGREDIENTS.forEach(function(i) { withData[i.letter] = true; });

  var html = ALL_LETTERS.map(function(l) {
    var has = withData[l];
    return '<a class="lf-ing-az-letter' + (has ? ' has-items' : '') + '" ' +
      (has ? 'href="#lf-letter-' + l + '" data-letter="' + l + '"' : '') +
      ' aria-label="Jump to ' + l + '">' + l + '</a>';
  }).join('');
  az.innerHTML = html;

  az.addEventListener('click', function(e) {
    var a = e.target.closest('.lf-ing-az-letter.has-items');
    if (!a) return;
    e.preventDefault();
    var target = document.getElementById('lf-letter-' + a.dataset.letter);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

function updateAZHighlight(data) {
  var present = {};
  data.forEach(function(i) { present[i.letter] = true; });
  document.querySelectorAll('.lf-ing-az-letter').forEach(function(el) {
    var l = el.textContent;
    el.classList.toggle('has-items', !!present[l]);
  });
}

/* ── AUTOCOMPLETE ──────────────────────────────────── */
function buildAutocomplete() {
  var wrap     = document.getElementById('lf-ing-search-wrap');
  var input    = document.getElementById('lf-ing-search-input');
  var dropdown = document.getElementById('lf-ing-autocomplete');
  var clearBtn = document.getElementById('lf-ing-search-clear');
  if (!input || !dropdown) return;

  var current = '';

  input.addEventListener('input', function() {
    current = this.value.trim();
    _search  = current;
    clearBtn && (clearBtn.style.display = current ? 'block' : 'none');
    refreshGrid();

    if (current.length < 2) { dropdown.classList.remove('open'); return; }
    var matches = applySearch(current).slice(0, 6);
    if (!matches.length) { dropdown.classList.remove('open'); return; }

    dropdown.innerHTML = matches.map(function(ing) {
      return '<div class="lf-ing-ac-item" data-id="' + ing.id + '">' +
        '<span class="lf-ing-ac-dot ' + safetyDotClass(ing.safety) + '"></span>' +
        '<span class="lf-ing-ac-name">' + esc(ing.name) + '</span>' +
        '<span class="lf-ing-ac-cat">' + esc(ing.category) + '</span>' +
      '</div>';
    }).join('');
    dropdown.classList.add('open');
  });

  dropdown.addEventListener('click', function(e) {
    var item = e.target.closest('.lf-ing-ac-item');
    if (!item) return;
    openModal(item.dataset.id);
    dropdown.classList.remove('open');
    input.value = '';
    _search     = '';
    clearBtn && (clearBtn.style.display = 'none');
    refreshGrid();
  });

  clearBtn && clearBtn.addEventListener('click', function() {
    input.value = '';
    _search     = '';
    this.style.display = 'none';
    dropdown.classList.remove('open');
    refreshGrid();
  });

  document.addEventListener('click', function(e) {
    if (!wrap || !wrap.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { dropdown.classList.remove('open'); this.blur(); }
  });
}

/* ── FILTER PILLS ──────────────────────────────────── */
var FILTERS = [
  'Acne', 'Pigmentation', 'Anti-ageing', 'Barrier repair',
  'Hydration', 'SPF', 'Sensitive skin', 'Rosacea',
  'Pregnancy safe', 'Fragrance free', 'Vegan', 'Exfoliating', 'Brightening',
];

function buildFilters() {
  var container = document.getElementById('lf-ing-filter-pills');
  var clearBtn  = document.getElementById('lf-ing-clear-filters');
  if (!container) return;

  var html = FILTERS.map(function(f) {
    var count = LF_INGREDIENTS.filter(function(ing) {
      var fl = f.toLowerCase();
      if (fl === 'pregnancy safe') return ing.pregnancySafe === 'safe';
      if (fl === 'fragrance free')  return ing.fragranceFree === true;
      if (fl === 'vegan')           return ing.vegan === true;
      return ing.concerns.some(function(c) { return c.toLowerCase() === fl; });
    }).length;
    return '<button class="lf-ing-pill" data-filter="' + esc(f) + '" type="button">' +
      esc(f) + ' <span class="lf-ing-pill-count">' + count + '</span></button>';
  }).join('');
  container.innerHTML = html;

  container.addEventListener('click', function(e) {
    var pill = e.target.closest('.lf-ing-pill');
    if (!pill) return;
    var f = pill.dataset.filter;
    if (_filters.has(f)) { _filters.delete(f); pill.classList.remove('active'); }
    else { _filters.add(f); pill.classList.add('active'); }

    if (clearBtn) {
      clearBtn.classList.toggle('visible', _filters.size > 0);
    }
    refreshGrid();
  });

  clearBtn && clearBtn.addEventListener('click', function() {
    _filters.clear();
    container.querySelectorAll('.lf-ing-pill.active').forEach(function(p) {
      p.classList.remove('active');
    });
    this.classList.remove('visible');
    refreshGrid();
  });
}

/* ── MODAL ─────────────────────────────────────────── */
function openModal(id) {
  var ing = LF_INGREDIENTS.find(function(i) { return i.id === id; });
  if (!ing) return;
  renderModal(ing);
  document.getElementById('lf-ing-backdrop').classList.add('open');
  document.getElementById('lf-ing-drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
  // Load products after a brief delay so modal renders first
  setTimeout(function() { loadProducts(ing); }, 200);
}

function closeModal() {
  document.getElementById('lf-ing-backdrop').classList.remove('open');
  document.getElementById('lf-ing-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

function renderModal(ing) {
  var drawer = document.getElementById('lf-ing-drawer-body');
  if (!drawer) return;

  var pregBadge = ing.pregnancySafe === 'safe'    ? '<span class="lf-ing-preg-badge safe">✓ Pregnancy Safe</span>' :
                  ing.pregnancySafe === 'avoid'   ? '<span class="lf-ing-preg-badge avoid">⚠ Avoid in Pregnancy</span>' :
                                                    '<span class="lf-ing-preg-badge caution">! Caution — Consult Doctor</span>';

  var compatHtml = ing.compatibility.length
    ? ing.compatibility.map(function(c) { return '<span class="lf-ing-compat-tag">' + esc(c) + '</span>'; }).join('')
    : '<span class="lf-ing-no-products">No specific compatibility concerns identified.</span>';

  var contrainHtml = ing.contraindications.length
    ? ing.contraindications.map(function(c) { return '<span class="lf-ing-compat-tag avoid">' + esc(c) + '</span>'; }).join('')
    : '<span style="font-family:var(--font-body--family), sans-serif;font-size:0.875rem;color:rgba(12,12,12,0.5)">No significant contraindications identified at typical usage concentrations.</span>';

  var skinHtml = ing.skinTypes.map(function(s) {
    return '<span class="lf-ing-skintype-tag">' + esc(s) + '</span>';
  }).join('');

  var benefitsHtml = ing.benefits.map(function(b) {
    return '<li>' + esc(b) + '</li>';
  }).join('');

  drawer.innerHTML =
    '<div class="lf-ing-drawer__safety ' + ing.safety + '">' +
      '<span class="lf-ing-drawer__safety-dot"></span>' +
      SAFETY_LABELS[ing.safety] +
    '</div>' +

    '<h2 class="lf-ing-drawer__name">' + esc(ing.name) + '</h2>' +

    '<div class="lf-ing-drawer__cat-row">' +
      '<span class="lf-ing-drawer__cat-badge">' + esc(ing.category) + '</span>' +
      pregBadge +
    '</div>' +

    '<p class="lf-ing-drawer__aliases"><strong>Also known as:</strong> ' + esc(ing.aliases.join(', ')) + '</p>' +
    '<p class="lf-ing-drawer__summary">' + esc(ing.summary) + '</p>' +

    '<div class="lf-ing-section">' +
      '<h3 class="lf-ing-section-title">Key Benefits</h3>' +
      '<ul class="lf-ing-benefit-list">' + benefitsHtml + '</ul>' +
    '</div>' +

    '<div class="lf-ing-section">' +
      '<h3 class="lf-ing-section-title">Skin Types</h3>' +
      '<div class="lf-ing-skintype-tags">' + skinHtml + '</div>' +
    '</div>' +

    '<div class="lf-ing-section">' +
      '<h3 class="lf-ing-section-title">Works Well With</h3>' +
      '<div class="lf-ing-compat-grid">' + compatHtml + '</div>' +
    '</div>' +

    '<div class="lf-ing-section">' +
      '<h3 class="lf-ing-section-title">Cautions &amp; Contraindications</h3>' +
      '<div class="lf-ing-compat-grid">' + contrainHtml + '</div>' +
    '</div>' +

    (ing.pregnancyNote ? '<div class="lf-ing-section">' +
      '<h3 class="lf-ing-section-title">Pregnancy &amp; Safety</h3>' +
      pregBadge +
      '<p style="margin-top:10px;font-family:var(--font-body--family), sans-serif;font-size:0.875rem;line-height:1.7;color:rgba(12,12,12,0.65)">' + esc(ing.pregnancyNote) + '</p>' +
    '</div>' : '') +

    (ing.layering ? '<div class="lf-ing-section">' +
      '<h3 class="lf-ing-section-title">How to Layer</h3>' +
      '<div class="lf-ing-layering">' + esc(ing.layering) + '</div>' +
    '</div>' : '') +

    (ing.clinical ? '<div class="lf-ing-section">' +
      '<h3 class="lf-ing-section-title">Clinical Notes</h3>' +
      '<div class="lf-ing-safety-note ' + ing.safety + '">' + esc(ing.clinical) + '</div>' +
    '</div>' : '') +

    '<div class="lf-ing-section" id="lf-ing-products-section">' +
      '<h3 class="lf-ing-section-title">Shop This Ingredient</h3>' +
      '<div class="lf-ing-products-loading" id="lf-ing-products-output">Loading recommendations…</div>' +
    '</div>';
}

/* ── PRODUCT AJAX ──────────────────────────────────── */
async function loadProducts(ing) {
  var output = document.getElementById('lf-ing-products-output');
  if (!output) return;

  var query = (ing.searchTags && ing.searchTags[0]) || ing.name;

  try {
    var res  = await fetch('/search/suggest.json?q=' + encodeURIComponent(query) + '&resources[type]=product&resources[limit]=4&resources[options][prefix]=last');
    var data = await res.json();
    var products = (data.resources && data.resources.results && data.resources.results.products) || [];

    if (!products.length) {
      // Fallback: try ingredient name directly
      var res2  = await fetch('/search/suggest.json?q=' + encodeURIComponent(ing.name) + '&resources[type]=product&resources[limit]=4&resources[options][prefix]=last');
      var data2 = await res2.json();
      products  = (data2.resources && data2.resources.results && data2.resources.results.products) || [];
    }

    if (!products.length) {
      output.className = 'lf-ing-no-products';
      output.textContent = 'No matching products found. Browse our full collection for curated recommendations.';
      return;
    }

    output.className = 'lf-ing-products-grid';
    output.innerHTML = products.map(function(p) {
      var img = p.image ? p.image.url || p.image : '';
      var imgHtml = img
        ? '<img class="lf-ing-prod-img" src="' + img + '" alt="' + esc(p.title) + '" loading="lazy" width="200" height="200">'
        : '<div class="lf-ing-prod-img" style="display:flex;align-items:center;justify-content:center;background:#f0efed;font-family:var(--font-body--family), sans-serif;font-size:0.5rem;color:rgba(0,0,0,0.25)">NO IMAGE</div>';
      return '<a class="lf-ing-prod-card" href="' + esc(p.url) + '">' +
        imgHtml +
        '<div class="lf-ing-prod-info">' +
          '<p class="lf-ing-prod-title">' + esc(p.title) + '</p>' +
          (p.price ? '<p class="lf-ing-prod-price">' + esc(p.price) + '</p>' : '') +
        '</div>' +
      '</a>';
    }).join('');
  } catch(e) {
    output.className = 'lf-ing-no-products';
    output.textContent = 'Product recommendations temporarily unavailable.';
  }
}

/* ── CARD CLICK BINDING ────────────────────────────── */
function bindCardClicks() {
  document.querySelectorAll('.lf-ing-card').forEach(function(card) {
    card.addEventListener('click', function() { openModal(this.dataset.id); });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(this.dataset.id); }
    });
  });
}

/* ── UTILITIES ─────────────────────────────────────── */
function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── INIT ──────────────────────────────────────────── */
function init() {
  buildAZ();
  buildFilters();
  buildAutocomplete();
  renderGrid(LF_INGREDIENTS);

  // Modal close events
  var backdrop = document.getElementById('lf-ing-backdrop');
  var closeBtn = document.getElementById('lf-ing-drawer-close');
  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  // Sticky A-Z active state on scroll
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var letter = entry.target.id.replace('lf-letter-', '');
        document.querySelectorAll('.lf-ing-az-letter').forEach(function(el) {
          el.classList.toggle('active', el.textContent === letter);
        });
      }
    });
  }, { rootMargin: '-10% 0px -85% 0px' });

  document.querySelectorAll('.lf-ing-letter-group').forEach(function(el) {
    observer.observe(el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
