import { Fragment } from 'react';

import { Link, Section, Text } from '../components';
import { useBranding } from '../providers/branding';
import { getSafeBrandingUrl } from '../utils/branding-url';

export type TemplateFooterProps = {
  isDocument?: boolean;
  reportUrl?: string;
};

export const TemplateFooter = ({ isDocument = true, reportUrl }: TemplateFooterProps) => {
  const branding = useBranding();

  const safeBrandingUrl = branding.brandingEnabled ? getSafeBrandingUrl(branding.brandingUrl) : null;

  return (
    <Section>
      {reportUrl && (
        <Text className="my-5 text-sm leading-6 text-muted-foreground">
          Não reconhece este e-mail?{' '}
            <Link className="text-primary" href={reportUrl}>
              Informe o remetente
            </Link>
            . Nunca assine um documento que você não reconhece ou não esperava receber.
        </Text>
      )}

      {isDocument && !branding.brandingHidePoweredBy && (
        <Text className="my-4 text-sm text-muted-foreground">
          Este documento foi enviado com{' '}
            <Link className="text-primary" href="https://documen.so/mail-footer">
              Documenso
            </Link>
            .
        </Text>
      )}

      {branding.brandingEnabled && branding.brandingCompanyDetails && (
        <Text className="my-8 text-muted-foreground text-sm">
          {branding.brandingCompanyDetails.split('\n').map((line, idx) => {
            return (
              <Fragment key={idx}>
                {idx > 0 && <br />}
                {line}
              </Fragment>
            );
          })}
        </Text>
      )}

      {branding.brandingEnabled && safeBrandingUrl && (
        <Text className="my-8 text-muted-foreground text-sm">
          <Link href={safeBrandingUrl} target="_blank">
            {safeBrandingUrl}
          </Link>
        </Text>
      )}

      {!branding.brandingEnabled && (
        <Text className="my-8 text-muted-foreground text-sm">
          Ominitrix
          <br />
          Tecnologia em rastreamento e segurança
          <br />
          <Link className="text-primary" href="https://ominitrix.com">
            ominitrix.com
          </Link>
        </Text>
      )}
    </Section>
  );
};

export default TemplateFooter;
