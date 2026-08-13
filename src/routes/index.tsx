import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Cursor } from "@/components/site/Cursor";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Process } from "@/components/site/Process";
import { Education } from "@/components/site/Education";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chanikya Velivela — UI/UX & Product Designer" },
      {
        name: "description",
        content:
          "Portfolio of Chanikya Velivela, UI/UX and product designer crafting intuitive, user-centered digital products.",
      },
      { property: "og:title", content: "Chanikya Velivela — UI/UX & Product Designer" },
      {
        property: "og:description",
        content: "Selected work, design process and case studies by UI/UX designer Chanikya Velivela.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Process />
      <Education />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
