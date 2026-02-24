export function template(src, title, description) {
    return `
        <div class="bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
            
            <img src="${src}"
                class="h-72 w-full object-cover group-hover:scale-105 transition duration-300">

            <div class="p-6">
                <h3 class="text-xl font-semibold text-gray-900">${title}</h3>

                <p class="text-gray-600 mt-2 text-sm line-clamp-2">
                    ${description}
                </p>

                <button 
                    class="mt-5 w-full py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                    Use Template
                </button>
            </div>

        </div>
    `;
};