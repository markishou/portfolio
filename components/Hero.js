import Particles from "./Particles";
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <Particles />
      <div className="relative max-w-4xl w-full">
        {/* Greeting */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-text-primary">
            Hello there 👋
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary">
            I'm <span className="text-accent font-semibold">Mark Hou</span>
          </p>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mb-12 leading-relaxed">
          Software engineer building thoughtful, well-designed systems.
          Currently pursuing my B.Sc. in Computer Science at UBC.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap sm:flex-row gap-4">
          <a href="#projects" className="btn-primary text-center">
            View My Work
          </a>
          <a
            href="https://www.linkedin.com/in/mark-hou-752a1321b"
            target="_blank"
            className="px-6 py-3 rounded-lg font-semibold border border-accent text-accent hover:bg-accent/10 transition-all duration-150 inline-flex"
          >
            <svg className="w-6 h-6 mr-2 rounded-sm" viewBox="0 0 24 24" fill="#00d4aa">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
