import { GraphQLClient } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';

export const DATCOCMS_ENDPOINT = process.env.DATOCMS_ENDPOINT || '';

interface DatoQueryOptions {
  variables?: Record<string, any>;
}

export async function fetchDato(query: RequestDocument, options?: DatoQueryOptions) {
  const client = new GraphQLClient(`${DATCOCMS_ENDPOINT}`);
  const requestHeaders = {
    Authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
  };
  if (options) {
    const { variables } = options;
    return client.request(query, variables, requestHeaders);
  }
  return client.request(query, null, requestHeaders);
}
