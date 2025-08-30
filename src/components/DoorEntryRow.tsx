import React, { useEffect, useState, useRef, memo } from "react";
import { DoorSchedule, DestinationDC, FreightType, TrailerStatus } from "@/types/shipping";
import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, MessageCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import QuickPalletInput from "@/components/pallets/QuickPalletInput";
import { motion } from "framer-motion";

interface DoorEntryRowProps {
  door: DoorSchedule;
  updateDoorSchedule: (
    id: string,
    field: keyof DoorSchedule,
    value: unknown,
  ) => void;
  removeDoor: (id: string) => void;
  isAnimated: boolean;
  isMobileView: boolean;
  isCompact?: boolean;
}

const destinationDCOptions: DestinationDC[] = ["6024", "6070", "6039", "6040", "7045"];
const freightTypeOptions: FreightType[] = ["23/43", "28", "XD", "AIB"];

// Type-safe trailer status options with runtime validation
const validateTrailerStatus = (value: string): value is TrailerStatus => {
  return ["empty", "25%", "50%", "75%", "partial", "shipload"].includes(value);
};

const trailerStatusOptions = [
  { value: "empty", label: "Empty", colorClass: "text-gray-700" },
  { value: "25%", label: "25%", colorClass: "text-emerald-700" },
  { value: "50%", label: "50%", colorClass: "text-amber-700" },
  { value: "75%", label: "75%", colorClass: "text-red-700" },
  { value: "partial", label: "Partial", colorClass: "text-blue-700" },
  { value: "shipload", label: "Shipload", colorClass: "text-violet-700" },
].filter((option): option is { value: TrailerStatus; label: string; colorClass: string } =>
  validateTrailerStatus(option.value)
);

const validateDoorFields = (door: DoorSchedule) => {
  const newErrors: { doorNumber?: string; dc?: string; freight?: string } = {};
  if (door.doorNumber < 332 || door.doorNumber > 454) {
    newErrors.doorNumber = "Invalid door (332–454)";
  }
  if (!destinationDCOptions.includes(door.destinationDC)) {
    newErrors.dc = "Invalid destination DC";
  }
  if (!freightTypeOptions.includes(door.freightType)) {
    newErrors.freight = "Invalid freight type";
  }
  return newErrors;
};

