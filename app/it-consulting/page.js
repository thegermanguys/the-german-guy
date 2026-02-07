export const metadata = {
  title: "IT Management Services | The German Guy",
  description:
    "Professional IT Management Services by The German Guy — secure systems, scalable software, modern websites, and smart digital solutions.",
};

export default function ITManagementServicesPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section - Enhanced with gradient and better spacing */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:40px_40px]"></div>
        
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm mb-6">
              <span className="text-sm font-medium text-slate-700 tracking-wide">
                THE GERMAN GUY
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent leading-tight">
              Enterprise IT Management Services
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-600 leading-relaxed mb-10">
              Precision-engineered technology solutions that scale with your business.
              <span className="block mt-2 text-lg text-slate-500">
                No complexity. No shortcuts. Just results.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/#contact"
                className="group px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Start Your Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="#services"
                className="px-8 py-4 rounded-xl bg-white text-slate-700 font-semibold hover:bg-slate-50 transition-all border-2 border-slate-200 hover:border-slate-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Grid - Enhanced cards with icons and hover effects */}
      <section id="services" className="container mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            End-to-end technology services engineered for reliability, security, and growth
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">

          <ServiceCard
            icon="🧠"
            gradient="from-purple-500 to-indigo-600"
            title="IT Management & Consulting"
            text="Strategic IT planning, system audits, and technical decision-making aligned with long-term business goals."
            features={["System Architecture", "Tech Stack Planning", "Performance Audits"]}
          />

          <ServiceCard
            icon="🛒"
            gradient="from-blue-500 to-cyan-600"
            title="E-Commerce Solutions"
            text="Complete online store development with secure payment processing, inventory management, and seamless customer experiences."
            features={["Shopping Cart Systems", "Payment Integration", "Order Management"]}
          />

          {/* <ServiceCard
            icon="🌐"
            gradient="from-green-500 to-emerald-600"
            title="Website Development"
            text="High-performance, SEO-optimized websites designed for speed, scalability, and conversion."
            features={["Responsive Design", "SEO Optimization", "Performance Tuning"]}
          /> */}

          <ServiceCard
            icon="📊"
            gradient="from-orange-500 to-red-600"
            title="CRM Solutions & Design"
            text="Custom CRM platforms that streamline operations, improve customer relationships, and increase efficiency."
            features={["Custom Workflows", "Integration APIs", "User Training"]}
          />

          <ServiceCard
            icon="⚙️"
            gradient="from-slate-500 to-slate-700"
            title="Software Development"
            text="Robust, scalable software solutions — from internal tools to enterprise-grade systems."
            features={["Custom Solutions", "API Development", "Legacy Migration"]}
          />

          <ServiceCard
            icon="📱"
            gradient="from-pink-500 to-rose-600"
            title="App Development"
            text="Reliable mobile and web applications built with modern technologies and future growth in mind."
            features={["iOS & Android", "Progressive Web Apps", "Cloud Integration"]}
          />

          <ServiceCard
            icon="🔍"
            gradient="from-amber-500 to-orange-600"
            title="SEO Services"
            text="Data-driven SEO strategies to improve your search rankings, drive organic traffic, and increase visibility."
            features={["Keyword Research", "On-Page Optimization", "Performance Tracking"]}
          />

        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              
          <ValueProp
  number="01"
  title="Built by Engineers"
  description="Every feature is written with clean logic, readable code, and real-world use cases in mind."
/>

<ValueProp
  number="02"
  title="Scales Without Rewrites"
  description="We plan architecture upfront so your product doesn’t break when users or data grow."
/>

<ValueProp
  number="03"
  title="Straight Talk"
  description="No fake promises. No overengineering. You get honest advice and realistic delivery."
/>


            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Redesigned with better visual hierarchy */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why The German Guy?
            </h2>

<p className="text-xl text-slate-300 leading-relaxed mb-12">
  We build software with clear architecture, predictable behavior,
  and disciplined engineering practices. Decisions are documented,
  trade-offs are explicit, and systems are designed to be understood
  and maintained over time.
</p>

<div className="grid sm:grid-cols-3 gap-8 mt-16">
  <Stat label="Clear System Architecture" />
  <Stat label="Code Reviews & Version Control" />
  <Stat label="Maintainable, Documented Code" />
</div>


          </div>
        </div>
      </section>

      {/* CTA - Enhanced with better visual appeal */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 md:p-16 text-center border border-blue-100 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Let's Build Something Exceptional
            </h2>

            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Get expert guidance before making costly technology decisions. 
              Schedule a free consultation to discuss your project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Get in Touch</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-white text-slate-700 font-semibold hover:bg-slate-50 transition-all border-2 border-slate-200 hover:border-slate-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* Enhanced Service Card Component */
function ServiceCard({ icon, gradient, title, text, features }) {
  return (
    <div className="group relative p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200 hover:-translate-y-1">
      {/* Icon with gradient background */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} text-white text-3xl mb-6 shadow-lg`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{text}</p>
      
      {/* Features list */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-slate-500">
            <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Hover effect gradient */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
    </div>
  );
}

/* Value Proposition Component */
function ValueProp({ number, title, description }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-6xl font-bold text-blue-600 opacity-20 mb-2">{number}</div>
      <h3 className="text-2xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

/* Stats Component */
function Stat({ number, label }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-slate-400 uppercase tracking-wider text-sm">{label}</div>
    </div>
  );
}