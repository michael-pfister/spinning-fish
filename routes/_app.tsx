import { type PageProps } from "$fresh/server.ts";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function App({ Component }: PageProps) {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/michael-pfister/spinning-fish",
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ScaredToCompile",
      icon: <FaTwitter className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/michael-pascal-pfister",
      icon: <FaLinkedin className="w-5 h-5" />,
    },
  ];

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>spinning-fish</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="min-h-screen flex flex-col max-w-screen-xl mx-auto">
        <main>
          <Component />
        </main>
        <footer class="mt-auto footer w-auto m-2 p-4 bg-neutral text-neutral-content rounded-lg">
          <aside>
            <span>MIT licensed with ❤️ by Michael</span>
            <span>
              3D Art by{" "}
              <a
                class="underline"
                href="https://sketchfab.com/Hawsky"
                target="_blank"
              >
                by Hawsky
              </a>
            </span>
          </aside>
          <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            {socials.map((social) => (
              <a
                href={social.url}
                target="_blank"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </nav>
        </footer>
      </body>
    </html>
  );
}
