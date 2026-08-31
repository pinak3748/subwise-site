function PrivacyPolicy() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <img src="/logo.png" alt="Subwise Logo" className="mb-6 size-16" />

        <h1 className="mb-8 text-3xl font-bold">Privacy Policy</h1>

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
          This Privacy Policy describes how Subwise (&quot;Application&quot;, &quot;we&quot;, &quot;us&quot;)
          collects, uses, stores, and deletes information when you use the Subwise mobile app. Subwise
          is a subscription-tracking app that requires an account and a paid subscription to use its
          features.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Information We Collect</h2>

        <h3 className="mt-6 mb-3 text-xl font-semibold">Account information</h3>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>Name and email address when you create an account or sign in</li>
          <li>Profile photo URL if you sign in with Google</li>
          <li>Firebase user ID used to identify your account</li>
        </ul>

        <h3 className="mt-6 mb-3 text-xl font-semibold">Subscription and financial data you enter</h3>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>Subscription names, amounts, currencies, billing cycles, and notes</li>
          <li>Payment method labels and metadata you choose to save (for example, last four digits or UPI ID)</li>
          <li>Transaction history linked to your subscriptions</li>
        </ul>

        <h3 className="mt-6 mb-3 text-xl font-semibold">Purchase information</h3>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>Subwise premium subscription and purchase history processed through Google Play or the Apple App Store via RevenueCat</li>
        </ul>

        <h3 className="mt-6 mb-3 text-xl font-semibold">Device and app preferences</h3>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>Notification preferences (reminder timing and settings) stored on your device</li>
          <li>Onboarding and app setup status stored on your device</li>
        </ul>

        <h3 className="mt-6 mb-3 text-xl font-semibold">Information we do not collect</h3>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>Precise or approximate location</li>
          <li>Contacts, photos, camera, microphone, or SMS data</li>
          <li>Advertising identifiers for ad targeting</li>
          <li>In-app analytics or crash-reporting SDK data beyond what our service providers process</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">How We Use Information</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>Create and manage your account</li>
          <li>Store and sync your subscription data in the cloud</li>
          <li>Send local renewal reminders if you enable notifications</li>
          <li>Process and validate premium subscriptions</li>
          <li>Respond to support requests and legal obligations</li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Where Data Is Stored</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>
            <strong>Cloud:</strong> Firebase Authentication and Cloud Firestore (Google) store your account
            and subscription data under your user ID
          </li>
          <li>
            <strong>On your device:</strong> SharedPreferences store notification and onboarding settings;
            scheduled reminders are stored locally by the operating system
          </li>
        </ul>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Third-Party Services</h2>
        <p className="mb-4">
          We use trusted third-party services to operate Subwise. Each provider processes data according
          to its own privacy policy:
        </p>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Firebase
            </a>{' '}
            — authentication and cloud database
          </li>
          <li>
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              RevenueCat
            </a>{' '}
            — subscription management
          </li>
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Play Services / Google Play Billing
            </a>{' '}
            — in-app purchases on Android
          </li>
        </ul>

        <p className="mb-6">
          We do not sell your personal information. We share data only with these service providers as
          needed to deliver the Application.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Account and Data Deletion</h2>
        <p className="mb-4">You can delete your account and associated app data in the following ways:</p>
        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>
            <strong>In the app:</strong> Settings → Delete Account. This deletes your Firebase account,
            cloud subscription data, payment methods, transaction history, and local app preferences.
          </li>
          <li>
            <strong>If you uninstalled the app:</strong> email{' '}
            <a href="mailto:subwise.apps@gmail.com" className="text-primary hover:underline">
              subwise.apps@gmail.com
            </a>{' '}
            from the email address linked to your account, or visit our{' '}
            <a href="/delete-account" className="text-primary hover:underline">
              account deletion page
            </a>
            .
          </li>
        </ul>
        <p className="mb-6">
          Deleting your Subwise account does <strong>not</strong> automatically cancel a Google Play or
          App Store subscription. You must cancel billing separately in your device&apos;s subscription
          settings.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Data Retention</h2>
        <p className="mb-6">
          We retain your data while your account is active. When you delete your account, we delete the
          associated cloud and local app data described above. We may retain limited information where
          required by law or for fraud prevention.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Security</h2>
        <p className="mb-6">
          We use industry-standard safeguards, including encrypted connections (HTTPS/TLS) for data sent
          to our cloud providers. No method of transmission or storage is completely secure.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Children</h2>
        <p className="mb-6">
          Subwise is not directed to children under 13, and we do not knowingly collect personal
          information from children under 13. Contact us if you believe a child has provided personal
          information.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. We will post the updated policy on this
          page and update the effective date above.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Contact Us</h2>
        <p className="mb-6">
          Questions about this Privacy Policy or your data? Contact{' '}
          <a href="mailto:subwise.apps@gmail.com" className="text-primary hover:underline">
            subwise.apps@gmail.com
          </a>
          .
        </p>
      </article>
    </div>
  );
}

export default PrivacyPolicy;
