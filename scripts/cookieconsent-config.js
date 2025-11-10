// Cookie Consent Configuration for Baby Sleep Team
// Wait for CookieConsent library to load
window.addEventListener('load', function() {
    if (typeof CookieConsent !== 'undefined') {
        CookieConsent.run({
            cookie: {
                name: 'cc_cookie_babysleepteam',
            },

            guiOptions: {
                consentModal: {
                    layout: 'box inline',
                    position: 'bottom right',
                    flipButtons: false
                },
                preferencesModal: {
                    layout: 'box',
                    position: 'left',
                    flipButtons: false
                }
            },

            onFirstConsent: function() {
                console.log('Cookie consent - First consent given');
            },

            onConsent: function() {
                console.log('Cookie consent - Consent updated');
            },

            onChange: function() {
                console.log('Cookie consent - Preferences changed');
            },

            categories: {
                necessary: {
                    readOnly: true,
                    enabled: true
                },
                analytics: {
                    autoClear: {
                        cookies: [
                            {
                                name: /^(_ga|_gid)/
                            }
                        ]
                    }
                }
            },

            language: {
                default: 'sr',

                translations: {
                    sr: {
                        consentModal: {
                            title: 'Kolačići (Cookies)',
                            description: 'Naša veb stranica koristi kolačiće kako bismo razumeli kako vi koristite sajt. Praćenje će biti omogućeno samo ako vi to eksplicitno prihvatite. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Upravljaj podešavanjima</a>',
                            acceptAllBtn: 'Prihvati sve',
                            acceptNecessaryBtn: 'Odbij sve',
                            footer: `
                                <a href="contact.html">Politika kolačića</a>
                                <a href="contact.html">Politika privatnosti</a>
                                <a href="contact.html">Uslovi korišćenja</a>
                            `
                        },
                        preferencesModal: {
                            title: 'Podešavanja kolačića',
                            acceptAllBtn: 'Prihvati sve',
                            acceptNecessaryBtn: 'Odbij sve',
                            savePreferencesBtn: 'Sačuvaj podešavanja',
                            closeIconLabel: 'Zatvori',
                            sections: [
                                {
                                    title: 'Upotreba kolačića',
                                    description: 'Koristimo kolačiće kako bismo poboljšali vaše iskustvo na našoj veb stranici. Neki kolačići su neophodni za funkcionisanje sajta, dok drugi pomažu u analizi kako koristite sajt.'
                                }, {
                                    title: 'Neophodni kolačići',
                                    description: 'Ovi kolačići su neophodni za pravilan rad veb stranice i ne mogu biti isključeni.',
                                    linkedCategory: 'necessary'
                                }, {
                                    title: 'Analitički kolačići',
                                    description: 'Ovi kolačići nam pomažu da razumemo kako posetioci koriste veb stranicu prikupljanjem anonimnih podataka. Koristimo Google Analytics za ovu svrhu.',
                                    linkedCategory: 'analytics'
                                }, {
                                    title: 'Više informacija',
                                    description: 'Za bilo kakva pitanja u vezi sa našom politikom kolačića, molimo vas da nas <a class="cc__link" href="contact.html">kontaktirate</a>.'
                                }
                            ]
                        }
                    },
                    en: {
                        consentModal: {
                            title: 'We use cookies',
                            description: 'Our website uses tracking cookies to understand how you interact with it. Tracking will be enabled only if you accept explicitly. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>',
                            acceptAllBtn: 'Accept all',
                            acceptNecessaryBtn: 'Reject all',
                            footer: `
                                <a href="contact.html">Contact</a>
                            `
                        },
                        preferencesModal: {
                            title: 'Cookie preferences',
                            acceptAllBtn: 'Accept all',
                            acceptNecessaryBtn: 'Reject all',
                            savePreferencesBtn: 'Save preferences',
                            closeIconLabel: 'Close',
                            sections: [
                                {
                                    title: 'Cookie usage',
                                    description: 'We use cookies to improve your experience on our website. Some cookies are necessary for the site to function, while others help us analyze how you use the site.'
                                }, {
                                    title: 'Strictly necessary cookies',
                                    description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
                                    linkedCategory: 'necessary'
                                }, {
                                    title: 'Performance and analytics cookies',
                                    description: 'These cookies help us understand how visitors use our website by collecting anonymous data. We use Google Analytics for this purpose.',
                                    linkedCategory: 'analytics'
                                }, {
                                    title: 'More information',
                                    description: 'For any questions regarding our cookie policy, please <a class="cc__link" href="contact.html">contact us</a>.'
                                }
                            ]
                        }
                    }
                }
            }
        });
    }
});