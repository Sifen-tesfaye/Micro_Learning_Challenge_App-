export default function TrustSignalsSection({ items }) {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-[1440px] mx-auto flex flex-wrap justify-around gap-12">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-4xl md:text-6xl font-black text-on-surface mb-2 tracking-tighter">
              {item.value}
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
