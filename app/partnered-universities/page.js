"use client";

import Image from "next/image";

// UniversityCard now takes a logo and formLink prop
const UniversityCard = ({ name, desc, logo, formLink }) => (
  <div className="flex flex-col md:flex-row items-center justify-between gap-4 border rounded-md p-4">
    <div className="flex items-center gap-4">
      <div className="w-36 h-28 relative flex-shrink-0">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-contain"
        />
      </div>
      <div>
        <h3 className="font-semibold text-base md:text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>

    <a
      href={formLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white text-sm rounded-md whitespace-nowrap"
    >
      Apply Now
    </a>
  </div>
);

const CountryCTA = ({ country }) => (
  <section className="bg-blue-600 py-10 px-4 md:px-10 text-center text-white mt-10">
    <h2 className="text-2xl font-semibold mb-3">
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
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Our Partnered Universities
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We collaborate with selected universities in Germany and Austria to
          help students access quality education with clarity and confidence.
        </p>
      </section>

      {/* GERMANY */}
      <section className="py-6 px-4 md:px-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Germany</h2>

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
            name="IU University of Applied Sciences (IU)"
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
             <a class="link link-hover hover:text-blue-500" href="https://iapro.my.salesforce-sites.com/comarketing/CoMarketingCampaign?campaign=701Tf00000Tdv2O">Know more</a>
            logo="/assets/Gisma.png"
            formLink="https://docs.google.com/forms/d/e/1FAIpQLSc8HMuqwMJpLGNJ6HjfUa1PkkLFr1kLfV3oQD6HNeffXp3zQA/viewform"
          />
          <UniversityCard
            name="Berlin School of Business and Innovation"
            desc="City: Berlin"
            <a class="link link-hover hover:text-blue-500" href="https://iapro.my.salesforce-sites.com/comarketing/CoMarketingCampaign?campaign=701Tf00000Tdv2P">Know more</a>
            logo="/assets/bsbi.svg"
            formLink="https://docs.google.com/forms/d/e/1FAIpQLSc8HMuqwMJpLGNJ6HjfUa1PkkLFr1kLfV3oQD6HNeffXp3zQA/viewform"
          />
        </div>
      </section>

      {/* AUSTRIA */}
      <section className="py-6 px-4 md:px-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Austria</h2>

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
