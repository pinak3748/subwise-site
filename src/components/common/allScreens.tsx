
function AllScreens() {
  return (
    <section className="py-10 bg-white" aria-labelledby="all-screens-heading">
      <div className="container  mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="mx-auto flex max-w-2xl flex-col gap-2 text-center">
          <h2
            id="all-screens-heading"
            className="text-foreground text-4xl leading-14 font-semibold md:text-5xl"
          >
            See Every{" "}
            <span className="text-foreground decoration-primary underline decoration-6">
            Subscription
            </span>{" "}
            Control Every{" "}
            <span className="text-foreground decoration-primary underline decoration-6">
            Dollar.
            </span>{" "}
          </h2>
          <p className="text-muted-foreground text-lg">
          Add subscriptions in seconds, visualize your spending, and track payments—all in one beautiful dashboard.
          </p>
        </div>

        <div>
            <img src="/Shot.png" alt="All Screens" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default AllScreens
