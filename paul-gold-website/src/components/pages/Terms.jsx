import React, { useEffect } from "react";
import "../styling/Terms.css";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page-container">
      <h1>Terms & Conditions</h1>
      <p><strong>Paul Digital Gold</strong></p>
      <p>(Operated by Paul Fincare Pvt. Ltd.)</p>

      <div className="page-divider" />

      <h2>A. Introduction</h2>
      <p>
        Paul Fincare Pvt. Ltd. (“PFCPL”) has introduced an initiative called
        <strong> Paul Digital Gold</strong>, under which PFCPL provides a digital
        platform to Customers for the purchase, sale, storage, and redemption of
        digital gold, backed by physical gold of assured purity.
      </p>

      <h2>Minimum Purchase and Ownership of Gold</h2>
      <p>
        A Customer may, through the Platform, purchase gold in a single
        transaction for a minimum value of ₹10 (Rupees Ten only). The gold so
        purchased (“Customer Purchased Gold”) shall be of 24 Carat purity
        (999%).
      </p>
      <p>
        Upon receipt of payment, an invoice shall be generated and the title,
        ownership, risks, and interest in the corresponding quantity of Customer
        Purchased Gold shall stand transferred to the Customer.
      </p>
      <p>
        Since delivery is not immediate, such gold shall be stored in PFCPL’s
        own fully insured vault, maintained under high security standards and in
        compliance with applicable laws.
      </p>

      <h2>B. Definitions</h2>
      <p>
        “Platform” means <strong>www.pauldigitalgold.com</strong> and/or the
        mobile or web application named Paul Digital Gold.
      </p>
      <p>
        “Services” include buying, selling, redemption, storage, vaulting, and
        fulfilment of digital gold as offered by PFCPL.
      </p>
      <p>All other definitions remain unchanged and applicable.</p>

      <h2>C. Purpose of the Platform</h2>
      <p>
        The Platform facilitates transactions relating to purchase, sale,
        redemption, and transfer of Customer Purchased Gold.
      </p>
      <p>
        Customers must create a verified Customer Account by submitting valid
        KYC documentation and nominee details as prescribed by PFCPL.
      </p>
      <p>
        Purchased gold shall be stored in PFCPL’s insured vault within two (2)
        Business Days.
      </p>

      <h2>D. Usage of the Platform</h2>
      <p>
        Customers agree to use the Platform solely for lawful and personal
        purposes and shall not misuse, reproduce, or commercially exploit any
        Platform content.
      </p>

      <h2>E. Creation of Customer Account</h2>
      <p>
        Eligibility, KYC verification, confidentiality obligations, nominee
        appointment, and account deletion provisions apply fully to Paul Digital
        Gold.
      </p>

      <h2>F. Gold Purchase Process</h2>
      <ul>
        <li>Minimum purchase value: ₹10</li>
        {/* <li>Daily purchase limit: 100 grams or ₹15,00,000 per transaction</li> */}
        <li>Maximum holding limit: 8 grams or ₹1 Lakh</li>
        {/* <li>Trading hours: 10:00 AM to 10:00 PM on Business Days</li> */}
      </ul>
      <p>
        Gold prices displayed are market-linked, final, and binding at the time
        of confirmation.
      </p>

      <h2>G. Redemption of Gold</h2>
      <ul>
        <li>Minimum redemption: ₹10 </li>
        <li>Redemption allowed after 2 days from purchase</li>
        <li>
          Redemption value based on prevailing rates on
          www.pauldigitalgold.com
        </li>
      </ul>
      <p>
        All making charges, taxes, and processing fees shall be borne by the
        Customer.
      </p>

      <h2>H. Sale of Gold</h2>
      <p>
        Customers may sell their digital gold at the Gold Purchase Price
        displayed on the Platform.
      </p>
      <p>
        Sale proceeds shall be credited to the Customer’s bank account within
        6–7 Business Days.
      </p>

      <h2>I. Storage of Gold</h2>
      <ul>
        <li>Stored in fully insured PFCPL vaults</li>
        <li>Free storage for 5 years</li>
        <li>Post 5 years: 1% quarterly storage fee</li>
      </ul>

      <h2>J. Intellectual Property Rights</h2>
      <p>
        All intellectual property relating to the Platform and Services belongs
        exclusively to Paul Fincare Pvt. Ltd.
      </p>

      <h2>K. General</h2>
      <p>
        Investment in gold is subject to market risks. PFCPL does not guarantee
        returns.
      </p>
      <p>
        Continued use of the Platform constitutes acceptance of these Terms and
        Conditions.
      </p>
      <p>
        For queries, contact:{" "}
        <strong>ops.paulgold@paulmerchants.net</strong>
      </p>

      <h2>L. Termination of Account</h2>
      <p>
        Termination provisions and consequences remain unchanged and fully
        applicable.
      </p>

      <h2>M. Grievance Redressal</h2>
      <p>
        Phone: <strong>01725041754</strong>
        <br />
        Email: <strong>ops.paulgold@paulmerchants.net</strong>
      </p>

      <h2>N. Governing Law & Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of India. Arbitration venue shall be
        Chandigarh, India. Courts at Chandigarh shall have exclusive
        jurisdiction.
      </p>

      <div className="page-divider" />

      <h2>Annexure 1 – Customer Declaration</h2>
      <p>
        The Customer confirms having read, understood, and agreed to these Terms
        and Conditions and acknowledges the risks associated with gold
        investment.
      </p>
    </div>
  );
};

export default Terms;
