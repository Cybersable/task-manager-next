import { routesList } from "@/services/routes";
import Link from "next/link";

export default function MainPageHeader() {
  const navigationLinks = [
    {
      key: routesList.home.key,
      href: routesList.home.path,
      title: 'Home',
    },
    {
      key: routesList.tasks.key,
      href: routesList.tasks.path,
      title: 'Task manager',
    },
  ];

  return (
    <header className="inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-center p-6 lg:px-8" aria-label="Global">
        <div className="lg:flex lg:gap-x-12">
          {navigationLinks.map((link) => (
            <Link key={link.key} href={link.href} className="text-sm/6 font-semibold text-gray-900">{link.title}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}