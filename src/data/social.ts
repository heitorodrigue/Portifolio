import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export interface Social {
  name: string;
  url: string;
  icon: IconType;
}

export const socialLinks: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/heitorodrigue",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/heitorodriguesaraujo",
    icon: FaLinkedin,
  },
  {
    name: "E-mail",
    url: "mailto:heitorodrigues486@gmail.com",
    icon: MdEmail,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5527993115292",
    icon: FaWhatsapp,
  },
];