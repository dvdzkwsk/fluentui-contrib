import * as React from 'react';
import { FluentProvider } from '@fluentui/react-components';

import {
  makeStyles,
  Body1,
  Caption1,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from '@fluentui/react-components';
import { ArrowReplyRegular, ShareRegular } from '@fluentui/react-icons';
import * as spdscard from '@fluentui-contrib/react-spds/src/react-card/src/experimental';

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    'https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/';

  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    margin: 'auto',
    width: '360px',
    maxWidth: '100%',
  },
});

export const CardStory = () => {
  return (
    <div style={{ display: 'flex', gap: '32px' }}>
      <FluentProvider>
        <FluentCardExample />
      </FluentProvider>
      <FluentProvider>
        <SPDSCardExample />
      </FluentProvider>
    </div>
  );
};

const FluentCardExample = () => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        image={
          <img
            src={resolveAsset('avatar_elvia.svg')}
            alt="Elvia Atkins avatar picture"
          />
        }
        header={
          <Body1>
            <b>Elvia Atkins</b> mentioned you
          </Body1>
        }
        description={<Caption1>5h ago · About us - Overview</Caption1>}
      />

      <CardPreview
        logo={
          <img src={resolveAsset('docx.png')} alt="Microsoft Word document" />
        }
      >
        <img
          src={resolveAsset('doc_template.png')}
          alt="Preview of a Word document: About Us - Overview"
        />
      </CardPreview>

      <CardFooter>
        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
        <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
      </CardFooter>
    </Card>
  );
};

const SPDSCardExample = () => {
  const styles = useStyles();
  return (
    <spdscard.Card className={styles.card}>
      <spdscard.CardHeader
        image={
          <img
            src={resolveAsset('avatar_elvia.svg')}
            alt="Elvia Atkins avatar picture"
          />
        }
        header={
          <Body1>
            <b>Elvia Atkins</b> mentioned you
          </Body1>
        }
        description={<Caption1>5h ago · About us - Overview</Caption1>}
      />

      <spdscard.CardPreview
        logo={
          <img src={resolveAsset('docx.png')} alt="Microsoft Word document" />
        }
      >
        <img
          src={resolveAsset('doc_template.png')}
          alt="Preview of a Word document: About Us - Overview"
        />
      </spdscard.CardPreview>
      <spdscard.CardFooter>
        <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
        <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
      </spdscard.CardFooter>
    </spdscard.Card>
  );
};
