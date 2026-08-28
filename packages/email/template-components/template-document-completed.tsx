import { Button, Column, Img, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentCompletedProps {
  downloadLink: string;
  documentName: string;
  assetBaseUrl: string;
  customBody?: string;
}

export const TemplateDocumentCompleted = ({
  downloadLink,
  documentName,
  assetBaseUrl,
  customBody,
}: TemplateDocumentCompletedProps) => {
  const getAssetUrl = (path: string) => {
    return new URL(path, assetBaseUrl).toString();
  };

  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        <Section className="mb-4">
          <Column align="center">
            <Text className="font-semibold text-base text-foreground">
              <Img
                src={getAssetUrl('/static/completed.png')}
                className="-mt-0.5 mr-2 inline h-7 w-7 align-middle"
                alt=""
              />
              Documento concluído
            </Text>
          </Column>
        </Section>

        <Text className="mb-0 text-center font-semibold text-foreground text-lg">
          {customBody || `“${documentName}” foi assinado por todos os signatários`}
        </Text>

        <Text className="my-1 text-center text-base text-muted-foreground">
          Faça o download do documento assinado.
        </Text>

        <Section className="mt-8 mb-6 text-center">
          <Button
            className="rounded-lg border border-solid border-[#5b5cf6] px-5 py-3 text-center font-semibold text-[#4f46e5] text-sm no-underline"
            href={downloadLink}
          >
            <Img src={getAssetUrl('/static/download.png')} className="mr-2 mb-0.5 inline h-5 w-5 align-middle" alt="" />
            Baixar documento
          </Button>
        </Section>
      </Section>
    </>
  );
};

export default TemplateDocumentCompleted;
