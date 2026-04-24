import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Products } from "./components/Products";
import { Testimonials } from "./components/Testimonials";
import { CTAFinal } from "./components/CTAFinal";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Features />
        <Products />
        <Testimonials />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
