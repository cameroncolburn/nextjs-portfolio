'use client';

import { useState } from "react";
import { contactSchema } from "../lib/schemas/contact";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
      const [errors, setErrors] = useState({ name: "", email: "", message: "" });
      const [status, setStatus] = useState<string | null>(null);
    
    const validate = () => {
        const result = contactSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors({
                name: fieldErrors.name?.[0] || "",
                email: fieldErrors.email?.[0] || "",
                message: fieldErrors.message?.[0] || "",
            });
            return false;
        }
        setErrors({ name: "", email: "", message: "" });
        return true;
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
      };

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!validate()) return;
    
        setStatus("Submitting...");
    
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          const data = await res.json();
    
          if (!res.ok) {
            throw new Error(data.error || "Something went wrong");
          }
    
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        } catch (error) {
          setStatus("Failed to send message. Please try again.");
        }
      };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-white border-2 border-color5 text-sm focus:border-sky-300 focus:ring-1 focus:ring-sky-300 outline-none"
            value={formData.name}
            onChange={handleChange}
            required
            />
            {errors.name && <p className="text-neutral-100">{errors.name}</p>}
            <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="w-full p-3 rounded-lg bg-white border-2 border-color5 text-sm focus:border-sky-300 focus:ring-1 focus:ring-sky-300 outline-none"
            value={formData.email}
            onChange={handleChange}
            required
            />
            {errors.email && <p className="text-neutral-100">{errors.email}</p>}
            <textarea
            placeholder="Message"
            name="message"
            rows={4}
            className="w-full p-3 rounded-lg bg-white border-2 border-color5 text-sm focus:border-sky-300 focus:ring-1 focus:ring-sky-300 outline-none resize-none"
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
            {errors.message && <p className="text-neutral-100">{errors.message}</p>}
            <button
            type="submit"
            className="text-sm bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
            Send
            </button>
            {status && <p className="text-neutral-100">{status}</p>}
        </form>
    );
}