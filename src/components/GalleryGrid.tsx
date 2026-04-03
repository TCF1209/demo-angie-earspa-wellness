"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { GALLERY_IMAGES } from "@/lib/constants";

interface GalleryGridProps {
  images: typeof GALLERY_IMAGES;
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<
    (typeof GALLERY_IMAGES)[number] | null
  >(null);

  // Split images into columns for masonry layout
  const getColumns = (count: number) => {
    const cols: (typeof GALLERY_IMAGES)[] = Array.from(
      { length: count },
      () => []
    );
    images.forEach((img, i) => {
      cols[i % count].push(img);
    });
    return cols;
  };

  const desktopCols = getColumns(3);
  const mobileCols = getColumns(2);

  return (
    <>
      {/* Desktop: 3-column masonry */}
      <div className="hidden md:flex gap-4">
        {desktopCols.map((col, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-4">
            {col.map((image, imgIdx) => {
              const globalIndex = colIdx + imgIdx * 3;
              return (
                <GalleryItem
                  key={image.src}
                  image={image}
                  index={globalIndex}
                  onClick={() => setSelectedImage(image)}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Mobile: 2-column masonry */}
      <div className="flex md:hidden gap-3">
        {mobileCols.map((col, colIdx) => (
          <div key={colIdx} className="flex-1 flex flex-col gap-3">
            {col.map((image, imgIdx) => {
              const globalIndex = colIdx + imgIdx * 2;
              return (
                <GalleryItem
                  key={image.src}
                  image={image}
                  index={globalIndex}
                  onClick={() => setSelectedImage(image)}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(null);
        }}
      >
        <DialogContent
          className="max-w-3xl sm:max-w-4xl p-0 overflow-hidden bg-heritage border-none"
          showCloseButton
        >
          {selectedImage && (
            <div className="flex flex-col">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-cn-heading text-lg text-cream">
                  {selectedImage.captionCN}
                </p>
                <p className="font-display text-sm text-blush-light mt-1">
                  {selectedImage.captionEN}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

function GalleryItem({
  image,
  index,
  onClick,
}: {
  image: (typeof GALLERY_IMAGES)[number];
  index: number;
  onClick: () => void;
}) {
  // Vary aspect ratios for masonry visual interest
  const aspects = [
    "aspect-[3/4]",
    "aspect-[4/5]",
    "aspect-square",
    "aspect-[3/4]",
    "aspect-[5/6]",
  ];
  const aspectClass = aspects[index % aspects.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.06,
      }}
      onClick={onClick}
      className={`relative ${aspectClass} rounded-xl overflow-hidden cursor-pointer group`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-blush/0 group-hover:bg-blush/60 transition-all duration-500 ease-out" />

      {/* Caption that slides up on hover */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="bg-gradient-to-t from-heritage/80 to-transparent px-4 py-4 pt-8">
          <p className="font-cn-heading text-base text-cream font-medium">
            {image.captionCN}
          </p>
          <p className="font-display text-sm text-blush-light">
            {image.captionEN}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
