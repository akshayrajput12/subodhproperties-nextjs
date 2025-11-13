export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <section className="bg-gradient-to-r from-skysoft to-peach rounded-2xl p-12 mb-12 text-center">
        <h1 className="font-heading font-bold text-5xl mb-4">About Us</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto">
          Your trusted partner in finding the perfect property in Jaipur
        </p>
      </section>

      {/* Mission */}
      <section className="mb-12">
        <h2 className="font-heading font-bold text-3xl mb-6">Our Mission</h2>
        <p className="text-lg text-muted leading-relaxed">
          We are committed to making property buying and selling simple, transparent, and hassle-free. 
          With years of experience in the Jaipur real estate market, we help you find your dream home 
          or investment property with confidence.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-peach rounded-2xl p-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-text mb-2">500+</div>
            <p className="text-muted">Properties Listed</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-text mb-2">1000+</div>
            <p className="text-muted">Happy Clients</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-text mb-2">10+</div>
            <p className="text-muted">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="font-heading font-bold text-3xl mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: 'Rohit Sharma', 
              role: 'Senior Agent', 
              bio: 'Expert in residential properties',
              photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80'
            },
            { 
              name: 'Priya Verma', 
              role: 'Property Consultant', 
              bio: 'Specializes in commercial real estate',
              photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80'
            },
            { 
              name: 'Amit Kumar', 
              role: 'Sales Manager', 
              bio: 'Luxury property specialist',
              photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80'
            },
          ].map((member, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-center">
              <div className="relative w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-1">{member.name}</h3>
              <p className="text-skysoft mb-2">{member.role}</p>
              <p className="text-muted text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
