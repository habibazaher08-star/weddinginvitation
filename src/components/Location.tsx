export default function Location() {
  return (
     <section className="w-full flex flex-col items-center text-center py-40 px-6">
      <div className="max-w-3xl flex flex-col items-center gap-8">
        <h2 className="text-4xl italiana-regular" style={{ paddingTop: "120px" }}>
          Wedding Venue
        </h2>

        <div className="rounded-2xl overflow-hidden border border-[#D4AF37]">
          <iframe
            src="https://maps.google.com/maps?q=30.206625,31.541132&t=&z=15&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            className="w-full max-w-[350px] h-[220px]"
          />
        </div>
        <a
          href="https://maps.google.com/?q=30.206625,31.541132"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-10 py-5
            border
            border-[#D4AF37]
            rounded-full
            hover:bg-[#D4AF37]
            hover:text-[#4d0b1f]
            transition-all
           italiana-regular
          "
        >
          Open In Google Maps
        </a>

      </div>

      

    </section>
  );
}