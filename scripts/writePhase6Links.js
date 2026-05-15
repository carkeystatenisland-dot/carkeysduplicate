const fs = require('fs');
const path = require('path');

const BOROUGHS = [
  { slug: 'brooklyn', name: 'Brooklyn' },
  { slug: 'queens', name: 'Queens' },
  { slug: 'manhattan', name: 'Manhattan' },
  { slug: 'bronx', name: 'The Bronx' },
  { slug: 'staten-island', name: 'Staten Island' }
];

const SERVICE_TYPES = [
  { slug: 'transponder-key-duplication', name: 'Transponder Key Duplication' },
  { slug: 'key-fob-duplication', name: 'Key Fob Duplication' },
  { slug: 'smart-key-duplication', name: 'Smart Key Duplication' },
  { slug: 'push-to-start-key-duplication', name: 'Push-to-Start Key Duplication' },
  { slug: 'laser-cut-key-duplication', name: 'Laser-Cut Key Duplication' },
  { slug: 'spare-key-copy', name: 'Spare Key Copy' }
];

const CAR_MAKES = [
  { slug: 'toyota-key-duplication', name: 'Toyota', link: 'https://www.carkeyreplacementstatenisland.com/toyota-keys', anchor: 'Toyota key replacement Staten Island' },
  { slug: 'honda-key-duplication', name: 'Honda', link: 'https://www.carkeyreplacementstatenisland.com/honda-keys', anchor: 'Honda key replacement Staten Island' },
  { slug: 'ford-key-duplication', name: 'Ford', link: 'https://www.carkeyreplacementstatenisland.com/ford-keys', anchor: 'Ford key replacement Staten Island' },
  { slug: 'bmw-key-duplication', name: 'BMW', link: 'https://www.carkeyreplacementstatenisland.com/bmw-keys', anchor: 'BMW key replacement Staten Island' },
  { slug: 'nissan-key-duplication', name: 'Nissan', link: 'https://www.carkeyreplacementstatenisland.com/nissan-keys', anchor: 'Nissan key replacement Staten Island' },
  { slug: 'hyundai-key-duplication', name: 'Hyundai', link: 'https://www.carkeyreplacementstatenisland.com/hyundai-keys', anchor: 'Hyundai key replacement Staten Island' },
  { slug: 'jeep-key-duplication', name: 'Jeep', link: 'https://www.carkeyreplacementstatenisland.com/jeep-keys', anchor: 'Jeep key replacement Staten Island' },
  { slug: 'chevrolet-key-duplication', name: 'Chevrolet', link: 'https://www.carkeyreplacementstatenisland.com/chevrolet-keys', anchor: 'Chevrolet key replacement Staten Island' },
  { slug: 'kia-key-duplication', name: 'Kia', link: 'https://www.carkeyreplacementstatenisland.com/kia-keys', anchor: 'Kia key replacement Staten Island' },
  { slug: 'mercedes-key-duplication', name: 'Mercedes', link: 'https://www.carkeyreplacementstatenisland.com/mercedes-keys', anchor: 'Mercedes key replacement Staten Island' },
  { slug: 'subaru-key-duplication', name: 'Subaru', link: 'https://www.carkeyreplacementstatenisland.com/subaru-keys', anchor: 'Subaru key replacement Staten Island' },
  { slug: 'volkswagen-key-duplication', name: 'Volkswagen', link: 'https://www.carkeyreplacementstatenisland.com/volkswagen-keys', anchor: 'Volkswagen key replacement Staten Island' }
];

