import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RentEstimateForm } from "@/components/forms/RentEstimateForm";

export const LeadCaptureModal = ({ open, onOpenChange }: { open: boolean; onOpenChange: (o: boolean) => void }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-head">Request a Free Rent Estimate</DialogTitle>
        </DialogHeader>
        <RentEstimateForm />
      </DialogContent>
    </Dialog>
  );
};
