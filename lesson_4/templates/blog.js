/* global $ Handlebars */

let post1 = {
  title: 'Lorem ipsum dolor sit amet',
  published: 'April 1, 2015',
  body: '<em> tags help emphasise your words. You can escape them with </em>',
  tags: ['funny', 'jokes', 'coding'],
};

let post2 = {
  title: 'Title',
  published: 'today',
  body: 'My post',
};

let posts = [];
posts.push(post1, post2);

$(function() {
  let postTemplate = Handlebars.compile($('#post').html());

  Handlebars.registerPartial('tag', $('#tag').html());

  $('body').append(postTemplate(posts));
});
