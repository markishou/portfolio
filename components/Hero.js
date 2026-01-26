import Particles from "./Particles";
export default function Hero() {
  return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <Particles/>
        <div className="relative max-w-4xl">
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
            Currently exploring how AI can improve developer tooling and workflows.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-primary text-center">
              View My Work
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="px-6 py-3 rounded-lg font-semibold border border-accent text-accent hover:bg-accent/10 transition-all duration-150 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
  );
}
