import React from "react";

export default function Services({servicesref}) {
  const serviceData = [
    {
      title: "Repair Services",
      description: " Our comprehensive repair services encompass resolving intricate hardware issues, including screen replacements, keyboard repairs, battery replacements, and intricate motherboard fixes, coupled with software troubleshooting. We prioritize rapid diagnostics and efficient solutions to restore your laptop's functionality promptly, ensuring minimal downtime and seamless user experience.",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "src/assets/repair.jpg"
    },
    {
      title: "Upgrades for system",
      description: "Elevate your laptop's performance and capabilities with our tailored hardware upgrades. Whether it's expanding RAM for smoother multitasking, augmenting storage capacities for increased data retention, or enhancing processor power for faster computations, our upgrade solutions are customized to meet evolving user demands, ensuring optimal device performance for varied computing needs",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "src/assets/upgrades.jpg"
    },
    {
      title: "Virus Removal",
      description: " Our meticulous virus removal service employs cutting-edge tools and expertise to eradicate viruses, malware, spyware, and other malicious threats from your laptop. We conduct in-depth scans, remove detected threats, and fortify your system's security measures, ensuring a secure computing environment free from potential hazards, safeguarding your sensitive data and privacy",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "src/assets/virus.jpg"
    },
    {
      title: "Data Recovery",
      description: "In instances of data loss due to accidental deletion, system crashes, or hard drive failures, our data recovery service employs advanced techniques to retrieve lost files, documents, photos, and crucial information. We navigate through damaged storage media, employing specialized recovery methods to restore your valuable data, minimizing the impact of unforeseen data loss scenarios",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "src/assets/datarecovery.jpg"
    },
    {
      title: "OS Installation",
      description: "We expertly install and set up your computer's operating system, like Windows, ensuring it's correctly configured and ready to use. Our seamless installation process guarantees a smooth transition and optimal functionality, tailored to your specific needs, providing a user-friendly and efficient computing experience",
      feature: ["feature 1", "feature 2", "feature 3"],
      imgurl: "src/assets/operating_system.jpg"
    }
  ];
  console.log(serviceData);

  return (
    <div ref={servicesref} className="w-full py-28 min-h-screen bg-white text-black justify-center items-center p-15">
      <h1 className="multicolor-text font-Montserrat text-5xl md:text-5xl font-bold text-center">
        Our Services
      </h1>
      <div>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 md:mx-20 my-20 ">
        {serviceData.map((item, index) => (
          <div key={index} className="font-Montserrat  bg-zinc-200 p-5 rounded text-black-100 font-bold">
            <img src={item.imgurl} alt="Image Description" className="w-full md:w-full h-48  justify-center" />
            <h4 className=" text-2xl py-3">{item.title}</h4>
            <p className="text-gray-40 font-medium">{item.description}</p>

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
        <a href="#" className="font-Poppins bg-blue-500 px-6 py-4 rounded text-white">
            Contact Us
        </a>
      </div>
    </div>
  );
}
