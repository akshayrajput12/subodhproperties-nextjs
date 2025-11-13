'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  interestedIn: string;
  message: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Contact form submission failed:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading font-bold text-4xl mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="font-heading font-semibold text-2xl mb-6">Send us a Message</h2>
          
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <h3 className="font-heading font-bold text-xl mb-2">Thank You!</h3>
              <p className="text-muted">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  {...register('fullName', { required: 'Name is required' })}
                  placeholder="Full Name *"
                  className="input-field"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
              </div>

              <div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                  })}
                  type="email"
                  placeholder="Email *"
                  className="input-field"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <input
                  {...register('phone', { required: 'Phone is required' })}
                  placeholder="Phone *"
                  className="input-field"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              <select
                {...register('interestedIn')}
                className="input-field"
              >
                <option value="">Interested In</option>
                <option value="Buying">Buying</option>
                <option value="Selling">Selling</option>
                <option value="Renting">Renting</option>
                <option value="Other">Other</option>
              </select>

              <textarea
                {...register('message')}
                placeholder="Your Message"
                rows={4}
                className="input-field resize-none"
              />

              <Button type="submit" className="w-full bg-black hover:bg-black/90 text-white">
                Send Message
              </Button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div>
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="font-heading font-semibold text-2xl mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-peach mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted">+91 9653814628</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-peach mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted">info@realestate.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-peach mt-1" size={24} />
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-muted">Mansarovar, Jaipur, Rajasthan 302020</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="font-heading font-semibold text-xl mb-4">Office Hours</h3>
            <div className="space-y-2 text-muted">
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 10:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
