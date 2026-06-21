"use client";

import { useState, useTransition } from "react";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { toggleFavoriteAction } from "@/lib/actions/favorites";

type FavoriteButtonProps = {
  postId: number;
  postSlug: string;
  initialFavorited: boolean;
};

export function FavoriteButton({
  postId,
  postSlug,
  initialFavorited,
}: FavoriteButtonProps) {
  const [pending, startTransition] = useTransition();
  const [favorited, setFavorited] = useState(initialFavorited);

  return (
    <Button
      type="button"
      variant={favorited ? "default" : "outline"}
      size="sm"
      disabled={pending}
      className={
        favorited
          ? "bg-rose-600 text-white hover:bg-rose-700"
          : "border-stone-300 dark:border-stone-600"
      }
      onClick={() => {
        startTransition(async () => {
          const result = await toggleFavoriteAction(postId, postSlug);
          setFavorited(result.favorited);
        });
      }}
    >
      <Heart className={`size-4 ${favorited ? "fill-current" : ""}`} />
      {favorited ? "در علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
    </Button>
  );
}
