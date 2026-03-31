'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import { es, enGB, eu, fr } from "date-fns/locale";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLocale } from "@/hooks/useLocale";
import { t } from "@/lib/i18n";
import { withPublicPath } from "@/lib/publicSite";

const dateLocales = {
  es,
  en: enGB,
  eu,
  fr,
} as const;

type Post = {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  meta_title: string | null;
  meta_description: string | null;
  author_name: string | null;
  published_at: string | null;
  cover_image_url: string | null;
  tags: string[] | null;
};

export default function BlogPostPage() {
  const params = useParams<{ slug: string | string[] }>();
  const slugValue = params?.slug;
  const slug = Array.isArray(slugValue) ? slugValue[0] : slugValue;
  const [locale] = useLocale();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;
    const load = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();
      if (!isMounted) return;
      setPost(data ?? null);
      setLoading(false);
    };
    void load();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-background min-h-screen">
        <main className="pt-32 pb-16 section-padding max-w-3xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-2/3" />
            <div className="h-4 bg-muted rounded w-1/3" />
            <div className="h-64 bg-muted rounded" />
          </div>
        </main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-background min-h-screen">
        <main className="pt-32 pb-16 section-padding max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">{t("pub.articleNotFound")}</h1>
          <Link href={withPublicPath("/blog")} className="text-primary hover:underline font-body">
            ← {t("pub.backToBlog")}
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <main className="pt-32 pb-16 section-padding max-w-3xl mx-auto">
        <Link href={withPublicPath("/blog")} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary font-body mb-6">
          <ArrowLeft className="w-4 h-4" /> {t("pub.backToBlog")}
        </Link>

        {post.cover_image_url && (
          <img src={post.cover_image_url} alt={post.title} className="w-full h-64 object-cover rounded-xl mb-8" />
        )}

        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-8">
          {post.author_name && (
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" /> {post.author_name}
            </span>
          )}
          {post.published_at && (
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.published_at), 'd MMMM yyyy', { locale: dateLocales[locale] })}
            </span>
          )}
        </div>

        <article className="prose prose-sm max-w-none font-body text-foreground/80">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {post.tags?.length ? (
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs font-body bg-muted text-muted-foreground rounded-full">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </main>
    </div>
  );
}
