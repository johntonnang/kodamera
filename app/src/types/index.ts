export type HeroType = {
  _id: string;
  title: string;
  description: string;
  contactButton: {
    label: string;
    url: string;
  };
  headerImage: {
    alt: string;
    image: string;
  };
  subheading: string;
};

export type AuthorType = {
  name: string;
};

export type ArticleType = {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  preamble: string;
  author: AuthorType;
  image: {
    alt: string;
    image: string;
  };
  date: string;
};

export type LinkType = {
  title: string;
  url: string;
};

export type LogoType = {
  alt: string;
  image: string;
};

export type MenuType = {
  _id: string;
  title: string;
  logo: LogoType;
  links: LinkType[];
  link: LinkType;
};

export type SocialLinkType = {
  platform: string;
  url: string;
};

export type ContactType = {
  _id: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  website: string;
  socialLinks: SocialLinkType[];
};

export type ArticlePageType = {
  _id: string;
  title: string;
  description: string;
};

export type CustomerType = {
  _id: string;
  name: string;
  preamble: string;
  image: {
    alt: string;
    image: string;
  };
};

export type CustomerPageType = {
  _id: string;
  title: string;
  description: string;
};
