import { RecipientRole } from '@prisma/client';

import { Body, Container, Head, Hr, Html, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateCustomMessageBody } from '../template-components/template-custom-message-body';
import { TemplateDocumentReminder } from '../template-components/template-document-reminder';
import { TemplateFooter } from '../template-components/template-footer';

export type DocumentReminderEmailTemplateProps = {
  recipientName: string;
  documentName: string;
  signDocumentLink: string;
  assetBaseUrl?: string;
  customBody?: string;
  role: RecipientRole;
  reportUrl?: string;
};

export const DocumentReminderEmailTemplate = ({
  recipientName = 'John Doe',
  documentName = 'Open Source Pledge.pdf',
  signDocumentLink = 'https://documenso.com',
  assetBaseUrl = 'http://localhost:3002',
  customBody,
  role = RecipientRole.SIGNER,
  reportUrl,
}: DocumentReminderEmailTemplateProps) => {
  const action = {
    [RecipientRole.SIGNER]: 'assinar',
    [RecipientRole.VIEWER]: 'visualizar',
    [RecipientRole.APPROVER]: 'aprovar',
    [RecipientRole.CC]: 'acompanhar',
    [RecipientRole.ASSISTANT]: 'auxiliar',
  }[role];

  const previewText = `Lembrete para ${action} “${documentName}”`;

  return (
    <Html>
      <Head />

      <Body className="mx-auto my-auto bg-[#f6f7fb] font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-2xl border border-solid border-[#e5e7eb] bg-white p-8 shadow-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-8 h-10 w-auto" />

              <TemplateDocumentReminder
                recipientName={recipientName}
                documentName={documentName}
                signDocumentLink={signDocumentLink}
                assetBaseUrl={assetBaseUrl}
                role={role}
              />
            </Section>
          </Container>

          {customBody && (
            <Container className="mx-auto mt-8 max-w-xl px-4">
              <Section>
                <Text className="mt-2 text-base text-muted-foreground">
                  <TemplateCustomMessageBody text={customBody} />
                </Text>
              </Section>
            </Container>
          )}

          <Hr className="mx-auto mt-8 max-w-xl border-[#dfe3ef]" />

          <Container className="mx-auto max-w-xl px-4">
            <TemplateFooter reportUrl={reportUrl} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default DocumentReminderEmailTemplate;
