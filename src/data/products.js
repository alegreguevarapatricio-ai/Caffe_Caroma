export const categories = [
  {
    id: 'capsule-nespresso',
    name: 'Capsule Compatibili Nespresso',
    slug: 'capsule-nespresso',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400'
  },
  {
    id: 'capsule-dolcegusto',
    name: 'Capsule Compatibili Dolce Gusto',
    slug: 'capsule-dolcegusto',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400'
  },
  {
    id: 'cialde',
    name: 'Cialde ESE 44mm',
    slug: 'cialde',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400'
  },
  {
    id: 'grani',
    name: 'Caffè in Grani',
    slug: 'grani',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400'
  },
  {
    id: 'macinato',
    name: 'Caffè Macinato',
    slug: 'macinato',
    image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=400'
  },
  {
    id: 'accessori',
    name: 'Accessori',
    slug: 'accessori',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'
  }
]

export const products = [
  // CAPSULE NESPRESSO
  {
    id: 1,
    name: 'Karoma Oro',
    slug: 'karoma-oro',
    description: 'Miscela pregiata con note di cioccolato e nocciola. Corpo pieno e retrogusto persistente. La nostra miscela più venduta.',
    price: 4.50,
    priceRange: { min: 4.50, max: 36.00 },
    category: 'capsule-nespresso',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    featured: true,
    variants: [
      { name: '10 capsule', price: 4.50 },
      { name: '30 capsule', price: 12.00 },
      { name: '100 capsule', price: 36.00 }
    ]
  },
  {
    id: 2,
    name: 'Karoma Intenso',
    slug: 'karoma-intenso',
    description: 'Espresso dal carattere deciso. Tostatura scura con note di cacao amaro e spezie. Per chi ama i sapori forti.',
    price: 4.50,
    priceRange: { min: 4.50, max: 36.00 },
    category: 'capsule-nespresso',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400',
    featured: true,
    variants: [
      { name: '10 capsule', price: 4.50 },
      { name: '30 capsule', price: 12.00 },
      { name: '100 capsule', price: 36.00 }
    ]
  },
  {
    id: 3,
    name: 'Karoma Soave',
    slug: 'karoma-soave',
    description: 'Miscela delicata e armoniosa con note floreali. Ideale per chi ama un espresso morbido e vellutato.',
    price: 4.50,
    priceRange: { min: 4.50, max: 36.00 },
    category: 'capsule-nespresso',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    featured: false,
    variants: [
      { name: '10 capsule', price: 4.50 },
      { name: '30 capsule', price: 12.00 },
      { name: '100 capsule', price: 36.00 }
    ]
  },
  {
    id: 4,
    name: 'Karoma Decaffeinato',
    slug: 'karoma-decaffeinato',
    description: 'Tutto il gusto del caffè Karoma senza caffeina. Processo di decaffeinizzazione naturale ad acqua.',
    price: 5.00,
    priceRange: { min: 5.00, max: 40.00 },
    category: 'capsule-nespresso',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400',
    featured: false,
    variants: [
      { name: '10 capsule', price: 5.00 },
      { name: '30 capsule', price: 13.50 },
      { name: '100 capsule', price: 40.00 }
    ]
  },
  {
    id: 5,
    name: 'Karoma Cremoso',
    slug: 'karoma-cremoso',
    description: 'Espresso dalla crema densa e persistente. Miscela equilibrata con note di frutta secca.',
    price: 4.50,
    priceRange: { min: 4.50, max: 36.00 },
    category: 'capsule-nespresso',
    image: 'https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=400',
    featured: false,
    variants: [
      { name: '10 capsule', price: 4.50 },
      { name: '30 capsule', price: 12.00 },
      { name: '100 capsule', price: 36.00 }
    ]
  },
  {
    id: 6,
    name: 'Karoma Ristretto',
    slug: 'karoma-ristretto',
    description: 'Concentrato e intenso. Per gli amanti del caffè corto e deciso, dal gusto pieno.',
    price: 4.80,
    priceRange: { min: 4.80, max: 38.00 },
    category: 'capsule-nespresso',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400',
    featured: false,
    variants: [
      { name: '10 capsule', price: 4.80 },
      { name: '30 capsule', price: 12.80 },
      { name: '100 capsule', price: 38.00 }
    ]
  },

  // CAPSULE DOLCE GUSTO
  {
    id: 7,
    name: 'Karoma Ginseng',
    slug: 'karoma-ginseng',
    description: 'Bevanda al caffè con ginseng. Dolce, cremosa e energizzante. Perfetta per una pausa rigenerante.',
    price: 5.50,
    priceRange: { min: 5.50, max: 45.00 },
    category: 'capsule-dolcegusto',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
    featured: true,
    variants: [
      { name: '10 capsule', price: 5.50 },
      { name: '30 capsule', price: 15.00 },
      { name: '100 capsule', price: 45.00 }
    ]
  },
  {
    id: 8,
    name: 'Karoma Nocciola',
    slug: 'karoma-nocciola',
    description: 'Caffè aromatizzato alla nocciola. Cremoso, avvolgente e dal profumo irresistibile.',
    price: 5.50,
    priceRange: { min: 5.50, max: 45.00 },
    category: 'capsule-dolcegusto',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400',
    featured: false,
    variants: [
      { name: '10 capsule', price: 5.50 },
      { name: '30 capsule', price: 15.00 },
      { name: '100 capsule', price: 45.00 }
    ]
  },
  {
    id: 9,
    name: 'Karoma Cappuccino',
    slug: 'karoma-cappuccino',
    description: 'Il perfetto cappuccino italiano. Crema di latte vellutata e caffè espresso intenso.',
    price: 6.00,
    priceRange: { min: 6.00, max: 50.00 },
    category: 'capsule-dolcegusto',
    image: 'https://images.unsplash.com/photo-1534778101666-5f5e64e0dac4?w=400',
    featured: true,
    variants: [
      { name: '8 capsule', price: 6.00 },
      { name: '24 capsule', price: 16.00 },
      { name: '80 capsule', price: 50.00 }
    ]
  },
  {
    id: 10,
    name: 'Karoma Latte Macchiato',
    slug: 'karoma-latte-macchiato',
    description: 'Strati di latte cremoso macchiato con espresso. Una coccola di dolcezza.',
    price: 6.00,
    priceRange: { min: 6.00, max: 50.00 },
    category: 'capsule-dolcegusto',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400',
    featured: false,
    variants: [
      { name: '8 capsule', price: 6.00 },
      { name: '24 capsule', price: 16.00 },
      { name: '80 capsule', price: 50.00 }
    ]
  },
  {
    id: 11,
    name: 'Karoma Cioccolato',
    slug: 'karoma-cioccolato',
    description: 'Bevanda al cioccolato densa e vellutata. Perfetta per i momenti di puro piacere.',
    price: 5.50,
    priceRange: { min: 5.50, max: 45.00 },
    category: 'capsule-dolcegusto',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=400',
    featured: false,
    variants: [
      { name: '10 capsule', price: 5.50 },
      { name: '30 capsule', price: 15.00 },
      { name: '100 capsule', price: 45.00 }
    ]
  },

  // CIALDE ESE
  {
    id: 12,
    name: 'Cialde Karoma Classico',
    slug: 'cialde-karoma-classico',
    description: 'Cialde ESE 44mm. La tradizione napoletana in cialda. Miscela equilibrata e aromatica.',
    price: 3.50,
    priceRange: { min: 3.50, max: 30.00 },
    category: 'cialde',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    featured: false,
    variants: [
      { name: '18 cialde', price: 3.50 },
      { name: '50 cialde', price: 9.00 },
      { name: '150 cialde', price: 25.00 }
    ]
  },
  {
    id: 13,
    name: 'Cialde Karoma Forte',
    slug: 'cialde-karoma-forte',
    description: 'Cialde ESE 44mm dal gusto intenso. Per chi cerca un espresso corposo e deciso.',
    price: 3.50,
    priceRange: { min: 3.50, max: 30.00 },
    category: 'cialde',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    featured: false,
    variants: [
      { name: '18 cialde', price: 3.50 },
      { name: '50 cialde', price: 9.00 },
      { name: '150 cialde', price: 25.00 }
    ]
  },
  {
    id: 14,
    name: 'Cialde Karoma Dek',
    slug: 'cialde-karoma-dek',
    description: 'Cialde ESE 44mm decaffeinate. Tutto il gusto senza caffeina.',
    price: 4.00,
    priceRange: { min: 4.00, max: 32.00 },
    category: 'cialde',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    featured: false,
    variants: [
      { name: '18 cialde', price: 4.00 },
      { name: '50 cialde', price: 10.00 },
      { name: '150 cialde', price: 28.00 }
    ]
  },

  // GRANI
  {
    id: 15,
    name: 'Caffè in Grani Bar',
    slug: 'caffe-grani-bar',
    description: 'Miscela bar professionale in grani. Ideale per macchine espresso. Tostatura media.',
    price: 12.00,
    priceRange: { min: 12.00, max: 55.00 },
    category: 'grani',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400',
    featured: true,
    variants: [
      { name: '500g', price: 12.00 },
      { name: '1kg', price: 22.00 },
      { name: '3kg', price: 55.00 }
    ]
  },
  {
    id: 16,
    name: 'Caffè in Grani Arabica 100%',
    slug: 'caffe-grani-arabica',
    description: 'Puro Arabica in grani. Note fruttate e floreali. Acidità vivace e corpo leggero.',
    price: 14.00,
    priceRange: { min: 14.00, max: 65.00 },
    category: 'grani',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    featured: false,
    variants: [
      { name: '500g', price: 14.00 },
      { name: '1kg', price: 26.00 },
      { name: '3kg', price: 65.00 }
    ]
  },
  {
    id: 17,
    name: 'Caffè in Grani Robusta',
    slug: 'caffe-grani-robusta',
    description: 'Robusta selezionata in grani. Crema densa, gusto forte e persistente.',
    price: 10.00,
    priceRange: { min: 10.00, max: 45.00 },
    category: 'grani',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    featured: false,
    variants: [
      { name: '500g', price: 10.00 },
      { name: '1kg', price: 18.00 },
      { name: '3kg', price: 45.00 }
    ]
  },

  // MACINATO
  {
    id: 18,
    name: 'Karoma Macinato Moka',
    slug: 'karoma-macinato-moka',
    description: 'Macinatura perfetta per moka. La tradizione italiana nel tuo caffettiera.',
    price: 5.50,
    priceRange: { min: 5.50, max: 20.00 },
    category: 'macinato',
    image: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=400',
    featured: false,
    variants: [
      { name: '250g', price: 5.50 },
      { name: '500g', price: 10.00 },
      { name: '1kg', price: 18.00 }
    ]
  },
  {
    id: 19,
    name: 'Karoma Macinato Espresso',
    slug: 'karoma-macinato-espresso',
    description: 'Macinatura fine per macchine espresso domestiche. Crema perfetta garantita.',
    price: 5.50,
    priceRange: { min: 5.50, max: 20.00 },
    category: 'macinato',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
    featured: false,
    variants: [
      { name: '250g', price: 5.50 },
      { name: '500g', price: 10.00 },
      { name: '1kg', price: 18.00 }
    ]
  },

  // ACCESSORI
  {
    id: 20,
    name: 'Tazza Espresso Karoma',
    slug: 'tazza-espresso-karoma',
    description: 'Tazza da espresso in ceramica con logo Karoma. Capacità 80ml. Set da 6 pezzi.',
    price: 18.00,
    priceRange: null,
    category: 'accessori',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    featured: false,
    variants: []
  },
  {
    id: 21,
    name: 'Tazza Cappuccino Karoma',
    slug: 'tazza-cappuccino-karoma',
    description: 'Tazza da cappuccino in ceramica con logo Karoma. Capacità 200ml. Set da 6 pezzi.',
    price: 24.00,
    priceRange: null,
    category: 'accessori',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
    featured: false,
    variants: []
  },
  {
    id: 22,
    name: 'Zuccheriera Karoma',
    slug: 'zuccheriera-karoma',
    description: 'Zuccheriera in ceramica con logo Karoma. Design elegante per il tuo angolo caffè.',
    price: 12.00,
    priceRange: null,
    category: 'accessori',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400',
    featured: false,
    variants: []
  }
]