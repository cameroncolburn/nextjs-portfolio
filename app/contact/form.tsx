'use client';

import { useActionState } from 'react';
import { sendContactEmail, ContactFormState } from './actions';
import { useRef, useEffect } from 'react';

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState, globalThis.FormData>(
    sendContactEmail,
    null
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input-field"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        className="input-field"
        required
      />
      <textarea
        placeholder="Message"
        name="message"
        rows={4}
        className="input-field resize-none"
        required
      ></textarea>
      <button
        type="submit"
        disabled={isPending}
        className="text-sm bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        {isPending ? 'Sending...' : 'Send'}
      </button>
      {state?.error && <p className="text-neutral-100">{state.error}</p>}
      {state?.success && <p className="text-neutral-100">Message sent successfully!</p>}
    </form>
  );
}
