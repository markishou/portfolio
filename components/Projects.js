import Image from 'next/image'

export default function FeaturedProject() {
  return (
    <section id="projects" className="py-20 px-6 bg-background-elevated">
      <div className="max-w-5xl mx-auto">
        {/* Eyebrow label */}
        <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
          Featured Project
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          ReviewFlow — Automated Code Review Routing &amp; Analytics Platform
        </h2>

        {/* Screenshot */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border mb-10">
          <Image
            src="/projects/reviewflow.png"
            alt="ReviewFlow dashboard showing the PR review queue and team workload overview"
            fill
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        {/* Description */}
        <div className="space-y-6 text-lg leading-relaxed text-text-secondary mb-12">
          <p>
            ReviewFlow is a full-stack SaaS application that streamlines the code
            review process for software development teams. As teams grow and pull
            requests accumulate, code reviews become a bottleneck, PRs sit
            unassigned, reviewers get overloaded, and development slows down.
            ReviewFlow solves this by automatically analyzing every pull request,
            scoring its complexity, and routing it to the most qualified available
            reviewer.
          </p>
          <p>
            When a developer opens a pull request on GitHub, ReviewFlow instantly
            receives the event through a webhook, analyzes the changed files,
            calculates a complexity score based on lines changed, file types, and
            critical path detection, and assigns the best reviewer based on their
            file expertise, domain knowledge, and current workload. The entire
            pipeline, from PR opened to reviewer assigned, completes in under
            one second.
          </p>
          <p>
            The platform features a real-time dashboard where team leads can
            monitor the review queue, track workload distribution across the
            team, and identify bottlenecks at a glance.
          </p>
        </div>

        {/* Key Features + Technical Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Key Features */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Key Features
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▸</span>
                <span>
                  Automatic PR complexity scoring and priority classification
                  (critical / high / medium / low)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▸</span>
                <span>
                  Intelligent reviewer assignment using a weighted SQL matching
                  algorithm across file expertise, tag matching, and workload
                  balancing
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▸</span>
                <span>
                  Real-time dashboard with PR queue, complexity indicators, and
                  team capacity overview
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▸</span>
                <span>
                  GitHub OAuth login with team onboarding and multi-repository
                  support
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▸</span>
                <span>
                  Secure session-based authentication with team-scoped data
                  access
                </span>
              </li>
            </ul>
          </div>

          {/* Technical Highlights */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Technical Highlights
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent mt-1">▸</span>
                <span>
                  Serverless architecture on AWS (Lambda, API Gateway, S3,
                  CloudFront) with Neon PostgreSQL
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▸</span>
                <span>
                  GitHub webhook pipeline processing PR events end-to-end in
                  under 1 second
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▸</span>
                <span>
                  React + Tailwind CSS frontend deployed to a private S3 bucket
                  behind CloudFront
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1">▸</span>
                <span>
                  Privacy-preserving structured logging with automatic
                  sensitive data redaction across all Lambda functions
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "AWS Lambda",
            "API Gateway",
            "S3",
            "CloudFront",
            "Neon PostgreSQL",
            "React",
            "Tailwind CSS",
            "GitHub OAuth",
          ].map((item) => (
            <span
              key={item}
              className="text-sm bg-background border border-border rounded-full px-3 py-1 text-text-secondary"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/markishou/reviewflow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
          >
            GitHub →
          </a>
          {/* <a
            href="https://reviewflow-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
          >
            Live Demo →
          </a> */}
        </div>
      </div>
    </section>
  );
}