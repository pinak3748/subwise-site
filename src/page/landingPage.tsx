import AllScreens from "@/components/common/allScreens"
import FAQs from "@/components/common/faq"
import Features from "@/components/common/features"
import { Footer } from "@/components/common/footer"
import { Hero } from "@/components/common/hero"
import { Twitter } from "lucide-react"

function LandingPage() {
  const footerData = {
    logo: <img src="/logo.png" alt="Subwise Logo" className="h-8 w-8" />,
    brandName: "Subwise",
    socialLinks: [
      {
        icon: <Twitter className="h-5 w-5 fill-gray-500 stroke-gray-500 hover:fill-primary hover:stroke-primary" />,
        href: "https://x.com/_subwise",
        label: "Twitter",
      },
    ],
    mainLinks: [
      { href: "#features", label: "Features" },
      { href: "#faq", label: "FAQ" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    legalLinks: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
    copyright: {
      text: `© ${new Date().getFullYear()} Subwise. All rights reserved.`,
    },
  }

  return (
    <div>
      <Hero />
      <Features/>
      {/* <Pricing /> */}
      <AllScreens />
      <FAQs />
      <Footer {...footerData} />
    </div>
  )
}

export default LandingPage
