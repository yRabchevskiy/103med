export const GET_USERS = `
  query getUsers {
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
