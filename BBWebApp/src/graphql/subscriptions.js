/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBet = /* GraphQL */ `
  subscription OnCreateBet {
    onCreateBet {
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
export const onUpdateBet = /* GraphQL */ `
  subscription OnUpdateBet {
    onUpdateBet {
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
export const onDeleteBet = /* GraphQL */ `
  subscription OnDeleteBet {
    onDeleteBet {
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
export const onCreateDegenerate = /* GraphQL */ `
  subscription OnCreateDegenerate {
    onCreateDegenerate {
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
export const onUpdateDegenerate = /* GraphQL */ `
  subscription OnUpdateDegenerate {
    onUpdateDegenerate {
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
export const onDeleteDegenerate = /* GraphQL */ `
  subscription OnDeleteDegenerate {
    onDeleteDegenerate {
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
