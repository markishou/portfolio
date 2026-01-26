export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-background-elevated">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

        {/* About Content */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            I’m a software engineer who’s motivated by learning and
            understanding how systems work. I enjoy building tools that solve
            real problems, and I try to approach each project as an opportunity
            to improve how I think about code, design, and tradeoffs.
          </p>

          <p className="text-lg leading-relaxed">
            As a new graduate, I’m continuing to explore different areas of
            software engineering — from application development to system design
            — while focusing on writing clear, maintainable code that others can
            easily work with. I’m especially interested in how AI-assisted tools
            and workflows can help developers build better software more
            efficiently.
          </p>

          <p className="text-lg leading-relaxed">
            When I'm not working on a project, you'll find me exploring my passion for
            photography, reading, or experimenting with new technologies.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">
            Technologies I work with
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {/* TypeScript */}
            <div className="bg-background border border-border rounded-lg p-3 hover:border-accent/50 transition-colors flex flex-row items-center text-center gap-2">
              <svg
                className="w-8 h-8 rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 100 100"
              >
                <g clipPath="url(#a)">
                  <path fill="#017acb" d="M0 0h100v100H0z" />
                  <path
                    fill="#fff"
                    d="M48.016 37.031h4.797v8.282h-12.97v36.843l-.343.094c-.469.125-6.64.125-7.969-.016l-1.062-.093V45.312H17.5v-8.28l4.11-.048c2.25-.03 8.03-.03 12.843 0 4.813.032 10.906.047 13.563.047m36.61 41.219c-1.907 2.016-3.954 3.14-7.36 4.063-1.485.406-1.735.421-5.078.406-3.344-.016-3.61-.016-5.235-.438-4.203-1.078-7.594-3.187-9.906-6.172-.656-.843-1.734-2.593-1.734-2.812 0-.063.156-.203.359-.297s.625-.36.969-.562c.343-.204.968-.579 1.39-.797.422-.22 1.64-.938 2.703-1.579 1.063-.64 2.032-1.156 2.141-1.156.11 0 .313.219.469.485.937 1.578 3.125 3.593 4.672 4.28.953.407 3.062.86 4.078.86.937 0 2.656-.406 3.578-.828.984-.453 1.484-.906 2.078-1.812.406-.641.453-.813.438-2.032 0-1.125-.063-1.437-.375-1.953-.875-1.437-2.063-2.187-6.875-4.312-4.97-2.203-7.204-3.516-9.016-5.282-1.344-1.312-1.61-1.67-2.453-3.312-1.094-2.11-1.235-2.797-1.25-5.937-.016-2.204.031-2.922.265-3.672.329-1.125 1.391-3.297 1.875-3.844 1-1.172 1.36-1.531 2.063-2.11 2.125-1.75 5.438-2.906 8.61-3.015.359 0 1.546.062 2.656.14 3.187.266 5.359 1.047 7.453 2.72 1.578 1.25 3.968 4.187 3.734 4.577-.156.235-6.39 4.391-6.797 4.516-.25.078-.422-.016-.765-.422-2.125-2.547-2.985-3.094-5.047-3.219-1.469-.093-2.25.078-3.235.735-1.03.687-1.53 1.734-1.53 3.187.015 2.125.827 3.125 3.827 4.61 1.938.953 3.594 1.734 3.719 1.734.188 0 4.203 2 5.25 2.625 4.875 2.86 6.86 5.797 7.375 10.86.375 3.812-.703 7.296-3.047 9.765"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h100v100H0z" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="font-medium text-sm text-text-primary">
                  TypeScript
                </p>
              </div>
            </div>

            {/* React */}
            <div className="bg-background border border-border rounded-lg p-3 hover:border-accent/50 transition-colors flex flex-row items-center text-center gap-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 100 100"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#61dafb"
                    d="M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632"
                  />
                  <path
                    stroke="#61dafb"
                    strokeWidth="5"
                    d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z"
                  />
                  <path
                    stroke="#61dafb"
                    strokeWidth="5"
                    d="M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z"
                  />
                  <path
                    stroke="#61dafb"
                    strokeWidth="5"
                    d="M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h100v100H0z" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="font-medium text-sm text-text-primary">React</p>
              </div>
            </div>

            {/* Node.js */}
            <div className="bg-background border border-border rounded-lg p-3 hover:border-accent/50 transition-colors flex flex-row items-center text-center gap-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 100 100"
              >
                <path
                  fill="#8cc84b"
                  d="M46.279 1.067c2.479-1.42 5.709-1.426 8.186 0 12.464 7.042 24.931 14.074 37.393 21.12 2.343 1.321 3.911 3.93 3.887 6.63v42.371c.018 2.813-1.705 5.483-4.178 6.774-12.422 7.004-24.838 14.016-37.259 21.02-2.53 1.447-5.825 1.335-8.277-.23-3.724-2.16-7.455-4.308-11.18-6.465-.76-.453-1.619-.815-2.156-1.552.475-.64 1.324-.72 2.015-1 1.554-.495 2.982-1.288 4.41-2.058.361-.247.802-.153 1.148.069 3.185 1.826 6.342 3.705 9.537 5.513.682.394 1.372-.129 1.955-.453 12.19-6.89 24.396-13.754 36.584-20.646a1.21 1.21 0 0 0 .664-1.191c.009-13.977.002-27.957.005-41.934a1.31 1.31 0 0 0-.781-1.308C75.852 20.756 63.479 13.773 51.102 6.8a1.29 1.29 0 0 0-1.458-.002c-12.378 6.975-24.749 13.964-37.126 20.935-.506.23-.845.738-.785 1.302q.002 20.966 0 41.936a1.19 1.19 0 0 0 .673 1.176c3.303 1.873 6.61 3.733 9.916 5.6 1.861 1.002 4.148 1.597 6.199.83 1.81-.65 3.08-2.497 3.045-4.42.017-13.895-.009-27.793.013-41.686-.046-.617.54-1.127 1.14-1.069 1.586-.01 3.175-.021 4.762.005.663-.015 1.119.649 1.037 1.27-.007 13.984.017 27.968-.01 41.952.003 3.726-1.528 7.781-4.975 9.605-4.247 2.2-9.496 1.733-13.691-.376-3.632-1.813-7.098-3.952-10.666-5.894C6.697 76.68 4.983 73.999 5 71.189V28.817c-.026-2.756 1.604-5.412 4.021-6.713Q27.651 11.588 46.28 1.067"
                />
                <path
                  fill="#8cc84b"
                  d="M57.114 30.417c5.417-.348 11.216-.206 16.091 2.462 3.774 2.046 5.867 6.338 5.933 10.53-.105.566-.696.878-1.236.84-1.572-.003-3.144.02-4.716-.011-.667.025-1.054-.59-1.138-1.179-.451-2.006-1.545-3.993-3.434-4.96-2.898-1.452-6.26-1.38-9.42-1.349-2.308.123-4.79.322-6.744 1.68-1.5 1.027-1.957 3.102-1.421 4.773.505 1.2 1.89 1.587 3.023 1.944 6.529 1.708 13.447 1.538 19.85 3.785 2.651.916 5.245 2.697 6.152 5.472 1.187 3.72.667 8.168-1.98 11.154-2.146 2.458-5.273 3.796-8.39 4.522-4.149.925-8.454.949-12.666.538-3.962-.451-8.084-1.492-11.142-4.191-2.614-2.27-3.892-5.808-3.765-9.223.03-.576.605-.978 1.157-.93 1.583-.014 3.165-.018 4.748.001.632-.045 1.101.501 1.133 1.097.292 1.912 1.01 3.918 2.678 5.051 3.216 2.075 7.253 1.933 10.936 1.991 3.052-.135 6.477-.176 8.967-2.193 1.314-1.15 1.703-3.075 1.348-4.73-.384-1.398-1.847-2.05-3.103-2.476-6.444-2.038-13.44-1.299-19.822-3.604-2.59-.916-5.096-2.647-6.092-5.309-1.389-3.767-.752-8.427 2.172-11.313 2.852-2.87 6.968-3.976 10.881-4.372"
                />
              </svg>
              <div>
                <p className="font-medium text-sm text-text-primary">Node.js</p>
              </div>
            </div>

            {/* Python */}
            <div className="bg-background border border-border rounded-lg p-3 hover:border-accent/50 transition-colors flex flex-row items-center text-center gap-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 100 100"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="url(#b)"
                    d="M49.64 0C24.254 0 25.839 11.009 25.839 11.009l.028 11.406h24.225v3.424H16.245S0 23.997 0 49.61c0 25.615 14.179 24.707 14.179 24.707h8.462V62.432s-.457-14.18 13.952-14.18H60.62s13.5.219 13.5-13.046V13.273S76.17 0 49.64 0M36.282 7.67a4.354 4.354 0 0 1 4.358 4.358 4.356 4.356 0 0 1-6.027 4.028 4.35 4.35 0 0 1-2.69-4.028 4.355 4.355 0 0 1 4.359-4.358"
                  />
                  <path
                    fill="url(#c)"
                    d="M50.36 99.48c25.387 0 23.802-11.009 23.802-11.009l-.028-11.405H49.908V73.64h33.847S100 75.485 100 49.869c0-25.615-14.179-24.706-14.179-24.706H77.36v11.886s.457 14.179-13.952 14.179H39.379S25.88 51.009 25.88 64.274v21.933S23.83 99.48 50.36 99.48m13.359-7.67a4.355 4.355 0 0 1-4.028-6.026 4.35 4.35 0 0 1 4.028-2.69 4.355 4.355 0 0 1 4.027 6.027 4.355 4.355 0 0 1-4.027 2.69"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="b"
                    x1="9.61"
                    x2="59.167"
                    y1="8.948"
                    y2="58.01"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#387eb8" />
                    <stop offset="1" stopColor="#366994" />
                  </linearGradient>
                  <linearGradient
                    id="c"
                    x1="40.028"
                    x2="93.246"
                    y1="40.453"
                    y2="90.762"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ffe052" />
                    <stop offset="1" stopColor="#ffc331" />
                  </linearGradient>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h100v100H0z" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="font-medium text-sm text-text-primary">Python</p>
              </div>
            </div>

            {/* Next.js */}
            <div className="bg-background border border-border rounded-lg p-3 hover:border-accent/50 transition-colors flex flex-row items-center text-center gap-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 100 100"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#fff"
                    d="M50 99.999c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50"
                  />
                  <path
                    fill="url(#b)"
                    d="M83.06 87.51 38.412 30H30v39.983h6.73V38.545L77.777 91.58a50 50 0 0 0 5.283-4.07"
                  />
                  <path fill="url(#c)" d="M70.556 29.999h-6.667v40h6.667z" />
                </g>
                <defs>
                  <linearGradient
                    id="b"
                    x1="60.556"
                    x2="80.278"
                    y1="64.721"
                    y2="89.166"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="c"
                    x1="67.222"
                    x2="67.111"
                    y1="29.999"
                    y2="59.374"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop />
                    <stop offset="1" stopColor="#fff" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h100v100H0z" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="font-medium text-sm text-text-primary">Next.js</p>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="bg-background border border-border rounded-lg p-3 hover:border-accent/50 transition-colors flex flex-row items-center text-center gap-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 100 100"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#06b6d4"
                    d="M50 20q-20 0-25 19.994 7.5-9.997 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.731 22.969 10.731q20 0 24.999-19.995-7.5 9.997-17.5 7.5c-3.803-.951-6.521-3.71-9.531-6.765C68.067 25.758 62.392 20 50 20M25 49.991q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.763C31.933 74.225 37.608 79.984 50 79.984q20 0 25-19.995-7.5 9.997-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 55.75 37.393 49.991 25 49.991"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h100v100H0z" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="font-medium text-sm text-text-primary">
                  Tailwind
                </p>
              </div>
            </div>

            {/* Git */}
            <div className="bg-background border border-border rounded-lg p-3 hover:border-accent/50 transition-colors flex flex-row items-center text-center gap-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 100 100"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#de4c36"
                    d="M98.114 45.544 54.454 1.886a6.44 6.44 0 0 0-9.108 0l-9.066 9.066 11.5 11.501a7.65 7.65 0 0 1 7.869 1.834 7.66 7.66 0 0 1 1.817 7.916L68.55 43.287c2.682-.923 5.776-.326 7.918 1.82a7.66 7.66 0 0 1 0 10.836 7.662 7.662 0 0 1-12.508-8.335L53.623 37.271v27.202a7.663 7.663 0 0 1 2.026 12.288 7.66 7.66 0 0 1-10.836 0 7.663 7.663 0 0 1 2.508-12.51V36.795a7.6 7.6 0 0 1-2.508-1.672 7.66 7.66 0 0 1-1.651-8.377l-11.338-11.34L1.887 45.344a6.44 6.44 0 0 0 0 9.11l43.661 43.659a6.44 6.44 0 0 0 9.108 0l43.458-43.457a6.444 6.444 0 0 0 0-9.11"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h100v100H0z" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="font-medium text-sm text-text-primary">Git</p>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg p-3 hover:border-accent/50 transition-colors flex flex-row items-center text-center gap-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 100 100"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="#ff6c37"
                    d="M89.573 19.44a50 50 0 1 0-9.002 70.124c21.844-16.881 25.875-48.273 9-70.125z"
                  />
                  <path
                    fill="#fff"
                    d="m66.863 31.858-21.082 21.25-5.958-6.125c20.75-20.75 22.833-18.875 27.042-15.125z"
                  />
                  <path
                    fill="#ff6c37"
                    d="M45.781 53.689a.75.75 0 0 1-.5-.208l-6-6a.75.75 0 0 1 0-1.042c20.458-20.458 23.25-19.5 28.083-15.125a.67.67 0 0 1 .25.542.59.59 0 0 1-.208.543L46.323 53.483a.8.8 0 0 1-.542.208zm-4.917-6.708 4.917 4.917 20-20a4.5 4.5 0 0 0-5.917-1c-3.625 1.626-9.458 6.583-19 16.083"
                  />
                  <path
                    fill="#fff"
                    d="m51.823 58.983-5.75-5.875 21.083-20.834c5.667 5.542-2.75 14.792-15.333 26.707z"
                  />
                  <path
                    fill="#ff6c37"
                    d="M51.823 59.733a.9.9 0 0 1-.5-.208l-5.875-5.75a.88.88 0 0 1 0-.667.8.8 0 0 1 0-.542l21.083-21.083a.79.79 0 0 1 1.083 0 6.46 6.46 0 0 1 2.082 4.958c0 5.625-6.417 12.707-17.332 23.042a.88.88 0 0 1-.542.25zm-4.667-6.625 4.708 4.706c8.333-7.875 16.292-16 16.332-21.5a4.75 4.75 0 0 0-1.082-3.208z"
                  />
                  <path
                    fill="#fff"
                    d="m39.989 47.108 4.167 4.167a.25.25 0 0 1 0 .375l-8.792 1.875a.833.833 0 0 1-.75-1.417l5.125-5.083s.167 0 .25.083"
                  />
                  <path
                    fill="#ff6c37"
                    d="M35.156 54.358a1.62 1.62 0 0 1-1.375-.792 1.585 1.585 0 0 1 .292-1.875l5.083-5.125a1 1 0 0 1 1.333 0l4.167 4.167a.92.92 0 0 1 .25.917.97.97 0 0 1-.708.667l-8.792 1.875zm4.667-6.333-4.708 4.708 7.792-1.667z"
                  />
                  <path
                    fill="#fff"
                    d="M78.073 20.149a8.087 8.087 0 0 0-10.916-.286 8.08 8.08 0 0 0-1.24 10.848A8.086 8.086 0 0 0 76.615 32.9l-5.667-5.667z"
                  />
                  <path
                    fill="#ff6c37"
                    d="M72.448 34.814a8.83 8.83 0 0 1-8.056-5.481 8.86 8.86 0 0 1 1.875-9.56 8.92 8.92 0 0 1 12.5 0 .71.71 0 0 1 .184.841.7.7 0 0 1-.184.244l-6.75 6.375 5.125 5.042a.7.7 0 0 1 .208.625.75.75 0 0 1-.333.542 9.06 9.06 0 0 1-4.583 1.375zm0-16.167a7.3 7.3 0 0 0-6.74 4.531 7.36 7.36 0 0 0 1.574 7.97 7.29 7.29 0 0 0 8.083 1.541l-4.917-4.917a.667.667 0 0 1 0-1.042l6.5-6.542a7.48 7.48 0 0 0-4.5-1.542z"
                  />
                  <path
                    fill="#fff"
                    d="m78.198 20.274-7.125 7.083 5.667 5.667a8.6 8.6 0 0 0 1.583-1.167 8.333 8.333 0 0 0-.125-11.583"
                  />
                  <path
                    fill="#ff6c37"
                    d="M76.614 33.649a.63.63 0 0 1-.5-.208l-5.668-5.667a.667.667 0 0 1 0-1.042l7.083-6.958a.75.75 0 0 1 1.25 0 8.75 8.75 0 0 1 0 12.5c-.49.52-1.052.969-1.667 1.333a.67.67 0 0 1-.5.042zm-4.583-6.416 4.707 4.708q.486-.341.918-.75a7.37 7.37 0 0 0 2.167-5.208 7.16 7.16 0 0 0-1.792-4.75z"
                  />
                  <path
                    fill="#fff"
                    d="M67.739 32.733a3.044 3.044 0 0 0-4.168 0L44.698 51.564l3.125 3.167 19.958-17.5a3.09 3.09 0 0 0-.042-4.5z"
                  />
                  <path
                    fill="#ff6c37"
                    d="M47.656 55.483a.75.75 0 0 1-.5-.208l-3.167-3.167a.75.75 0 0 1 0-1.042l18.875-18.792a3.834 3.834 0 0 1 6.542 2.833 3.92 3.92 0 0 1-1.292 2.75l-19.958 17.5a.7.7 0 0 1-.5.124zm-2.208-3.919 2.083 2.125 19.583-17.042a2.3 2.3 0 0 0 .792-1.667 2.24 2.24 0 0 0-.708-1.708 2.333 2.333 0 0 0-3.292 0z"
                  />
                  <path
                    fill="#fff"
                    d="M30.073 73.024a.42.42 0 0 0 0 .5l.833 3.624a1.07 1.07 0 0 1-.519 1.094 1.02 1.02 0 0 1-1.19-.12l-5.708-5.5 17.792-17.933h6.167l4.167 4.167a94.6 94.6 0 0 1-21.542 14.167"
                  />
                  <path
                    fill="#ff6c37"
                    d="M29.698 79.148a1.76 1.76 0 0 1-1.25-.542l-5.457-5.457a.667.667 0 0 1 0-1.043L40.906 54.15c.1-.107.231-.18.375-.208h6.208a.75.75 0 0 1 .5 0l4.167 4.167a.67.67 0 0 1 .208.583.67.67 0 0 1-.25.542l-.333.292a102 102 0 0 1-21.375 13.708l.792 3.375a1.798 1.798 0 0 1-1.707 2.208zm-5.082-6.542 4.915 4.958a.25.25 0 0 0 .333 0 .25.25 0 0 0 0-.292l-.833-3.625a1.16 1.16 0 0 1 .625-1.333A102.4 102.4 0 0 0 50.49 58.897l-3.417-3.417H41.49z"
                  />
                  <path
                    fill="#fff"
                    d="m19.198 76.898 4.168-4.167 6.417 6.417-10.208-.707A.834.834 0 0 1 19.2 76.9z"
                  />
                  <path
                    fill="#ff6c37"
                    d="m29.906 79.773-10.167-.708a1.61 1.61 0 0 1-1.334-1.02 1.59 1.59 0 0 1 .334-1.647l4.167-4.167a.75.75 0 0 1 1.042 0l6.375 6.375a.71.71 0 0 1 0 .833.8.8 0 0 1-.417.333zm-10.167-2.332 8.333.542-4.583-4.293z"
                  />
                  <path
                    fill="#fff"
                    d="m48.03 55.192-8.416 1.293 4.875-4.833z"
                  />
                  <path
                    fill="#ff6c37"
                    d="M39.614 57.274a.71.71 0 0 1-.667-.418.7.7 0 0 1 0-.832l4.832-4.876a.79.79 0 0 1 1.083 0l3.544 3.541a.7.7 0 0 1 0 .75.73.73 0 0 1-.583.542l-8.333 1.293zm4.875-4.543L41.78 55.44l4.667-.708z"
                  />
                  <path
                    fill="#fff"
                    d="m48.03 55.19-5.874.75a.75.75 0 0 1-.708-1.25l3.042-3.043z"
                  />
                  <path
                    fill="#ff6c37"
                    d="M41.989 56.733a1.54 1.54 0 0 1-1.333-.792 1.5 1.5 0 0 1 .25-1.793l3.042-3.042a.79.79 0 0 1 1.083 0l3.542 3.542a.75.75 0 0 1-.458 1.293l-5.832.75zm0-1.542 4.417-.543-1.958-1.957-2.5 2.5zm36.25-30.125a.625.625 0 0 0-.793-.25.58.58 0 0 0-.29.344.6.6 0 0 0 .04.448c.293.614.211 1.34-.207 1.875a.53.53 0 0 0-.157.395.6.6 0 0 0 .157.396.45.45 0 0 0 .332 0 .55.55 0 0 0 .543-.168 2.88 2.88 0 0 0 .374-3.042z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h100v100H0z" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="font-medium text-sm text-text-primary">postman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
