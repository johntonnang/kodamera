import { groq } from 'next-sanity';
import { client } from './sanity.client';

export async function getHero() {
  try {
    return await client.fetch(
      groq`*[_type == "hero"]{
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
    console.error('Error when fetching hero data.', error);
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
        preamble,
        author-> {
          name
        },
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

export async function getArticleBySlug(slug: string) {
  try {
    const query = groq`*[
      _type == "article" &&
      slug.current == $slug
    ][0]{
      _id,
      name,
      slug,
      preamble,
      author-> {
        name
      },
      image {
        "image": asset->url,
        alt
      },
      date,
      details  // Include other fields you need here
    }`;

    return await client.fetch(query, { slug });
  } catch (error) {
    console.error('Error fetching article by slug.', error);
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
    console.error('Error when fetching menu data.', error);
    return [];
  }
}

export async function getContact() {
  try {
    return await client.fetch(
      groq`*[_type == "contact"]{
        _id,
        title,
        description,
        email,
        phone,
        website,
        socialLinks[]{
          platform,
          url
        }
      }`
    );
  } catch (error) {
    console.error('Error when fetching contact data.', error);
    return [];
  }
}

export async function getArticle() {
  try {
    return await client.fetch(
      groq`*[_type == "articles"]{
        _id,
        title,
        description,
      }`
    );
  } catch (error) {
    console.error('Error when fetching article page.', error);
    return [];
  }
}

export async function getCustomers() {
  try {
    return await client.fetch(
      groq`*[_type == "customer"]{
        _id,
        name,
        preamble,
        image {
        "image": asset->url,
          alt
      }}`
    );
  } catch (error) {
    console.error('Error when fetching customers.', error);
    return [];
  }
}

export async function getCustomer() {
  try {
    return await client.fetch(
      groq`*[_type == "customers"]{
        _id,
        title,
        description,
      }`
    );
  } catch (error) {
    console.error('Error when fetching customer page.', error);
    return [];
  }
}
