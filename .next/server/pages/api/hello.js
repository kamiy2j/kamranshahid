"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 2783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aboutSeo": () => (/* binding */ aboutSeo),
  "contactSeo": () => (/* binding */ contactSeo),
  "header": () => (/* binding */ header),
  "homeSeo": () => (/* binding */ homeSeo),
  "mediumURL": () => (/* binding */ mediumURL),
  "myImg": () => (/* binding */ myImg),
  "navInfo": () => (/* binding */ navInfo),
  "navLogo": () => (/* binding */ navLogo),
  "navSocialIcons": () => (/* binding */ navSocialIcons),
  "phoneNavInfo": () => (/* binding */ phoneNavInfo),
  "socialprofils": () => (/* binding */ socialprofils)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: ./src/pages/api/hello.js


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kamiy2j";
const homeSeo = {
    title: "Kamran Shahid",
    desc: "This website created for medium community to showcase medium articles"
};
const aboutSeo = {
    title: "About",
    desc: "About author"
};
const contactSeo = {
    title: "Contact",
    desc: "Contact with the author"
};
const myImg = "https://raw.githubusercontent.com/kamiy2j/kamranshahid/master/215869650_10226101211457877_6873600848903607678_n.jpg";
const navLogo = "Kamran Shahid";
const navInfo = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "https://medium.com/@kamiy2j",
        label: "Blog"
    },
    {
        href: "/contact",
        label: "Contact"
    }
];
const navSocialIcons = [
    {
        href: "https://kamiy2j.medium.com/",
        icon: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ai_namespaceObject.AiFillMediumCircle, {
            size: 25
        })
    },
    {
        href: "https://twitter.com/Em_Kamran",
        icon: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ai_namespaceObject.AiOutlineTwitter, {
            size: 25
        })
    },
    {
        href: "https://www.linkedin.com/in/kamranisonline/",
        icon: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(ai_namespaceObject.AiFillLinkedin, {
            size: 25
        })
    }
];
const phoneNavInfo = "Android Developer | AI Enthusiast";
const socialprofils = {
    medium: "https://kamiy2j.medium.com/",
    twitter: "https://twitter.com/Em_Kamran",
    linkedin: "https://www.linkedin.com/in/kamranisonline/"
};
const header = {
    info: "I’m Kamran Shahid",
    info_two: "an experienced Android developer with a passion for creating exceptional mobile applications. With 6+ years of professional experience, I specialize in building robust and user-friendly Android apps that deliver seamless experiences to users."
};



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2783));
module.exports = __webpack_exports__;

})();