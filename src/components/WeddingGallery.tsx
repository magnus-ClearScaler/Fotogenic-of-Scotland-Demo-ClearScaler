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
    <div className="mx-auto max-w-[1100px]">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
        {images.map((src, idx) => {
          const aspect = aspects[idx % aspects.length];
          return (
            <div
              key={src + idx}
              className={`image-frame ${aspect} relative`}
            >
              <Image
                src={src}
                alt={`${alt}, photograph ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 360px"
                className="object-cover"
                loading={idx < 6 ? "eager" : "lazy"}
                quality={78}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
