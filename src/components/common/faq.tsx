"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  const faqItems = [
    {
      id: "item-1",
      question: "How does Subwise work?",
      answer:
        "Subwise helps you track all your recurring payments in one place. Simply add your subscriptions (Netflix, Spotify, etc.), and the app shows your total spending, upcoming payments, and spending trends. No bank login required—you add subscriptions manually for complete privacy.",
    },
    {
      id: "item-2",
      question: "Do I need to connect my bank account?",
      answer:
        "No. Subwise never asks for your bank login or credit card information. You manually add subscriptions, which means your financial data stays completely private and secure on your device.",
    },
    {
      id: "item-3",
      question: "What's included in the free plan?",
      answer:
        "The free plan lets you track up to 3 subscriptions forever. You get access to the dashboard, spending insights, and payment reminders. Upgrade to Premium ($4.99/month or $39/year) to track unlimited subscriptions.",
    },
    {
      id: "item-4",
      question: "How is this different from other budgeting apps?",
      answer:
        "Subwise does one thing perfectly: track subscriptions. We're not a full budgeting app—we focus exclusively on helping you see and manage recurring payments. No complexity, no feature bloat, just simple subscription tracking.",
    },
    {
      id: "item-5",
      question: "Can I track custom subscriptions?",
      answer:
        "Yes! While we have 40+ popular services pre-loaded (Netflix, Spotify, Figma, etc.), you can add any custom subscription. Just enter the name, amount, and billing frequency—done.",
    },
  ];

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div>
          <h2 className="text-foreground text-4xl font-semibold">
            Frequently Asked{" "}
            <span className="text-foreground decoration-primary underline decoration-6">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg text-balance">
            Discover quick and comprehensive answers to common questions about our platform,
            services, and features.
          </p>
        </div>

        <div className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-foreground/5 w-full rounded-(--radius) border border-transparent px-8 py-3 shadow ring-1"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-dotted">
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6">
            Can't find what you're looking for? Contact our{" "}
            {/* <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            customer support team
                        </Link> */}
                        <a
                        href="mailto:subwise.apps@gmail.com"
                         className="text-primary font-medium hover:underline">
                            subwise.apps@gmail.com
                        </a>
          </p>
        </div>
      </div>
    </section>
  );
}
