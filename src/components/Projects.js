import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import ndepo from "../asset/ndepo.jpeg";

function Projects() {
    return (
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <CodeIcon className="mx-auto inline-block w-10 mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Shoots from Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              These are some of my past works that I make them with various company for different vission and prospectus. I am good at what I do and I am honest with what I know and that is what gives me confidence to make you my next Client.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
              <a
                href="afrodemoz.one"
                key="tembo"
                className="sm:w-1/2 w-100 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={ndepo}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    Cross Up View
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                    Mikumi National Park
                    </h1>
                    <p className="leading-relaxed">I love nature also doing Wildlife Photography</p>
                  </div>
                </div>
              </a>
          </div>
        </div>
      </section>
    );
  }

  export default Projects;