'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { Textarea } from '@/components/ui/textarea';

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  const [source, setSource] = useState('');
  const [referralDetails, setReferralDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            Book Your Free Consultation
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and our experts will get back to you within 24 hours
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your full name" 
                  className="border-orange-200 focus:border-orange-500"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email"
                  className="border-orange-200 focus:border-orange-500"
                  required 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  placeholder="Enter your phone number"
                  className="border-orange-200 focus:border-orange-500"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="degree">Highest Degree</Label>
                <Select required>
                  <SelectTrigger className="border-orange-200 focus:border-orange-500">
                    <SelectValue placeholder="Select your degree" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="phd">Ph.D.</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="source">How did you hear about us?</Label>
              <Select value={source} onValueChange={setSource} required>
                <SelectTrigger className="border-orange-200 focus:border-orange-500">
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="internet">Internet Search</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="ads">Advertisement</SelectItem>
                  <SelectItem value="friend">Friend/Family</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {(source === 'friend' || source === 'other') && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <Label htmlFor="referral-details">
                  {source === 'friend' ? "Friend's Name" : 'Please Specify'}
                </Label>
                <Input
                  id="referral-details"
                  value={referralDetails}
                  onChange={(e) => setReferralDetails(e.target.value)}
                  placeholder={source === 'friend' ? "Enter your friend's name" : 'Please specify'}
                  className="border-orange-200 focus:border-orange-500"
                  required
                />
              </motion.div>
            )}

            <div className="space-y-2">
              <Label htmlFor="remarks">Additional Remarks</Label>
              <Textarea
                id="remarks"
                placeholder="Any specific requirements or questions?"
                className="border-orange-200 focus:border-orange-500 min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3"
            >
              Submit Consultation Request
            </Button>
          </motion.div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;