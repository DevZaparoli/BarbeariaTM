import { pgTable, text, serial, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const slotsTable = pgTable("slots", {
  id: serial("id").primaryKey(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  isBlocked: boolean("is_blocked").notNull().default(false),
});

export const insertSlotSchema = createInsertSchema(slotsTable).omit({ id: true });
export type InsertSlot = z.infer<typeof insertSlotSchema>;
export type Slot = typeof slotsTable.$inferSelect;
