/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBet = /* GraphQL */ `
  mutation CreateBet(
    $input: CreateBetInput!
    $condition: ModelBetConditionInput
  ) {
    createBet(input: $input, condition: $condition) {
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
export const updateBet = /* GraphQL */ `
  mutation UpdateBet(
    $input: UpdateBetInput!
    $condition: ModelBetConditionInput
  ) {
    updateBet(input: $input, condition: $condition) {
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
export const deleteBet = /* GraphQL */ `
  mutation DeleteBet(
    $input: DeleteBetInput!
    $condition: ModelBetConditionInput
  ) {
    deleteBet(input: $input, condition: $condition) {
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
