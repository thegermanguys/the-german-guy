import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About TGG | The German Guy",
  description:
    "TGG (The German Guy) UG supports students and working professionals who want to study or work in Germany, and offers IT and digital services.",
};

const consulting = [
  "Admission consulting, visa assistance, resume writing, interview preparation, and career coaching",
  "Information on scholarships, internships, au pair opportunities, Ausbildung programs, and job openings",
  "Guidance for study, Ausbildung, au pair, Chancenkarte, skilled professional, voluntary service, speciality cook, and family reunion visas, plus a personal guidance plan",
  "Language classes, cost estimation, grade conversion, and setup before and after arrival",
];

const itWork = [
  "Websites, apps, data insights, and blockchain projects",
  "Digital marketing and affiliate marketing",
  "Leadhaus, a CRM built for educational consultancies, and the grade conversion tool",
];

export default function AboutTggPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200">
        About TGG
      </h1>
      <p className="text-center text-lg mt-3 text-gray-500 dark:text-gray-300">
        You Decide, We Support
      </p>

      <section className="mt-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <Image
              src="/assets/team_illustration.svg"
              alt="Illustration for The German Guy"
              width={640}
              height={400}
            />
          </div>
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4 text-center md:text-left">
            <p>
              Starting your journey to Germany can feel daunting. At TGG (The
              German Guy) UG, we are here to make it easier for students and
              working professionals. From crafting resumes to navigating
              university and job applications, we support you through the
              process.
            </p>
            <p>
              Recognizing the challenges faced by international students and
              professionals, such as language barriers, visa complexities, and
              accommodation hurdles, we founded TGG (The German Guy) UG. Our
              mission is to ease the transition for those aspiring to study or
              work in Germany.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
          What we do
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-300 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Educational consulting
            </h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-600 dark:text-gray-400">
              {consulting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              <Link href="/services" className="hover:text-blue-500 hover:underline">
                Our Services
              </Link>
              {" · "}
              <Link
                href="https://whop.com/tgg-the-german-guy-ug/"
                className="hover:text-blue-500 hover:underline"
                target="_blank"
              >
                TGG Academy
              </Link>
            </p>
          </article>
          <article className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-300 dark:border-gray-600">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              IT and digital work
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We bring German IT expertise to clients, and we provide
              professional digital marketing and affiliate marketing.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-600 dark:text-gray-400">
              {itWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              <Link href="/it-services" className="hover:text-blue-500 hover:underline">
                IT-Services
              </Link>
            </p>
          </article>
        </div>
      </section>

      <section className="mt-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-10 text-lg text-gray-700 dark:text-gray-300 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          TGG (The German Guy) UG
        </h2>
        <p>Mühlenweg 34a</p>
        <p>15232 Frankfurt (Oder)</p>
        <p>Germany</p>
        <p className="mt-4">
          Email:{" "}
          <a
            href="mailto:contact@thegermanguy.org"
            className="underline hover:text-blue-500"
          >
            contact@thegermanguy.org
          </a>
        </p>
        <p className="mt-4">
          <Link href="/impressum" className="underline hover:text-blue-500">
            Impressum
          </Link>
        </p>
      </section>
    </main>
  );
}
