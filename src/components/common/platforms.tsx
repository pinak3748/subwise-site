"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Marquee } from "@/components/ui/marquee";
import { useState } from "react";

const PLATFORMS = [
  "Netflix",
  "Spotify",
  "YouTube Premium",
  "Hulu",
  "Disney+",
  "HBO Max",
  "Notion",
  "Slack",
  "Microsoft 365",
  "Dropbox",
  "Google One",
  "iCloud",
  "Figma",
  "Dribbble",
  "GitHub",
  "OpenAI",
  "Medium",
  "Audible",
  "Calendly",
  "Canva",
  "Crunchyroll",
  "La Fitness",
  "LinkedIn",
  "Loom",
  "Nintendo",
  "Planet Fitness",
  "Play Station",
  "Prime Video",
  "Strava",
  "Xbox",
  "Claude",
  "Gemini",
];

/**
 * Helper function to get platform logo URL
 *
 * Note: Clearbit API has CORS restrictions that prevent direct browser access.
 *
 * Current solution: Using Google Favicon API which works client-side.
 *
 * For better quality logos, consider:
 * 1. Host logos yourself in /public/logos/ folder
 * 2. Use your own logo API endpoint
 * 3. Set up a proxy server to fetch Clearbit logos server-side
 * 4. Use a service like Logo.dev or Simple Icons
 */
const getPlatformLogoUrl = (platformName: string): string => {
  // Convert platform name to a format suitable for logo API
  const normalizedName = platformName
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\+/g, "")
    .replace(/premium/gi, "")
    .replace(/365/gi, "")
    .replace(/one/gi, "")
    .replace(/playstation/gi, "playstation")
    .replace(/lafitness/gi, "lafitness")
    .replace(/planetfitness/gi, "planetfitness")
    .replace(/primevideo/gi, "primevideo");

  // Domain mapping for platforms
  const domainMap: Record<string, string> = {
    netflix: "netflix.com",
    spotify: "spotify.com",
    youtube: "youtube.com",
    hulu: "hulu.com",
    disney: "disney.com",
    hbomax: "hbomax.com",
    notion: "notion.so",
    slack: "slack.com",
    microsoft: "microsoft.com",
    dropbox: "dropbox.com",
    google: "google.com",
    icloud: "icloud.com",
    figma: "figma.com",
    dribbble: "dribbble.com",
    github: "github.com",
    openai: "openai.com",
    medium: "medium.com",
    audible: "audible.com",
    calendly: "calendly.com",
    canva: "canva.com",
    crunchyroll: "crunchyroll.com",
    lafitness: "lafitness.com",
    linkedin: "linkedin.com",
    loom: "loom.com",
    nintendo: "nintendo.com",
    planetfitness: "planetfitness.com",
    playstation: "playstation.com",
    primevideo: "amazon.com",
    strava: "strava.com",
    xbox: "xbox.com",
    claude: "anthropic.com",
    gemini: "google.com",
  };

  const domain = domainMap[normalizedName] || `${normalizedName}.com`;

  // Using Google Favicon API - works client-side, no CORS issues
  // Size 128 gives better quality than default 16px
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

  // Alternative options (uncomment and modify as needed):

  // Option 1: Host logos yourself (recommended for production)
  // Place logos in /public/logos/ folder named like: netflix.png, spotify.png, etc.
  // return `/logos/${normalizedName}.png`;

  // Option 2: Use your own logo API endpoint
  // return `https://your-api.com/logos/${normalizedName}`;

  // Option 3: Use DuckDuckGo favicon service (alternative)
  // return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
};

