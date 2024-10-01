import { useState, FormEvent } from 'react';
import { FaBell } from 'react-icons/fa';

const NotifyForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Email submitted:', email);

        // Show alert
        setShowAlert(true);

        // Clear input after submission
        setEmail('');

        // Hide the alert after 3 seconds
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    };

    return (
        <div className="mx-auto mt-10 flex max-w-md flex-col gap-y-4">
            <form onSubmit={handleSubmit} className="flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/5 focus:ring-white/5 sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    type="submit"
                    className="group flex text-center justify-center gap-2 rounded-md bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100"
                >
                    Notify me <FaBell className='mt-1 opacity-30 group-hover:opacity-100 '></FaBell>
                </button>
            </form>

            {/* Alert message */}
            {showAlert && (
                <div className="mt-4 p-4 bg-green-500 text-white rounded-lg text-center">
                    Thank You! We will notify you shortly.
                </div>
            )}
        </div>
    );
};

export default NotifyForm;
