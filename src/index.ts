import { getAsyncLifecycle } from '@openmrs/esm-react-utils';
import { backendDependencies } from './openmrs-backend-dependencies';

const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

function setupOpenMRS() {
  const moduleName = '@openmrs/esm-attachments-app';

  return {
    extensions: [
      {
        id: 'attachments-overview-widget',
        slot: 'attachments-overview-tab',
        load: getAsyncLifecycle(() => import('./widgets/attachments-overview.component'), {
          featureName: 'attachments',
          moduleName,
        }),
      },
    ],
  };
}

export { backendDependencies, importTranslation, setupOpenMRS };
