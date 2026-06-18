'use client'
import { useState } from "react"
export default function contact() {
    const [inputs, setInputs] = useState("");
    const [message,setMessage] = useState('');

    const handleInput = (e) => {
        setInputs((state) => { return { ...state, [e.target.name]: e.target.value } })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('api/enquiry/', {
            method: 'POST',
            body: JSON.stringify(inputs)
        })
        .then((res)=> res.json())
        .then((res)=> {
            setMessage(res.message);
            setInputs({});
            setTimeout(()=>{
                setMessage('')
            },3000)
        })

    }

    return (
        <main className="container mx-auto px-4 py-16 sm:py-20 max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-indigo-600 mb-3">
                Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-8">
                Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="w-full bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Name
                    </label>
                    <input onChange={handleInput} value={inputs.name ?? ""} name="name"
                        type="text"
                        id="name"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email
                    </label>
                    <input onChange={handleInput} value={inputs.email ?? ""} name="email"
                        type="email"
                        id="email"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200"
                        placeholder="you@example.com"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Message
                    </label>
                    <textarea onChange={handleInput} value={inputs.message ?? ""} name="message"
                        id="message"
                        rows="4"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow duration-200 resize-none"
                        placeholder="How can we help?"
                    ></textarea>
                </div>

                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold py-2.5 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                    Submit
                </button>
            </form>
            {message && <p className="font-bold pt-5 text-md">{message}</p>}
        </main>
    )
}