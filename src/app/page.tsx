import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950 font-sans">
      <header className="w-full max-w-4xl mx-auto px-6 pt-20 flex flex-col items-center text-center">
        <Image
          src="/globe.svg"
          alt="Einbürgerung Test"
          width={64}
          height={64}
          className="mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-blue-900 dark:text-white">
          Ready to become a German citizen?
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-6 max-w-2xl">
          We make the Einbürgerungstest easy, friendly, and stress-free—especially
          for English speakers. Learn, practice, and pass with confidence!
        </p>
        <a
          href="#get-started"
          className="inline-block bg-blue-700 text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:bg-blue-800 transition mb-2"
        >
          Start Practicing Free
        </a>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          No signup required. Just jump in!
        </span>
      </header>

      <section className="w-full flex flex-col items-center gap-6 mt-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Image
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
            alt="Person studying with laptop"
            width={200}
            height={140}
            className="rounded-xl object-cover shadow"
          />
          <Image
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
            alt="German passport closeup"
            width={200}
            height={140}
            className="rounded-xl object-cover shadow"
          />
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Traveler at airport with suitcase"
            width={200}
            height={140}
            className="rounded-xl object-cover shadow"
          />
        </div>
      </section>

      <main className="w-full max-w-4xl mx-auto px-6 py-12 flex flex-col gap-16">
        <section className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <Image
            src="/file.svg"
            alt="Questions"
            width={56}
            height={56}
            className="mb-4 md:mb-0"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-200">
              Understand Every Question
            </h2>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              Clear English explanations and cultural context for every question.
              No more guessing—know exactly what’s being asked (and why).
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-10 items-center md:items-start">
          <Image
            src="/window.svg"
            alt="Flashcards"
            width={56}
            height={56}
            className="mb-4 md:mb-0"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-200">
              Learn the Fun Way
            </h2>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              Practice with interactive flashcards and quizzes. Learning is
              quick, effective, and (dare we say) fun!
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row gap-10 items-center md:items-start bg-white/80 dark:bg-gray-800/80 rounded-xl shadow p-6">
          <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-lg mr-0 md:mr-8 mb-6 md:mb-0">
            <Image
              src="/file.svg"
              alt="Practice Test Screenshot"
              width={64}
              height={64}
              className=""
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-blue-800 dark:text-blue-200">
              Realistic Practice
            </h2>
            <p className="text-gray-700 dark:text-gray-200 mb-2">
              Take unlimited practice tests that look and feel like the real thing. Track your progress and celebrate your wins! Our practice mode simulates the real exam experience, so you’ll feel confident and ready on test day.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-6 flex flex-col items-center gap-2 shadow">
            <span className="text-blue-700 dark:text-blue-200 font-semibold text-lg">
              “I passed on my first try! The explanations made everything so much clearer.”
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-2">
              <Image src="/fred.jpg" alt="Fred S." width={32} height={32} className="rounded-full" />
              Fred H.
            </span>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-6 flex flex-col items-center gap-2 shadow">
            <span className="text-blue-700 dark:text-blue-200 font-semibold text-lg">
              “The flashcards made learning fun and easy. I actually looked forward to studying!”
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-2">
              <Image src="/jenny.jpg" alt="Jenny S." width={32} height={32} className="rounded-full" />
              Jenny C.
            </span>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-6 flex flex-col items-center gap-2 shadow">
            <span className="text-blue-700 dark:text-blue-200 font-semibold text-lg">
              “Practice tests felt just like the real thing. I felt totally prepared on exam day.”
            </span>
            <span className="text-gray-600 dark:text-gray-300 text-sm flex items-center gap-2">
              <Image src="/james.jpg" alt="James S." width={32} height={32} className="rounded-full" />
              James S.
            </span>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-4xl mx-auto px-6 py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Einbürgerung Helper. Not affiliated
        with the German government.
      </footer>
    </div>
  );
}
