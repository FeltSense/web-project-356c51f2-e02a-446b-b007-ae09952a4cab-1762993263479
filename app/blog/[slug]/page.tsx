import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '@/data/blog';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Article Not Found - FitForce Blog',
    };
  }

  return {
    title: `${post.title} - FitForce Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogArticle({ params }: PageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-black text-white py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-red-400 hover:text-red-300 font-semibold">
              ← Home
            </Link>
            <Link href="/blog" className="text-red-400 hover:text-red-300 font-semibold">
              ← All Articles
            </Link>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-200">{post.date}</span>
                <span className="text-gray-200">•</span>
                <span className="text-gray-200">{post.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-gray-200 max-w-3xl">{post.excerpt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-4 mb-8 pb-8 border-b">
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white text-lg font-bold">
              {post.author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-black">{post.author}</p>
            <p className="text-gray-600 text-sm">Fitness Expert</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('# ')) {
              return (
                <h2 key={index} className="text-3xl font-bold text-black mt-12 mb-6">
                  {paragraph.replace('# ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('## ')) {
              return (
                <h3 key={index} className="text-2xl font-bold text-black mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              const listItems = paragraph.split('\n').filter(item => item.startsWith('- '));
              return (
                <ul key={index} className="list-disc list-inside space-y-2 my-6">
                  {listItems.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700">
                      {item.replace('- ', '')}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-red-50 rounded-lg border border-red-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Transform Your Fitness Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Join FitForce today and get access to expert training, nutrition guidance, and a supportive community.
            </p>
            <Link
              href="/#pricing"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Start Your Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-black mb-8">More Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts
              .filter((relatedPost) => relatedPost.slug !== post.slug)
              .slice(0, 2)
              .map((relatedPost) => (
                <article key={relatedPost.id} className="group">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold">
                          {relatedPost.category}
                        </span>
                        <span>{relatedPost.date}</span>
                      </div>
                      <h4 className="text-xl font-bold text-black group-hover:text-red-600 transition-colors duration-300">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}