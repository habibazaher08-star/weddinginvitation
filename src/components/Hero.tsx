export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center text-center px-6 pb-20">
      <div
        className="max-w-4xl flex flex-col items-center gap-8"
        style={{ paddingTop: "170px" }}
      >
        <h2 className="text-5xl dancing-script">Mohamed & Menna</h2>

        <p className="max-w-xs text-xl leading-8 italiana-regular">
          Together with their families, invite you to celebrate their wedding
        </p>

        <p className="text-4xl italiana-regular">07.09.2026</p>

        <p className="max-w-xs text-xl leading-8 italiana-regular">
          Join us as we mark the beginning of our forever
        </p>

        <p
          className="text-lg tracking-[0.3em] uppercase dancing-script"
          style={{ paddingTop: "50px" }}
        >
          At
        </p>

        <h3 className="text-4xl italiana-regular">White Cottage</h3>

        <p className="text-lg tracking-[0.3em] uppercase dancing-script">
          At
        </p>

        <h3 className="text-3xl italiana-regular">5 PM</h3>

<div className="flex flex-col -mt-8">
  <p className="max-w-xs text-xl leading-8 italiana-regular">
    The celebration starts at 5 PM.
  </p>

  <p className="max-w-xs text-xl leading-8 italiana-regular">
    Don't be late , we'll be dancing until twelve o'clock sharp.
  </p>
</div>

      </div>
    </section>
  );
}