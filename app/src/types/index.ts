export type PageType = {
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

export type ArticleType = {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
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

export type MenuType = {
  _id: string;
  title: string;
  logo: {
    alt: string;
    image: string;
  };
  links: LinkType[];
  link: {
    title: string;
    url: string;
  };
};
