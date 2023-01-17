import Image from "next/legacy/image";
import website from "../../../public/website.png";
import code from "../../../public/code.png";
import thumb from "../../../public/consulting.png";

export default function Services() {
  return (
    <>
      <div>
        <h3 className="text-3xl py-4">Seriveces I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
          Since the begining of my journey as freelance front end dev. I've done
          remote work for <span className="text-teal-500">Yuk desain </span>
          consulted for <span className="text-teal-500">customer</span> and
          collaborated with talented people.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
          I offer from wide range of services, including programming and
          teaching
        </p>
      </div>

      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={website} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">Making Website</h3>
          <p className="py-2">
            Creating a website, with modern tech stack , beautiful design ui and
            ux and fast
          </p>
          <h4 className="py-4 text-teal-600">Website tools I use</h4>
          <p className="py-1">Visual Studio Code</p>
          <p className="py-1">Figma</p>
          <p className="py-1">Git</p>
          
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={code} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">Tech Stack</h3>
          <p className="py-2">
            There my tech stach list
          </p>
          <h4 className="py-4 text-teal-600">What I use ?</h4>
          <p className="py-1">HTML, CSS, JavaScript</p>
          <p className="py-1">React, Vue, Tailwind CSS</p>
          <p className="py-1">Laravel, NextJs, ExpressJs</p>
          
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1">
          <Image src={thumb} width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">Making Website</h3>
          <p className="py-2">
            Creating a website, with modern tech stack , beautiful design ui and
            ux and fast
          </p>
          <h4 className="py-4 text-teal-600">Website tools I use</h4>
          <p className="py-1">Visual Studio Code</p>
          <p className="py-1">Figma</p>
          <p className="py-1">Git</p>
        </div>
      </div>
    </>
  );
}
