import Link from "next/link";

export default function MainPageHeader() {
  return (
    <header className="inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-center p-6 lg:px-8" aria-label="Global">
        <div className="lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm/6 font-semibold text-gray-900">Home</Link>
          <Link href="/tasks" className="text-sm/6 font-semibold text-gray-900">Task manager</Link>
        </div>
      </nav>
    </header>
  );
}