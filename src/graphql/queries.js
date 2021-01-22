/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBet = /* GraphQL */ `
  query GetBet($id: ID!) {
    getBet(id: $id) {
      id
      Title
      Betters
      Odds
      Description
      createdAt
      updatedAt
    }
  }
`;
export const listBets = /* GraphQL */ `
  query ListBets(
    $filter: ModelBetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Title
        Betters
        Odds
        Description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
