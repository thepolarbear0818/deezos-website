import React from "react";

const Contact = () => {
  const sections = [
    {
      name: "Why?",
      content:
        "I just thought it would be funny, since someone brought up to me that there was a sexOS distro, so I made deezOS to prove the power of linux. In case you have not realised, its a deez nuts joke",
    },
    {
      name: "Download",
      content:
        "https://drive.google.com/drive/folders/10SuGnS-XQ0I7T9usdmvoxaKKNOApOUne?usp=sharing",

      name: "Instructions",
      content:"Click on this drive link https://drive.google.com/drive/folders/10SuGnS-XQ0I7T9usdmvoxaKKNOApOUne?usp=sharing. you will need vmware to use it. I have no idea if it works,since i dont have another computer.  so just click on random files untill something loads up. ",
    },
  ];

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col container space-y-6">
        {sections.map((item) => {
          return (
            <div className="  flex flex-col items-start space-y-4  text-black rounded-xl px-4 py-8  hover:shadow-xl">
              <h1 className="text-4xl">{item.name}</h1>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;