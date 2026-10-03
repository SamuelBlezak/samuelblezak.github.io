import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { t } from '../data/translations'

import Socials from './Socials'

export default function Header(prop) {
    return(
        <footer className="w-full border-t border-gray-200 py-8 mt-10">

            <div className="max-w-4xl mx-auto px-6 md:px-12">

                <div className="flex items-center gap-4 text-2xl text-black mb-3">
                    <Socials title="GitHub" link="https://github.com/SamuelBlezak" icon={FaGithub}></Socials>
                    <Socials title="LinkedIn" link="https://www.linkedin.com/in/samuelblezak" icon={FaLinkedin}></Socials>
                    <Socials title="Email" link="mailto:samuelblezak@gmail.com" icon={FaEnvelope}></Socials>
                </div>

                 <p className="text-sm text-gray-500 ">
                    © {new Date().getFullYear()} Samuel Bležák. {t[prop.lang].footer}
                </p>
            </div>
            
        </footer>
    )
}