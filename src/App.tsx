import {
    IonApp,
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import React from "react";

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
import './app.css'
/* Theme variables */
import './theme/variables.css';
import {BottomBar} from "./components/BottomBar/BottomBar";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import moment from 'moment';
import 'moment/locale/ru';
import {Routers} from "./routers/routers";
moment.locale('ru');

const App: React.FC = () => (
    <IonApp>
        <Provider store={store}>
            <IonReactRouter>
                <Routers/>
                <BottomBar/>
            </IonReactRouter>
        </Provider>
    </IonApp>
);

export default App;
