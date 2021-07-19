import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { ${name} } from './${name}';

const initialProps: any = {
    theme: 'original',
    realEstate: {
        id: -1,
        name: 'Dr. Thalissa Urias Rivera',
        hash: 'bancodosimoveis',
        blocked: 0,
        type: 1,
        logo: 'https://emailpronto.com.br/webservice/100616/LOGO/logo.png',
        website: 'http://bancodosimoveis.bdisite.com.br',
        background: 'http://realtyspace.codefactory47.com/app/uploads/revslider/RealtyspaceSlider11/banner-1.jpg?id=215',
        email_notifications: 'epaes@yahoo.com',
        email: 'maximiano.mares@hotmail.com',
        theme: 'original',
        phones: [
            {
                number: '11999991111',
                type: 'Fixo',
            },
        ],
        cep: '41919451',
        address: 'Leal Neck',
        neighborhood: 'West Carla',
        city: 'Rebecashire',
        estate: 'Minnesota',
        number: '2662',
        settings: {
            COLOR_PRIMARY: '#4e0706',
            COLOR_SECUNDARY: '#000000',
            SLOGAN: '',
            SEO_TITLE: '',
            SEO_KEYWORDS: '',
            SEO_DESCRIPTION: '',
            CRECI: '21.545 J',
            MEDIA_TWITTER: '',
            MEDIA_FACEBOOK: '',
            MEDIA_INSTAGRAM: '',
            MEDIA_GOOGLE_PLUS: '',
            MEDIA_YOUTUBE: '',
            GOOGLE_ANALYTICS: '',
            GOOGLE_SITE_VERIFICATION: '',
            PROPERTIES_HOME_RAND: '0',
            SCRIPTS_WEBSITE: '',
            NEIGHBORHOOD_PAGE: '0',
            WHATSAPP_NUMBER: '11999894646',
            WEBSITE_VIEW_MAP: '1',
            WEBSITE_VIEW_NO_PHOTO: '1',
            WEBSITE_VIEW_WORK_WITH_US: '1',
            WEBSITE_VIEW_REGISTER_PROPERTY: '1',
            WEBSITE_VIEW_CALL_YOU: '1',
            WEBSITE_VIEW_REQUEST_PROPERTY: '1',
            ICON_16X16: null,
            ICON_32X32: null,
            IMAGE_SHARED: null,
            FB_APP_ID: '',
        },
    },
};

storiesOf('${name}', module)
    .add('padrão', () => {
        return (
            <>
                <${name} />
            </>
        );
    });
