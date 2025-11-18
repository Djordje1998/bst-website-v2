// Cookie Consent Configuration for BabySleepTeam
// Wait for CookieConsent library to load
window.addEventListener('load', function() {
    if (typeof CookieConsent !== 'undefined') {
        // Check if consent already given for file:// protocol
        if (window.location.protocol === 'file:' && localStorage.getItem('cc_cookie_babysleepteam')) {
            return; // Don't show banner if already consented
        }
        // Load Google Analytics only after analytics consent
        function loadGoogleAnalytics() {
            if (window.__gaLoaded) return;
            window.__gaLoaded = true;

            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            window.gtag = window.gtag || gtag;

            var s = document.createElement('script');
            s.async = true;
            s.src = 'https://www.googletagmanager.com/gtag/js?id=G-VKCP639T1W';
            s.onload = function(){
                gtag('js', new Date());
                gtag('config', 'G-VKCP639T1W');
            };
            document.head.appendChild(s);
        }

        // Load PostHog only after analytics consent
        function loadPostHog() {
            if (window.__posthogLoaded) return;
            window.__posthogLoaded = true;

            !function(t,e){var o,n,p,r;e.__SV||(window.posthog && window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init Rr Mr fi Or Ar ci Tr Cr capture Mi calculateEventProperties Lr register register_once register_for_session unregister unregister_for_session Hr getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Ur jr createPersonProfile zr kr Br opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Dr debug M Nr getPageViewId captureTraceFeedback captureTraceMetric $r".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_WLBIv7Ac3Faq5AH2UVRsjW7ttT7phSLW1e5U1azlqup', {
                api_host: 'https://us.i.posthog.com',
                defaults: '2025-05-24',
                person_profiles: 'identified_only'
            });
        }

        CookieConsent.run({
            cookie: {
                name: 'cc_cookie_babysleepteam',
                // Use localStorage for file:// protocol
                useLocalStorage: window.location.protocol === 'file:',
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
                // Save to localStorage for file:// protocol
                if (window.location.protocol === 'file:') {
                    localStorage.setItem('cc_cookie_babysleepteam', 'true');
                }
                try { 
                    if (CookieConsent.acceptedCategory('analytics')) { 
                        loadGoogleAnalytics(); 
                        loadPostHog();
                    } 
                } catch(e) {}
            },

            onConsent: function() {
                // Save to localStorage for file:// protocol
                if (window.location.protocol === 'file:') {
                    localStorage.setItem('cc_cookie_babysleepteam', 'true');
                }
                try { 
                    if (CookieConsent.acceptedCategory('analytics')) { 
                        loadGoogleAnalytics(); 
                        loadPostHog();
                    } 
                } catch(e) {}
            },

            onChange: function() {
                // Save to localStorage for file:// protocol
                if (window.location.protocol === 'file:') {
                    localStorage.setItem('cc_cookie_babysleepteam', 'true');
                }
                try { 
                    if (CookieConsent.acceptedCategory('analytics')) { 
                        loadGoogleAnalytics(); 
                        loadPostHog();
                    } 
                } catch(e) {}
            },

            categories: {
                necessary: {
                    readOnly: true,
                    enabled: true
                },
                analytics: {
                    enabled: true,
                    autoClear: {
                        cookies: [
                            {
                                name: /^(\_ga|\_gid)/
                            },
                            {
                                name: /^ph_/
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
                            title: 'Kolačići na BabySleepTeam sajtu',
                            description: 'Na sajtu BabySleepTeam koristimo kolačiće kako bi sve funkcije radile bez problema i kako bismo poboljšali sadržaj za roditelje. Klikom na „Prihvati sve kolačiće" pomažete nam da prikupljamo anonimne statistike, a podešavanja možete promeniti u svakom trenutku. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Upravljaj podešavanjima</a>',
                            acceptAllBtn: 'Prihvati sve kolačiće',
                            acceptNecessaryBtn: 'Dozvoli samo neophodne',
                            footer: `
                                <a href="../pravila/politika-kolacica.html">Politika kolačića</a>
                                <a href="../pravila/politika-privatnosti.html">Politika privatnosti</a>
                                <a href="../pravila/uslovi-koriscenja.html">Uslovi korišćenja</a>
                            `
                        },
                        preferencesModal: {
                            title: 'Podešavanja kolačića',
                            acceptAllBtn: 'Prihvati sve kolačiće',
                            acceptNecessaryBtn: 'Dozvoli samo neophodne',
                            savePreferencesBtn: 'Sačuvaj podešavanja',
                            closeIconLabel: 'Zatvori',
                            sections: [
                                {
                                    title: 'Kako BabySleepTeam koristi kolačiće',
                                    description: 'Kolačiće koristimo da bismo poboljšali vaše iskustvo, prilagodili sadržaj roditeljima i razumeli koje stranice i programi spavanja su vam najkorisniji.'
                                }, {
                                    title: 'Neophodni kolačići',
                                    description: 'Ovi kolačići su neophodni da bi sajt BabySleepTeam radio bezbedno i ispravno (npr. osnovne funkcije, izbor jezika) i ne mogu biti isključeni.',
                                    linkedCategory: 'necessary'
                                }, {
                                    title: 'Analitički kolačići',
                                    description: 'Analitički kolačići nam pomažu da anonimno razumemo kako roditelji koriste naš sajt, kako bismo unapredili sadržaj i programe spavanja. Koristimo Google Analytics i PostHog i podatke ne povezujemo sa vašim identitetom.',
                                    linkedCategory: 'analytics'
                                }, {
                                    title: 'Više informacija',
                                    description: 'Ako imate pitanja u vezi sa kolačićima ili privatnošću, molimo vas da nas kontaktirate.'
                                }
                            ]
                        }
                    },
                    en: {
                        consentModal: {
                            title: 'Cookies on BabySleepTeam',
                            description: 'BabySleepTeam uses cookies to keep the website running smoothly and to improve the content we create for parents. By clicking “Accept all cookies” you allow us to collect anonymous statistics, and you can change your preferences at any time. <a href="#privacy-policy" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>',
                            acceptAllBtn: 'Accept all cookies',
                            acceptNecessaryBtn: 'Allow necessary only',
                            footer: `
                                <a href="/pravila/politika-privatnosti.html">Privacy policy</a>
                            `
                        },
                        preferencesModal: {
                            title: 'Cookie preferences',
                            acceptAllBtn: 'Accept all cookies',
                            acceptNecessaryBtn: 'Allow necessary only',
                            savePreferencesBtn: 'Save preferences',
                            closeIconLabel: 'Close',
                            sections: [
                                {
                                    title: 'How BabySleepTeam uses cookies',
                                    description: 'We use cookies to improve your experience on our site, tailor information for parents and see which articles and sleep programs are most useful.'
                                }, {
                                    title: 'Strictly necessary cookies',
                                    description: 'These cookies are required for the BabySleepTeam website to function securely and correctly (e.g. basic features, language choice) and cannot be disabled.',
                                    linkedCategory: 'necessary'
                                }, {
                                    title: 'Analytics cookies',
                                    description: 'Analytics cookies help us understand, in an anonymous way, how parents use our website so we can improve our content and sleep programs. We use Google Analytics and PostHog and do not use this data to identify you.',
                                    linkedCategory: 'analytics'
                                }, {
                                    title: 'More information',
                                    description: 'For any questions about cookies or privacy, please contact us.'
                                }
                            ]
                        }
                    }
                }
            }
        });
        // If user had already consented earlier and this page loads later
        try { 
            if (CookieConsent.acceptedCategory('analytics')) { 
                loadGoogleAnalytics(); 
                loadPostHog();
            } 
        } catch(e) {}
    }
});