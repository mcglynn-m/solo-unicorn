// ============================================================
// AGENTIC LANDING PAGE TEMPLATE
// ============================================================
// Customize this file using natural language prompts with
// Gemini CLI or Claude Code. See README.md for prompt library.
// ============================================================

import { MobileNav } from "@/components/MobileNav";
import {
  CheckIcon,
  ArrowRightIcon,
  TrendingUpIcon,
  CalendarIcon,
  MailIcon,
  BeakerIcon,
  BriefcaseIcon,
  SparklesIcon,
  BookOpenIcon,
  UsersIcon,
  BoltIcon,
  LinkedInIcon,
  GitHubIcon,
  XTwitterIcon,
} from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* Skip link for accessibility - allows keyboard users to skip navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* ============================================================ */}
      {/* NAVIGATION - Fixed header with logo and nav links            */}
      {/* Prompt: "Update the logo text to [Your Name]"               */}
      {/* ============================================================ */}
      <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm shadow-sm transition-transform group-hover:scale-105">
                MM
              </div>
              <span className="text-xl font-bold tracking-tight font-display text-slate-900 dark:text-white">     
                Marianne McGlynn
              </span>
            </a>
          </div>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Be Found in AI
            </a>
            <a href="/services" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Services
            </a>
            <a href="#work" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Case Studies
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </nav>

      {/* ============================================================ */}
      {/* HERO SECTION - BE FOUND IN AI                               */}
      {/* ============================================================ */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background gradient blurs */}
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-indigo-100/50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-70 -translate-x-1/3 translate-y-1/4"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-slate-900 dark:text-white mb-6">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Marianne McGlynn
              </span>
            </h1>

            {/* Title/Specialty */}
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 font-medium tracking-wide">
              AI visibility: Be Known, Be Understood, Be Recommended
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
                Free Be Found in AI Snapshot
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl transition-all">
                See My Experience
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE GAP SECTION - Pain & Solution                            */}
      {/* ============================================================ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  AI Is Changing How Customers Find Companies
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Your prospects are no longer relying only on Google. They are asking ChatGPT, Gemini, Perplexity, Claude, and other AI tools which companies, products, and services they should consider.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  If your business is missing, inaccurately described, or rarely recommended, you may lose visibility before a prospect ever reaches your website.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  The Be Found in AI Diagnostic gives you a practical starting point. It shows:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 text-blue-600 p-1 rounded-full"><CheckIcon className="w-3 h-3" /></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Whether your company appears for relevant customer questions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 text-blue-600 p-1 rounded-full"><CheckIcon className="w-3 h-3" /></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">How your visibility compares with competitors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 text-blue-600 p-1 rounded-full"><CheckIcon className="w-3 h-3" /></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Whether AI tools describe your business accurately</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 text-blue-600 p-1 rounded-full"><CheckIcon className="w-3 h-3" /></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">Which content and source gaps may be limiting discovery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 text-blue-600 p-1 rounded-full"><CheckIcon className="w-3 h-3" /></div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">The first actions worth prioritizing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ABOUT/AUTHORITY SECTION - Credentials and trust signals      */}
      {/* Prompt: "Update credentials to [your experience/credentials]"*/}
      {/* ============================================================ */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Strategy Rooted in Experience
              </h2>
            </div>

            {/* Experience & AI Boxes */}
            <div className="grid md:grid-cols-2 gap-8 mb-16 items-stretch">
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Marketing Experience</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  I bring a substantial background in digital marketing, SEO, web strategy, content governance, analytics, and cross-functional leadership.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  My experience includes work with major companies such as <span className="font-semibold text-slate-900 dark:text-white">Visa, Agilent, LinkedIn, NetApp, and Trend Micro.</span>
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Applied to the AI Transition</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  I am now applying that foundation to a new marketing challenge: helping SMBs understand how AI systems surface their brands, expertise, and content.
                </p>
                <div className="bg-white/50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">Current AI Training</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Generative AI, agentic workflows, RAG, analytics, product management, and practical AI adoption.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">400+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Pages (Visa content audit)</div>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">30–40%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Search-traffic improvement</div>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">25%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Support-call reduction</div>
              </div>
              <div className="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">Global</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Enterprise content & web strategy</div>
              </div>
            </div>

            {/* Credentials */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                  <BeakerIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">AI Specialization</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Generative AI, agentic workflows, RAG, analytics, and practical adoption.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                  <BriefcaseIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Enterprise Experience</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Visa, Agilent, LinkedIn, NetApp, Trend Micro</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                  <SparklesIcon />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Training & Certifications</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">California Science and Technology University: Emerging Tech & AI Intensive (2026), UX Design Honors, Scrum Master</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SERVICES SECTION - Your offerings with pricing               */}
      {/* Prompt: "Update services to [Service 1], [Service 2], etc."  */}
      {/* ============================================================ */}
      <section id="services" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Ensuring your brand is found and trusted in the age of AI
              </p>
            </div>

            {/* Services grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 - DIY/Entry Level */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-6">
                  <BookOpenIcon />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Free Be Found in AI Snapshot</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">A clear initial review of how your business appears across AI-generated answers.</p>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Complimentary
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Brand visibility check
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Competitor comparison
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Answer-quality review
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Citation-source review
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Initial opportunity summary
                  </li>
                </ul>
                <a href="#contact" className="block w-full text-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                  Free Be Found in AI Snapshot
                </a>
              </div>

              {/* Service 2 - AI Visibility Strategy Sprint */}
              <div className="relative group bg-white dark:bg-slate-800 rounded-2xl p-8 border-2 border-blue-500 shadow-xl shadow-blue-500/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white mb-6">
                  <UsersIcon />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI Visibility Strategy Sprint</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">A focused engagement to identify why your company is not appearing consistently and create a practical improvement roadmap.</p>
                <div className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Includes:
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Expanded prompt testing
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    AI Share of Voice benchmark
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Competitor visibility analysis
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Content-readiness review
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Priority-page recommendations
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    60- to 90-day action plan
                  </li>
                </ul>
                <a href="#contact" className="block w-full text-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                  Explore the Strategy Sprint
                </a>
              </div>

              {/* Service 3 - DFY/Premium */}
              <div className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mb-6">
                  <BoltIcon />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI-Ready Marketing Advisory</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">Strategic guidance for companies that want to improve AI visibility while strengthening content strategy, governance, and marketing workflows.</p>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Ongoing
                  <span className="text-base font-normal text-slate-500"> advisory support</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Progress reviews
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Content-priority planning
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    AI visibility monitoring
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Cross-functional recommendations
                  </li>
                  <li className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    Practical AI adoption guidance
                  </li>
                </ul>
                <a href="#contact" className="block w-full text-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                  Discuss Advisory Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TARGET AUDIENCE SECTION                                      */}
      {/* ============================================================ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Built for Companies with Complex Stories to Tell
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Technology SMBs */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                  <BoltIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Technology SMBs</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  For SaaS, B2B software, digital platforms, AI startups, and IT-service companies that need to stand out in a crowded market.
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Common questions:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600 flex-shrink-0"><CheckIcon className="w-4 h-4" /></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Why are competitors appearing more often in AI-generated answers?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600 flex-shrink-0"><CheckIcon className="w-4 h-4" /></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Does AI understand our differentiators?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600 flex-shrink-0"><CheckIcon className="w-4 h-4" /></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Which pages should we improve first?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-blue-600 flex-shrink-0"><CheckIcon className="w-4 h-4" /></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">How do we show measurable progress?</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bioscience SMBs */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                  <BeakerIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Bioscience SMBs</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  For biotech, diagnostics, medical-device, healthtech, and scientific-platform companies that need both visibility and credibility.
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">Common questions:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-indigo-600 flex-shrink-0"><CheckIcon className="w-4 h-4" /></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Is our company described accurately?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-indigo-600 flex-shrink-0"><CheckIcon className="w-4 h-4" /></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Are credible sources supporting AI-generated answers?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-indigo-600 flex-shrink-0"><CheckIcon className="w-4 h-4" /></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Are our expertise and scientific authority visible?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-indigo-600 flex-shrink-0"><CheckIcon className="w-4 h-4" /></div>
                      <span className="text-sm text-slate-600 dark:text-slate-400">Could weak or outdated content create reputational risk?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WORK/CASE STUDIES - Show your best projects                  */}
      {/* Prompt: "Add case study about [project] with [results]"      */}
      {/* ============================================================ */}
      <section id="work" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Case Studies
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Real-world impact at the intersection of AI, UX, and Content Strategy
              </p>
            </div>

            {/* Case studies grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col">
                <div className="h-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <BoltIcon className="text-white w-12 h-12 opacity-20" />
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider mb-2">Visa / FinTech</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Global Content Audit and Governance Toolkit</h3>
                  
                  <div className="space-y-4 text-sm mb-6">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Challenge:</span>
                      <p className="text-slate-600 dark:text-slate-400">A large website needed a clearer framework for identifying outdated, low-value, and ownerless content.</p>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">My contribution:</span>
                      <p className="text-slate-600 dark:text-slate-400">Led a structured audit of more than 400 pages, organized content into priority groups, and developed a repeatable toolkit for cross-functional review.</p>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Outcome:</span>
                      <p className="text-slate-600 dark:text-slate-400">Improved governance, clearer accountability, and better alignment across content, analytics, and digital-experience teams.</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <a href="/resume" className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline flex items-center gap-1 group">
                    Read the Case Study
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col">
                <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <UsersIcon className="text-white w-12 h-12 opacity-20" />
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider mb-2">Agilent / Bioscience</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Bioscience Content Center of Excellence</h3>
                  
                  <div className="space-y-4 text-sm mb-6">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Challenge:</span>
                      <p className="text-slate-600 dark:text-slate-400">A critical homepage process had stalled across multiple stakeholders.</p>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">My contribution:</span>
                      <p className="text-slate-600 dark:text-slate-400">Built and led a cross-functional editorial council, established decision criteria, and introduced a repeatable governance cadence.</p>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Outcome:</span>
                      <p className="text-slate-600 dark:text-slate-400">Improved collaboration and increased relevant search traffic by approximately 30–40%.</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <a href="/resume" className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline flex items-center gap-1 group">
                    Read the Case Study
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col">
                <div className="h-40 bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <SparklesIcon className="text-white w-12 h-12 opacity-20" />
                </div>
                <div className="p-6 flex-grow">
                  <div className="text-sm text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider mb-2">Seagate / Tech</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Help Center Optimization</h3>
                  
                  <div className="space-y-4 text-sm mb-6">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Challenge:</span>
                      <p className="text-slate-600 dark:text-slate-400">Customers needed a clearer and more efficient support experience.</p>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">My contribution:</span>
                      <p className="text-slate-600 dark:text-slate-400">Improved content structure and simplified support workflows.</p>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block">Outcome:</span>
                      <p className="text-slate-600 dark:text-slate-400">Reduced support-call volume by approximately 25%.</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <a href="/resume" className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline flex items-center gap-1 group">
                    Read the Case Study
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ SECTION - Answer common questions                        */}
      {/* Prompt: "Add FAQ: [Question] with answer [Answer]"           */}
      {/* ============================================================ */}
      <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            {/* FAQ items */}
            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  What is AI visibility?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  AI visibility measures whether AI tools such as ChatGPT, Gemini, Claude, and Perplexity mention, describe, cite, or recommend your company when users ask relevant questions.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  How is AI visibility different from traditional SEO?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Traditional SEO focuses primarily on visibility in search-engine results. AI visibility focuses on whether generative AI tools understand your company, surface it in answers, and support those answers with credible sources. The two disciplines overlap, but they are not identical.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  What does the free Be Found in AI snapshot include?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  The snapshot provides an initial view of your company’s AI discovery rate, competitor visibility, answer accuracy, citation sources, and three priority opportunities.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Who is this designed for?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  The service is designed primarily for growing technology and bioscience SMBs that need a practical way to understand AI visibility without adding enterprise-level complexity.
                </p>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Do I need to understand GEO, AEO, or even SEO first?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  No. The diagnostic translates the results into plain-English findings and prioritized actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT SECTION - How to reach you                           */}
      {/* Prompt: "Update contact with email [email] and Calendly [url]"*/}
      {/* ============================================================ */}
      <section id="contact" className="relative py-20 bg-white dark:bg-slate-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">
              Can AI Tools Find Your Business?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Find out whether your company is being surfaced, accurately described, and recommended when potential customers ask AI tools for guidance.
            </p>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:mariannemcglynn@example.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-lg shadow-blue-500/25"
              >
                <MailIcon className="w-5 h-5 mr-2" />
                Free Be Found in AI Snapshot
              </a>
              <a
                href="/resume"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-all"
              >
                See My Work
              </a>
            </div>

            {/* Social links */}
            <div className="flex justify-center gap-4">
              <a
                href="https://linkedin.com/in/mariannemcglynn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/mcglynn-m"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://twitter.com/mariannemcglynn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X profile"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <XTwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================================ */}
      {/* FOOTER - Copyright and additional links                      */}
      {/* ============================================================ */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Marianne McGlynn. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
