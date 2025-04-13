'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

interface AppointmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AppointmentDialog = ({ open, onOpenChange }: AppointmentDialogProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
  });

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ];

  const consultationTypes = [
    'Student Visa Consultation',
    'Work Visa Consultation',
    'PR Consultation',
    'Business Visa Consultation',
    'Family Immigration Consultation'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, consultationType: value }));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const validateStep1 = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.consultationType) {
      toast.error('Please fill in all required fields');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!date || !selectedTime) {
      toast.error('Please select both date and time');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep2()) return;

    try {
      // Here you would typically make an API call to save the appointment
      toast.success('Appointment booked successfully!');
      onOpenChange(false);
      setStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        consultationType: '',
      });
      setSelectedTime('');
      setDate(new Date());
    } catch (error) {
      toast.error('Failed to book appointment. Please try again.');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            Book Your Consultation
          </DialogTitle>
          <DialogDescription>
            Schedule a free consultation with our immigration experts
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="border-orange-200 focus:border-orange-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="border-orange-200 focus:border-orange-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="border-orange-200 focus:border-orange-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="consultation-type">Consultation Type *</Label>
                  <Select
                    value={formData.consultationType}
                    onValueChange={handleSelectChange}
                    required
                  >
                    <SelectTrigger className="border-orange-200 focus:border-orange-500">
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      {consultationTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="button"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  onClick={() => {
                    if (validateStep1()) setStep(2);
                  }}
                >
                  Next
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label>Select Date *</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-orange-200"
                    disabled={(date) => date < new Date()}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Select Time *</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        className={`w-full ${
                          selectedTime === time
                            ? "bg-orange-500 hover:bg-orange-600 text-white"
                            : "hover:border-orange-500 hover:text-orange-500"
                        }`}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full hover:border-orange-500 hover:text-orange-500"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  >
                    Book Appointment
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;