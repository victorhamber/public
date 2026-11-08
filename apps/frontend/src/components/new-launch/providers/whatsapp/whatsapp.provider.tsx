'use client';

import {
  PostComment,
  withProvider,
} from '@gitroom/frontend/components/new-launch/providers/high.order.provider';
import { FC } from 'react';
import { WhatsappDto } from '@gitroom/nestjs-libraries/dtos/posts/providers-settings/whatsapp.dto';
import { useSettings } from '@gitroom/frontend/components/launches/helpers/use.values';
import { Checkbox } from '@gitroom/react/form/checkbox';

const WhatsappSettings: FC = () => {
  const { register } = useSettings();
  return (
    <div>
      <Checkbox
        {...register('invisibleMention')}
        label="Invisible mention (notify participants without @name in the text)"
      />
    </div>
  );
};

export default withProvider({
  postComment: PostComment.COMMENT,
  minimumCharacters: [],
  SettingsComponent: WhatsappSettings,
  CustomPreviewComponent: undefined,
  dto: WhatsappDto,
  maximumCharacters: 4096,
});
