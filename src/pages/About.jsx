import { ShoppingCart, ShieldCheck, Truck, Users } from "lucide-react";
import GeneralNavbar from "../components/GeneralNavbar";
import AnimatedTooltipDemo from "../components/ui/AnimatedTooltipDemo";
const AboutUs = () => {
  return (
    <div className="page-content">
      <main className="about-page">
      <GeneralNavbar />
      <section className="about-header">
        <h1>About Swiftbuy</h1>
        <p>
          At <strong>Swiftbuy</strong>, we are dedicated to providing a seamless
          online shopping experience. Our platform offers a wide range of
          high-quality products, competitive prices, and fast, reliable delivery
          services.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <ShoppingCart size={40} />
          <h3>Wide Product Selection</h3>
          <p>
            We offer an extensive collection of products, from electronics to
            fashion and beyond.
          </p>
        </div>

        <div className="about-card">
          <ShieldCheck size={40} />
          <h3>Secure Shopping</h3>
          <p>
            Enjoy a safe shopping experience with our secure payment options and
            buyer protection.
          </p>
        </div>

        <div className="about-card">
          <Truck size={40} />
          <h3>Fast & Reliable Delivery</h3>
          <p>
            We ensure that your orders are delivered quickly and efficiently to
            your doorstep.
          </p>
        </div>

        <div className="about-card">
          <Users size={40} />
          <h3>Customer-Centric Approach</h3>
          <p>
            Our customers are our priority, and we strive to provide excellent
            service at all times.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <AnimatedTooltipDemo />
        <p>© {new Date().getFullYear()} Swiftbuy. All rights reserved.</p>
      </footer>
    </main>
    </div>
  );
};

export default AboutUs;
