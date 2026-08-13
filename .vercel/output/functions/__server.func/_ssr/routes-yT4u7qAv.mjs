import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { a as Rocket, c as Linkedin, d as Github, f as FlaskConical, h as ArrowDownToLine, i as Search, l as Lightbulb, m as ArrowUpRight, n as Target, o as Menu, p as Download, r as Sparkles, s as Mail, t as X, u as Layers } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-yT4u7qAv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function Cursor() {
	const dot = (0, import_react.useRef)(null);
	const ring = (0, import_react.useRef)(null);
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
		setEnabled(true);
		document.body.classList.add("custom-cursor");
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		let rx = x;
		let ry = y;
		let raf = 0;
		const move = (e) => {
			x = e.clientX;
			y = e.clientY;
			if (dot.current) dot.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
			const interactive = !!e.target?.closest("a, button, input, textarea, [data-cursor]");
			if (ring.current) ring.current.dataset["active"] = interactive ? "true" : "false";
		};
		const loop = () => {
			rx += (x - rx) * .16;
			ry += (y - ry) * .16;
			if (ring.current) ring.current.style.transform = `translate3d(${rx - 22}px, ${ry - 22}px, 0)`;
			raf = requestAnimationFrame(loop);
		};
		window.addEventListener("mousemove", move);
		raf = requestAnimationFrame(loop);
		return () => {
			window.removeEventListener("mousemove", move);
			cancelAnimationFrame(raf);
			document.body.classList.remove("custom-cursor");
		};
	}, []);
	if (!enabled) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-[100] hidden md:block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: dot,
			className: "absolute left-0 top-0 h-2 w-2 rounded-full bg-primary"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: ring,
			"data-active": "false",
			className: "absolute left-0 top-0 h-11 w-11 rounded-full border border-primary/40 bg-cream/20 backdrop-blur-[1px] transition-[width,height,opacity,border-color] duration-200 data-[active=true]:border-primary/70 data-[active=true]:bg-primary/10"
		})]
	});
}
var links = [
	{
		label: "ABOUT",
		href: "#about"
	},
	{
		label: "SKILLS",
		href: "#skills"
	},
	{
		label: "PROJECTS",
		href: "#projects"
	},
	{
		label: "PROCESS",
		href: "#process"
	},
	{
		label: "EDUCATION",
		href: "#education"
	},
	{
		label: "CONTACT",
		href: "#contact"
	}
];
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-cream-light/70 backdrop-blur-xl border-b border-border/70" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "font-serif text-lg tracking-[0.22em] text-foreground md:text-xl",
					children: ["CHANIKYA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-primary",
						children: "VELIVELA"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-8 lg:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "font-mono text-[11px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary",
						children: l.label
					}) }, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "hidden rounded-full bg-primary px-5 py-2.5 font-mono text-[11px] tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5 sm:inline-block",
						children: "HIRE ME"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						onClick: () => setOpen((v) => !v),
						className: "rounded-full border border-primary/30 p-2 text-primary lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-cream-light/95 backdrop-blur-xl lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto flex max-w-7xl flex-col px-5 py-3",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "block py-3 font-mono text-xs tracking-[0.18em] text-foreground",
					children: l.label
				}) }, l.href))
			})
		})]
	});
}
var chanikya_anime_default = "/assets/chanikya-anime-BZ00TPca.png";
var floats = [
	{
		label: "WIREFRAME",
		top: "8%",
		left: "-4%",
		delay: 0
	},
	{
		label: "DESIGN SYSTEM",
		top: "36%",
		left: "-10%",
		delay: .6
	},
	{
		label: "USER FLOW",
		top: "66%",
		left: "2%",
		delay: 1.2
	},
	{
		label: "PROTOTYPE",
		top: "18%",
		right: "-6%",
		delay: .3
	},
	{
		label: "#8B2635",
		top: "58%",
		right: "-8%",
		delay: .9
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "mesh-cream grain relative overflow-hidden pt-28 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-gold/25 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 26
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-primary/25 bg-cream-light/70 px-4 py-2 font-mono text-[10px] tracking-[0.22em] text-primary backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 12 }), " UI/UX DESIGNER • PRODUCT DESIGNER"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-7 font-serif leading-[0.86] text-glow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[clamp(3rem,9vw,7.5rem)] font-light tracking-tight text-foreground",
								children: "CHANIKYA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-[clamp(3rem,9.6vw,8rem)] font-light italic text-primary",
								children: "Velivela"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-xl font-serif text-2xl leading-snug text-foreground/80 md:text-3xl",
							children: ["Designing digital experiences ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic text-primary",
								children: "that people love"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "I design intuitive, user-centered digital products that combine creativity, strategy, and technology."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#projects",
									className: "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-[11px] tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5",
									children: ["VIEW PROJECTS", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
										size: 14,
										className: "transition-transform group-hover:translate-x-0.5"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/resume.pdf",
									download: true,
									className: "inline-flex items-center gap-2 rounded-full border border-primary/35 bg-cream-light/60 px-7 py-3.5 font-mono text-[11px] tracking-[0.18em] text-primary backdrop-blur transition-colors hover:bg-primary/8",
									children: ["DOWNLOAD RESUME ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownToLine, { size: 14 })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#contact",
									className: "inline-flex items-center gap-2 rounded-full border border-foreground/15 px-7 py-3.5 font-mono text-[11px] tracking-[0.18em] text-foreground transition-colors hover:border-primary/40 hover:text-primary",
									children: "LET'S CONNECT"
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .94
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: 1,
						ease: [
							.22,
							1,
							.36,
							1
						],
						delay: .15
					},
					className: "relative mx-auto w-full max-w-md lg:max-w-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-6 bottom-6 top-10 rounded-[3rem] bg-gradient-to-b from-beige/70 to-cream-light/40 blur-xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: chanikya_anime_default,
							width: 1024,
							height: 1280,
							alt: "Anime-style illustration of Chanikya Velivela, UI/UX and product designer",
							className: "relative z-10 mx-auto w-full drop-shadow-[0_30px_60px_rgba(139,38,53,0.25)]"
						}),
						floats.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "glass-panel absolute z-20 hidden rounded-xl px-3 py-2 font-mono text-[9px] tracking-[0.16em] text-primary shadow-[var(--shadow-soft)] md:block",
							style: {
								top: f.top,
								left: f.left,
								right: f.right
							},
							animate: { y: [
								0,
								-14,
								0
							] },
							transition: {
								duration: 7 + i,
								repeat: Infinity,
								ease: "easeInOut",
								delay: f.delay
							},
							children: f.label
						}, f.label))
					]
				})]
			})
		]
	});
}
var stats = [
	{
		k: "3+",
		v: "LIVE PRODUCTS"
	},
	{
		k: "8.0",
		v: "CURRENT CGPA"
	},
	{
		k: "100%",
		v: "USER-CENTERED"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "relative overflow-hidden bg-cream-light py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-beige blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-5 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: { duration: .7 },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.25em] text-primary",
							children: "01 — INTRODUCTION"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[0.95]",
							children: ["ABOUT ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "me"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-3 gap-4",
							children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-3xl text-primary",
									children: s.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-mono text-[9px] tracking-[0.14em] text-muted-foreground",
									children: s.v
								})]
							}, s.v))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					transition: {
						duration: .7,
						delay: .12
					},
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass-panel float-slow absolute -left-6 -top-8 hidden rounded-xl px-3 py-2 font-mono text-[9px] tracking-[0.16em] text-primary md:block",
							children: "EMPATHY → INSIGHT → DESIGN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-serif text-2xl leading-relaxed text-foreground/90 md:text-[2rem] md:leading-[1.35]",
							children: [
								"I am a passionate UI/UX Designer focused on creating",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic text-primary",
									children: "intuitive and engaging"
								}),
								" digital experiences."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "My approach combines user-centered design, creativity, and technology to deliver impactful products — from research and wireframes to polished, production-ready interfaces."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-3 sm:grid-cols-2",
							children: [
								"Research-led product thinking",
								"Systems over one-off screens",
								"Motion as a usability tool",
								"Craft in every pixel"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground/80",
								children: t
							}, t))
						})
					]
				})]
			})
		})]
	});
}
var skills = [
	"UI/UX Design",
	"User Research",
	"Wireframing",
	"Prototyping",
	"Design Systems",
	"Interaction Design",
	"Responsive Design"
];
var tools = [
	"Figma",
	"Adobe XD",
	"Photoshop"
];
function TiltCard({ title, index }) {
	const ref = (0, import_react.useRef)(null);
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - .5;
		const py = (e.clientY - r.top) / r.height - .5;
		el.style.transform = `perspective(800px) rotateX(${-py * 10}deg) rotateY(${px * 12}deg) translateY(-6px)`;
	};
	const reset = () => {
		if (ref.current) ref.current.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: { once: true },
		transition: {
			duration: .5,
			delay: index * .06
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			onMouseMove: onMove,
			onMouseLeave: reset,
			className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 will-change-transform hover:shadow-[var(--shadow-elegant)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] tracking-[0.2em] text-primary/70",
					children: String(index + 1).padStart(2, "0")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-serif text-2xl text-foreground",
					children: title
				})
			]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "mesh-cream relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.25em] text-primary",
					children: "02 — CAPABILITIES"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 max-w-2xl font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[0.95]",
					children: ["SKILLS & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-primary",
						children: "craft"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: skills.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						title: s,
						index: i
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.25em] text-muted-foreground",
						children: "TOOLS"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex flex-wrap gap-3",
						children: tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-primary/25 bg-cream-light/70 px-6 py-3 font-mono text-[11px] tracking-[0.16em] text-primary backdrop-blur transition-transform hover:-translate-y-1",
							children: t.toUpperCase()
						}, t))
					})]
				})
			]
		})
	});
}
var projects = [
	{
		no: "01",
		title: "FLAVORFUL FEAST 3D",
		category: "3D Restaurant Experience",
		desc: "An immersive restaurant experience where 3D plating, motion and menu storytelling turn browsing into appetite. Built around a clear ordering path and appetising visual hierarchy.",
		url: "https://flavorfulfeast3d.netlify.app/",
		img: "/assets/project-flavorful-B2WKDLtb.jpg"
	},
	{
		no: "02",
		title: "AURUM JEWELS",
		category: "Luxury Jewelry Experience",
		desc: "A luxury jewellery storefront with editorial pacing, generous whitespace and product-first composition — designed to make each piece feel like a gallery object.",
		url: "https://aurumjewels.netlify.app/",
		img: "/assets/project-aurum-BJgR4y31.jpg"
	},
	{
		no: "03",
		title: "CAFE AA",
		category: "Cafe & Food Experience",
		desc: "A warm, tactile cafe brand experience: menu discovery, reservations and story sections tied together with a cohesive type and colour system.",
		url: "https://cafeaa.netlify.app/",
		img: "/assets/project-cafeaa-C1T1dgwu.jpg"
	}
];
function Case({ p, i }) {
	const ref = (0, import_react.useRef)(null);
	const flip = i % 2 === 1;
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width - .5;
		const py = (e.clientY - r.top) / r.height - .5;
		el.style.transform = `perspective(1100px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg)`;
	};
	const reset = () => {
		if (ref.current) ref.current.style.transform = "perspective(1100px) rotateX(0) rotateY(0)";
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 50
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-100px"
		},
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: `grid items-center gap-10 lg:grid-cols-2 ${flip ? "lg:[direction:rtl]" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			onMouseMove: onMove,
			onMouseLeave: reset,
			className: "group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 will-change-transform hover:shadow-[var(--shadow-elegant)] lg:[direction:ltr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: p.img,
				alt: `${p.title} — ${p.category} interface design`,
				width: 1280,
				height: 960,
				loading: "lazy",
				className: "h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "glass-panel absolute left-5 top-5 rounded-full px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] text-primary",
				children: ["PROJECT ", p.no]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:[direction:ltr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.22em] text-primary",
					children: p.category.toUpperCase()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-serif text-[clamp(2rem,4.6vw,3.6rem)] font-light leading-[1] text-foreground",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base",
					children: p.desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: p.url,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "group/btn mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-mono text-[11px] tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5",
					children: ["LIVE PROJECT", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						size: 14,
						className: "transition-transform group-hover/btn:translate-x-0.5"
					})]
				})
			]
		})]
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative bg-cream-light py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.25em] text-primary",
					children: "03 — SELECTED WORK"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 max-w-3xl font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[0.95]",
					children: ["FEATURED ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-primary",
						children: "projects"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 space-y-24 md:space-y-32",
					children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Case, {
						p,
						i
					}, p.no))
				})
			]
		})
	});
}
var steps = [
	{
		no: "01",
		title: "DISCOVER",
		icon: Search,
		desc: "Research users, business goals and competitive context."
	},
	{
		no: "02",
		title: "DEFINE",
		icon: Target,
		desc: "Frame the real problem, success metrics and constraints."
	},
	{
		no: "03",
		title: "IDEATE",
		icon: Lightbulb,
		desc: "Explore flows, sketches and bold concept directions."
	},
	{
		no: "04",
		title: "PROTOTYPE",
		icon: Layers,
		desc: "Build interactive prototypes and design system pieces."
	},
	{
		no: "05",
		title: "TEST",
		icon: FlaskConical,
		desc: "Validate with users, iterate on friction and clarity."
	},
	{
		no: "06",
		title: "DELIVER",
		icon: Rocket,
		desc: "Ship polished, documented, developer-ready design."
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "mesh-cream grain relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.25em] text-primary",
					children: "04 — HOW I WORK"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[0.95]",
					children: ["DESIGN ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-primary",
						children: "process"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 28
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .55,
							delay: i * .07
						},
						className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-transform duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] tracking-[0.2em] text-primary/70",
									children: s.no
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
									size: 20,
									className: "text-primary"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-serif text-3xl font-light text-foreground",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: s.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" })
						]
					}, s.no))
				})
			]
		})
	});
}
var timeline = [
	{
		degree: "B.Tech — Computer Science & Engineering",
		school: "NRI Institute Of Technology College",
		years: "2024 – 2027",
		score: "CGPA: 8.0"
	},
	{
		degree: "Diploma",
		school: "VKR VNB & AGK College of Engineering Polytechnic College",
		years: "2021 – 2023",
		score: "GPA: 70"
	},
	{
		degree: "SSC",
		school: "Ushodaya English Medium High School",
		years: "2021",
		score: "GPA: 8.8"
	}
];
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "education",
		className: "relative bg-cream-light py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.25em] text-primary",
					children: "05 — BACKGROUND"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-serif text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[0.95]",
					children: ["EDUCA", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-primary",
						children: "tion"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-14 pl-8 md:pl-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-primary via-burgundy to-beige md:left-[11px]" }), timeline.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							x: -24
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .6,
							delay: i * .1
						},
						className: "relative mb-10 last:mb-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-8 top-6 h-3.5 w-3.5 rounded-full border-2 border-primary bg-cream-light md:-left-12" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-[var(--shadow-soft)] md:p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-[11px] tracking-[0.2em] text-primary",
										children: t.years
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-beige px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-foreground/70",
										children: t.score
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-serif text-2xl font-light text-foreground md:text-3xl",
									children: t.degree
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: t.school
								})
							]
						})]
					}, t.degree))]
				})
			]
		})
	});
}
var CONTACT = {
	name: "Chanikya Velivela",
	role: "UI/UX Designer · Product Designer",
	email: "chanikyavelivela@gmail.com",
	linkedin: "https://www.linkedin.com/in/velivela-chanikya-508240343/",
	github: "https://github.com/Chani1251",
	resumeUrl: "/resume.pdf"
};
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const submit = (e) => {
		e.preventDefault();
		if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
			toast.error("Please fill in every field.");
			return;
		}
		const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
		const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`);
		window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
		toast.success("Opening your mail app to send the message.");
	};
	const field = "w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "mesh-cream grain relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 26
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .7 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.25em] text-primary",
					children: "06 — CONTACT"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 max-w-4xl font-serif text-[clamp(2.5rem,6.4vw,5rem)] font-light leading-[0.95]",
					children: [
						"LET'S BUILD SOMETHING",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-primary",
							children: "exceptional together"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: field,
							placeholder: "Your name",
							value: form.name,
							onChange: (e) => setForm({
								...form,
								name: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: field,
							type: "email",
							placeholder: "Your email",
							value: form.email,
							onChange: (e) => setForm({
								...form,
								email: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: `${field} min-h-40 resize-none`,
							placeholder: "Tell me about your project",
							value: form.message,
							onChange: (e) => setForm({
								...form,
								message: e.target.value
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-mono text-[11px] tracking-[0.18em] text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5",
							children: ["SEND MESSAGE", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
								size: 14,
								className: "transition-transform group-hover:translate-x-0.5"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: [
						{
							icon: Mail,
							label: "EMAIL",
							value: CONTACT.email,
							href: `mailto:${CONTACT.email}`
						},
						{
							icon: Linkedin,
							label: "LINKEDIN",
							value: "velivela-chanikya",
							href: CONTACT.linkedin
						},
						{
							icon: Github,
							label: "GITHUB",
							value: "Chani1251",
							href: CONTACT.github
						},
						{
							icon: Download,
							label: "RESUME",
							value: "Download CV",
							href: CONTACT.resumeUrl
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: c.href,
						target: c.href.startsWith("http") ? "_blank" : void 0,
						rel: "noopener noreferrer",
						className: "flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-5 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-beige p-3 text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { size: 16 })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-mono text-[10px] tracking-[0.18em] text-muted-foreground",
							children: c.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-foreground",
							children: c.value
						})] })]
					}, c.label))
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-cream-light py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center md:flex-row md:justify-between md:px-10 md:text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-serif text-2xl tracking-[0.14em] text-foreground",
					children: ["CHANIKYA ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-primary",
						children: "VELIVELA"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-mono text-[10px] tracking-[0.18em] text-muted-foreground",
					children: "UI/UX DESIGNER · PRODUCT DESIGNER"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-3",
					children: [
						{
							href: `mailto:${CONTACT.email}`,
							icon: Mail,
							label: "Email"
						},
						{
							href: CONTACT.linkedin,
							icon: Linkedin,
							label: "LinkedIn"
						},
						{
							href: CONTACT.github,
							icon: Github,
							label: "GitHub"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: s.href,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": s.label,
						className: "rounded-full border border-primary/25 p-3 text-primary transition-colors hover:bg-primary/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { size: 16 })
					}, s.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-mono text-[10px] tracking-[0.16em] text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" CHANIKYA VELIVELA"
					]
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
//#endregion
export { Index as component };
