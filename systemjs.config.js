/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'dragula':                    'node_modules/dragula/dist/dragula.js',
    'ng2-dragula':                'node_modules/ng2-dragula',
    '@angular2-material':         'node_modules/@angular2-material',
    'ng2-bootstrap':              'node_modules/ng2-bootstrap',
    'moment':                     'node_modules/moment/moment.js',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'ng2-dragula':                { main: 'ng2-dragula.js', defaultExtension: 'js' },
    'ng2-bootstrap':              { main: 'ng2-bootstrap.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Angular Material 2 Packages to load.
  var _materialPackages = [
    'core', 
    'progress-bar',
    'button',
    'checkbox',
    'input'
  ];

  _materialPackages.forEach(function (item) {
    // All Material 2 components are prefixed with  @angular2-material and use
    // the components name as entry point.
    packages['@angular2-material/' + item] = { main: item };
  });

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
