export const metadata = {
  title: "IT Management Services | The German Guy",
  description:
    "Professional IT Management Services by The German Guy — secure systems, scalable software, modern websites, and smart digital solutions.",
};

export default function ITManagementServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* Hero Section - Enhanced with gradient and better spacing */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 transition-colors duration-300">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800/40 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.6))] bg-[size:40px_40px]"></div>
        
        <div className="relative container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-sm mb-6 transition-colors duration-300">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 tracking-wide">
                THE GERMAN GUY
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent leading-tight transition-colors duration-300">
              Enterprise IT Management Services
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-600 dark:text-slate-400 leading-relaxed mb-10 transition-colors duration-300">
              Precision-engineered technology solutions that scale with your business.
              <span className="block mt-2 text-lg text-slate-500 dark:text-slate-500">
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
                className="px-8 py-4 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border-2 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-white dark:fill-slate-950 transition-colors duration-300" d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" />
          </svg>
        </div>
      </section>

      {/* Leadhaus Product Section */}
      <section className="bg-white dark:bg-slate-950 py-20 md:py-28 overflow-hidden relative transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 transition-colors duration-300"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
              {/* Product Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-semibold text-sm mb-6 border border-blue-200 dark:border-blue-800 transition-colors duration-300">
                  <span className="animate-pulse">✨</span> BRAND NEW PRODUCT
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight transition-colors duration-300">
                  Meet <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Leadhaus</span>
                </h2>
                
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-300">
                  Our custom CRM built specifically for <span className="font-medium text-slate-800 dark:text-slate-200">Educational Consultancies</span> to make student tracking and data management simpler and more efficient.
                </p>

                <ul className="space-y-5 text-left max-w-2xl mx-auto lg:mx-0 mb-10">
                  {[
                    "Easily track student applications and progress",
                    "Dashboard with Total Amount & keep eye on Pending Payment 😉",
                    "Store student data securely in one place",
                    "Add multiple users (counselors) under one account",
                    "Use a clean, easy-to-use system designed for your workflow"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-full p-1.5 shadow-sm border border-blue-100 dark:border-blue-800 flex-shrink-0 transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl border border-amber-200/60 dark:border-amber-700/50 mb-10 text-left shadow-sm transition-colors duration-300">
                  <p className="text-amber-900 dark:text-amber-200 font-medium flex items-start gap-4 transition-colors duration-300">
                    <span className="text-2xl mt-0.5">🎁</span> 
                    <span className="leading-relaxed">
                      <strong className="font-bold block text-lg mb-1">Bonus Advantage</strong> 
                      Consultancies using Leadhaus can also apply directly to German private universities through us*.
                    </span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://leadhaus.germanguy.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-black dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-3"
                  >
                    <span>Sign Up on Leadhaus</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  
                  <a
                    href="https://leadhaus.germanguy.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 inline-flex items-center justify-center gap-2"
                  >
                    Explore Platform
                    <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Decorative Visual / Mockup representation */}
              <div className="flex-1 w-full max-w-xl mx-auto lg:max-w-none relative mt-8 lg:mt-0 lg:ml-8">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-300/40 to-indigo-300/40 dark:from-blue-600/20 dark:to-indigo-600/20 rounded-[2.5rem] transform rotate-3 scale-105 -z-10 blur-xl transition-colors duration-300"></div>
                 <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-2 shadow-2xl relative overflow-hidden ring-1 ring-slate-900/5 transition-colors duration-300">
                    <div className="bg-slate-50/50 dark:bg-slate-800/50 rounded-[1.7rem] border border-slate-100 dark:border-slate-700 p-6 md:p-8 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-8 border-b border-slate-200 dark:border-slate-700 pb-5 transition-colors duration-300">
                         <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
                         </div>
                         <div className="mx-auto flex-1 max-w-[200px] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 text-xs px-4 py-2 rounded-full flex gap-2 items-center justify-center shadow-sm transition-colors duration-300">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            <span className="truncate">leadhaus.germanguy.org</span>
                         </div>
                      </div>
                      
                      {/* Mockup Content */}
                      <div className="space-y-6">
                         <div className="flex justify-between items-center">
                            <div>
                               <div className="w-32 h-6 bg-slate-200 dark:bg-slate-700 rounded-md animate-pulse"></div>
                               <div className="w-20 h-4 bg-slate-100 dark:bg-slate-700/50 rounded-md mt-2"></div>
                            </div>
                            <div className="flex gap-3 items-center">
                               <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-200 dark:border-blue-800 shadow-sm transition-colors duration-300">LH</div>
                            </div>
                         </div>
                         
                         <div className="grid grid-cols-2 gap-5">
                            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-center relative overflow-hidden transition-colors duration-300">
                               <div className="absolute top-0 right-0 p-3 opacity-10">
                                 <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                               </div>
                               <div className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Total Applications</div>
                               <div className="text-3xl font-bold text-slate-800 dark:text-white transition-colors duration-300">1,204</div>
                            </div>
                            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-center relative overflow-hidden transition-colors duration-300">
                               <div className="absolute top-0 right-0 p-3 opacity-10">
                                 <svg className="w-12 h-12 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                               </div>
                               <div className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">Pending Payments</div>
                               <div className="text-3xl font-bold text-slate-800 dark:text-white transition-colors duration-300">€4,500</div>
                               <div className="mt-2 text-xs text-emerald-600 font-medium flex items-center gap-1">
                                 <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" /></svg>
                                 +12.5% this month
                               </div>
                            </div>
                         </div>
                         
                         <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm h-40 flex flex-col justify-between transition-colors duration-300">
                            <div className="flex justify-between items-center mb-4">
                               <div className="w-24 h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                               <div className="w-16 h-3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                            </div>
                            <div className="flex items-end gap-3 h-full">
                               {/* Enhanced chart mockup */}
                               <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-t-md hover:bg-indigo-100 dark:hover:bg-indigo-800/40 transition-colors h-[30%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Jan</div></div>
                               <div className="flex-1 bg-indigo-100 dark:bg-indigo-800/50 rounded-t-md hover:bg-indigo-200 dark:hover:bg-indigo-700/60 transition-colors h-[45%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Feb</div></div>
                               <div className="flex-1 bg-indigo-200 dark:bg-indigo-700/50 rounded-t-md hover:bg-indigo-300 dark:hover:bg-indigo-600/60 transition-colors h-[70%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Mar</div></div>
                               <div className="flex-1 bg-indigo-300 dark:bg-indigo-600/50 rounded-t-md hover:bg-indigo-400 dark:hover:bg-indigo-500/60 transition-colors h-[55%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Apr</div></div>
                               <div className="flex-1 bg-indigo-400 dark:bg-indigo-500/60 rounded-t-md hover:bg-indigo-500 dark:hover:bg-indigo-400/80 transition-colors h-[85%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">May</div></div>
                               <div className="flex-1 bg-indigo-600 dark:bg-indigo-500 rounded-t-md shadow-[0_0_15px_rgba(79,70,229,0.3)] h-[100%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Jun</div></div>
                               <div className="flex-1 bg-indigo-300 dark:bg-indigo-600/50 rounded-t-md hover:bg-indigo-400 dark:hover:bg-indigo-500/60 transition-colors h-[65%] relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Jul</div></div>
                            </div>
                         </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Enhanced cards with icons and hover effects */}
      <section id="services" className="container mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">
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
      <section className="bg-slate-50 dark:bg-slate-900 py-20 md:py-28 transition-colors duration-300">
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
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32 overflow-hidden transition-colors duration-300">
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
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl p-12 md:p-16 text-center border border-blue-100 dark:border-slate-800 shadow-xl transition-colors duration-300">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-300">
              Let's Build Something Exceptional
            </h2>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
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
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
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
    <div className="group relative p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 hover:-translate-y-1">
      {/* Icon with gradient background */}
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} text-white text-3xl mb-6 shadow-lg`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white transition-colors duration-300">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed transition-colors duration-300">{text}</p>
      
      {/* Features list */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
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
      <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white transition-colors duration-300">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">{description}</p>
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