// Platform Card Component for Marquee
const PlatformCard = ({ platform }: { platform: string }) => {
  return (
    <div className="group hover:bg-accent flex min-w-[120px] cursor-pointer flex-col items-center justify-center rounded-lg p-4 transition-colors">
      <img
        src={getPlatformLogoUrl(platform)}
        alt={`${platform} logo`}
        className="mb-2 h-12 w-12 object-contain"
        onError={(e) => {
          // Fallback to a placeholder if logo fails to load
          const target = e.target as HTMLImageElement;
          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(platform)}&background=random&size=128`;
        }}
      />
      <span className="text-muted-foreground text-center text-xs font-medium">{platform}</span>
    </div>
  );
};

export default function Platforms() {
  const [formData, setFormData] = useState({
    platformName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submittedPlatform, setSubmittedPlatform] = useState("");
  const [errors, setErrors] = useState<{
    platformName?: string;
    email?: string;
  }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { platformName?: string; email?: string } = {};
    const trimmedPlatformName = formData.platformName.trim();
    const trimmedEmail = formData.email.trim();

    // Validate platform name
    if (!trimmedPlatformName) {
      newErrors.platformName = "Platform name is required";
    } else if (trimmedPlatformName.length > 50) {
      newErrors.platformName = "Platform name must be 50 characters or less";
    } else if (trimmedPlatformName.length < 2) {
      newErrors.platformName = "Platform name must be at least 2 characters";
    }

    // Validate email (optional but if provided, must be valid)
    if (trimmedEmail) {
      if (trimmedEmail.length > 100) {
        newErrors.email = "Email must be 100 characters or less";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const webhookUrl =
        "https://discord.com/api/webhooks/1435260444557316216/5AJYCGPqxVnaEoMksu0uMhFQRfqJg2eQ7hIwWLGRM8F8WMQ4v1Bow_3eqVQcXikH01Dx";

      // Trim values before sending
      const trimmedPlatformName = formData.platformName.trim();
      const trimmedEmail = formData.email.trim();

      // Create Discord embed message
      const embed = {
        title: "🆕 New Platform Request",
        color: 0x6366f1, // Indigo color
        fields: [
          {
            name: "Platform Name",
            value: trimmedPlatformName || "Not provided",
            inline: true,
          },
          {
            name: "Email",
            value: trimmedEmail || "Not provided",
            inline: true,
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Subwise Platform Request",
        },
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          embeds: [embed],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message to Discord");
      }

      setSubmittedPlatform(trimmedPlatformName);
      setSubmitStatus("success");
      setFormData({ platformName: "", email: "" });
      setErrors({});

      // Reset status message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setSubmittedPlatform("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting platform request:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-background py-10" aria-labelledby="platforms-heading">
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col gap-2 text-center">
          <h2
            id="platforms-heading"
            className="text-foreground text-4xl leading-14 font-semibold md:text-5xl"
          >
            Supported{" "}
            <span className="text-foreground decoration-primary underline decoration-6">
              Platforms
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Track subscriptions from 32+ popular platforms. Don't see your platform? Request it
            below and we'll add it!
          </p>
        </div>

        {/* Platforms Marquee */}
        <div className="relative mx-auto mb-16 max-w-6xl">
          <Marquee className="[--duration:50s]">
            {PLATFORMS.map((platform) => (
              <PlatformCard key={platform} platform={platform} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l"></div>
        </div>

        {/* Request Form Section */}
        <div className="mx-auto w-full max-w-xl">
        <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Recommend a Platform</CardTitle>
              <CardDescription>
                Let us know which platform you'd like to see supported.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="platformName">Platform Name</Label>
                  <Input
                    id="platformName"
                    name="platformName"
                    type="text"
                    value={formData.platformName}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Adobe Creative Cloud"
                    maxLength={50}
                    className={errors.platformName ? "border-destructive" : ""}
                  />
                  {errors.platformName && (
                    <p className="text-sm text-destructive">{errors.platformName}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {formData.platformName.length}/50 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Your Email{" "}
                    {/* <span className="text-muted-foreground font-normal">(Optional)</span> */}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    maxLength={100}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                  {formData.email && (
                    <p className="text-xs text-muted-foreground">
                      {formData.email.length}/100 characters
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.platformName.trim()}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>

                {submitStatus === "success" && (
                  <div className="rounded-md bg-green-50 p-3 text-center text-sm text-green-700 dark:bg-green-950 dark:text-green-400">
                    ✓ Thanks! We'll consider adding{" "}
                    {submittedPlatform || "this platform"}.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="rounded-md bg-destructive/10 p-3 text-center text-sm text-destructive">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
