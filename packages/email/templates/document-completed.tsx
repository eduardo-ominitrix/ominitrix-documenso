import { Body, Container, Head, Html, Preview, Section } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import type { TemplateDocumentCompletedProps } from '../template-components/template-document-completed';
import { TemplateDocumentCompleted } from '../template-components/template-document-completed';
import { TemplateFooter } from '../template-components/template-footer';

export type DocumentCompletedEmailTemplateProps = Partial<TemplateDocumentCompletedProps> & {
  customBody?: string;
  reportUrl?: string;
};

export const DocumentCompletedEmailTemplate = ({
  downloadLink = 'https://documenso.com',
  documentName = 'Open Source Pledge.pdf',
  assetBaseUrl = 'http://localhost:3002',
  customBody,
  reportUrl,
}: DocumentCompletedEmailTemplateProps) => {
  const previewText = `Documento concluído: ${documentName}`;

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto bg-[#f6f7fb] font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-2xl border border-solid border-[#e5e7eb] bg-white p-8 shadow-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-8 h-10 w-auto" />

              <TemplateDocumentCompleted
                downloadLink={downloadLink}
                documentName={documentName}
                assetBaseUrl={assetBaseUrl}
                customBody={customBody}
              />
            </Section>
          </Container>

          <Container className="mx-auto max-w-xl px-4">
            <TemplateFooter reportUrl={reportUrl} />
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default DocumentCompletedEmailTemplate;
