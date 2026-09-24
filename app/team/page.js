export const metadata = {
  title: "Team | The German Guy",
  description: "Awanish Srivastava is the founder and CEO of TGG (The German Guy) UG.",
};

export default function TeamPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200">
        Team
      </h1>

      <section className="mt-10 max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Awanish Srivastava
        </h2>
        <p className="mt-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
          Founder and CEO of TGG (The German Guy) UG
        </p>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          Awanish Srivastava has been the founder of The German Guy since 2022,
          providing study-in-Germany consulting and digital marketing for
          international clients and building AI-assisted web products such as
          Leadhaus, NepaConnect, and Advizlo. His work has included delivery
          operations, cross-border partner management, and process ownership on
          marketplace and fintech platforms. He holds a B.Tech and M.Tech in
          Computer Science from JNTUH College of Engineering, Hyderabad, and is
          completing a Master of Digital Entrepreneurship at Europa-Universität
          Viadrina in Frankfurt (Oder) and Adam Mickiewicz University in Poznań.
        </p>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          <a
            href="https://www.linkedin.com/in/imawanish5/"
            className="underline hover:text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </main>
  );
}