const DoorEntryRow = memo(({
  door,
  updateDoorSchedule,
  removeDoor,
  isAnimated,
  isMobileView,
  isCompact = false,
}: DoorEntryRowProps) => {
  const [notesOpen, setNotesOpen] = useState(false);
  const [showQuickInput, setShowQuickInput] = useState(false);
  const [errors, setErrors] = useState<{
    doorNumber?: string;
    dc?: string;
    freight?: string;
  }>({});
  const [isPalletUpdating, setIsPalletUpdating] = useState(false);
  const prevPalletCountRef = useRef<number>(door.palletCount);

  useEffect(() => {
    if (door.palletCount !== prevPalletCountRef.current) {
      setIsPalletUpdating(true);
      const timer = setTimeout(() => setIsPalletUpdating(false), 300);
      prevPalletCountRef.current = door.palletCount;
      return () => clearTimeout(timer);
    }
  }, [door.palletCount]);

  useEffect(() => {
    setErrors(validateDoorFields(door));
  }, [door, door.doorNumber, door.destinationDC, door.freightType]);

  const handleFieldUpdate = (field: keyof DoorSchedule, value: unknown) => {
    updateDoorSchedule(door.id, field, value);
  };

  const handlePalletUpdate = (newCount: number) => {
    handleFieldUpdate("palletCount", newCount);
  };

  const toggleQuickInput = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setShowQuickInput(!showQuickInput);
  };

  const closeQuickInput = () => {
    setShowQuickInput(false);
  };

  const palletDisplay = (
    <button
      type="button"
      className={`relative flex flex-col items-center justify-center h-full cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-100 hover:to-indigo-200 p-3 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-wal-blue-400 focus-visible:ring-offset-1 shadow-md hover:shadow-lg transform hover:scale-105 ${isMobileView ? 'py-2' : ''}`}
      onClick={toggleQuickInput}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleQuickInput(e)}
      aria-haspopup="dialog"
      aria-label={`Current pallet count ${door.palletCount}, click or press enter to edit`}
    >
      <span
        className={`font-bold leading-none transition-transform duration-300 ease-in-out ${isMobileView ? 'text-3xl' : 'text-4xl'} ${
          isPalletUpdating ? 'scale-125 text-wal-yellow-600' : 'scale-100 text-wal-blue-700'
        }`}
        aria-live="polite"
        role="status"
      >
        {door.palletCount}
      </span>
      <span className="text-xs text-wal-blue-600 mt-1 font-medium">Pallets</span>
      {showQuickInput && (
        <QuickPalletInput
          currentCount={door.palletCount || 0}
          onUpdate={handlePalletUpdate}
          onClose={closeQuickInput}
        />
      )}
    </button>
  );

  const commonSelectClasses = "w-full h-9 text-sm border-wal-blue-200 focus:border-wal-blue-400 hover:border-wal-blue-300 transition-all duration-200 shadow-sm hover:shadow-md";
  const compactSelectClasses = "h-7 text-xs border-wal-blue-200 focus:border-wal-blue-400 hover:border-wal-blue-300 transition-all duration-200";

  const destinationSelect = (
    <div>
      {!isCompact && (
        <div className={`text-xs text-wal-blue-600 font-bold mb-1 ${!isMobileView ? '' : 'sr-only'}`}>
          📍 Destination
        </div>
      )}
      <Select
        value={door.destinationDC}
        onValueChange={(value) => handleFieldUpdate("destinationDC", value as DestinationDC)}
      >
        <SelectTrigger
          className={isCompact ? compactSelectClasses : commonSelectClasses}
          aria-label={`Select Destination DC, current value ${door.destinationDC}`}
        >
          <SelectValue placeholder={isCompact ? "DC" : "Select DC"} />
        </SelectTrigger>
        <SelectContent>
          {destinationDCOptions.map((dc) => (
            <SelectItem
              key={dc}
              value={dc}
              className={`${isCompact ? "text-sm py-1" : "text-base py-2"} hover:bg-wal-blue-100 focus:bg-wal-blue-100`}
            >
              🏢 {dc}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {errors.dc && <div role="alert" className="text-red-600 text-xs mt-1">{errors.dc}</div>}
    </div>
  );

  const freightSelect = (
     <div>
       <div className={`text-xs text-wal-blue-600 font-bold mb-1 ${!isMobileView ? '' : 'sr-only'}`}>📦 Freight Type</div>
       <Select
         value={door.freightType}
         onValueChange={(value) => handleFieldUpdate("freightType", value as FreightType)}
       >
         <SelectTrigger
           className={commonSelectClasses}
           aria-label={`Select Freight Type, current value ${door.freightType}`}
         >
           <SelectValue placeholder="Select Type" />
         </SelectTrigger>
         <SelectContent>
           {freightTypeOptions.map((type) => (
             <SelectItem key={type} value={type} className="text-base hover:bg-wal-blue-100 focus:bg-wal-blue-100">
               📦 {type}
             </SelectItem>
           ))}
         </SelectContent>
       </Select>
       {errors.freight && <div role="alert" className="text-red-600 text-xs mt-1">{errors.freight}</div>}
     </div>
  );

  // Helper function to get status color for the trigger
  const getStatusTriggerColor = (status: string) => {
    switch (status) {
      case 'Empty': return 'bg-gray-100 text-gray-700 border-gray-300';
      case '25%': return 'bg-red-100 text-red-700 border-red-300';
      case '50%': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case '75%': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Partial': return 'bg-orange-100 text-orange-700 border-orange-300';
      case 'Shipload': return 'bg-green-100 text-green-700 border-green-300';
      default: return commonSelectClasses;
    }
  };

  const statusSelect = (
    <div>
      <div className={`text-xs text-wal-blue-600 font-bold mb-1 ${!isMobileView ? '' : 'sr-only'}`}>📊 Status</div>
      <Select
        value={door.trailerStatus}
        onValueChange={(value) => handleFieldUpdate("trailerStatus", value as TrailerStatus)}
      >
        <SelectTrigger
          className={`${door.trailerStatus ? getStatusTriggerColor(door.trailerStatus) : commonSelectClasses} font-medium`}
          aria-label={`Select Trailer Status, current value ${door.trailerStatus}`}
        >
          <SelectValue placeholder="Select Status" />
        </SelectTrigger>
        <SelectContent>
          {trailerStatusOptions.map((status) => (
            <SelectItem
              key={status.value}
              value={status.value}
              className={`${status.colorClass} text-base font-medium`}
            >
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  const tcrCheckbox = (
    <motion.div
      className="flex items-center space-x-2"
      whileTap={{ scale: 0.95 }}
    >
      <Checkbox
        id={`tcr-${door.id}`}
        checked={!!door.tcrPresent}
        onCheckedChange={(checked) => {
          handleFieldUpdate("tcrPresent", checked as boolean);
        }}
        aria-labelledby={`tcr-label-${door.id}`}
        aria-describedby={`tcr-help-${door.id}`}
        className="data-[state=checked]:bg-wal-blue-600 data-[state=checked]:border-wal-blue-600 transition-colors duration-200 border-2"
      />
      <Label
        htmlFor={`tcr-${door.id}`}
        id={`tcr-label-${door.id}`}
        className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-wal-blue-700"
      >
        📋 TCR Present
      </Label>
      <p id={`tcr-help-${door.id}`} className="sr-only">
        Indicates whether a Trailer Condition Report is available for this door
      </p>
    </motion.div>
  );

  const doorNumberDisplay = (
      <div className={isMobileView ? "flex items-center gap-2" : "text-center"}>
        <div className="flex flex-col items-center">
          <span className={`font-bold text-wal-blue-700 bg-gradient-to-br from-wal-yellow-400 to-wal-yellow-500 px-3 py-1 rounded-lg shadow-md ${isMobileView ? 'text-xl' : 'text-[22px]'}`}>
            {door.doorNumber}
          </span>
          {!isMobileView && <div className="text-xs text-wal-blue-600 font-medium mt-1">Door #</div>}
        </div>
        {errors.doorNumber && (
          <div role="alert" className="text-red-600 text-xs mt-1">{errors.doorNumber}</div>
        )}
      </div>
  );

  const actionButtons = (
     <div className={`flex items-center gap-1 ${isMobileView ? 'justify-end' : 'h-9'}`}>
       <Button
         variant="ghost"
         size="icon"
         className="text-wal-blue-600 hover:text-wal-blue-800 hover:bg-blue-100 h-8 w-8 transition-all duration-200 hover:scale-110"
         onClick={() => setNotesOpen(!notesOpen)}
         aria-label={notesOpen ? "Close notes" : "Open notes"}
       >
         <MessageCircle className="h-4 w-4" />
       </Button>
       <Button
         variant="destructive"
         size="icon"
         className="bg-red-500 hover:bg-red-600 text-white h-8 w-8 transition-all duration-200 hover:scale-110 shadow-md"
         onClick={() => removeDoor(door.id)}
         aria-label={`Remove door ${door.doorNumber}`}
       >
         <Trash2 className="h-4 w-4" />
       </Button>
     </div>
  );

  if (!isMobileView) {
    return (
      <TableRow
        className={`bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-indigo-100 transition-all duration-200 ease-in-out border-b border-wal-blue-100 ${
          isAnimated ? "animate-pulse-bg-blue" : ""
        } ${isCompact ? 'py-1' : 'py-2'}`}
      >
        <TableCell className={`font-medium text-center ${
          isCompact ? "min-w-[60px] px-2" : "min-w-[70px] px-3"
        }`}>
          {doorNumberDisplay}
        </TableCell>
        <TableCell className={isCompact ? "min-w-[100px]" : "min-w-[120px]"}>
          {destinationSelect}
        </TableCell>
        <TableCell className="min-w-[120px]">{freightSelect}</TableCell>
        <TableCell className="min-w-[120px]">{statusSelect}</TableCell>
        <TableCell className="text-center w-[100px] p-1">{palletDisplay}</TableCell>
        <TableCell className="min-w-[100px]">{tcrCheckbox}</TableCell>
        <TableCell className="text-right w-[100px]">{actionButtons}</TableCell>
      </TableRow>
    );
  } else {
    return (
      <div
        className={`bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-wal-blue-200 shadow-lg hover:shadow-xl p-4 space-y-3 transition-all duration-200 ${isAnimated ? "animate-pulse-bg-blue" : ""}`}
      >
        <div className="flex items-center justify-between">
          {doorNumberDisplay}
          <div className="flex items-center gap-1">{actionButtons}</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {destinationSelect}
          {freightSelect}
          {statusSelect}
        </div>
        <div className="grid grid-cols-2 gap-3 pt-2">
          {palletDisplay}
          {tcrCheckbox}
        </div>
        <Collapsible open={notesOpen} onOpenChange={setNotesOpen}>
          <CollapsibleContent className="mt-2">
            <Textarea
              value={door.notes ?? ""}
              onChange={(e) => handleFieldUpdate("notes", e.target.value)}
              placeholder="Add notes..."
              className="w-full text-sm h-20 focus:ring-blue-300"
              aria-label={`Notes for door ${door.doorNumber}`}
            />
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  }
});

export default DoorEntryRow;
