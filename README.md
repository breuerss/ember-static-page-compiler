# ember-static-page-compiler

The static page compiler allows for the assemblance of a static web page.
It is based on the ember framework and handlebars templates.

## Prerequisites

To use this tool a working installation of npm is necessary. Additionally the installation of git is helpful but not obligatory.

## Installation

To install this application either clone this repository with

* `git clone https://github.com/breuerss/ember-static-page-compiler`

or download the zip archive from

* `https://github.com/breuerss/ember-static-page-compiler/archive/master.zip`

and unzip it.

Then install every prerequisites with `npm`:

* `cd ember-static-page-compiler`
* `npm install`

## Running

* `./ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Usage

The application runs fully in your browser. The development webserver serves the single page application to your browser.

The system allows you to manage several projects. Each can be exported separately as a zip archive. Every page can consist of several pages and subpages. In each page different content elements with potentially different templates can be rendered.

Content elements contain support for a title and a content placeholder by default. Additionally fields or placeholders can be added with the handlebars notation

`{{ placeholder-name }}`

If your browser supports the localstorage API your projects are stored in your browser. Every time you revisit this page you can continue editing your projects.

If need support for HTML tags in your content use the following escape sequence

`{{{ placeholder-name }}}`

Assets can be stored on a per project basis. Assets can be referenced with the {{ asset <asset-name> }} helper in the template. By using the helper in the template a preview is possible. By default assets are stored in the assets directory. Hence, they can be also accessed via their path (/assets/<asset-name>).

There is currently no filetype restriction implemented. The size of the assets being stored is limited by the quote of your browser's localStorage implementation.

The assets can be used to add javascript, css or image files to your page.
