const localization = {
  en: {
    languages: {
      en: 'English',
      de: 'German',
      fr: 'French',
      es: 'Spanish',
      jp: 'Japanese',
      ru: 'Russian',
      help: 'Language incomplete or missing? Help translating!',
    },
    routes: {
      landingPage: 'Home',
      register: 'Register',
      login: 'Login',
      resetPassword: 'Forgot password?',
      privacyPolicy: 'Privacy Policy',
      tos: 'Terms of Service',
      settings: 'Settings',
    },
    navigation: {
      contribute: 'Contribute',
      logout: 'Logout',
      login: 'Login',
    },
    settings: {
      title: 'Settings',
      siteSettings: 'Site Settings',
      accountSettings: 'Account Settings',
      changeLanguage: 'Change Language',
      changeTheme: 'Change Theme',
      dangerZone: 'Danger Zone',
      deleteAccountBtnText: 'Delete Your Account',
      warning: 'Warning',
      deleteAccountInfo: "You're in the process of deleting your account!",
      deleteAccountAbort: 'No, please take me back.',
      deleteAccountConfirm: 'Yes, delete my account.',
      deleteAccountGoodbye:
        'Sad to see you go. Your account will be deleted in 10 seconds.',
      deleteAccountAbort2: 'I changed my mind!',
      success: 'Success',
      changePassword: 'Change Password',
      changePasswordSuccess: 'Your password was successfully changed.',
    },
    footer: {
      legal: 'Legal',
      features: 'Features',
      other: 'Other',
    },
  },
  de: {
    languages: {
      en: 'Englisch',
      de: 'Deutsch',
      fr: 'Französisch',
      es: 'Spanisch',
      jp: 'Japanisch',
      ru: 'Russisch',
      help: 'Sprache unvollständig oder fehlt? Hilf zu übersetzen!',
    },
    routes: {
      landingPage: 'Startseite',
      register: 'Registrieren',
      login: 'Login',
      resetPassword: 'Passwort vergessen?',
      privacyPolicy: 'Privacy Policy',
      tos: 'Nutzungsbedingungen',
      settings: 'Einstellungen',
    },
    navigation: {
      contribute: 'Contribute',
      logout: 'Logout',
      login: 'Login',
    },
    settings: {
      title: 'Einstellungen',
      siteSettings: 'Seiteneinstellungen',
      accountSettings: 'Accounteinstellungen',
      changeLanguage: 'Sprache ändern',
      changeTheme: 'Farbschema ändern',
      dangerZone: 'Gefahrenzone',
      deleteAccountBtnText: 'Account löschen',
      warning: 'Warnung',
      deleteAccountInfo: 'Du bist im Begriff deinen Account zu löschen!',
      deleteAccountAbort: 'Danke nein, zurück.',
      deleteAccountConfirm: 'Ja, löscht meinen Account.',
      deleteAccountGoodbye:
        'Schade! Dein Account wird in 10 Sekunden gelöscht.',
      deleteAccountAbort2: 'Ich habe es mir anders überlegt!',
      success: 'Erfolg',
      changePassword: 'Password ändern',
      changePasswordSuccess: 'Dein Passwort wurde erfolgreich geändert.',
    },
    footer: {
      legal: 'Rechtliches',
      features: 'Features',
      other: 'Weiteres',
    },
  },
};

export async function handler({ queryStringParameters: { lng, ns } }) {
  const languages = lng.split(' ');
  const namespaces = ns.split(' ');

  const response = languages.reduce((carry, language) => {
    if (!carry[language]) {
      carry[language] = {};
    }

    namespaces.forEach(
      ns => (carry[language][ns] = localization[language][ns]),
    );

    return carry;
  }, {});

  return {
    statusCode: 200,
    body: JSON.stringify({ ...response }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}
