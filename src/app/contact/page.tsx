export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="page-title">Contact Us</h1>

      <div className="card max-w-2xl mx-auto text-center py-8">
        <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-white opacity-70 mb-6">
          If you have any questions or feedback, feel free to reach out to us
          at:
        </p>
        <p className="text-white opacity-90">
          <a
            href="mailto:pourdecisionsgame@gmail.com"
            className="text-[#E94560] text-xl font-medium hover:underline"
          >
            pourdecisionsgame@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
