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
  phone: z.string().min(7),
  role: z.enum(["owner", "resident"]),
  location: z.string().min(2),
  message: z.string().min(5),
});

type Values = z.infer<typeof schema>;

export const ContactForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Values) => {
    const res = await submitStub("contact", data);
    if (res.ok) {
      toast({ title: "Thanks!", description: "We’ll be in touch shortly." });
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <Input {...register("name")} aria-invalid={!!errors.name} />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <Input type="email" {...register("email")} aria-invalid={!!errors.email} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <Input {...register("phone")} aria-invalid={!!errors.phone} />
        </div>
        <div>
          <label className="block text-sm mb-1">I am an</label>
          <select className="h-10 w-full rounded-md border bg-background px-3" {...register("role")} aria-invalid={!!errors.role}>
            <option value="owner">Owner</option>
            <option value="resident">Resident</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Property address or city</label>
        <Input {...register("location")} aria-invalid={!!errors.location} />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <Textarea rows={5} {...register("message")} aria-invalid={!!errors.message} />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>Send</Button>
      </div>
    </form>
  );
};
