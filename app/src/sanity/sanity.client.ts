import { createClient, type ClientConfig } from "next-sanity"

const config: ClientConfig = {
  projectId: "07cmgen3",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
}

export const client = createClient(config)
