import PropTypes from 'prop-types'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;

        if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            }
        }
        return pages;
    };

    return (
        <nav aria-label="Paginación" className="flex justify-center items-center gap-2 my-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Página anterior"
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
                ← Anterior
            </button>

            {getPageNumbers().map((page, index) => (
                page === '...' ? (
                    <span key={`ellipsis-${index}`} aria-hidden="true" className="px-2 text-gray-400 dark:text-gray-500">...</span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        aria-label={`Ir a página ${page}`}
                        aria-current={currentPage === page ? 'page' : undefined}
                        className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                            currentPage === page
                                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/30'
                                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10'
                        }`}
                    >
                        {page}
                    </button>
                )
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Página siguiente"
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
                Siguiente →
            </button>
        </nav>
    );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
