const searchInput = document.getElementById('searchInput');
const searchResultsContainer = document.getElementById('searchResults');

// Function to fetch meals from API based on search input
function searchMeals(query) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(response => response.json())
    .then(data => {
        displaySearchResults(data.meals);
    })
    .catch(error => console.error('Error fetching meals:', error));
}

// Function to display search results
function displaySearchResults(meals) {
    searchResultsContainer.innerHTML = '';
    if (meals) {
        meals.forEach(meal => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('col-md-4', 'mb-4');
            resultDiv.innerHTML = `
                <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <button class="btn btn-primary" onclick="showMealDetail('${meal.idMeal}')">View Details</button>
                    </div>
                </div>
            `;
            searchResultsContainer.appendChild(resultDiv);
        });
    } else {
        searchResultsContainer.innerHTML = '<p class="col-12">No meals found.</p>';
    }
}

// Function to fetch meal details
function fetchMealDetails(mealId) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(response => response.json())
            .then(data => data.meals[0]);
}

// Function to show meal details
async function showMealDetail(mealId) {
    const meal = await fetchMealDetails(mealId);
    const mealDetail = `
        <div class="modal fade" id="mealDetailModal" tabindex="-1" role="dialog" aria-labelledby="mealDetailModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="mealDetailModalLabel">${meal.strMeal}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src="${meal.strMealThumb}" class="img-fluid mb-3" alt="${meal.strMeal}">
                        <p>${meal.strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', mealDetail);
    $('#mealDetailModal').modal('show');
}

// Event listener for search input
searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (query) {
        searchMeals(query);
    }
});
