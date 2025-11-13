'use client';

const features = [
  { 
    title: 'Verified Properties', 
    desc: 'All properties are verified and RERA approved' 
  },
  { 
    title: 'Expert Agents', 
    desc: 'Professional agents to guide you' 
  },
  { 
    title: 'Best Deals', 
    desc: 'Competitive pricing and great offers' 
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-4xl text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
