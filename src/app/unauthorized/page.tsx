import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full text-center space-y-8 p-12 rounded-3xl bg-surface-container-low border border-surface-container shadow-xl">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-error-container flex items-center justify-center text-error">
            <span className="material-symbols-outlined text-4xl">block</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-headline font-extrabold text-on-surface">Access Denied</h1>
          <p className="text-on-surface-variant font-label leading-relaxed">
            I'm sorry, but only the owner of this archive has permission to write or edit entries.
          </p>
        </div>

        <div className="pt-8">
          <Link href="/">
            <button className="w-full py-4 rounded-xl bg-primary text-on-primary font-bold font-label hover:opacity-90 transition-opacity">
              Back to Journey Map
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
