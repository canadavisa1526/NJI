'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/components/ui/use-toast';
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
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function InquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  // const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  useEffect(() => {
    // Show modal after 5 seconds if not interacted
    const modalTimer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(true);
      }
    }, 5000);

    // Blur content after 5 minutes if form not submitted
    const blurTimer = setTimeout(() => {
      if (!hasInteracted) {
        setIsBlurred(true);
      }
    }, 300000);

    return () => {
      clearTimeout(modalTimer);
      clearTimeout(blurTimer);
    };
  }, [hasInteracted]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Here you would typically send the data to your server
      console.log('Form submitted:', data);
      
      setHasInteracted(true);
      setIsBlurred(false);
      setIsOpen(false);
      
      // toast({
      //   title: 'Success!',
      //   description: 'Your inquiry has been submitted successfully.',
      // });
      
      form.reset();
    } catch (error) {
      // toast({
      //   title: 'Error',
      //   description: 'Something went wrong. Please try again.',
      //   variant: 'destructive',
      // });
    }
  };

  return (
    <>
      {isBlurred && !hasInteracted && (
        <div className="fixed inset-0 z-50 backdrop-blur-md flex items-center justify-center">
          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            className="bg-[#FAA71A] hover:bg-[#f39c00] text-[#13294E]"
          >
            Click to Inquire Now
          </Button>
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#13294E] dark:text-white">
              Start Your Journey Abroad
            </DialogTitle>
            <DialogDescription>
              Fill out this form and our experts will get back to you shortly.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                placeholder="Your Name"
                {...form.register('name')}
                className="w-full"
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
                className="w-full"
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
                className="w-full"
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <select
                {...form.register('service')}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Service</option>
                <option value="student">Student Visa</option>
                <option value="work">Work Visa</option>
                <option value="business">Business Visa</option>
                <option value="permanent">Permanent Residency</option>
                <option value="other">Other Services</option>
              </select>
              {form.formState.errors.service && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.service.message}
                </p>
              )}
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                {...form.register('message')}
                className="w-full"
              />
              {form.formState.errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {form.formState.errors.message.message}
                </p>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#13294E] hover:bg-[#193966] text-white"
              >
                Submit Inquiry
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}