// src/app/book/[slug]/page.js
import axios from "axios";
import { notFound } from "next/navigation";

export default async function BookDetails({ params }) {
  const { slug } = params; // ✅ no need to await
  console.log("slug:", slug);

  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}books/list`);
    const allBooks = res.data?.data || [];
    console.log("allBooks:", allBooks);

    const decodedSlug = decodeURIComponent(slug);
    const book = allBooks.find((b) => b.slug === decodedSlug);

    console.log("book found:", book);

    // ✅ 3. Handle missing case
    if (!book) return notFound();

    // ✅ 4. Render the page
    return (
      <div className="container mx-auto py-10 px-5">
        {/* ✅ Book Image Center */}
        {/* {book.image && (
        <div className="flex justify-center mb-10">
          <img
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${book.image}`}
            alt={book.name}
            className="rounded-2xl shadow-lg w-full max-w-5xl object-cover h-[420px]"
          />
        </div>
        )} */}

        {/* ✅ Title and Info */}
        <h1 className="text-3xl font-semibold mb-4 text-right text-white dark:text-gray-800">
          {book.name}
        </h1>
        <p className="text-gray-500 mb-6 text-right dark:text-gray-600">
          {book.category?.name} • {book.published_at}
        </p>

        {/* ✅ Urdu/HTML Text */}
        <div
          className="prose max-w-none text-right leading-relaxed text-lg text-gray-800 dark:text-gray-900"
          dir="rtl"
          dangerouslySetInnerHTML={{ __html: book.text }}
        />
      </div>
    );
  } catch (error) {
    console.error("error:", error);
    return notFound();
  }
}
