import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { submitStub } from "@/utils/forms";

const schema = z.object({
  address: z.string().min(3),
  beds: z.string(),
  baths: z.string(),
  type: z.enum(["house", "townhome", "condo", "apartment"]),
  condition: z.enum(["new", "updated", "average", "needs-work"]),
  timeline: z.enum(["asap", "30-days", "60-days", "90+ days"]),
});

type Values = z.infer<typeof schema>;

export const RentEstimateForm = () => {
  const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: Values) => {
    const res = await submitStub("rent-estimate", data);
    if (res.ok) {
      toast({ title: "Request received", description: "We’ll send a free rent estimate soon." });
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <label className="block text-sm mb-1">Address</label>
        <Input {...register("address")} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-sm mb-1">Beds</label>
          <Input {...register("beds")} />
        </div>
        <div>
          <label className="block text-sm mb-1">Baths</label>
          <Input {...register("baths")} />
        </div>
        <div>
          <label className="block text-sm mb-1">Property type</label>
          <select className="h-10 w-full rounded-md border bg-background px-3" {...register("type")}>
            <option value="house">House</option>
            <option value="townhome">Townhome</option>
            <option value="condo">Condo</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm mb-1">Condition</label>
          <select className="h-10 w-full rounded-md border bg-background px-3" {...register("condition")}>
            <option value="new">New</option>
            <option value="updated">Updated</option>
            <option value="average">Average</option>
            <option value="needs-work">Needs work</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Timeline</label>
          <select className="h-10 w-full rounded-md border bg-background px-3" {...register("timeline")}>
            <option value="asap">ASAP</option>
            <option value="30-days">30 days</option>
            <option value="60-days">60 days</option>
            <option value="90+ days">90+ days</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Request estimate</Button>
      </div>
    </form>
  );
};
