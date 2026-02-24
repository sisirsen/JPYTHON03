export function navbar() {
    return `
        <nav class="flex items-center justify-between px-10 py-4 bg-white shadow-sm">

            <div class="flex items-center space-x-2">
                <img class="w-40" src="./assets/logo.png" alt="Logo">
            </div>

            <div class="hidden md:flex items-center space-x-8 font-medium text-gray-600">
                <a href="#" class="hover:text-black transition">Dashboard</a>
                <a href="#" class="hover:text-black transition">Templates</a>
                <a href="#" class="hover:text-black transition">Pricing</a>
            </div>

            <div class="flex items-center space-x-4">

                <div class="relative hidden md:block">
                    <input
                        class="w-64 h-10 border border-gray-300 rounded-full pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                        type="text" placeholder="Search templates...">
                </div>

                <a href="login.html">
                    <button class="px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
                        Login / Register
                    </button>
                </a>
            </div>

        </nav>
`;
}