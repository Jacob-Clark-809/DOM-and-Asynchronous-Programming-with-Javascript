/* global $ Handlebars */

let products = [{
  name: 'Banana',
  quantity: 14,
  price: 0.79
}, {
  name: 'Apple',
  quantity: 3,
  price: 0.55
}];

$(function() {
  let productsList = Handlebars.compile($('#productsList').html());
  let productTemplate = Handlebars.compile($('#productTemplate').html());
  let $list = $('ul');

  Handlebars.registerPartial('productTemplate', $('#productTemplate').html());

  let productsHtml = productsList({ items: products });
  $list.html(productsHtml);

  let newProduct = {
    name: 'Soup',
    quantity: 1,
    price: 1.29,
  };

  $list.append(productTemplate(newProduct));
});
