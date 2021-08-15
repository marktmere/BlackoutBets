/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBet = /* GraphQL */ `
  mutation CreateBet(
    $input: CreateBetInput!
    $condition: ModelBetConditionInput
  ) {
    createBet(input: $input, condition: $condition) {
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
export const updateBet = /* GraphQL */ `
  mutation UpdateBet(
    $input: UpdateBetInput!
    $condition: ModelBetConditionInput
  ) {
    updateBet(input: $input, condition: $condition) {
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
export const deleteBet = /* GraphQL */ `
  mutation DeleteBet(
    $input: DeleteBetInput!
    $condition: ModelBetConditionInput
  ) {
    deleteBet(input: $input, condition: $condition) {
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
export const createDegenerate = /* GraphQL */ `
  mutation CreateDegenerate(
    $input: CreateDegenerateInput!
    $condition: ModelDegenerateConditionInput
  ) {
    createDegenerate(input: $input, condition: $condition) {
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
export const updateDegenerate = /* GraphQL */ `
  mutation UpdateDegenerate(
    $input: UpdateDegenerateInput!
    $condition: ModelDegenerateConditionInput
  ) {
    updateDegenerate(input: $input, condition: $condition) {
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
export const deleteDegenerate = /* GraphQL */ `
  mutation DeleteDegenerate(
    $input: DeleteDegenerateInput!
    $condition: ModelDegenerateConditionInput
  ) {
    deleteDegenerate(input: $input, condition: $condition) {
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
