# Meal-App-frontEnd-project

Hosted URL: https://manishraj17.github.io/Meal-App-frontEnd-project/ 

HTML Structure:

The HTML structure defines the basic layout of the meal app.
It includes Bootstrap's CSS and JavaScript CDNs for styling and interactive components.
The main content area consists of a container with a header containing the app title and a search input field.
Search results are displayed in a grid layout inside the searchResults div.
JavaScript Functions:

searchMeals(query):

This function is triggered when a user types into the search input.
It fetches meal data from the MealDB API based on the search query.
The fetched data is then passed to the displaySearchResults function.
displaySearchResults(meals):

This function dynamically generates HTML to display search results.
It creates a card for each meal fetched from the API and appends it to the searchResultsContainer.
Each card contains the meal's image, name, and a button to view details.
fetchMealDetails(mealId):

This function fetches detailed information about a specific meal based on its ID.
It's used when a user clicks the "View Details" button to fetch additional meal information.
showMealDetail(mealId):

This asynchronous function displays the detailed information of a meal in a modal.
It calls fetchMealDetails to retrieve the meal's details and dynamically generates HTML for the modal.
The modal is then displayed using Bootstrap's modal component.
Event Listeners:

An event listener is attached to the search input field to detect changes in the input value.
When the user types into the search input, it triggers the searchMeals function to fetch and display matching meal results.
Presentation of Meal Details:

When a user clicks the "View Details" button on a meal card, it triggers the showMealDetail function.
This function fetches additional details about the selected meal and presents them in a Bootstrap modal.
The modal contains the meal's name, image, and instructions on how to prepare it.
