'use client'; // Essential for Next.js client components

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

// Zod schema definition
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  interest: z.string({
    required_error: "Please select your area of interest.",
  }),
  message: z.string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must not exceed 500 characters."),
});

type FormData = z.infer<typeof formSchema>;

interface InquiryFormProps {
  onSubmit: () => void;
}

export function InquiryForm({ onSubmit }: InquiryFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
    },
  });

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    onSubmit();
    toast.success('Your inquiry has been submitted successfully!');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2 text-darkMode">Full Name</label>
        <Input
          {...register('name')}
          placeholder="Your name"
          className="w-full bg-transparent border-2 border-gray-300 text-darkMode placeholder:text-gray-400 rounded-md focus:ring-2 focus:ring-primaryAccent"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-darkMode">Email</label>
          <Input
            {...register('email')}
            placeholder="your.email@example.com"
            type="email"
            className="w-full bg-transparent border-2 border-gray-300 text-darkMode placeholder:text-gray-400 rounded-md focus:ring-2 focus:ring-primaryAccent"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-darkMode">Phone Number</label>
          <Input
            {...register('phone')}
            placeholder="+1 234 567 8900"
            type="tel"
            className="w-full bg-transparent border-2 border-gray-300 text-darkMode placeholder:text-gray-400 rounded-md focus:ring-2 focus:ring-primaryAccent"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-darkMode">Area of Interest</label>
        <select
          {...register('interest')}
          className="w-full p-3 rounded-md border-2 border-gray-300 bg-transparent text-darkMode placeholder:text-gray-400 focus:ring-2 focus:ring-primaryAccent"
        >
          <option value="">Select an option</option>
          <option value="study_visa">Study Visa</option>
          <option value="work_visa">Work Visa</option>
          <option value="permanent_residency">Permanent Residency</option>
          <option value="family_visa">Family Visa</option>
          <option value="other">Other</option>
        </select>
        {errors.interest && (
          <p className="text-red-500 text-sm mt-1">{errors.interest.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-darkMode">Your Message</label>
        <Textarea
          {...register('message')}
          placeholder="Tell us about your requirements..."
          className="w-full min-h-[120px] bg-transparent border-2 border-gray-300 text-darkMode placeholder:text-gray-400 rounded-md focus:ring-2 focus:ring-primaryAccent"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold tracking-wide rounded-md py-3"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
    </form>
  );
}
