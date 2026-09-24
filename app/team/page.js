export const metadata = {
  title: "Team | The German Guy",
  description:
    "Awanish Srivastava is the founder of The German Guy, a Germany-focused education and consulting platform.",
};

export default function TeamPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200">
        Team
      </h1>

      <section className="mt-10 max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Awanish Srivastava — Founder & CEO
        </h2>
        <div className="mt-6 space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <p>
            Awanish Srivastava is the founder of The German Guy, a
            Germany-focused education and consulting platform helping
            international students navigate their journey to studying and
            building a future in Germany.
          </p>
          <p>
            Since founding The German Guy in 2022, Awanish has worked with
            students and international partners across different markets,
            combining his experience in education consulting, digital marketing,
            technology, and business operations to make the Germany journey more
            accessible and transparent.
          </p>
          <p>
            Beyond The German Guy, Awanish has built and worked on AI-assisted
            digital products, including Leadhaus, NepaConnect, and Advizlo,
            while gaining experience in delivery operations, cross-border
            partnerships, marketplace platforms, and fintech.
          </p>
          <p>
            Awanish holds a B.Tech and M.Tech in Computer Science from JNTUH
            College of Engineering, Hyderabad. He is also completing a Master of
            Digital Entrepreneurship, jointly pursued through Europa-Universität
            Viadrina in Frankfurt (Oder) and Adam Mickiewicz University in
            Poznań.
          </p>
          <p>
            At The German Guy, his focus is simple: help international students
            make informed decisions about studying in Germany and build a
            smoother path from application to arrival.
          </p>
        </div>
      </section>
    </main>
  );
}
