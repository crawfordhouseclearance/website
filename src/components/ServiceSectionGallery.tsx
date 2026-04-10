type ServiceSectionGalleryProps = {
  images: readonly string[]
}

export default function ServiceSectionGallery({ images }: ServiceSectionGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((src) => (
        <div
          key={src}
          className="aspect-[4/3] overflow-hidden rounded-lg"
        >
          <img src={src} alt="" className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  )
}
