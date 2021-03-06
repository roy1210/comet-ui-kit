import { Meta } from '@storybook/react';
import React, { useEffect } from 'react';

import { Button } from '../../components/Button';

import { CometToastContainer } from './CometToastContainer';
import { createToast } from './manage-toast';

const meta: Meta = {
  title: 'Toasts',
};

export default meta;

const Common = () => {
  useEffect(() => {
    createToast({ content: 'A toast', type: 'default' });
    createToast({ content: 'A toast', type: 'success' });
    createToast({ content: 'A toast', type: 'warning' });
    createToast({ content: 'A toast', type: 'danger' });
    createToast({ content: 'A toast', type: 'info' });
  }, []);

  return (
    <>
      <Button variant="primary" size="state" onClick={() => createToast({ content: 'A toast' })}>
        Create toast
      </Button>
      <CometToastContainer />
    </>
  );
};

export const Light = () => <Common />;
Light.parameters = { theme: 'light' };

export const Dark = () => <Common />;
Dark.parameters = { theme: 'dark' };
