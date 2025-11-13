'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQSection() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'How long does the property buying process take?',
      answer: 'The property buying process typically takes 4-8 weeks from offer acceptance to completion. This includes property searches, surveys, legal work, and mortgage arrangements. We guide you through every step to ensure a smooth transaction.',
    },
    {
      id: 'item-2',
      question: 'What documents do I need to buy a property?',
      answer: 'You\'ll need proof of identity (passport or driver\'s license), proof of address, bank statements, proof of income, and mortgage agreement in principle. Our team will provide a complete checklist and help you prepare all necessary documentation.',
    },
    {
      id: 'item-3',
      question: 'Do you offer property management services?',
      answer: 'Yes, we offer comprehensive property management services including tenant finding, rent collection, property maintenance, and regular inspections. Our experienced team ensures your investment property is well-maintained and profitable.',
    },
    {
      id: 'item-4',
      question: 'Can I schedule a property viewing?',
      answer: 'Absolutely! You can schedule property viewings through our website, by phone, or via email. We offer flexible viewing times including evenings and weekends to accommodate your schedule. Virtual tours are also available for selected properties.',
    },
    {
      id: 'item-5',
      question: 'What areas do you cover?',
      answer: 'We specialize in properties across major cities and surrounding areas. Our extensive network covers residential, commercial, and investment properties in prime locations. Contact us to discuss specific areas you\'re interested in.',
    },
  ]

  return (
    <section className="bg-gradient-to-br from-skysoft/30 via-white to-peach/30 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-text text-4xl font-semibold">Frequently Asked Questions</h2>
          <p className="text-muted mt-4 text-balance text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, property buying process, and how we can help you find your dream home.
          </p>
        </div>

        <div className="mt-12">
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-2xl w-full border border-gray-100 px-8 py-3 shadow-lg"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dotted border-gray-200"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-muted">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted mt-6 text-center">
            Can't find what you're looking for? Contact our{' '}
            <Link
              href="/contact"
              className="text-text font-medium hover:underline"
            >
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
