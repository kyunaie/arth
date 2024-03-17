import { useState } from 'react';

function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can send the email to your backend or handle it as needed
    console.log('Submitted email:', email);
    // Reset the form
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto bg-slate-950 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 border border-transparent rounded-md flex items-center justify-center text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewsletterForm;
