import Link from 'next/link';

const SchoolOfProduct = () => {
  return (
    <section className="flex px-8 py-16 items-center justify-between gap-4">
      <Link href="/" className="hover:text-blue-800 text-blue-600">
        Back to homepage
      </Link>
      School of Product
    </section>
  );
};

export default SchoolOfProduct;
