# ember-cli-framework7

Ember CLI [Framework7](http://www.idangero.us/framework7/) brings the great
mobile development framework to Ember CLI.

Please note, that the addon is work in progress at the moment but I'll will keep
improving it as I've time. If you are interested to support me, I'll be really
excited to receive your pull requests.

## Installation

`ember install ember-cli-framework7`

## Configuration

The configuration of `ember-cli-framework7` takes place in the `environment.js`
file of the project, within the `framework7` key.

### Theme

Framework7 currently comes bundled with both iOS and Material Design themes. To
cut down on payload size, this addon allows you to specify which theme is
imported. Simply add the following to your `environment.js`:

```js
  ENV.framework7 = {
    theme: 'material|ios'
  };
```

### Icons

By default the Framework7 icon set is shipped with the addon. If not needed,
it can be removed from the build by setting the `iconsPath` to `false`.
Simply add the following to your `environment.js`:

```js
  ENV.framework7 = {
    iconsPath: false
  };
```

### Initialization

As soon as the `framework7` service is getting loaded, an app instance is being
created. The initialization options can be configured on the `framework7` key
in the `environment.js` file:

```js
  ENV.framework7 = {
    material: true
  };
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`
