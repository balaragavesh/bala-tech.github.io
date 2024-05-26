import React from "react";

export default function Services({ servicesref,handleContact }) {
  const serviceData = [
    {
      title: "Chip level service",
      description:
        "Chip level service involves the meticulous process of diagnosing and repairing problems directly on the motherboard of your laptop. Instead of replacing entire boards or components, we identify and fix faults within the integrated circuits (ICs) and chips, offering a more precise and cost-effective solution.",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "/chip.jpg",
    },
    {
      title: "Repair services",
      description:
        " Our comprehensive repair services encompass resolving intricate hardware issues, including screen replacements, keyboard repairs, battery replacements, and intricate motherboard fixes, coupled with software troubleshooting. We prioritize rapid diagnostics and efficient solutions to restore your laptop's functionality promptly, ensuring minimal downtime and seamless user experience.",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "/repair.jpg",
    },
    {
      title: "Upgrades for system",
      description:
        "Elevate your laptop's performance and capabilities with our tailored hardware upgrades. Whether it's expanding RAM for smoother multitasking, augmenting storage capacities for increased data retention, or enhancing processor power for faster computations.",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "/upgrades.jpg",
    },
    {
      title: "Virus removal",
      description:
        " Our meticulous virus removal service employs cutting-edge tools and expertise to eradicate viruses, malware, spyware, and other malicious threats from your laptop. We conduct in-depth scans, remove detected threats, and fortify your system's security measures, ensuring a secure computing environment free from potential hazards, safeguarding your sensitive data and privacy",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "/virus.jpg",
    },
    {
      title: "Data recovery",
      description:
        "In instances of data loss due to accidental deletion, system crashes, or hard drive failures, our data recovery service employs advanced techniques to retrieve lost files, documents, photos, and crucial information. We navigate through damaged storage media, employing specialized recovery methods to restore your valuable data, minimizing the impact of unforeseen data loss scenarios",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "/datarecovery.jpg",
    },
    {
      title: "OS Installation",
      description:
        "We expertly install and set up your computer's operating system, like Windows, ensuring it's correctly configured and ready to use. Our seamless installation process guarantees a smooth transition and optimal functionality, tailored to your specific needs, providing a user-friendly and efficient computing experience",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "/operating_system.jpg",
    },
    {
      title: "Preventative maintenance",
      description:
        " we provide preventative maintenance services to enhance your laptop’s performance and extend its lifespan. This includes cleaning internal components to remove dust and debris, applying fresh thermal paste to improve heat dissipation, and performing system tune-ups to optimize software and hardware settings.",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "/maintain.jpg",
    },
  ];
  console.log(serviceData);

  return (
    <div
      ref={servicesref}
      className="w-full py-28 min-h-screen bg-white text-black justify-center items-center lg:px-40"
    >
      <h1 className="multicolor-text font-Montserrat text-3xl md:text-5xl font-bold text-center">
        Our Services
      </h1>
      <div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
          {serviceData.map((item, index) => (
            <div
              key={index}
              className="font-Montserrat  bg-zinc-100 p-5 rounded text-black-100 font-bold"
            >
              <img
                src={item.imgurl}
                alt="Image Description"
                className="w-full md:w-full h-48  justify-center"
              />
              <h4 className=" text-2xl py-3">{item.title}</h4>
              <p className="text-gray-40 font-medium justify-paragraphy">{item.description}</p>

              {/*
            <ul className="list-disc px-10">
              {item.feature.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
              */}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          onClick={handleContact}
          className="font-Poppins bg-blue-500 px-6 py-4 rounded text-white"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
