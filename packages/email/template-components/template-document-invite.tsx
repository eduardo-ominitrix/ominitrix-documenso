import { OrganisationType, RecipientRole } from '@prisma/client';
import { match, P } from 'ts-pattern';

import { Button, Section, Text } from '../components';
import { TemplateDocumentImage } from './template-document-image';

export interface TemplateDocumentInviteProps {
  inviterName: string;
  inviterEmail: string;
  documentName: string;
  signDocumentLink: string;
  assetBaseUrl: string;
  role: RecipientRole;
  selfSigner: boolean;
  teamName?: string;
  includeSenderDetails?: boolean;
  organisationType?: OrganisationType;
}

export const TemplateDocumentInvite = ({
  inviterName,
  documentName,
  signDocumentLink,
  assetBaseUrl,
  role,
  selfSigner,
  teamName,
  includeSenderDetails,
  organisationType,
}: TemplateDocumentInviteProps) => {
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
    [RecipientRole.SIGNER]: 'Acessar documento para assinar',
    [RecipientRole.VIEWER]: 'Visualizar documento',
    [RecipientRole.APPROVER]: 'Acessar documento para aprovar',
    [RecipientRole.CC]: '',
    [RecipientRole.ASSISTANT]: 'Acessar documento para auxiliar',
  }[role];

  return (
    <>
      <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />

      <Section>
        <Text className="mx-auto mb-0 max-w-[80%] text-center font-semibold text-foreground text-lg">
          {match({ selfSigner, organisationType, includeSenderDetails, teamName })
            .with({ selfSigner: true }, () => (
              <>
                Assine seu documento
                <br />“{documentName}”
              </>
            ))
            .with(
              {
                organisationType: OrganisationType.ORGANISATION,
                includeSenderDetails: true,
                teamName: P.string,
              },
              () => (
                <>
                  {inviterName}, em nome de “{teamName}”, convidou você para {action}
                  <br />“{documentName}”
                </>
              ),
            )
            .with({ organisationType: OrganisationType.ORGANISATION, teamName: P.string }, () => (
              <>
                {teamName} convidou você para {action}
                <br />“{documentName}”
              </>
            ))
            .otherwise(() => (
              <>
                {inviterName} convidou você para {action}
                <br />“{documentName}”
              </>
            ))}
        </Text>

        <Text className="my-1 text-center text-base text-muted-foreground">
          {continuation}
        </Text>

        <Section className="mt-8 mb-6 text-center">
          <Button
            className="inline-flex items-center justify-center rounded-lg bg-[#5b5cf6] px-6 py-3 text-center font-semibold text-base text-white no-underline"
            href={signDocumentLink}
          >
            {callToAction}
          </Button>
        </Section>
      </Section>
    </>
  );
};

export default TemplateDocumentInvite;
