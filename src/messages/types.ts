export interface Messages {
  navigation: {
    about: string;
    services: string;
    certificates: string;
    process: string;
    testimonials: string;
    consultation: string;
    back_to_home: string;
  };
  hero: {
    title: string;
    name: string;
    services: {
      nailTherapy: string;
      trustSession: string;
      lila: string;
      consultation: string;
    };
  };
  services: {
    title: string;
    nailTherapy: {
      title: string;
      description1: string;
      description2: string;
      description3: string;
      description4: string;
      description5: string;
      price: string;
      duration: string;
    };
    lila: {
      title: string;
      description: string;
      process: {
        title: string;
        steps: string[];
      };
      benefits: {
        title: string;
        items: string[];
      };
      conclusion: string;
      price: string;
      duration: string;
    };
    trustSession: {
      title: string;
      description: string;
      expectations: {
        title: string;
        items: string[];
      };
      formats: {
        title: string;
        offline: string;
        online: string;
      };
      conclusion: string;
      cta: string;
      price: string;
    };
  };
} 