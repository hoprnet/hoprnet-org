import React from 'react';
import { useTranslation } from '../../hooks/translation';
import SubStrack from '../molecules/sub-strack';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="container the-aux-margin">
      <div className="container sub-title">
        <h2 className="the-aux-margin">{t('home:contact.getAll')}</h2>
      </div>
      <SubStrack />
    </div>
  );
}
