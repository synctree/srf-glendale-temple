module.exports = function (migration) {
  // Get or create Author content type
  let author;
  try {
    author = migration.editContentType('author');
  } catch (e) {
    author = migration.createContentType('author')
      .name('Author')
      .displayField('name');
  }

  // Ensure author fields exist
  author.editField('name')
    .name('Name')
    .type('Symbol')
    .required(true);

  author.editField('picture')
    .name('Picture')
    .type('Link')
    .linkType('Asset')
    .required(true);

  // Get or create Post content type
  let post;
  try {
    post = migration.editContentType('post');
  } catch (e) {
    post = migration.createContentType('post')
      .name('Post')
      .displayField('title');
  }

  // Ensure post fields exist
  post.editField('title')
    .name('Title')
    .type('Symbol')
    .required(true);

  post.editField('slug')
    .name('Slug')
    .type('Symbol')
    .required(true)
    .validations([{ "unique": true }]);

  post.editField('coverImage')
    .name('Cover Image')
    .type('Link')
    .linkType('Asset')
    .required(true);

  post.editField('date')
    .name('Date')
    .type('Date')
    .required(true);

  post.editField('author')
    .name('Author')
    .type('Link')
    .linkType('Entry')
    .validations([
      {
        "linkContentType": ["author"]
      }
    ]);

  post.editField('excerpt')
    .name('Excerpt')
    .type('Symbol');

  post.editField('content')
    .name('Content')
    .type('RichText');
}
