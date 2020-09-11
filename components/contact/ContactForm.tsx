import Button from 'components/Button'

const ContactForm: React.FC = () => (
  <form action="https://formspree.io/mwkrggql" method="POST" className="w-full">
    <div className="mb-6">
      <label htmlFor="email">
        <div className="font-bold mb-2">Email:</div>
        <input
          name="email"
          type="email"
          required
          className="w-full bg-transparent border-solid border border-gray-600 rounded-lg px-4 py-2 appearance-none"
        />
      </label>
    </div>

    <div className="mb-6">
      <label htmlFor="subject">
        <div className="font-bold mb-2">Subject:</div>
        <input
          name="subject"
          type="text"
          required
          className="w-full bg-transparent border-solid border border-gray-600 rounded-lg px-4 py-2 appearance-none"
        />
      </label>
    </div>

    <div className="mb-6">
      <label htmlFor="message">
        <div className="font-bold mb-2">Message:</div>
        <textarea
          name="message"
          required
          className="w-full bg-transparent border-solid border border-gray-600 rounded-lg px-4 py-2 appearance-none h-40"
        />
      </label>
    </div>

    <Button type="submit">Submit</Button>
  </form>
)

export default ContactForm
