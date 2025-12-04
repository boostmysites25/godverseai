import React, { useState } from "react";
import {
  aiProjectsPortfolio,
  appDevelopmentPortfolio,
  blockchainProjectsPortfolio,
  chatbotProjectsPortfolio,
  ecommerceWebsitesPortfolio,
  gameDevelopmentPortfolio,
  webDevelopmentPortfolio,
  aiCallingPortfolio,
  saasPortfolio,
} from "../util/constant";

const Portfolio = () => {
  const [activePortfolio, setActivePortfolio] = useState("aiProject");

  const portfolioTypes = [
    { key: "aiProject", label: "AI Projects" },
    { key: "chatbot", label: "Chatbot & Automation" },
    { key: "aiCalling", label: "AI Calling Agency" },
    { key: "saas", label: "SaaS" },
    { key: "web", label: "Web Projects" },
    { key: "app", label: "Mobile Apps" },
    { key: "ecommerce", label: "Ecommerce" },
    { key: "blockchain", label: "Blockchain" },
    { key: "games", label: "Games" },
  ];

  const getCurrentPortfolio = () => {
    switch (activePortfolio) {
      case "web":
        return webDevelopmentPortfolio;
      case "app":
        return appDevelopmentPortfolio;
      case "blockchain":
        return blockchainProjectsPortfolio;
      case "ecommerce":
        return ecommerceWebsitesPortfolio;
      case "aiProject":
        return aiProjectsPortfolio;
      case "chatbot":
        return chatbotProjectsPortfolio;
      case "games":
        return gameDevelopmentPortfolio;
      case "aiCalling":
        return aiCallingPortfolio;
      case "saas":
        return saasPortfolio;
      default:
        return webDevelopmentPortfolio;
    }
  };

  return (
    <div className="">
      <div className="wrapper pt-[7rem] paddingbottom ">
        <h2 className="main-title text-center paddingbottom gradient-text">
          My Portfolio
        </h2>

        <div className="flex flex-wrap gap-3 justify-center mb-8 ">
          {portfolioTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setActivePortfolio(type.key)}
              className={`px-5 py-2 rounded-full transition-all duration-300 text-sm ${activePortfolio === type.key
                ? "bg-primary text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getCurrentPortfolio().map((project) => (
            <div
              key={project.id}
              className="bg-white  dark:bg-darkblack rounded-lg dark:hover:shadow-primary shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="small-heading dark:text-white mb-2">
                  {project.title}
                </h3>
                {project.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                )}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                  >
                    View Project →
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm">
                    Project Link Unavailable
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
