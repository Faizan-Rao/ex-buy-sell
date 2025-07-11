import { z } from 'zod';
import { createEmailSchema } from './create-email.dto';
import { createZodDto } from '@anatine/zod-nestjs';

export const updateEmailSchema = createEmailSchema.partial();

export type UpdateEmailType = z.infer<typeof updateEmailSchema>;

export class UpdateEmailDto extends createZodDto(updateEmailSchema) {}
