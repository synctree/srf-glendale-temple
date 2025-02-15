module.exports = function (migration) {
  // Create Author content type
  const author = migration.createContentType('author')
    .name('Author')
    .displayField('name');

  author.createField('name')
    .name('Name')
    .type('Symbol')
    .required(true);

  author.createField('picture')
    .name('Picture')
    .type('Link')
    .linkType('Asset')
    .required(true);

  // Create Post content type
  const post = migration.createContentType('post')
    .name('Post')
    .displayField('title');

  post.createField('title')
    .name('Title')
    .type('Symbol')
    .required(true);

  post.createField('slug')
    .name('Slug')
    .type('Symbol')
    .required(true)
    .validations([{ "unique": true }]);

  post.createField('coverImage')
    .name('Cover Image')
    .type('Link')
    .linkType('Asset')
    .required(true);

  post.createField('date')
    .name('Date')
    .type('Date')
    .required(true);

  post.createField('author')
    .name('Author')
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        "linkContentType": ["author"]
      }
    ]);

  post.createField('excerpt')
    .name('Excerpt')
    .type('Text');

  post.createField('content')
    .name('Content')
    .type('RichText');
}
