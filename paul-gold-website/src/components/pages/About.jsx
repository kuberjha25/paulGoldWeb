import React, { useEffect } from "react";
import "../styling/About.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="page-container">
      <h1>About Us – Paul Digital Gold</h1>

      <img
        src="About.webp"
        alt="Paul Digital Gold"
        className="about-hero-image"
      />

      <p>
        <strong>A New Age of Gold Ownership, Backed by Decades of Trust</strong>
      </p>

      <p>
        Gold has always held a special place in Indian households—not just as a
        precious metal, but as a symbol of security, prosperity, tradition, and
        long-term wealth. For generations, families have relied on gold to
        safeguard their future, celebrate milestones, and pass down value across
        time.
      </p>

      <p>
        At Paul Digital Gold, we honor this timeless legacy while reimagining
        gold ownership for the modern world.
      </p>

      <p>
        Paul Digital Gold is a pioneering digital gold platform powered by
        <strong> Paul Fincare Pvt. Ltd.</strong>, a company with over
        <strong> 33 years of proven excellence</strong> in financial services.
        Built on a foundation of trust, transparency, and customer-first values,
        Paul Digital Gold brings the reliability of traditional gold investment
        together with the convenience of cutting-edge digital technology.
      </p>

      <p>
        Our mission is simple yet powerful: to make gold ownership
        <strong> easy, secure, transparent, and accessible</strong> for
        everyone—whether you are investing your first ₹100 or building a
        long-term golden portfolio for the future.
      </p>

      <div className="page-divider" />

      <h2>The Legacy Behind Paul Digital Gold</h2>

      <p>
        At the heart of Paul Digital Gold stands Paul Fincare Pvt. Ltd., a name
        synonymous with credibility, financial discipline, and customer trust.
        With more than three decades of experience in financial services, Paul
        Fincare has served millions of customers by providing dependable
        financial solutions rooted in integrity and long-term value creation.
      </p>

      <p>
        Over the years, Paul Fincare Pvt. Ltd. has built strong relationships
        with customers across urban and semi-urban India by focusing on:
      </p>

      <ul>
        <li>Ethical business practices</li>
        <li>Transparent pricing models</li>
        <li>Customer-centric financial products</li>
        <li>Long-term wealth-building solutions</li>
      </ul>

      <p>
        Recognizing the evolving needs of today’s digitally connected consumers,
        Paul Fincare Pvt. Ltd. envisioned a platform that could democratize gold
        ownership—removing traditional barriers such as high ticket sizes,
        storage concerns, and lack of transparency. This vision gave birth to
        Paul Digital Gold.
      </p>

      <div className="page-divider" />

      <h2>Bringing Gold into the Digital Era</h2>

      <p>
        The way people invest has changed. Today’s investors seek flexibility,
        convenience, and real-time access—without compromising on safety or
        authenticity.
      </p>

      <p>
        Paul Digital Gold bridges this gap by transforming physical gold into a
        secure digital asset that you can buy, save, and grow anytime, anywhere.
      </p>

      <ul>
        <li>Digitally accessible</li>
        <li>Fractionally purchasable</li>
        <li>Professionally stored</li>
        <li>Fully redeemable</li>
      </ul>

      <div className="page-divider" />

      <h2>100% Purity, 100% Transparency</h2>

      <ul>
        <li>100% BIS-compliant gold</li>
        <li>Guaranteed purity with every gram purchased</li>
        <li>Clear pricing based on live market rates</li>
        <li>No hidden charges or deductions</li>
      </ul>

      <p>
        Each purchase reflects real, physical gold of assured purity, giving
        customers complete confidence in the value of their holdings.
      </p>

      <div className="page-divider" />

      <h2>Safe, Insured, and Professionally Stored</h2>

      <ul>
        <li>Secure, audited, and insured vault storage</li>
        <li>Protection against theft, damage, and loss</li>
        <li>Professionally managed safety protocols</li>
      </ul>

      <p>
        Your gold remains safe while you enjoy complete digital visibility and
        control over your investment.
      </p>

      <div className="page-divider" />

      <h2>Flexible Buying for Every Goal</h2>

      <ul>
        <li>Start saving with small amounts</li>
        <li>Invest during market opportunities</li>
        <li>Build a hedge against inflation</li>
        <li>Plan for weddings, festivals, and milestones</li>
      </ul>

      <p>
        There are no pressure commitments—only freedom, flexibility, and
        control.
      </p>

      <div className="page-divider" />

      <h2>Easy Redemption into Jewellery or Coins</h2>

      <ul>
        <li>Redeem digital gold into coins</li>
        <li>Convert holdings into jewellery</li>
        <li>Withdraw as per your personal needs</li>
      </ul>

      <div className="page-divider" />

      <h2>More Than an Investment — A Relationship Built on Trust</h2>

      <p>
        Gold is not just an asset; it is an emotion. At Paul Digital Gold, we
        respect this emotional connection and protect it with integrity,
        reliability, and long-term commitment.
      </p>

      <p>
        <strong>Buy. Save. Secure. Celebrate.</strong>
        <br />
        That’s not just a tagline—it’s the philosophy that defines Paul Digital
        Gold.
      </p>

      <div className="page-divider" />

      <p>
        <strong>Begin Your Digital Gold Journey</strong>
        <br />
        Gold has evolved, and so has the way you own it. Your gold journey
        begins here.
      </p>

      <p>
        Visit:{" "}
        <a href="https://www.pauldigitalgold.com">www.pauldigitalgold.com</a>
        <br />
        Experience: Trusted Digital Gold, the Paul Way
      </p>
    </section>
  );
};

export default About;
