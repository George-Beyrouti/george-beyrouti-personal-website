import profileImage from "../assets/george.png";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div
        id="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 py-1"
      >
        <div
          className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row 
          "
        >
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white px-3">
              I am a MERN full stack WEB Developer
            </h2>
            <p
              className="text-gray-500 py-4 max-w-md
              "
            >
              Hello, I am a highly motivated web developer with extensive
              project management experience and a strong understanding of
              responsive web design as well as layout principles to reﬁne user
              experience on. I have a masters studies in business
              administration, marketing management & research. currently Looking
              for a new challenge as Junior Web Developer.
            </p>

            <Link href="#portfolio">
              <div className="group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowRight size={20} className="ml-2 " />
                </span>
              </div>
            </Link>
          </div>
          <div>
            <Image
              src={profileImage}
              alt="my profile"
              priority={true}
              className="rounded-2xl mx-auto w-1/2 md:w-3/4 lg:w-full
              "
            />
          </div>
        </div>
      </div>

      <div
        id="about"
        className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pt-10"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-10">
          <div className="pb-6">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
              About Me
            </p>
          </div>
          <p className="text-xl mt-20">
            I am Business administration Bachelor graduate, with a Master
            studies in Marketing Management & Research, With further Training as
            a Full-Stack Web-Developer (MERN) From the Digital Career Institute,
            Living in Germany
          </p>

          <br />

          <p className="text-xl">
            Throughout my education, I have gained experience in developing
            full-stack applications, creating RESTful APIs, and integrating
            third-party APIs in my React Apps using ExpressJs., MongooDB, MySQL.
            I have also honed my skills in Git, Agile methodologies, and
            collaborative teamwork, which are essential in the fast-paced world
            of web development. with strong analytical and interpersonal skills,
            professionally proficient in 3 languages, German, English and
            Arabic. I am looking for an Junior Web-developer / Webentwickler job
            in the MERN Stack.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
