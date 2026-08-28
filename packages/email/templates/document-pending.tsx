import { Body, Container, Head, Html, Preview, Section } from '../components';
import { TemplateBrandingLogo } from '../template-components/template-branding-logo';
import type { TemplateDocumentPendingProps } from '../template-components/template-document-pending';
import { TemplateDocumentPending } from '../template-components/template-document-pending';
import { TemplateFooter } from '../template-components/template-footer';

export type DocumentPendingEmailTemplateProps = Partial<TemplateDocumentPendingProps>;

export const DocumentPendingEmailTemplate = ({
  documentName = 'Open Source Pledge.pdf',
  assetBaseUrl = 'http://localhost:3002',
}: DocumentPendingEmailTemplateProps) => {
  const previewText = 'Aguardando as demais assinaturas';

  return (
    <Html>
      <Head />
      <Body className="mx-auto my-auto bg-[#f6f7fb] font-sans">
        <Preview>{previewText}</Preview>

        <Section>
          <Container className="mx-auto mt-8 mb-2 max-w-xl rounded-2xl border border-solid border-[#e5e7eb] bg-white p-8 shadow-sm">
            <Section>
              <TemplateBrandingLogo assetBaseUrl={assetBaseUrl} className="mb-8 h-10 w-auto" />

              <TemplateDocumentPending documentName={documentName} assetBaseUrl={assetBaseUrl} />
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

export default DocumentPendingEmailTemplate;
