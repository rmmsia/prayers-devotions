# Prayers and Devotions
This is a repository for a static Github Pages site containing Catholic prayers, novenas, and other devotions.

## Contributing
If you'd like to see a prayer or devotion be added to this repository, please open an issue [here](https://github.com/rmmsia/prayers-devotions/issues/new/choose) by selecting **New Prayer Request**.

However, if you are more technical, you may submit a pull request, following the below guideline.

### Creating New Prayer/Devotion Page
1. Create a new Markdown file in either `novenas` or `prayers` folder
2. When satisfied, convert to HTML using `pandoc content/path/to/file.md -o /public/path/to/file.html --template templates/prayer.html`
3. Edit HTML where needed.