// 
// connect the form to the food and drink specials.
// add the values of the form to the database.
// fill in the table information with info from the database.*
// delete from the table.
// edit from the table.



$(document).ready(function () {
    let inputFood = $('#foodSpecial');
    let inputFoodPrice = $('#foodSpecialPrice');
    let inputDrink = $('#drinkSpecial');
    let inputDrinkPrice = $('#drinkSpecialPrice');
    let foodList = $('.foodSpecialTable');
    let drinkList = $('.drinkSpecialTable');

    getFoodSpecials();
    getDrinkSpecials();

    $("#submitFoodSpecials").on('click', function (event) {
        event.preventDefault();
        let value = $('#dayOfTheWeek').val();
        
        console.log('food', value);
        if (!inputFood.val().trim().trim()) {
            return;
        }
        
          // Calling the upsertAuthor function and passing in the value of the name input
        foodPost({
            special: inputFood
                .val()
                .trim(),
            price: inputFoodPrice
                .val()
                .trim(),
            sunday: (value.indexOf('1') > -1 ? true : false),
            monday: (value.indexOf('2') > -1 ? true : false),
            tuesday: (value.indexOf('3') > -1 ? true : false),
            wednesday: (value.indexOf('4') > -1 ? true : false),
            thursday: (value.indexOf('5') > -1 ? true : false),
            friday: (value.indexOf('6') > -1 ? true : false),
            saturday: (value.indexOf('7') > -1 ? true : false),
            place_id: 'ChIJMSTFK6mUwIcRrAwlZ5NXl7B',
            LocationIdPlaceId: 'ChIJMSTFK6mUwIcRrAwlZ5NXl7B'
        });
      

    });

    $("#submitDrinkSpecials").on('click', function (event) {
        event.preventDefault();
        console.log('drink');
        if (!inputDrink.val().trim().trim()) {
            return;
        }
          // Calling the upsertAuthor function and passing in the value of the name input
        upsertAuthor({
            name: nameInput
                .val()
                .trim()
        });
    });

    function foodPost(foodData) {
        console.log('foodData', foodData);
        
        $.post("/api/FoodSpecials", foodData)
          .then(getFoodSpecials);
      }
    

    // Function for creating a new list row for Food
    function createFoodRow(foodData) {
        var newTr = $("<tr>");
        newTr.data("foodSpecial", foodData);
        newTr.append("<td>" + foodData.special + "</td>");
        newTr.append("<td> " + '$' + foodData.price + "</td>");
        newTr.append("<td>" + (foodData.sunday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (foodData.monday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (foodData.tuesday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (foodData.wednesday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (foodData.thursday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (foodData.friday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (foodData.saturday ? 'X' : '') + "</td>");
        return newTr;
    }

    // Function for retrieving food and getting them ready to be rendered to the page
    function getFoodSpecials() {
        $.get("/api/FoodSpecials", function (data) {
            console.log(data);

            
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createFoodRow(data[i]));
            }
            renderFoodList(rowsToAdd);
        });
    }

    // A function for rendering the list of food specials to the page
    function renderFoodList(rows) {
        foodList.children().not(":last").remove();
        if (rows.length) {
            console.log('rows', rows);
            foodList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    };
    function createDrinkRow(drinkData) {
        var newTr = $("<tr>");
        newTr.data("drinkSpecial", drinkData);
        newTr.append("<td>" + drinkData.special + "</td>");
        newTr.append("<td> " + '$' + drinkData.price + "</td>");
        newTr.append("<td>" + (drinkData.sunday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (drinkData.monday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (drinkData.tuesday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (drinkData.wednesday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (drinkData.thursday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (drinkData.friday ? 'X' : '') + "</td>");
        newTr.append("<td>" + (drinkData.saturday ? 'X' : '') + "</td>");
        return newTr;
    }

    // Function for retrieving drink and getting them ready to be rendered to the page
    function getDrinkSpecials() {
        $.get("/api/DrinkSpecials", function (data) {
            console.log(data);

            
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createDrinkRow(data[i]));
            }
            renderDrinkList(rowsToAdd);
        });
    }

    // A function for rendering the list of drink specials to the page
    function renderDrinkList(rows) {
        if (rows.length) {
            console.log('rows', rows);
            drinkList.prepend(rows);
        }
        else {
            renderEmpty();
        }
    }


});