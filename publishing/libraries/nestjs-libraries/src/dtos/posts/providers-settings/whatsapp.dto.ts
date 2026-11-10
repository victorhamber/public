import { IsBoolean, IsOptional } from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';

export class WhatsappDto {
  @IsOptional()
  @IsBoolean()
  @JSONSchema({
    description:
      'Mention group participants without writing @name in the visible text',
  })
  invisibleMention?: boolean;
}
