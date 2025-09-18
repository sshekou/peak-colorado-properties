import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { submitStub } from "@/utils/forms";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  role: z.enum(["owner", "renter", "vendor"]),
  inquiryType: z.string().min(1),
  message: z.string().min(5),
});

type Values = z.infer<typeof schema>;

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Values) => {
    // In a real app, this would send to sales@getaptly.com
    const res = await submitStub("contact", { ...data, emailTo: "sales@getaptly.com" });
    if (res.ok) {
      toast({ title: "Thanks!", description: "We'll be in touch shortly." });
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Role Selection */}
      <div>
        <label className="block text-sm font-medium mb-3">
          Owner or Renter? <span className="text-destructive">*</span>
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="owner"
              {...register("role")}
              className="text-primary focus:ring-primary"
            />
            <span className="text-sm">I'm an Owner</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="renter"
              {...register("role")}
              className="text-primary focus:ring-primary"
            />
            <span className="text-sm">I'm a Renter</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="vendor"
              {...register("role")}
              className="text-primary focus:ring-primary"
            />
            <span className="text-sm">I'm a Vendor</span>
          </label>
        </div>
      </div>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Name <span className="text-destructive">*</span>
        </label>
        <Input 
          {...register("name")} 
          aria-invalid={!!errors.name}
          className="w-full"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Email <span className="text-destructive">*</span>
        </label>
        <Input 
          type="email" 
          {...register("email")} 
          aria-invalid={!!errors.email}
          className="w-full"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium mb-2">Phone</label>
        <Input 
          {...register("phone")} 
          aria-invalid={!!errors.phone}
          className="w-full"
        />
      </div>

      {/* Inquiry Type */}
      <div>
        <select 
          {...register("inquiryType")} 
          aria-invalid={!!errors.inquiryType}
          className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">General Inquiry</option>
          <option value="property-management">Property Management Services</option>
          <option value="rent-estimate">Rent Estimate</option>
          <option value="maintenance">Maintenance Request</option>
          <option value="leasing">Leasing Inquiry</option>
          <option value="owner-services">Owner Services</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Comment <span className="text-destructive">*</span>
        </label>
        <Textarea 
          rows={4} 
          {...register("message")} 
          aria-invalid={!!errors.message}
          className="w-full resize-none"
        />
      </div>

      {/* Consent Text */}
      <div className="text-xs text-muted-foreground leading-relaxed border-t pt-4">
        <p>
          By submitting this form, you consent to receiving sales and marketing communications via 
          phone calls, SMS/MMS texts, and emails from Peak Properties and its DBAs, using live or 
          automated methods, at the phone number or email address provided.
        </p>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-12 text-base font-medium"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};