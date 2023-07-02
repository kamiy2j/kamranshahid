"use strict";
exports.id = 188;
exports.ids = [188];
exports.modules = {

/***/ 3188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/footer.js


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 p-6",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "text-sm text-gray-700 sm:text-center dark:text-gray-700",
                children: [
                    "\xa9 2023 created with ❤ by",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "https://www.linkedin.com/in/kamranisonline/",
                        className: "hover:underline",
                        children: [
                            " ",
                            " Kamran Shahid"
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./src/pages/api/hello.js
var hello = __webpack_require__(2789);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/components/navbar.js





const Navbar = ()=>{
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const handleToggle = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "bg-white px-2 sm:px-4 py-2.5",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-start",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "py-1 px-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-xl italic font-bold whitespace-nowrap",
                                    children: hello/* navLogo */.W9
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block flex ml-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex",
                            children: hello/* navInfo.map */.EU.map(({ href , label  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: href,
                                    className: "py-1 px-3 font-semibold text-sky-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 hover:text-blue-700",
                                    children: label
                                }, label))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:block flex ml-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex",
                            children: hello/* navSocialIcons.map */.fG.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: link.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "py-1 px-3 text-sky-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 hover:text-blue-700",
                                    children: link.icon
                                }, index))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "flex items-center justify-center w-8 h-8 text-gray-600 rounded-md hover:text-gray-900 focus:outline-none focus:text-gray-900 md:hidden",
                            onClick: handleToggle,
                            children: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTimes, {}) : /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaBars, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${isOpen ? "flex" : "hidden"} fixed top-0 left-0 w-full h-full bg-gray-100`,
                id: "navbar-default",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full md:w-1/2 bg-white",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between px-4 py-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: "py-1 px-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-xl italic font-bold whitespace-nowrap",
                                            children: hello/* navLogo */.W9
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "md:hidden",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: handleToggle,
                                        className: "text-gray-600 focus:outline-none",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaTimes, {})
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "py-8 px-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: hello/* myImg */.zh,
                                        className: "rounded-full w-20 h-20"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-4",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-gray-700 font-medium",
                                        children: hello/* phoneNavInfo */.b4
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "divide-y",
                                    children: hello/* navInfo.map */.EU.map(({ href , label  })=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: href,
                                            className: "block py-3 text-sky-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0",
                                            children: label
                                        }, label))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: hello/* navSocialIcons.map */.fG.map((link, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: link.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "block py-3 text-sky-700 rounded hover:text-blue-700 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0",
                                            children: link.icon
                                        }, index))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./src/layout/layout.js



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const layout = (Layout);


/***/ }),

/***/ 2789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EU": () => (/* binding */ navInfo),
/* harmony export */   "Fs": () => (/* binding */ header),
/* harmony export */   "Nh": () => (/* binding */ socialprofils),
/* harmony export */   "W9": () => (/* binding */ navLogo),
/* harmony export */   "Xg": () => (/* binding */ aboutSeo),
/* harmony export */   "b4": () => (/* binding */ phoneNavInfo),
/* harmony export */   "fG": () => (/* binding */ navSocialIcons),
/* harmony export */   "g1": () => (/* binding */ contactSeo),
/* harmony export */   "j3": () => (/* binding */ homeSeo),
/* harmony export */   "oh": () => (/* binding */ mediumURL),
/* harmony export */   "zh": () => (/* binding */ myImg)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);


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
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillMediumCircle, {
            size: 25
        })
    },
    {
        href: "https://twitter.com/Em_Kamran",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiOutlineTwitter, {
            size: 25
        })
    },
    {
        href: "https://www.linkedin.com/in/kamranisonline/",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillLinkedin, {
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