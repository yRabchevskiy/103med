export const GET_USERS = `
  query {
    users {
      id
      first_name
      last_name
      phone
      rang
      birstday
      email
      description
    }
  }
`;

export const GET_DRUGS = `
  query {
    drugs {
      id
      name
      description
      doses
      state
      count
      werehouse
      category
    }
  }
`;

// To DO
// export const MUTATE_USER = gql` 
//   # mutation addItemMutation($newItem: Item!) {
//   #   addItem(item: $item) {
//   #     id
//   #     name
//   #     description
//   #   }
//   # }
// `;
