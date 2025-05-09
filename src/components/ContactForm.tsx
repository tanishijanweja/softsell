"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.licenseType)
      newErrors.licenseType = "Please select a license type";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelect = (value: string) => {
    setForm((prev) => ({ ...prev, licenseType: value }));
    if (errors.licenseType) {
      setErrors((prev) => ({ ...prev, licenseType: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);

      setTimeout(() => {
        setForm({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        });
      }, 2000);
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-slate-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions? We are here to help you with your software license
            needs.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your message has been received. We will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-1 ${
                    errors.name ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-1 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="company" className="text-sm font-medium">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <Label className="text-sm font-medium">
                  License Type <span className="text-red-500">*</span>
                </Label>
                <Select onValueChange={handleSelect} value={form.licenseType}>
                  <SelectTrigger
                    className={`mt-1 ${
                      errors.licenseType
                        ? "border-red-500 focus:ring-red-500"
                        : ""
                    }`}
                  >
                    <SelectValue placeholder="Select a license type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Office Suite">Office Suite</SelectItem>
                    <SelectItem value="Creative Software">
                      Creative Software
                    </SelectItem>
                    <SelectItem value="Developer Tools">
                      Developer Tools
                    </SelectItem>
                    <SelectItem value="Enterprise Solutions">
                      Enterprise Solutions
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.licenseType && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.licenseType}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className={`mt-1 ${
                    errors.message ? "border-red-500 focus:ring-red-500" : ""
                  }`}
                  placeholder="Tell us about your software license and how we can help"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2"
              >
                <Send size={16} />
                Submit Inquiry
              </Button>

              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                We respect your privacy and will never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
