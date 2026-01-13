'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <h2 className="text-2xl font-bold text-neutral-800 mb-4">
        Something went wrong
      </h2>
      <p className="text-neutral-600 mb-6 text-center max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-rose-700 text-white rounded hover:bg-rose-800 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
