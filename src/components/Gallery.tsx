type GalleryItem = {
  src: string;
  label?: string;
};

type GalleryProps = {
  /** Real image paths (with optional captions), once available. Falls back to placeholder tiles. */
  images?: GalleryItem[];
};

const placeholderImages: GalleryItem[] = Array.from({ length: 8 }, (_, i) => ({ src: `placeholder-${i}` }));

export default function Gallery({ images = placeholderImages }: GalleryProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map(({ src, label }, i) => (
        <div key={`${src}-${i}`} className="glass-icon-square aspect-square overflow-hidden relative">
          {src.startsWith('placeholder-') ? (
            <div className="w-full h-full bg-gradient-to-br from-white/10 to-white/[0.02]" />
          ) : (
            <img src={src} alt={label ?? ''} loading="lazy" className="w-full h-full object-cover" />
          )}
          {label && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-2.5 pt-8 pb-2">
              <span className="text-[10px] font-mono uppercase tracking-wide text-white">{label}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
