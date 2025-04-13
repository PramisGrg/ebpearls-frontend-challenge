import FeaturesList from "./features-list";

const Feature = () => {
  return (
    <section className="lg:px-24 px-6 lg:py-24 py-14 space-y-12">
      <header className="flex flex-col gap-2 w-full items-center text-center">
        <h1 className="text-4xl text-neutral-700">
          Outsource payment collection
        </h1>
        <p className="text-neutral-400 max-w-2xl">
          Faster and flexible access to cash flow from one or all your invoices.
        </p>
      </header>

      <FeaturesList />
    </section>
  );
};

export default Feature;
