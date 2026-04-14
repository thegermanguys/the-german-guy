"use client";

import Image from "next/image";

const UniversityCard = ({ name, desc, logo, formLink, knowMoreLink }) => {
  const isEIIET = name.includes("EIIET");

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow">

      {/* Left Section */}
      <div className="flex items-start gap-5">
        <div className={`w-28 h-20 md:w-36 md:h-20 flex-shrink-0 flex items-center justify-center overflow-hidden border ${!isEIIET ? 'bg-white border-slate-100 rounded-lg p-2' : 'border-transparent'}`}>
          <div className="relative w-full h-full">
            <Image
              src={logo}
              alt={`${name} logo`}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="py-1">
          <h3 className="font-semibold text-base md:text-lg text-slate-800 mb-1">{name}</h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-md">{desc}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex w-full md:w-auto gap-3 mt-2 md:mt-0">
        {knowMoreLink && (
          <a
            href={knowMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 md:flex-none text-center px-5 py-2.5 bg-slate-100 text-slate-700 font-medium text-sm rounded-lg hover:bg-slate-200 transition-colors"
          >
            Know More
          </a>
        )}

        <a
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 md:flex-none text-center px-5 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

const CountryCTA = ({ country }) => (
  <section className="bg-blue-600 py-10 px-4 md:px-10 text-center text-white mt-10">
    <h2 className="text-xl md:text-2xl font-semibold mb-3">
      Looking for Other Universities in {country}?
    </h2>

    <p className="max-w-2xl mx-auto mb-4 text-sm md:text-base">
      Didn’t find the university you were looking for? We help students explore
      the right institutions based on profile, budget, and career goals.
    </p>

    <p className="mb-6 text-sm italic opacity-90">
      Would you like to collaborate with us or list your university here?
    </p>

    <a
      href="mailto:contact@thegermanguy.org"
      className="px-6 py-3 bg-white text-blue-600 rounded-md font-medium inline-block"
    >
      Contact Us
    </a>
  </section>
);

export default function PartneredUniversities() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="py-10 px-4 md:px-10 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-3">
          Our Partnered Universities
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We collaborate with selected universities in Germany and Austria to
          help students access quality education with clarity and confidence.
        </p>
      </section>

      {/* GERMANY */}
      <section className="py-6 px-4 md:px-10 max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Germany</h2>

        <div className="space-y-4">

          <UniversityCard
            name="European Institute of Innovation, Entrepreneurship, and Technology (EIIET)"
            desc="City: Berlin"
            logo="/assets/EIIET.png"
            formLink="https://docs.google.com/forms/d/e/1FAIpQLSc8HMuqwMJpLGNJ6HjfUa1PkkLFr1kLfV3oQD6HNeffXp3zQA/viewform"
          />

          <UniversityCard
            name="SRH University of Applied Sciences"
            desc="City: Berlin, Leipzig, Heidelberg, Köln, Hamburg, Fürth, Munich, Dresden, Hamm, Stuttgart, Bremen, Gera"
            logo="/assets/SRH.png"
            formLink="https://docs.google.com/forms/d/e/1FAIpQLSc8HMuqwMJpLGNJ6HjfUa1PkkLFr1kLfV3oQD6HNeffXp3zQA/viewform"
          />

          <UniversityCard
            name="IU International University of Applied Sciences"
            desc="City: Köln, Berlin (not available in 2026)"
            logo="/assets/IU.svg"
            formLink="https://docs.google.com/forms/d/e/1FAIpQLSc8HMuqwMJpLGNJ6HjfUa1PkkLFr1kLfV3oQD6HNeffXp3zQA/viewform"
          />

          <UniversityCard
            name="HdWM: Hochschule der Wirtschaft für Management"
            desc="City: Mannheim"
            logo="/assets/HDWM.webp"
            formLink="https://docs.google.com/forms/d/e/1FAIpQLSc8HMuqwMJpLGNJ6HjfUa1PkkLFr1kLfV3oQD6HNeffXp3zQA/viewform"
          />

          <UniversityCard
            name="Gisma University of Europe of Applied Sciences"
            desc="City: Berlin, Potsdam"
            logo="/assets/Gisma.png"
            knowMoreLink="https://iapro.my.salesforce-sites.com/comarketing/CoMarketingCampaign?campaign=701Tf00000Tdv2O#getintouch-form-0"
            formLink="https://docs.google.com/forms/d/e/1FAIpQLSc8HMuqwMJpLGNJ6HjfUa1PkkLFr1kLfV3oQD6HNeffXp3zQA/viewform"
          />

          <UniversityCard
            name="Berlin School of Business and Innovation (BSBI)"
            desc="City: Berlin"
            logo="/assets/bsbi.svg"
            knowMoreLink="https://iapro.my.salesforce-sites.com/comarketing/CoMarketingCampaign?campaign=701Tf00000Tdv2P"
            formLink="https://docs.google.com/forms/d/e/1FAIpQLSc8HMuqwMJpLGNJ6HjfUa1PkkLFr1kLfV3oQD6HNeffXp3zQA/viewform"
          />

          <UniversityCard
            name="Constructor University"
            desc="City: Bremen"
            logo="/assets/cu.png"
            formLink="https://docs.google.com/forms/d/e/1FAIpQLSc8HMuqwMJpLGNJ6HjfUa1PkkLFr1kLfV3oQD6HNeffXp3zQA/viewform"
          />

          <UniversityCard
            name="University of Applied Sciences Europe"
            logo="/assets/IC-UE-Logo.png"
            formLink="https://docs.google.com/forms/d/e/1FAIpQLSc8HMuqwMJpLGNJ6HjfUa1PkkLFr1kLfV3oQD6HNeffXp3zQA/viewform"
          />

          <UniversityCard
            name="University of Europe for Applied Sciences(UE)"
            desc="City: Berlin, Hamburg, Iserlohn"
            logo="/assets/UE-DE.png"
            formLink="https://docs.google.com/forms/d/e/1FAIpQLSc8HMuqwMJpLGNJ6HjfUa1PkkLFr1kLfV3oQD6HNeffXp3zQA/viewform"
          />

        </div>
      </section>

      {/* AUSTRIA */}
      <section className="py-6 px-4 md:px-10 max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Austria</h2>

        <UniversityCard
          name="MODUL University Vienna"
          desc="Specialised in business, tourism, sustainability & innovation."
          logo="/assets/Modul.svg"
          formLink="https://forms.gle/eZF2CUXXsGYd5v9C8"
        />

      </section>

      <CountryCTA country="Austria and Germany" />

    </div>
  );
}
