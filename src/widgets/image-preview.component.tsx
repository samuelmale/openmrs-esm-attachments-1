import React, { useState } from 'react';
import styles from './image-preview.css';
import { useTranslation } from 'react-i18next';
import { UserHasAccess } from '@openmrs/esm-react-utils';

export default function ImagePreview(props: ImagePreviewProps) {
  const [caption, setCaption] = useState('');
  const { t } = useTranslation();

  function saveImage(e: React.SyntheticEvent) {
    e.preventDefault();
    props.onSaveImage(props.dataUri, caption);
  }

  function cancelCapture(e: React.SyntheticEvent) {
    e.preventDefault();
    props.onCancelCapture();
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  function updateCaption(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    e.stopPropagation();
    setCaption(e.target.value);
  }

  return (
    <form className={styles.overview} onSubmit={handleSubmit}>
      <img src={props.dataUri} alt={t('webcamPreview', 'Webcam preview')} />
      <input
        type="text"
        placeholder={t('attachmentCaptionInstruction', 'Enter a caption for the image')}
        onChange={updateCaption}
      />
      <UserHasAccess privilege="Create Attachment">
        <button onClick={saveImage}>{t('save', 'Save')} </button>
      </UserHasAccess>
      <button onClick={cancelCapture}>{t('cancel', 'Cancel')} </button>
    </form>
  );
}

type ImagePreviewProps = {
  dataUri: string;
  onSaveImage?: Function;
  onCancelCapture?: Function;
};
