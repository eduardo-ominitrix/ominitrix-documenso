import { Column, Row, Section, Text } from '../components';

export interface TemplateDocumentImageProps {
  assetBaseUrl: string;
  className?: string;
}

export const TemplateDocumentImage = ({ assetBaseUrl, className }: TemplateDocumentImageProps) => {
  void assetBaseUrl;

  return (
    <Section className={className}>
      <Row className="table-fixed">
        <Column />

        <Column>
          <Text className="m-0 rounded-full bg-[#eef2ff] px-4 py-2 text-center font-semibold text-[#4f46e5] text-xs tracking-[0.16em]">
            ASSINATURAS DIGITAIS
          </Text>
        </Column>

        <Column />
      </Row>
    </Section>
  );
};

export default TemplateDocumentImage;
