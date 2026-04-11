type ServiceSectionGalleryProps = {
  images: readonly { src: string; alt: string }[]
}

export default function ServiceSectionGallery({ images }: ServiceSectionGalleryProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((item) => (
        <div
          key={item.src}
          className="aspect-[4/3] overflow-hidden rounded-lg"
        >
          <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  )
}
