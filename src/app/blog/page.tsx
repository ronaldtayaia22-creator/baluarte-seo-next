'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, Tag } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Post = {
  id: string;
  title: string;
  excerpt: string | null;
  slug: string;
  cover_image_url: string | null;
  published_at: string | null;
  tags: string[] | null;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });
      if (!isMounted) return;
      setPosts(data || []);
      setLoading(false);
    };
    void load();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-16 section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-foreground mb-2">Blog</h1>
          <p className="text-muted-foreground font-body mb-10">
            Consejos de salud, guías y novedades de Clínica Baluarte.
          </p>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-6 animate-pulse h-48" />
              ))}
            </div>
          ) : !posts.length ? (
            <div className="text-center py-20 text-muted-foreground font-body">
              Próximamente publicaremos artículos. ¡Vuelve pronto!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-elevated transition-shadow"
                >
                  {post.cover_image_url && (
                    <img src={post.cover_image_url} alt={post.title} className="w-full h-40 object-cover" loading="lazy" />
                  )}
                  <div className="p-5 space-y-2">
                    <h2 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground font-body line-clamp-2">{post.excerpt}</p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-body pt-1">
                      {post.published_at && (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {format(new Date(post.published_at), 'd MMM yyyy', { locale: es })}
                        </span>
                      )}
                      {post.tags?.length ? (
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
                          {post.tags[0]}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
