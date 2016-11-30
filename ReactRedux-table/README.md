Define the State Shape


Normalized data, in case users want to edit people without doing a complete fetch
```
{
  people: {
    1: {
      id: 1,
      first_name: ed1,
      last_name: wang1
    },
    2: {
      id: 2,
      first_name: ed2,
      last_name: wang2
    },
    3: {
      id: 3,
      first_name: ed3,
      last_name: wang3
    }
  },
  fetchedPeople: {
    isFetching: false,          // For showing a spinner
    didInvalidate: false,       // to show that data is stale
    lastUpdated: 1439478405547, // time which the API was called
    peopleIds: [ 1, 2, 3 ]
  }
}
```
