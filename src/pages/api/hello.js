import { AiFillLinkedin, AiFillMediumCircle, AiOutlineTwitter } from "react-icons/ai";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kamiy2j"

const homeSeo = {
  title: "Kamran Shahid",
  desc: "This website created for medium community to showcase medium articles"
}

const aboutSeo = {
  title: "About",
  desc: "About author"
}

const contactSeo = {
  title: "Contact",
  desc: "Contact with the author"
}

const myImg= "https://raw.githubusercontent.com/kamiy2j/kamranshahid/master/215869650_10226101211457877_6873600848903607678_n.jpg"


const navLogo = "Kamran Shahid"

const navInfo = [

  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: 'https://medium.com/@kamiy2j', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const navSocialIcons = [
  { href: 'https://kamiy2j.medium.com/', icon: <AiFillMediumCircle size={25} /> },
  { href: 'https://twitter.com/Em_Kamran', icon: <AiOutlineTwitter size={25} /> },
  { href: 'https://www.linkedin.com/in/kamranisonline/', icon: <AiFillLinkedin size={25} /> },
];

const phoneNavInfo = "Android Developer | AI Enthusiast" 

const socialprofils = {
  medium: "https://kamiy2j.medium.com/",
  twitter: "https://twitter.com/Em_Kamran",
  linkedin: "https://www.linkedin.com/in/kamranisonline/",
};

const header = {
  info: 'I’m Kamran Shahid',
  info_two: 'an experienced Android developer with a passion for creating exceptional mobile applications. With 6+ years of professional experience, I specialize in building robust and user-friendly Android apps that deliver seamless experiences to users.'
}




export {
  mediumURL,
  homeSeo,
  aboutSeo,
  contactSeo,
  myImg,
  navLogo,
  navInfo,
  navSocialIcons,
  phoneNavInfo,
  socialprofils,
  header
};
