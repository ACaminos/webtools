export const Error404 = () => {
  return (
    <section className="flex items-center h-full p-48 dark:bg-dark dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl dark:text-white">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-white text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 dark:text-gray-200">But dont worry, you can find plenty of other things on our homepage.</p>
                <a rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded dark:bg-rose-600 dark:text-gray-50">Back to homepage</a>
            </div>
        </div>
    </section>
  )
}
