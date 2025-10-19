ALTER TABLE `exercises` ADD `load_type` text NOT NULL;--> statement-breakpoint
ALTER TABLE `exercises` ADD `weight` real;--> statement-breakpoint
ALTER TABLE `exercises` ADD `weight_unit` text NOT NULL;--> statement-breakpoint
ALTER TABLE `exercises` ADD `repetition_quantity` integer;--> statement-breakpoint
ALTER TABLE `exercises` ADD `set_quantity` integer;--> statement-breakpoint
ALTER TABLE `exercises` ADD `duration_seconds` integer;