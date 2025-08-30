import { z } from "zod";

export const doorScheduleSchema = z.object({
  doorNumber: z
    .number({
      required_error: "Door number is required",
      invalid_type_error: "Door number must be a number"
    })
    .int()
    .min(332, { message: "Door number must be at least 332" })
    .max(454, { message: "Door number must be at most 454" }),
  
  destinationDC: z.enum(["6024", "6070", "6039", "6040", "7045"] as const, {
    required_error: "Destination DC is required",
    invalid_type_error: "Invalid destination DC"
  }),
  
  freightType: z.enum(["23/43", "28", "XD", "AIB"] as const, {
    required_error: "Freight type is required",
    invalid_type_error: "Invalid freight type"
  }),
  
  trailerStatus: z.enum(["empty", "25%", "50%", "75%", "partial", "shipload"] as const, {
    required_error: "Trailer status is required",
    invalid_type_error: "Invalid trailer status"
  }),
  
  palletCount: z
    .number({
      required_error: "Pallet count is required",
      invalid_type_error: "Pallet count must be a number"
    })
    .int()
    .min(0, { message: "Pallet count cannot be negative" }),
  
  notes: z.string().optional(),
  tcrPresent: z.boolean().default(false)
});

// Type inference from the schema
export type DoorScheduleFormValues = z.infer<typeof doorScheduleSchema>;
