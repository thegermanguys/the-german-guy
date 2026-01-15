"use client";

const UniversityIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    className="text-blue-600"
  >
    <path
      d="M3 10L12 4L21 10L12 16L3 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M5 12V18H19V12"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const UniversityCard = ({ name, desc }) => (
  <div className="flex items-center justify-between gap-4 border rounded-md p-4">
    <div className="flex items-center gap-4">
      <UniversityIcon />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>

    <a
      href="https://forms.gle/eZF2CUXXsGYd5v9C8"
      className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md whitespace-nowrap"
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
            name="European Institute of Innovation, Entrepreneurship, and Technology(EIIET)"
            desc="City: Berlin"
          />
          <UniversityCard
            name="SRH University of Applied Sciences"
            desc="City: Berlin, Leipzig, Heidelberg, Köln, Hamburg, Fürth, Munich, Dresden, Hamm, Stuttgart, Bremen, Gera"
          />
          <UniversityCard
            name="IU University of Applied Sciences (IU)"
            desc="City: Köln, Berlin(not available in 2026)"
          />
        </div>
      </section>



      {/* AUSTRIA */}
      <section className="py-6 px-4 md:px-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Austria</h2>

        <UniversityCard
          name="MODUL University Vienna"
          desc="Specialised in business, tourism, sustainability & innovation."
        />
      </section>

      <CountryCTA country="Austria and Germany" />
    </div>
  );
}
