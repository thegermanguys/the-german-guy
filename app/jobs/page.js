import Link from "next/link";

export const metadata = {
  title: "Jobs | The German Guy",
  description: "TGG (The German Guy) UG is not hiring at the moment.",
};

export default function JobsPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200">
        Jobs
      </h1>

      <section className="mt-10 max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-10 text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          TGG (The German Guy) UG is not hiring at the moment. There are no
          open positions.
        </p>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          For questions about our services, email{" "}
          <a
            href="mailto:contact@thegermanguy.org"
            className="underline hover:text-blue-500"
          >
            contact@thegermanguy.org
          </a>
          .
        </p>
        <p className="mt-6">
          <Link
            href="/services"
            className="text-lg text-gray-700 dark:text-gray-300 underline hover:text-blue-500"
          >
            Our Services
          </Link>
        </p>
      </section>
    </main>
  );
}
