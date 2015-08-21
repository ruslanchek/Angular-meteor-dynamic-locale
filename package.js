var packageName = 'ruslanchek:angular-meteor-dynamic-locale';
var where = 'client';
var version = '0.1';
var summary = 'Angular Meteor package to change $locale dynamically';
var gitLink = 'https://github.com/lgalfaso/angular-dynamic-locale.git';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
	name: packageName,
	version: version,
	summary: summary,
	git: gitLink,
	documentation: documentationFile
});

Package.onUse(function(api) {
	api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

	// api.use('DEPENDENCY_NAME', where); // Dependencies

	// api.addFiles('FILE_NAME', where); // Files in use
});
