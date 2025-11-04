export default function Features() {
  return (
    <section className="bg-background py-10" aria-labelledby="features-heading">
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="mx-auto flex max-w-2xl flex-col gap-2 text-center">
          <h2
            id="features-heading"
            className="text-foreground text-4xl leading-14 font-semibold md:text-5xl"
          >
            Most Users Save{" "}
            <span className="text-foreground decoration-primary underline decoration-6">
              $94/Month
            </span>{" "}
            in the First Week
          </h2>
          <p className="text-muted-foreground text-lg">
            Subwise shows every subscription you're paying for in one dashboard. Find forgotten
            services, see total spending, and take back control.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-24 max-w-6xl mx-auto">
          <div className="flex gap-3">
            <span className="bg-accent flex size-11 shrink-0 items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-lock h-5"
                aria-hidden="true"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-medium">100% Private & Secure</h3>
              <p className="text-muted-foreground leading-7">
              Your data stays on your device. We don't collect, sell, or share your information. Ever.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="bg-accent flex size-11 shrink-0 items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-globe h-5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-medium">40+ Popular Platforms</h3>
              <p className="text-muted-foreground leading-7">
              Pre-loaded with Netflix, Spotify, Figma, and hundreds more. Add custom subscriptions in seconds.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="bg-accent flex size-11 shrink-0 items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-list-checks h-5"
                aria-hidden="true"
              >
                <path d="m3 17 2 2 4-4"></path>
                <path d="m3 7 2 2 4-4"></path>
                <path d="M13 6h8"></path>
                <path d="M13 12h8"></path>
                <path d="M13 18h8"></path>
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-medium">Track Unlimited Subscriptions</h3>
              <p className="text-muted-foreground leading-7">
              No limits on tracking. Add every subscription from streaming services to business tools all in one place.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="bg-accent flex size-11 shrink-0 items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-zap h-5"
                aria-hidden="true"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-medium">Easy to Use</h3>
              <p className="text-muted-foreground leading-7">
              Clean interface, zero learning curve. Add subscriptions and view spending in seconds no complexity.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="bg-accent flex size-11 shrink-0 items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-credit-card h-5"
                aria-hidden="true"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
            </span>
            <div>
              <h3 className="text-lg font-medium">Smart Payment Tracking</h3>
              <p className="text-muted-foreground leading-7">
              See upcoming renewals, mark payments complete, and organize by payment method. Never miss a due date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