const updateBoroughPageLinks = (b) => {
  const filePath = path.join(__dirname, '../src/app', b.slug, 'page.tsx');
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const otherBoroughs = BOROUGHS.filter(ob => ob.slug !== b.slug);
  const top4Makes = CAR_MAKES.slice(0, 4);

  const linksHtml = `
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Our Services in ${b.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${SERVICE_TYPES.map(s => `<Link href="/${s.slug}" className="text-brand-accent hover:underline">${s.name} in ${b.name}</Link>`).join('\\n              ')}
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Popular Vehicle Makes Serviced in ${b.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              ${top4Makes.map(m => `<Link href="/${m.slug}" className="text-brand-accent hover:underline">${m.name} Key Duplication</Link>`).join('\\n              ')}
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/request-a-quote" className="btn-primary">Get a Free Quote</Link>
              <Link href="/book-now" className="btn-secondary">Book Mobile Service Now</Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
              <p>We also serve other boroughs:</p>
              <div className="flex flex-wrap gap-4 mt-2">
                ${otherBoroughs.map(ob => `<Link href="/${ob.slug}" className="hover:text-brand-accent">Also serving ${ob.name}</Link>`).join('\\n                ')}
              </div>
              ${b.slug === 'staten-island' ? `<p className="mt-4">For complete key loss situations, visit <a href="https://www.carkeyreplacementstatenisland.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">car key replacement Staten Island</a>.</p>` : ''}
            </div>
          </div>
  `;
  
  if(!content.includes("Our Services in " + b.name)) {
    content = content.replace('<CTABanner', linksHtml + '\n        <CTABanner');
    fs.writeFileSync(filePath, content);
  }
}

const updateServicePageLinks = (s) => {
  const filePath = path.join(__dirname, '../src/app', s.slug, 'page.tsx');
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  const relatedServices = SERVICE_TYPES.filter(os => os.slug !== s.slug).slice(0, 2);
  const relevantMakes = CAR_MAKES.slice(0, 4);

  const linksHtml = `
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Available in All NYC Boroughs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              ${BOROUGHS.map(b => `<Link href="/${b.slug}" className="text-brand-accent hover:underline">${s.name} in ${b.name}</Link>`).join('\\n              ')}
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4">Supported Vehicle Brands for ${s.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              ${relevantMakes.map(m => `<Link href="/${m.slug}" className="text-brand-accent hover:underline">${m.name} Key Duplication</Link>`).join('\\n              ')}
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/request-a-quote" className="btn-primary">Get a Free Quote</Link>
              <Link href="/book-now" className="btn-secondary">Book Mobile Service</Link>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
              <p>Related Services:</p>
              <div className="flex flex-wrap gap-4 mt-2">
                ${relatedServices.map(rs => `<Link href="/${rs.slug}" className="hover:text-brand-accent">${rs.name}</Link>`).join('\\n                ')}
              </div>
            </div>
          </div>
  `;
  
  if(!content.includes("Available in All NYC Boroughs")) {
    content = content.replace('<CTABanner', linksHtml + '\n        <CTABanner');
    fs.writeFileSync(filePath, content);
  }
}

const updateMakePageLinks = (m) => {
  const filePath = path.join(__dirname, '../src/app', m.slug, 'page.tsx');
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');

  const linksHtml = `
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">${m.name} Key Duplication Available In:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              ${BOROUGHS.map(b => `<Link href="/${b.slug}" className="text-brand-accent hover:underline">${m.name} key duplication in ${b.name}</Link>`).join('\\n              ')}
            </div>

            <div className="mt-8 flex gap-4">
              <Link href="/request-a-quote" className="btn-primary">Get a Free Quote</Link>
              <Link href="/transponder-key-duplication" className="btn-secondary">View Transponder Key Services</Link>
            </div>
          </div>
  `;
  
  if(!content.includes(m.name + " Key Duplication Available In:")) {
    content = content.replace('<CTABanner', linksHtml + '\n        <CTABanner');
    fs.writeFileSync(filePath, content);
  }
}

BOROUGHS.forEach(updateBoroughPageLinks);
SERVICE_TYPES.forEach(updateServicePageLinks);
CAR_MAKES.forEach(updateMakePageLinks);

console.log('Phase 6 Internal Links added successfully.');
