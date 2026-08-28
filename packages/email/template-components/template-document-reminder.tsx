import { RecipientRole } from '@prisma/client';

import { Button, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentReminderProps {
  recipientName: string;
  documentName: string;
  signDocumentLink: string;
  assetBaseUrl: string;
  role: RecipientRole;
}

export const TemplateDocumentReminder = ({
  recipientName,
  documentName,
  signDocumentLink,
  assetBaseUrl,
  role,
}: TemplateDocumentReminderProps) => {
  const action = {
    [RecipientRole.SIGNER]: 'assinar',
    [RecipientRole.VIEWER]: 'visualizar',
    [RecipientRole.APPROVER]: 'aprovar',
    [RecipientRole.CC]: 'acompanhar',
    [RecipientRole.ASSISTANT]: 'auxiliar',
  }[role];

  const continuation = {
    [RecipientRole.SIGNER]: 'Assine o documento para continuar.',
    [RecipientRole.VIEWER]: 'Visualize o documento para continuar.',
    [RecipientRole.APPROVER]: 'Analise e aprove o documento para continuar.',
    [RecipientRole.CC]: '',
    [RecipientRole.ASSISTANT]: 'Auxilie no preenchimento do documento para continuar.',
  }[role];

  const callToAction = {
    [RecipientRole.SIGNER]: 'Assinar documento',
    [RecipientRole.VIEWER]: 'Visualizar documento',
    [RecipientRole.APPROVER]: 'Aprovar documento',
    [RecipientRole.CC]: '',
    [RecipientRole.ASSISTANT]: 'Auxiliar no documento',
  }[role];

  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
          Lembrete: é necessário {action} o documento
          <br />“{documentName}”
        </Text>

        <Text className="my-1 text-center text-base text-muted-foreground">
          Olá, {recipientName}.
        </Text>

        <Text className="my-1 text-center text-base text-muted-foreground">
          {continuation}
        </Text>

        <Section className="mt-8 mb-6 text-center">
          <Button
            className="inline-flex items-center justify-center rounded-lg bg-[#5b5cf6] px-6 py-3 text-center font-semibold text-sm text-white no-underline"
            href={signDocumentLink}
          >
            {callToAction}
          </Button>
        </Section>
      </Section>
    </>
  );
};

export default TemplateDocumentReminder;
