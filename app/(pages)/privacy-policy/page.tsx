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
          Privacy Policy for Observo
        </h1>
        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          Last Updated: 2023-08-25{"\n"}
          {"\n"}Thank you for visiting Observo (&quot;we,&quot; &quot;us,&quot;
          or &quot;our&quot;). This Privacy Policy outlines how we collect, use,
          and protect your personal and non-personal information when you use
          our website located at https://shipfa.st (the &quot;Website&quot;).
          {"\n"}
          {"\n"}By accessing or using the Website, you agree to the terms of
          this Privacy Policy. If you do not agree with the practices described
          in this policy, please do not use the Website.{"\n"}
          {"\n"}1. Information We Collect{"\n"}
          {"\n"}1.1 Personal Data{"\n"}
          {"\n"}We collect the following personal information from you:{"\n"}
          {"\n"}Name: We collect your name to personalize your experience and
          communicate with you effectively.{"\n"}Email: We collect your email
          address to send you important information regarding your orders,
          updates, and communication.{"\n"}Payment Information: We collect
          payment details to process your orders securely. However, we do not
          store your payment information on our servers. Payments are processed
          by trusted third-party payment processors.{"\n"}
          {"\n"}1.2 Non-Personal Data{"\n"}
          {"\n"}We may use web cookies and similar technologies to collect
          non-personal information such as your IP address, browser type, device
          information, and browsing patterns. This information helps us to
          enhance your browsing experience, analyze trends, and improve our
          services.{"\n"}
          {"\n"}2. Purpose of Data Collection{"\n"}
          {"\n"}We collect and use your personal data for the sole purpose of
          order processing. This includes processing your orders, sending order
          confirmations, providing customer support, and keeping you updated
          about the status of your orders.{"\n"}
          {"\n"}3. Data Sharing{"\n"}
          {"\n"}We do not share your personal data with any third parties except
          as required for order processing (e.g., sharing your information with
          payment processors). We do not sell, trade, or rent your personal
          information to others.{"\n"}
          {"\n"}4. Children&apos;s Privacy{"\n"}
          {"\n"}Observo is not intended for children under the age of 13. We do
          not knowingly collect personal information from children. If you are a
          parent or guardian and believe that your child has provided us with
          personal information, please contact us at the email address provided
          below.{"\n"}
          {"\n"}5. Updates to the Privacy Policy{"\n"}
          {"\n"}We may update this Privacy Policy from time to time to reflect
          changes in our practices or for other operational, legal, or
          regulatory reasons. Any updates will be posted on this page, and we
          may notify you via email about significant changes.{"\n"}
          {"\n"}6. Contact Information{"\n"}
          {"\n"}If you have any questions, concerns, or requests related to this
          Privacy Policy, you can contact us at:{"\n"}
          {"\n"}Email: marc@shipfa.st{"\n"}
          {"\n"}For all other inquiries, please visit our Contact Us page on the
          Website.{"\n"}
          {"\n"}By using Observo, you consent to the terms of this Privacy
          Policy.
        </pre>
      </div>
    </main>
  );
};

export default page;
