import { Body, Container, Head, Html, Preview, Section } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import { TemplateDocumentRecipientSigned } from '../template-components/template-document-recipient-signed';
import { TemplateFooter } from '../template-components/template-footer';

export interface DocumentRecipientSignedEmailTemplateProps {
  documentName?: string;
  recipientName?: string;
  recipientEmail?: string;
  assetBaseUrl?: string;
}

export const DocumentRecipientSignedEmailTemplate = ({
  documentName = 'Open Source Pledge.pdf',
  recipientName = 'John Doe',
  recipientEmail = 'lucas@documenso.com',
  assetBaseUrl = 'http://localhost:3002',
}: DocumentRecipientSignedEmailTemplateProps) => {
  const recipientReference = recipientName || recipientEmail;

  const previewText = `${recipientReference} assinou “${documentName}”`;

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto bg-[#f6f7fb] font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-2xl border border-solid border-[#e5e7eb] bg-white p-8 shadow-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-8 h-10 w-auto" />

              <TemplateDocumentRecipientSigned
                documentName={documentName}
                recipientName={recipientName}
                recipientEmail={recipientEmail}
                assetBaseUrl={assetBaseUrl}
              />
            </Section>
          </Container>

          <Container className="mx-auto max-w-xl px-4">
            <TemplateFooter />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default DocumentRecipientSignedEmailTemplate;
