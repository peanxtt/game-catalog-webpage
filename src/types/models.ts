import { z } from "zod";

export const unitItemSchema = z.object({
  item_id: z.number(),
  sku: z.string(),
  type: z.string(),
  price: z.object({
    amount: z.string(),
    amount_with_discount: z.string(),
    currency: z.string()
  }),
  virtual_prices: z.array(z.string()),
  can_be_bought: z.boolean(),
  promotions: z.array(z.any()),
  limits: z.any().nullable(),
  periods: z.array(z.any()),
  is_free: z.boolean(),
  drm_name: z.string(),
  drm_sku: z.string(),
  has_keys: z.boolean(),
  is_pre_order: z.boolean(),
  release_date: z.any().nullable()
})
export type unitItem = z.infer<typeof unitItemSchema>;

export const GameSchema = z.object({
  item_id: z.number(),
  sku: z.string(),
  type: z.string(),
  name: z.string(),
  unit_type: z.string(),
  unit_items: unitItemSchema.array(),
  description: z.string().nullable(),
  image_url: z.string(),
  promotions: z.array(z.any()).nullable(),
  periods: z.array(z.any()).nullable(),
  attributes: z.array(z.any()).nullable(),
  groups: z.array(z.any()).nullable()
});
export type GameType = z.infer<typeof GameSchema>;

