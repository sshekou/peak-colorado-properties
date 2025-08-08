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
  unit: z.string().min(1),
  description: z.string().min(10),
  photo: z.any().optional(),
});

type Values = z.infer<typeof schema>;

export const MaintenanceForm = () => {
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Values) => {
    const file = (data as any).photo?.[0] as File | undefined;
    const payload = { ...data, photo: file ? { name: file.name, size: file.size, type: file.type } : undefined };
    const res = await submitStub("maintenance", payload);
    if (res.ok) {
      toast({ title: "Request submitted", description: "Our team will reach out with next steps." });
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <Input {...register("name")} />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <Input type="email" {...register("email")} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Phone</label>
          <Input {...register("phone")} />
        </div>
        <div>
          <label className="block text-sm mb-1">Unit / Address</label>
          <Input {...register("unit")} />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Describe the issue</label>
        <Textarea rows={5} {...register("description")} />
      </div>
      <div>
        <label className="block text-sm mb-1">Photo (optional)</label>
        <input type="file" accept="image/*" className="block w-full text-sm" {...register("photo")} />
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>Submit request</Button>
      </div>
    </form>
  );
};
