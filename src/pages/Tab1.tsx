import React, { useState } from 'react';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [styleClass, setStyleClass] = useState('initial-class')
  return (
    <IonPage className={styleClass}>
      <IonContent>
        <IonButton onClick={() => setStyleClass('other-class')}>Add Class</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
