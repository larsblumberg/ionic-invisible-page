import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" component={Page} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

const Page: React.FC = () => {
  const [styleClass, setStyleClass] = useState('initial-class')
  return (
    <IonPage className={styleClass}>
      <IonContent>
        <IonButton onClick={() => setStyleClass('other-class')}>Add Class</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default App;
