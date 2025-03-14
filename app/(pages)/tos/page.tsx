import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link className="btn btn-ghost" href="/">
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for Observo
        </h1>
        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          Last Updated: September 26, 2023{"\n"}
          {"\n"}Welcome to Observo!{"\n"}
          {"\n"}These Terms of Service (&quot;Terms&quot;) govern your use of
          the Observo website at https://observo.app (&quot;Website&quot;) and
          the services provided by Observo. By using our Website and services,
          you agree to these Terms.
          {"\n"}
          {"\n"}1. Description of Observo{"\n"}
          {"\n"}Observo is a platform that offers a JavaScript code boilerplate
          to assist entrepreneurs in launching their startups more efficiently.
          {"\n"}
          {"\n"}2. Ownership and Usage Rights{"\n"}
          {"\n"}When you purchase a package from Observo, you gain the right to
          download and use the code provided for creating applications. You own
          the code you create but do not have the right to resell it. We offer a
          full refund within 7 days of purchase, as specified in our refund
          policy.{"\n"}
          {"\n"}3. User Data and Privacy{"\n"}
          {"\n"}We collect and store user data, including name, email, and
          payment information, as necessary to provide our services. For details
          on how we handle your data, please refer to our Privacy Policy at
          https://observo.app/privacy-policy.{"\n"}
          {"\n"}4. Non-Personal Data Collection{"\n"}
          {"\n"}We use web cookies to collect non-personal data for the purpose
          of improving our services and user experience.{"\n"}
          {"\n"}5. Governing Law{"\n"}
          {"\n"}These Terms are governed by the laws of France.{"\n"}
          {"\n"}6. Updates to the Terms{"\n"}
          {"\n"}We may update these Terms from time to time. Users will be
          notified of any changes via email.{"\n"}
          {"\n"}For any questions or concerns regarding these Terms of Service,
          please contact us at marc@shipfa.st.{"\n"}
          {"\n"}Thank you for using Observo!
        </pre>
      </div>
    </main>
  );
};

export default page;
