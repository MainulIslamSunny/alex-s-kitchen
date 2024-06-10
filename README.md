Task 1: Submitting a Hotfix with Git

To submit a hotfix in the "Alex’s Kitchen" project, the following steps should be taken:

1. Creating the Hotfix Branch:
   o Branch naming convention should be followed like this
   hotfix/description-of-fix.
   o For an example if there is a issue with login. After fixing a bug in the login feature, the branch name could be
   hotfix/login-bug.
   git checkout -b hotfix/login-bug
2. Implementing the Hotfix:
   o I will make necessary code changes to resolve the issue.
3. Committing the Changes:
   o Stage the changes and commit them with a descriptive commit message.
   git add .
   git commit -m "Fix login bug preventing user authentication"
4. Pushing the Hotfix Branch to the Remote Repository:
   git push origin hotfix/login-bug
5. Creating a Pull Request (PR):
   o Navigate to the repository on the Git platform. Like Github.
   o Go to the "Pull Requests" section and click on "New Pull Request".
   o Select hotfix/login-bug as the source branch and production (or main) as the target branch.
   o Provide a descriptive title and detailed description of the changes.
   o Submit the PR for review.
6. Reviewing and Merging the PR:
   o Request reviews from team members.
   o Once approved, merge the PR into the production branch using the appropriate merge method.
7. Deploying the Hotfix:
   o Follow the team’s deployment procedures to ensure the hotfix is live in production.



Task 2: Finding Specific Menu Items in Each Category

    To find specific menu items that belong to each category in the given structure of menu collections, the following conceptual approach should be taken:

1. Data Structure Analysis:
   o Each menu collection contains:
    A menuItems array, where each item is an object with a unique identifier (id).
    A category array, where each category object contains an array of menuItemsIds.

2. Iterative Matching:
   o For each menu collection:
    Create a dictionary or map of menuItems with their id as the key for quick lookup.
    Iterate over each category and match menuItemsIds with the items in the dictionary.
3. Implementation Plan:
   o Initialize an empty result structure to hold the matched items for each category.
   o For each menu collection, build the dictionary/map for menuItems.
   o For each category, use the menuItemsIds to fetch the corresponding items from the dictionary and add them to the result structure.
   Example in Pseudocode
   const dummyArr = [
   {
   type: "Vegetarian",
   menuItems: [
   {id: 1, name: "Salad"},
   {id: 2, name: "Veg Burger"},
   {id: 3, name: "Pasta"}
   ],
   category: [
   {
   name: "Starters",
   menuItemsIds: [1, 2]
   }
   ]
   },
   {
   type: "Non-Vegetarian",
   menuItems: [
   {id: 4, name: "Chicken Wings"},
   {id: 5, name: "Beef Burger"},
   {id: 6, name: "Shrimp Pasta"}
   ],
   category: [
   {
   name: "Main Course",
   menuItemsIds: [5, 6]
   }
   ]
   }
   ];

function getCategoryItems(menuCollections) {
const result = [];

menuCollections.forEach(collection => {
// Build a dictionary for quick lookup of menu items by id
const menuItemMap = {};
collection.menuItems.forEach(item => {
menuItemMap[item.id] = item;
});

    // Process each category
    collection.category.forEach(cat => {
      const items = cat.menuItemsIds.map(id => menuItemMap[id]);
      result.push({
        category: cat.name,
        items: items
      });
    });

});

return result;
}

const categoryItems = getCategoryItems(dummyArr);
console.log(categoryItems);
Conceptual Explanation

1. Building the Dictionary/Map:
   o Create a mapping of menuItems using their id for efficient lookup.
2. Matching Menu Items with Categories:
   o For each category, map the menuItemsIds to the actual menu items using the dictionary.
   o Collect these items into a new structure that associates each category with its items.
   This approach ensures that each category correctly identifies its respective menu items based on the given menuItemsIds.
