import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Socials from './Socials'

export default function Header() {
    return(
        <header className="border-b border-gray-200 bg-white/80 flex">

            <h1 className="text-4xl p-3 pl-5 font-bold">Samuel Bležák</h1>

            <div className="text-3xl flex items-center gap-4 px-3">

                <Socials title="GitHub" link="https://github.com/SamuelBlezak" icon={FaGithub}></Socials>
                <Socials title="LinkedIn" link="https://www.linkedin.com/in/samuelblezak" icon={FaLinkedin}></Socials>
                <Socials title="Email" link="mailto:samuelblezak@gmail.com" icon={FaEnvelope}></Socials>
            
            </div>
            
        </header>
    )
}