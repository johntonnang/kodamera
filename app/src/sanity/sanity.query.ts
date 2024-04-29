import { groq } from 'next-sanity';
import { client } from './sanity.client';

export async function getPage() {
  try {
    return await client.fetch(
      groq`*[_type == "page"]{
        _id,
        title,
        description,
        contactButton {
          label,
          url
        },
        headerImage {
        "image": asset->url,
          alt
        },
        subheading
      }`
    );
  } catch (error) {
    console.error('Error when fetching page data.', error);
    return [];
  }
}

export async function getArticles() {
  try {
    return await client.fetch(
      groq`*[_type == "article" && defined(slug.current)]{
        _id,
        name,
        slug,
        image {
        "image": asset->url,
          alt
        },
        date
      } | order(date desc)`
    );
  } catch (error) {
    console.error('Error when fetching articles.', error);
    return [];
  }
}

export async function getMenu() {
  try {
    return await client.fetch(
      groq`*[_type == "menu"]{
        _id,
        title,
        logo {
        "image": asset->url,
          alt
        },
        links[]{
          title,
          url
        },
        link {
          title,
          url
        }
      }`
    );
  } catch (error) {
    console.error('Error when fetching page data.', error);
    return [];
  }
}
