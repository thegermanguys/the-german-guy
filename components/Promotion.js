import React from "react";
import { Button } from "./ui/button";

const announcements = [
  {
    title: "Open Your Expatrio Blocked Account",
    description: "The all-in-one visa package for internationals coming to Germany",
    actionText: "View",
    link: null,
  },
  {
    title: "Get your BARMER Health Insurance",
    description: "German Public Health Insurance",
    actionText: "Apply Now",
    link: "https://feather-insurance.com/en/public-health-insurance/barmer?utm_source=hoc9lz2rfjmgtdp5",
  },
  {
    title: "New German University Guidelines",
    description: "Updated guidelines for applications to German universities",
    actionText: "Learn More",
    link: null,
  },
  {
    title: "Free Resume Review for New Students",
    description: "Book a session to get your resume reviewed for free",
    actionText: "Claim Offer",
    link: null,
  },
];

const Promotion = () => {
  return (
    <section className="container mx-auto px-4 py-10 mt-6 mb-10 rounded-lg shadow-md bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">
        Latest Announcements & Offers
      </h2>

      <p className="text-center mb-8 text-gray-700 dark:text-gray-300 text-lg">
        Stay updated with the latest promotions and important announcements.
      </p>

      {/* Table wrapper for responsiveness */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="text-left px-6 py-4">Announcement</th>
              <th className="text-left px-6 py-4">Details</th>
              <th className="text-center px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {announcements.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </td>

                <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                  {item.description}
                </td>

                <td className="px-6 py-4 text-center">
                  {item.link ? (
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.actionText}
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline">{item.actionText}</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Promotion;
