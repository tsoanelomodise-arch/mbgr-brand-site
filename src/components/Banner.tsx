import bannerAsset from "@/assets/AdobeStock_1771150921_Optimized.jpg.asset.json";

export const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden animate-fade-in">
      <div className="relative h-[320px] md:h-[520px] w-full">
        <img
          src={bannerAsset.url}
          alt="Confident woman standing still amid a blur of people in motion"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute bottom-8 md:bottom-14 left-6 md:left-16 flex items-center gap-4 md:gap-6">
          <span className="block h-10 md:h-14 w-[3px] bg-[#D1AB66]" />
          <p className="text-2xl md:text-5xl font-bold tracking-tight text-white">
            Replace. Reconnect. Keep Moving.
          </p>
        </div>
      </div>
    </section>
  );
};
