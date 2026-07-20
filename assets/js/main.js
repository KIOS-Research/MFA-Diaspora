(() => {
  const html = document.documentElement;
  const storage = window.localStorage;
  const labels = {
    en: {
      language: 'EL',
      navHome: 'Home', navFeatures: 'Features', navScreens: 'Screens', navPrivacy: 'Privacy', navAbout: 'About',
      eyebrow: 'Republic of Cyprus · Ministry of Foreign Affairs',
      heroTitle1: 'Cyprus,', heroTitle2: 'wherever you are.',
      heroCopy: 'DiasporaCY brings essential services, official information and the worldwide network of Cyprus diplomatic missions into one clear, bilingual mobile experience.',
      explore: 'Explore the app', policy: 'Privacy policy', privacyNote: 'A privacy-first gateway to official government services.',
      official: 'Official information', officialSub: 'From trusted government sources', bilingual: 'Greek & English', bilingualSub: 'Designed for the global diaspora', missions: '153 destinations', missionsSub: 'Embassies, consulates and coverage', noAccount: 'No account required', noAccountSub: 'Quick access to public services',
      featuresEyebrow: 'One app, a stronger connection', featuresTitle: 'Useful information without the noise.', featuresCopy: 'DiasporaCY is organised around the real needs of Cypriots abroad and people returning to Cyprus.',
      f1Title: 'Diaspora services', f1Copy: 'News, registry information, citizenship guidance, voting information and practical resources for returning home.',
      f2Title: 'Diplomatic missions', f2Copy: 'Search countries, discover the office responsible for each destination and access contact details in seconds.',
      f3Title: 'Talent & opportunity', f3Copy: 'Connect with Minds in Cyprus resources for relocation, investment, entrepreneurship and professional opportunities.',
      f4Title: 'Official external services', f4Copy: 'Continue securely to official government websites for enquiries, applications and transactions.',
      screensEyebrow: 'Built for clarity', screensTitle: 'A familiar experience from the first tap.', screensCopy: 'Simple navigation, readable information cards and clear calls to action help users find what matters quickly.',
      prev: 'Previous screenshot', next: 'Next screenshot',
      privacyTitle: 'Privacy is part of the design.', privacyCopy: 'DiasporaCY acts as a gateway to official information and services. Enquiries and transactions take place on the relevant official government websites.',
      p1: 'No in-app registration', p1s: 'Public content can be accessed without creating a DiasporaCY account.',
      p2: 'Official destinations', p2s: 'External actions continue on the responsible government service.',
      p3: 'Clear policy', p3s: 'Read the full privacy information in Greek or English.',
      readEn: 'Read in English', readEl: 'Διαβάστε στα Ελληνικά',
      storyEyebrow: 'Made for Cypriots everywhere', storyTitle: 'A digital bridge to Cyprus.', storyCopy: 'The Service for Overseas and Repatriated Cypriots supports the relationship between Cyprus and its global diaspora. DiasporaCY turns key information into a focused, accessible mobile gateway.',
      tag1: 'Diaspora connection', tag2: 'Missions directory', tag3: 'Bilingual interface', tag4: 'Mobile-first access',
      ctaTitle: 'Keep Cyprus within reach.', ctaCopy: 'Explore the services, discover the mission responsible for your country and access official information with confidence.', ctaButton: 'View app screens',
      footerCopy: 'DiasporaCY is a mobile gateway for the Service for Overseas and Repatriated Cypriots of the Ministry of Foreign Affairs of the Republic of Cyprus.',
      footerExplore: 'Explore', footerLegal: 'Legal', footerHome: 'Home', footerFeatures: 'Features', footerScreens: 'Screenshots', footerPrivacy: 'Privacy policy', footerTerms: 'Terms of service', footerCopyright: 'Republic of Cyprus. All rights reserved.', footerDisclaimer: 'Official gateway to services.',
      gallery: [
        ['Diaspora home', 'Direct access to the main service categories.'],
        ['Minds in Cyprus', 'Professional, relocation and investment resources.'],
        ['Missions directory', 'Search and browse diplomatic coverage worldwide.'],
        ['Country overview', 'See the available offices for each country.'],
        ['Office details', 'Address, opening hours and contact information.'],
        ['More & settings', 'Language, theme, policy and contact options.'],
        ['About DiasporaCY', 'Purpose, service information and app version.']
      ]
    },
    el: {
      language: 'EN',
      navHome: 'Αρχική', navFeatures: 'Δυνατότητες', navScreens: 'Οθόνες', navPrivacy: 'Απόρρητο', navAbout: 'Σχετικά',
      eyebrow: 'Κυπριακή Δημοκρατία · Υπουργείο Εξωτερικών',
      heroTitle1: 'Η Κύπρος,', heroTitle2: 'όπου κι αν βρίσκεστε.',
      heroCopy: 'Το DiasporaCY συγκεντρώνει χρήσιμες υπηρεσίες, επίσημη πληροφόρηση και το παγκόσμιο δίκτυο των διπλωματικών αποστολών της Κύπρου σε μία καθαρή, δίγλωσση εφαρμογή.',
      explore: 'Γνωρίστε την εφαρμογή', policy: 'Πολιτική απορρήτου', privacyNote: 'Πύλη προς επίσημες κυβερνητικές υπηρεσίες με έμφαση στην ιδιωτικότητα.',
      official: 'Επίσημη πληροφόρηση', officialSub: 'Από αξιόπιστες κυβερνητικές πηγές', bilingual: 'Ελληνικά & Αγγλικά', bilingualSub: 'Για την κυπριακή διασπορά', missions: '153 προορισμοί', missionsSub: 'Πρεσβείες, προξενεία και κάλυψη', noAccount: 'Χωρίς λογαριασμό', noAccountSub: 'Άμεση πρόσβαση σε δημόσιες υπηρεσίες',
      featuresEyebrow: 'Μία εφαρμογή, ισχυρότερη σύνδεση', featuresTitle: 'Χρήσιμη πληροφόρηση, χωρίς περιττή πολυπλοκότητα.', featuresCopy: 'Το DiasporaCY οργανώνεται γύρω από τις πραγματικές ανάγκες των Κυπρίων του εξωτερικού και όσων επιστρέφουν στην Κύπρο.',
      f1Title: 'Υπηρεσίες διασποράς', f1Copy: 'Νέα, πληροφορίες μητρώου, υπηκοότητα, εκλογικά δικαιώματα και πρακτικοί οδηγοί επιστροφής.',
      f2Title: 'Διπλωματικές αποστολές', f2Copy: 'Αναζητήστε χώρες, εντοπίστε την αρμόδια αποστολή και βρείτε στοιχεία επικοινωνίας σε λίγα δευτερόλεπτα.',
      f3Title: 'Ταλέντο & ευκαιρίες', f3Copy: 'Πρόσβαση στο Minds in Cyprus για μετεγκατάσταση, επενδύσεις, επιχειρηματικότητα και επαγγελματικές ευκαιρίες.',
      f4Title: 'Επίσημες εξωτερικές υπηρεσίες', f4Copy: 'Συνεχίστε με ασφάλεια στις επίσημες κυβερνητικές ιστοσελίδες για αιτήματα, αιτήσεις και συναλλαγές.',
      screensEyebrow: 'Σχεδιασμένο για σαφήνεια', screensTitle: 'Οικεία εμπειρία από το πρώτο άγγιγμα.', screensCopy: 'Απλή πλοήγηση, ευανάγνωστες κάρτες και ξεκάθαρες ενέργειες βοηθούν τον χρήστη να βρίσκει γρήγορα ό,τι χρειάζεται.',
      prev: 'Προηγούμενη εικόνα', next: 'Επόμενη εικόνα',
      privacyTitle: 'Η ιδιωτικότητα αποτελεί μέρος του σχεδιασμού.', privacyCopy: 'Το DiasporaCY λειτουργεί ως πύλη προς επίσημες πληροφορίες και υπηρεσίες. Τα αιτήματα και οι συναλλαγές ολοκληρώνονται στις αρμόδιες επίσημες κυβερνητικές ιστοσελίδες.',
      p1: 'Χωρίς εγγραφή στην εφαρμογή', p1s: 'Η δημόσια πληροφόρηση είναι διαθέσιμη χωρίς δημιουργία λογαριασμού DiasporaCY.',
      p2: 'Επίσημοι προορισμοί', p2s: 'Οι εξωτερικές ενέργειες συνεχίζονται στην αρμόδια κυβερνητική υπηρεσία.',
      p3: 'Σαφής πολιτική', p3s: 'Διαβάστε πλήρως την ενημέρωση απορρήτου στα Ελληνικά ή στα Αγγλικά.',
      readEn: 'Read in English', readEl: 'Διαβάστε στα Ελληνικά',
      storyEyebrow: 'Για τους Κύπριους σε όλο τον κόσμο', storyTitle: 'Μία ψηφιακή γέφυρα με την Κύπρο.', storyCopy: 'Η Υπηρεσία Κυπρίων Αποδήμων και Επαναπατρισθέντων ενισχύει τη σχέση της Κύπρου με την παγκόσμια διασπορά. Το DiasporaCY μετατρέπει τη βασική πληροφόρηση σε μια στοχευμένη και προσβάσιμη πύλη για κινητές συσκευές.',
      tag1: 'Σύνδεση με τη διασπορά', tag2: 'Κατάλογος αποστολών', tag3: 'Δίγλωσσο περιβάλλον', tag4: 'Πρόσβαση από κινητό',
      ctaTitle: 'Η Κύπρος πάντα κοντά σας.', ctaCopy: 'Ανακαλύψτε τις υπηρεσίες, βρείτε την αποστολή που καλύπτει τη χώρα σας και αποκτήστε πρόσβαση σε επίσημη πληροφόρηση.', ctaButton: 'Δείτε τις οθόνες',
      footerCopy: 'Το DiasporaCY είναι η κινητή πύλη της Υπηρεσίας Κυπρίων Αποδήμων και Επαναπατρισθέντων του Υπουργείου Εξωτερικών της Κυπριακής Δημοκρατίας.',
      footerExplore: 'Περιήγηση', footerLegal: 'Νομικά', footerHome: 'Αρχική', footerFeatures: 'Δυνατότητες', footerScreens: 'Οθόνες', footerPrivacy: 'Πολιτική απορρήτου', footerTerms: 'Όροι χρήσης', footerCopyright: 'Κυπριακή Δημοκρατία. Με επιφύλαξη παντός δικαιώματος.', footerDisclaimer: 'Επίσημη πύλη υπηρεσιών.',
      gallery: [
        ['Αρχική διασποράς', 'Άμεση πρόσβαση στις βασικές κατηγορίες υπηρεσιών.'],
        ['Minds in Cyprus', 'Πληροφόρηση για εργασία, μετεγκατάσταση και επενδύσεις.'],
        ['Κατάλογος αποστολών', 'Αναζήτηση διπλωματικής κάλυψης σε όλο τον κόσμο.'],
        ['Επισκόπηση χώρας', 'Δείτε τα διαθέσιμα γραφεία για κάθε χώρα.'],
        ['Στοιχεία γραφείου', 'Διεύθυνση, ωράριο και στοιχεία επικοινωνίας.'],
        ['Περισσότερα & ρυθμίσεις', 'Γλώσσα, θέμα, πολιτικές και επικοινωνία.'],
        ['Σχετικά με το DiasporaCY', 'Σκοπός, πληροφορίες υπηρεσίας και έκδοση εφαρμογής.']
      ]
    }
  };

  const getPreferredLanguage = () => storage.getItem('diasporacy-language') || (navigator.language?.toLowerCase().startsWith('el') ? 'el' : 'en');
  let language = document.body.dataset.pageLanguage || getPreferredLanguage();

  const applyTranslations = () => {
    const dictionary = labels[language] || labels.en;
    html.lang = language;
    html.dir = 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const key = node.dataset.i18n;
      if (dictionary[key] != null) node.textContent = dictionary[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(node => {
      const key = node.dataset.i18nAria;
      if (dictionary[key] != null) node.setAttribute('aria-label', dictionary[key]);
    });
    document.querySelectorAll('[data-lang-label]').forEach(node => node.textContent = dictionary.language);
    document.querySelectorAll('[data-logo-switch]').forEach(img => {
      img.src = `assets/images/logo-${language}.webp`;
      img.alt = language === 'el' ? 'Λογότυπο Υπηρεσίας Κυπρίων Αποδήμων και Επαναπατρισθέντων' : 'Service for Overseas and Repatriated Cypriots logo';
    });
    updateGalleryText();
  };

  document.querySelectorAll('[data-language-toggle]').forEach(button => {
    button.addEventListener('click', () => {
      language = language === 'en' ? 'el' : 'en';
      storage.setItem('diasporacy-language', language);
      applyTranslations();
    });
  });

  const getTheme = () => storage.getItem('diasporacy-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const setTheme = theme => {
    html.dataset.theme = theme;
    storage.setItem('diasporacy-theme', theme);
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Use light theme' : 'Use dark theme');
      btn.innerHTML = theme === 'dark'
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>';
    });
  };
  setTheme(getTheme());
  document.querySelectorAll('[data-theme-toggle]').forEach(button => button.addEventListener('click', () => setTheme(html.dataset.theme === 'dark' ? 'light' : 'dark')));

  const menu = document.querySelector('[data-nav-links]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  if (menu && menuButton) {
    menuButton.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      document.body.classList.toggle('menu-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.classList.remove('menu-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const galleryImages = [
    'diaspora-home.webp', 'minds-in-cyprus.webp', 'missions.webp', 'mission-details-1.webp', 'mission-details-2.webp', 'more.webp', 'about.webp'
  ];
  let galleryIndex = 0;
  const galleryImage = document.querySelector('[data-gallery-image]');
  const galleryTitle = document.querySelector('[data-gallery-title]');
  const galleryDescription = document.querySelector('[data-gallery-description]');
  const dotsWrap = document.querySelector('[data-gallery-dots]');

  function updateGalleryText() {
    if (!galleryTitle || !galleryDescription) return;
    const content = (labels[language] || labels.en).gallery[galleryIndex];
    galleryTitle.textContent = content[0];
    galleryDescription.textContent = content[1];
  }

  function updateGallery(nextIndex, animate = true) {
    if (!galleryImage) return;
    galleryIndex = (nextIndex + galleryImages.length) % galleryImages.length;
    const swap = () => {
      galleryImage.src = `assets/images/${galleryImages[galleryIndex]}`;
      galleryImage.alt = (labels[language] || labels.en).gallery[galleryIndex][0];
      updateGalleryText();
      dotsWrap?.querySelectorAll('button').forEach((dot, i) => dot.classList.toggle('active', i === galleryIndex));
      galleryImage.classList.remove('changing');
    };
    if (animate) {
      galleryImage.classList.add('changing');
      setTimeout(swap, 190);
    } else swap();
  }

  if (dotsWrap) {
    galleryImages.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot${i === 0 ? ' active' : ''}`;
      dot.type = 'button';
      dot.setAttribute('aria-label', `Show screenshot ${i + 1}`);
      dot.addEventListener('click', () => updateGallery(i));
      dotsWrap.appendChild(dot);
    });
  }
  document.querySelector('[data-gallery-prev]')?.addEventListener('click', () => updateGallery(galleryIndex - 1));
  document.querySelector('[data-gallery-next]')?.addEventListener('click', () => updateGallery(galleryIndex + 1));
  updateGallery(0, false);

  const lightbox = document.querySelector('[data-lightbox]');
  const lightboxImage = lightbox?.querySelector('img');
  galleryImage?.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = galleryImage.src;
    lightboxImage.alt = galleryImage.alt;
    lightbox.classList.add('open');
    lightbox.querySelector('button')?.focus();
  });
  const closeLightbox = () => lightbox?.classList.remove('open');
  lightbox?.querySelector('button')?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeLightbox(); });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

  document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());
  applyTranslations();
})();
