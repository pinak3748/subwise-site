function TermsAndConditions() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <img src="/logo.png" alt="Subwise Logo" className="mb-6 size-16" />

        <h1 className="mb-8 text-3xl font-bold">Terms &amp; Conditions</h1>

        <div className="not-prose mb-8 rounded-lg border bg-muted/40 p-4 text-sm">
          <p className="mb-2 font-semibold">App &amp; Developer Information</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              <strong className="text-foreground">App name:</strong> Subwise - Track Subscriptions
            </li>
            <li>
              <strong className="text-foreground">Package name:</strong> com.subwise.app
            </li>
            <li>
              <strong className="text-foreground">Developer:</strong> Pinak Faldu
            </li>
            <li>
              <strong className="text-foreground">Contact:</strong>{' '}
              <a href="mailto:subwise.apps@gmail.com" className="text-primary hover:underline">
                subwise.apps@gmail.com
              </a>
            </li>
            <li>
              <strong className="text-foreground">Effective date:</strong> August 31, 2026
            </li>
          </ul>
        </div>

        <p className="mb-6">
          These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of the Subwise mobile app
          (&quot;Application&quot;, &quot;Service&quot;) provided by Pinak Faldu (&quot;Service
          Provider&quot;, &quot;we&quot;, &quot;us&quot;). By creating an account or using Subwise, you
          agree to these Terms.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">1. Service Description</h2>
        <p className="mb-6">
          Subwise helps you track subscriptions and recurring expenses. An account is required to use
          the Application. Premium features require an active paid subscription or lifetime purchase as
          shown in the app at the time of purchase.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">2. Subscription Services</h2>

        <h3 className="mt-6 mb-4 text-xl font-semibold">2.1 Available plans</h3>
        <p className="mb-4">
          Subwise may offer auto-renewable subscriptions (such as weekly or annual plans) and, where
          available, a one-time lifetime purchase. Current prices, billing periods, and plan names are
          always shown in the app and in Google Play or the Apple App Store at the time of purchase.
        </p>
        <p className="mb-6 text-sm italic">
          Prices may vary by region, currency, and platform. The price displayed in the app at checkout
          is the price you will be charged.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-semibold">2.2 Auto-renewal</h3>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>Subscriptions automatically renew unless cancelled before the end of the current period</li>
          <li>
            Your app store account is charged for renewal within 24 hours before the current period ends
          </li>
          <li>
            You can manage or cancel subscriptions in your device&apos;s app store subscription settings
          </li>
          <li>Lifetime purchases are one-time payments and do not auto-renew</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">3. Payment and Billing</h2>
        <p className="mb-6">
          All payments are processed by Google Play or the Apple App Store. We do not store your full
          payment card details. Billing, refunds, and payment disputes are handled according to the
          policies of the app store where you purchased.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">4. Cancellation</h2>

        <p className="mb-4">
          <strong>For Android users:</strong>
        </p>
        <ol className="mb-6 list-decimal space-y-2 pl-6">
          <li>Open the Google Play Store app</li>
          <li>Tap your profile icon → Payments &amp; subscriptions → Subscriptions</li>
          <li>Select Subwise and tap Cancel subscription</li>
        </ol>

        <p className="mb-4">
          <strong>For iOS users:</strong>
        </p>
        <ol className="mb-6 list-decimal space-y-2 pl-6">
          <li>Open Settings on your iPhone or iPad</li>
          <li>Tap your name → Subscriptions</li>
          <li>Select Subwise and tap Cancel Subscription</li>
        </ol>

        <p className="mb-6">
          Cancelling a subscription stops future charges but does not delete your Subwise account. You
          can delete your account separately in Settings → Delete Account.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">5. Refunds</h2>
        <p className="mb-6">
          Refund requests must be submitted through Google Play or the Apple App Store. Subwise does not
          control app store refund decisions.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">6. Free Trials</h2>
        <p className="mb-6">
          If a free trial is offered for a subscription plan, the trial length and price after the trial
          will be shown in the app and app store checkout flow. You will be charged when the trial ends
          unless you cancel before it expires.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">7. Your Data</h2>
        <p className="mb-6">
          Subwise stores the subscription information you enter and syncs it to the cloud so you can
          access it across sessions. Our use of your data is described in our{' '}
          <a href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">8. Acceptable Use</h2>
        <p className="mb-6">
          You may not copy, modify, reverse engineer, or misuse the Application. All intellectual
          property rights in Subwise remain with the Service Provider.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">9. Third-Party Services</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Play Services
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Firebase
            </a>
          </li>
          <li>
            <a
              href="https://www.revenuecat.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              RevenueCat
            </a>
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">10. Changes</h2>
        <p className="mb-6">
          We may update these Terms from time to time. Continued use of the Application after changes
          are posted constitutes acceptance of the updated Terms.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Contact</h2>
        <p className="mb-6">
          Questions about these Terms or your subscription? Email{' '}
          <a href="mailto:subwise.apps@gmail.com" className="text-primary hover:underline">
            subwise.apps@gmail.com
          </a>
          . For billing issues, you can also use Restore Purchases in the app.
        </p>
      </article>
    </div>
  );
}

export default TermsAndConditions;
