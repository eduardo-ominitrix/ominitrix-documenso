import { Column, Img, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentPendingProps {
  documentName: string;
  assetBaseUrl: string;
}

export const TemplateDocumentPending = ({ documentName, assetBaseUrl }: TemplateDocumentPendingProps) => {
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
              <Img src={getAssetUrl('/static/clock.png')} className="-mt-0.5 mr-2 inline h-7 w-7 align-middle" alt="" />
              Aguardando os demais signatários
            </Text>
          </Column>
        </Section>

        <Text className="mb-0 text-center font-semibold text-foreground text-lg">
          “{documentName}” foi assinado
        </Text>

        <Text className="mx-auto mt-1 mb-6 max-w-[80%] text-center text-base text-muted-foreground">
          Ainda aguardamos as outras assinaturas deste documento.
          <br />
          Avisaremos você assim que ele estiver concluído.
        </Text>
      </Section>
    </>
  );
};

export default TemplateDocumentPending;
