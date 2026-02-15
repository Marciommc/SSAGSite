import Link from "next/link";
import { getPostBySlug, blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getPostBySlug(params.slug);
    if (!post) return { title: "Post não encontrado" };
    return {
        title: `${post.title} | Blog SSAG`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPost({ params }: Props) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-white px-6 py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <Link href="/blog" className="text-primary hover:text-secondary mb-8 block">
                    &larr; Voltar para o Blog
                </Link>
                <p className="text-base font-semibold leading-7 text-secondary">
                    {new Date(post.date).toLocaleDateString()}
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
                    {post.title}
                </h1>
                <div className="mt-10 max-w-2xl prose prose-lg prose-indigo">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
            </div>
        </div>
    );
}
