'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';

interface EnquiryFormProps {
  propertyId?: string;
  propertyTitle?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  preferredContactMethod: string;
  message: string;
  consent: boolean;
}

export default function EnquiryForm({ propertyId, propertyTitle }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, propertyId, propertyTitle }),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Enquiry submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="font-heading font-bold text-xl mb-2">Thank You!</h3>
        <p className="text-muted">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
        {...register('preferredContactMethod')}
        className="input-field"
      >
        <option value="phone">Phone</option>
        <option value="email">Email</option>
        <option value="whatsapp">WhatsApp</option>
      </select>

      <textarea
        {...register('message')}
        placeholder="Message"
        rows={4}
        className="input-field resize-none"
        defaultValue={propertyTitle ? `I'm interested in ${propertyTitle}` : ''}
      />

      <div className="flex items-start gap-2">
        <input
          {...register('consent', { required: 'You must accept terms' })}
          type="checkbox"
          className="mt-1 w-4 h-4 accent-black cursor-pointer"
        />
        <label className="text-sm text-muted cursor-pointer">
          I accept the terms and data policy *
        </label>
      </div>
      {errors.consent && <p className="text-red-500 text-sm">{errors.consent.message}</p>}

      <Button type="submit" disabled={isSubmitting} className="w-full bg-black hover:bg-black/90 text-white">
        {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
      </Button>
    </form>
  );
}
