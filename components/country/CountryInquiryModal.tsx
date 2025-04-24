'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  hearAbout: z.string().min(1, 'Please tell us how you heard about us'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

interface CountryInquiryModalProps {
  country: string;
  onSubmit: () => void;
}

export function CountryInquiryModal({ country, onSubmit }: CountryInquiryModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      hearAbout: '',
      message: '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', data);
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        onSubmit();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {!isOpen && !submitted && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 bg-[#FAA71A] hover:bg-[#f39c00] text-[#13294E] font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 z-50"
        >
          Inquire Now
        </button>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-xl">
          <div className="grid md:grid-cols-5">
            {/* Form Side */}
            <div className="p-6 md:p-8 md:col-span-3">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#13294E] dark:text-white">
                  Study in {country}
                </DialogTitle>
                <DialogDescription className="text-gray-600 dark:text-gray-300">
                  Fill out this form to receive detailed information about studying in {country}.
                </DialogDescription>
              </DialogHeader>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                    <div className="w-8 h-8 text-green-500">✓</div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#13294E] dark:text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We'll get back to you shortly with detailed information.
                  </p>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 mt-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      {...form.register('name')}
                      className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      {...form.register('email')}
                      className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      {...form.register('phone')}
                      className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <select
                      {...form.register('hearAbout')}
                      className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md"
                    >
                      <option value="">How did you hear about us?</option>
                      <option value="google">Google</option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend/Family</option>
                      <option value="education_fair">Education Fair</option>
                      <option value="other">Other</option>
                    </select>
                    {form.formState.errors.hearAbout && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.hearAbout.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      placeholder={`I'm interested in studying in ${country}...`}
                      {...form.register('message')}
                      className="w-full bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                      rows={4}
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-end gap-4 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setIsOpen(false);
                        // onSubmit();
                      }}
                      className="border-gray-200 dark:border-gray-700"
                    >
                      Skip for Now
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#13294E] hover:bg-[#193966] text-white dark:bg-[#FAA71A] dark:hover:bg-[#f39c00] dark:text-[#13294E] min-w-[120px]"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Submitting...
                        </div>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Info Side */}
            <div className="hidden md:block md:col-span-2 bg-gradient-to-br from-[#13294E] to-[#0d1b33] dark:from-[#FAA71A] dark:to-[#f39c00] text-white dark:text-[#13294E] p-8">
              <h3 className="text-xl font-semibold mb-6">Why Choose Us?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/10 dark:bg-[#13294E]/10 rounded-lg flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium">Expert Guidance</h4>
                    <p className="text-sm text-white/80 dark:text-[#13294E]/80">
                      Professional counseling for your education journey
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/10 dark:bg-[#13294E]/10 rounded-lg flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium">Visa Support</h4>
                    <p className="text-sm text-white/80 dark:text-[#13294E]/80">
                      Complete assistance with visa application process
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/10 dark:bg-[#13294E]/10 rounded-lg flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-medium">University Selection</h4>
                    <p className="text-sm text-white/80 dark:text-[#13294E]/80">
                      Help choosing the right university and program
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 dark:border-[#13294E]/10">
                <p className="text-sm text-white/80 dark:text-[#13294E]/80">
                  Join thousands of successful students who have achieved their dreams of studying abroad with our help.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}