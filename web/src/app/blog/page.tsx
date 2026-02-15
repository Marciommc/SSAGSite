import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata = {
    title: "Blog | SSAG Tecnologia",
    description: "Artigos e insights sobre tecnologia e gestão.",
};

export default function BlogIndex() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">Blog & Insights</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Conhecimento técnico e estratégico para impulsionar seu negócio.
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="flex max-w-xl flex-col items-start justify-between bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.date} className="text-gray-500">
                                    {new Date(post.date).toLocaleDateString()}
                                </time>
                                <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                                    Artigo
                                </span>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${post.slug}`}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {post.excerpt}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
