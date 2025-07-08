import { z } from 'zod';
import { RoleEnum } from 'common/enum/role.enum';
import { createZodDto } from '@anatine/zod-nestjs';

export const UserSchema = z.object({
  first_name: z.string().min(4),
  last_name: z.string().min(4),
  role: RoleEnum,

  businessName: z.string().optional().nullable(),
  contactName: z.string(),

  email: z.string().email(),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  permissions: z.array(z.string()).optional(),
  state: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  zip_code: z.bigint().optional(),
  background: z.string(),

  password_hash: z.string(),

  refresh_token: z.string().optional().nullable(),

  otp_code: z.bigint().optional().nullable(),

  emailVerified: z.boolean().default(false),
  approved: z.boolean().default(false),
});

export type UserType = z.infer<typeof UserSchema>;
export class UserSchemaDTO extends createZodDto(UserSchema) {}

export const UserUpdateSchema = UserSchema.partial();
export type UpdateUserType = z.infer<typeof UserUpdateSchema>;
export class UserUpdateSchemaDTO extends createZodDto(UserUpdateSchema) {}
