import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-6">
          <Link href="/admin" className="block px-6 py-3 text-gray-700 hover:bg-gray-50">
            Dashboard
          </Link>
          <Link href="/admin/contests" className="block px-6 py-3 text-gray-700 hover:bg-gray-50">
            Contests
          </Link>
          <Link href="/admin/users" className="block px-6 py-3 text-gray-700 hover:bg-gray-50">
            Users
          </Link>
          <Link
            href="/admin/assessments"
            className="block px-6 py-3 text-gray-700 hover:bg-gray-50"
          >
            Assessments
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">{children}</div>
    </div>
  );
}
