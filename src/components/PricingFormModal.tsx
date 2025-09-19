import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PricingFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planName?: string;
}

export const PricingFormModal = ({ open, onOpenChange, planName }: PricingFormModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-head">
            {planName ? `Get Started with ${planName}` : "Get Started"}
          </DialogTitle>
        </DialogHeader>
        <div className="w-full h-[600px]">
          <iframe
            src="https://portal.getaptly.com/form/9o8tCkowEbbDqEzpw/new/N64JjnohoEgPz5Fzj"
            className="w-full h-full border-0 rounded-md"
            title="Property Management Form"
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};