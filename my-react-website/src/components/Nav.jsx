export default function Nav() {
    return (
        <div>
            <head>
                <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            </head>
            <nav className="mb-6 border-b pb-4 flex">
                <a href="/" className="text-2xl font-bold">
                    Home
                </a>
                <a href="/about" className="ml-4 text-2xl font-bold">
                    About
                </a>
            </nav>
        </div>
    );
}