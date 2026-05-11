import Image from "next/image";

const aspects = [
  "aspect-[3/2]",
  "aspect-[2/3]",
  "aspect-[4/5]",
  "aspect-[3/2]",
  "aspect-[5/4]",
  "aspect-[2/3]",
];

export function WeddingGallery({
  images,
  alt,
}: {
  images: readonly string[];
  alt: string;
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
      {images.map((src, idx) => {
        const aspect = aspects[idx % aspects.length];
        return (
          <div
            key={src + idx}
            className={`image-frame ${aspect} relative ${
              idx % 7 === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <Image
              src={src}
              alt={`${alt}, photograph ${idx + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
              className="object-cover"
              loading={idx < 6 ? "eager" : "lazy"}
              quality={82}
            />
          </div>
        );
      })}
    </div>
  );
}
