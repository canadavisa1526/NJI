import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import api from "@/lib/api";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog = ({
  open,
  onOpenChange,
}: ConsultationDialogProps) => {
  const [source, setSource] = useState("");
  const [referralDetails, setReferralDetails] = useState("");
  const [remarks, setRemarks] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: any = {};
    if (!name) newErrors.name = "Full Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Invalid email address";
    if (!phone) newErrors.phone = "Phone number is required";
    if (!source) newErrors.source = "Please select how you heard about us";
    if ((source === "friend" || source === "other") && !referralDetails) {
      newErrors.referralDetails = "Referral details are required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      console.error("Form validation failed:", errors);
      return;
    } // Don't submit if form is invalid

    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = {
      name,
      email,
      phone,
      source,
      referralDetails,
      remarks,
    };

    try {
      let res = await api.post("/inquiry", {
        ...formData,
        message: formData.remarks,
        remarks: "",
      });

      console.log("Form submitted successfully:", res.data);
      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setSource("");
      setReferralDetails("");
      setRemarks("");
      setErrors({});
      onOpenChange(false);
    } catch (error) {
      console.error("Error submitting consultation request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            Book Your Free Consultation
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and our experts will get back to you within
            24 hours.
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="border-orange-200 focus:border-orange-500"
                  required
                />
                {errors.name && (
                  <div className="text-red-500">{errors.name}</div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border-orange-200 focus:border-orange-500"
                  required
                />
                {errors.email && (
                  <div className="text-red-500">{errors.email}</div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="border-orange-200 focus:border-orange-500"
                required
              />
              {errors.phone && (
                <div className="text-red-500">{errors.phone}</div>
              )}
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
              {errors.source && (
                <div className="text-red-500">{errors.source}</div>
              )}
            </div>

            {(source === "friend" || source === "other") && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2"
              >
                <Label htmlFor="referral-details">
                  {source === "friend" ? "Friend's Name" : "Please Specify"}
                </Label>
                <Input
                  id="referral-details"
                  value={referralDetails}
                  onChange={(e) => setReferralDetails(e.target.value)}
                  placeholder={
                    source === "friend"
                      ? "Enter your friend's name"
                      : "Please specify"
                  }
                  className="border-orange-200 focus:border-orange-500"
                  required
                />
                {errors.referralDetails && (
                  <div className="text-red-500">{errors.referralDetails}</div>
                )}
              </motion.div>
            )}

            <div className="space-y-2">
              <Label htmlFor="remarks">Additional Remarks</Label>
              <Textarea
                id="remarks"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Any specific requirements or questions?"
                className="border-orange-200 focus:border-orange-500 min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3"
            >
              {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
            </Button>
          </motion.div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
