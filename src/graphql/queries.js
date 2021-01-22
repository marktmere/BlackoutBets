/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBet = /* GraphQL */ `
  query GetBet($id: ID!) {
    getBet(id: $id) {
      id
      betId
      better {
        id
        accountId
        username
        email
        phoneNumber
        createdAt
        updatedAt
      }
      bettees {
        id
        accountId
        username
        email
        phoneNumber
        createdAt
        updatedAt
      }
      title
      wager
      odds
      notes
      createDate
      endDate
      Screenshot
      Status
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
        betId
        better {
          id
          accountId
          username
          email
          phoneNumber
          createdAt
          updatedAt
        }
        bettees {
          id
          accountId
          username
          email
          phoneNumber
          createdAt
          updatedAt
        }
        title
        wager
        odds
        notes
        createDate
        endDate
        Screenshot
        Status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDegenerate = /* GraphQL */ `
  query GetDegenerate($id: ID!) {
    getDegenerate(id: $id) {
      id
      accountId
      username
      email
      phoneNumber
      createdAt
      updatedAt
    }
  }
`;
export const listDegenerates = /* GraphQL */ `
  query ListDegenerates(
    $filter: ModelDegenerateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDegenerates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        accountId
        username
        email
        phoneNumber
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
