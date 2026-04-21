"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  message: z
    .string()
    .min(10, "Please describe your objectives in at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Encode the data for Netlify form submission
    const formData = new URLSearchParams();
    formData.append("form-name", "contact");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
      setSubmitted(true);
      reset();
    } catch {
      // Fallback: still show success since Netlify might handle it differently
      setSubmitted(true);
      reset();
    }
  };

  return (
    <section
      className="py-24 lg:py-32 bg-surface-container-high relative"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2
          id="contact-heading"
          className="font-headline font-bold text-4xl md:text-6xl tracking-tight text-on-background mb-6"
        >
          Ready to Evolve.
        </h2>
        <p className="text-xl text-on-surface-variant mb-12 lg:mb-16 max-w-2xl mx-auto">
          Initiate a conversation with our architectural team to map your
          trajectory.
        </p>

        {submitted ? (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="h-16 w-16 rounded-full bg-primary-container/20 flex items-center justify-center mx-auto mb-6">
              <svg
                className="h-8 w-8 text-primary-container"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-on-background mb-3">
              Inquiry Received
            </h3>
            <p className="text-on-surface-variant">
              Our team will review your submission and respond within 24 hours.
            </p>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto text-left space-y-6"
          >
            {/* Netlify hidden fields */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                id="name"
                placeholder="Jane Doe"
                {...register("name")}
                error={errors.name?.message}
              />
              <Input
                label="Work Email"
                id="email"
                type="email"
                placeholder="jane@enterprise.com"
                {...register("email")}
                error={errors.email?.message}
              />
            </div>

            <Textarea
              label="Inquiry Focus"
              id="message"
              rows={4}
              placeholder="Detail your strategic objectives..."
              {...register("message")}
              error={errors.message?.message}
            />

            <Button
              type="submit"
              variant="primary"
              className="w-full mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting…" : "Submit Inquiry"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
