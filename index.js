$(function() {
    const itemChecker = function(event) {
      event.preventDefault();
      console.log("check submitted");
        $(this).closest('li').find('.shopping-item').toggleClass( 'shopping-item__checked');
    }

    $('.shopping-item-toggle').click(itemChecker);
    $('.shopping-item-toggle').on('click', 'li', function() {
        itemChecker();
    });
    
    const deleteItem = function(event) {
      event.preventDefault();
      console.log("delete submitted");
        $(this).closest('li').remove();
    }

    $('.shopping-item-delete').click(deleteItem);
    $('.shopping-item-delete').on('click', 'li', function() {
        deleteItem();
    });
    
    const addShoppingItem = function(event) {
      event.preventDefault();
      console.log("submitted");
      const userTextElement = $(event.currentTarget).find('#shopping-list-entry');
      console.log(userTextElement.val());
      $(".shopping-list").append('<li><span class="shopping-item-new">${userTextElement.val()}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
      $(".shopping-item-new").text(userTextElement.val());
      userTextElement.val("");
      $('.shopping-item-new').addClass('shopping-item').removeClass('shopping-item-new');
  
      $('.shopping-item-toggle').click(itemChecker);
      $('.shopping-item-delete').click(deleteItem);
    }
    
    $('#js-shopping-list-form').submit(addShoppingItem);  
  })
  