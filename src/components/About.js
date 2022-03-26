import React from "react";

const About = () => {
  const sections = [
    {
      name: "What is deezOS?",
      content:
        "deezOS is a Linux distro based on whatever I can get my hands on. I'm kinda stupid, so it only works in a VM for now. Currently, it is based on Fedora silverblue, with plans to re-base to elementaryOS 6.1 Jonir ",
    },
    {
      name: "Custom Features ",
      content:
        "Extreme stabilty the same way debian works, I just don't update it. You get fedora silverblue updates from the repo, but dont expect any features to be updated.  The only feature that is not stock Fedora Silverblue is the wallpaper, and that is literally it. ",
    },
  ];

  return (
    <div className="flex flex-col items-start">
      <div className="flex flex-col container space-y-6">
        {sections.map((item) => {
          return (
            <div className=" w-full flex flex-col items-start space-y-4  text-black rounded-xl px-4 py-8 hover:shadow-xl">
              <h1 className="text-4xl">{item.name}</h1>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;