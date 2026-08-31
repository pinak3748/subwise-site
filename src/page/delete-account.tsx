function DeleteAccount() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <img src="/logo.png" alt="Subwise Logo" className="mb-6 size-16" />

        <h1 className="mb-8 text-3xl font-bold">Delete Your Subwise Account</h1>

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
          </ul>
        </div>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Delete in the app (recommended)</h2>
        <ol className="mb-6 list-decimal space-y-2 pl-6">
          <li>Open Subwise and sign in</li>
          <li>Go to Settings</li>
          <li>Tap Delete Account and confirm</li>
        </ol>
        <p className="mb-6">
          This deletes your account, cloud subscription data, payment methods, transaction history, and
          local app preferences.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Request deletion by email</h2>
        <p className="mb-6">
          If you no longer have the app installed, email{' '}
          <a href="mailto:subwise.apps@gmail.com" className="text-primary hover:underline">
            subwise.apps@gmail.com
          </a>{' '}
          from the email address linked to your Subwise account with the subject line{' '}
          <strong>Delete my Subwise account</strong>. We will verify ownership and complete deletion
          within a reasonable time.
        </p>

        <h2 className="mt-8 mb-4 text-2xl font-semibold">Important: app store subscriptions</h2>
        <p className="mb-6">
          Deleting your Subwise account does <strong>not</strong> cancel a Google Play or App Store
          subscription. Cancel billing separately in your device&apos;s subscription settings. See our{' '}
          <a href="/terms" className="text-primary hover:underline">
            Terms &amp; Conditions
          </a>{' '}
          for cancellation steps.
        </p>

        <p className="mb-6">
          For privacy details, see our{' '}
          <a href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </article>
    </div>
  );
}

export default DeleteAccount;
