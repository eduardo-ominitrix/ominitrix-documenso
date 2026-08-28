import { OrganisationType, RecipientRole } from '@prisma/client';

import { Body, Container, Head, Hr, Html, Link, Preview, Section, Text } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateCustomMessageBody } from '../template-components/template-custom-message-body';
import type { TemplateDocumentInviteProps } from '../template-components/template-document-invite';
import { TemplateDocumentInvite } from '../template-components/template-document-invite';
import { TemplateFooter } from '../template-components/template-footer';

export type DocumentInviteEmailTemplateProps = Partial<TemplateDocumentInviteProps> & {
  customBody?: string;
  role: RecipientRole;
  selfSigner?: boolean;
  teamName?: string;
  teamEmail?: string;
  includeSenderDetails?: boolean;
  organisationType?: OrganisationType;
  reportUrl?: string;
};

export const DocumentInviteEmailTemplate = ({
  inviterName = 'Lucas Smith',
  inviterEmail = 'lucas@documenso.com',
  documentName = 'Open Source Pledge.pdf',
  signDocumentLink = 'https://documenso.com',
  assetBaseUrl = 'http://localhost:3002',
  customBody,
  role,
  selfSigner = false,
  teamName = '',
  includeSenderDetails,
  organisationType,
  reportUrl,
}: DocumentInviteEmailTemplateProps) => {
  const action = {
    [RecipientRole.SIGNER]: 'assinar',
    [RecipientRole.VIEWER]: 'visualizar',
    [RecipientRole.APPROVER]: 'aprovar',
    [RecipientRole.CC]: 'acompanhar',
    [RecipientRole.ASSISTANT]: 'auxiliar',
  }[role];

  let previewText = `${inviterName} convidou você para ${action} “${documentName}”`;

  if (organisationType === OrganisationType.ORGANISATION) {
    previewText = includeSenderDetails
      ? `${inviterName}, em nome de “${teamName}”, convidou você para ${action} “${documentName}”`
      : `${teamName} convidou você para ${action} “${documentName}”`;
  }

  if (selfSigner) {
    previewText = `Assine seu documento “${documentName}”`;
  }

  return (
    <Html>
      <Head />

      <Body className="mx-auto my-auto bg-[#f6f7fb] font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-2xl border border-solid border-[#e5e7eb] bg-white p-8 shadow-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-8 h-10 w-auto" />

              <TemplateDocumentInvite
                inviterName={inviterName}
                inviterEmail={inviterEmail}
                documentName={documentName}
                signDocumentLink={signDocumentLink}
                assetBaseUrl={assetBaseUrl}
                role={role}
                selfSigner={selfSigner}
                organisationType={organisationType}
                teamName={teamName}
                includeSenderDetails={includeSenderDetails}
              />
            </Section>
          </Container>

          <Container className="mx-auto mt-8 max-w-xl px-4">
            <Section>
              {organisationType === OrganisationType.PERSONAL && (
                <Text className="my-4 font-semibold text-base">
                  <>
                    {inviterName}{' '}
                    <Link className="font-normal text-muted-foreground" href={`mailto:${inviterEmail}`}>
                      ({inviterEmail})
                    </Link>
                  </>
                </Text>
              )}

              <Text className="mt-2 text-base text-muted-foreground">
                {customBody ? (
                  <TemplateCustomMessageBody text={customBody} />
                ) : (
                  <>
                    {inviterName} convidou você para {action} o documento “{documentName}”.
                  </>
                )}
              </Text>
            </Section>
          </Container>

          <Hr className="mx-auto mt-8 max-w-xl border-[#dfe3ef]" />

          <Container className="mx-auto max-w-xl px-4">
            <TemplateFooter reportUrl={reportUrl} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default DocumentInviteEmailTemplate;
