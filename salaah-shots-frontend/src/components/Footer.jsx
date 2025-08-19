export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-px py-6 text-sm text-gray-500 flex items-center justify-between flex-wrap gap-2">
        <p>&copy; {new Date().getFullYear()} Salaah Shots. All rights reserved.</p>
        <p className="opacity-80">Built with React • Vite • Tailwind</p>
      </div>
    </footer>
  )
}
