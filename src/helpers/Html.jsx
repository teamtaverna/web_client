import React from 'react';
import ReactDOM from 'react-dom/server';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default ({ assets, component }) => { // eslint-disable-line
  const content = component ? ReactDOM.renderToString(component) : 'Team Tavarna Scripts';
  return (
    <html
      lang="en-us" //eslint-disable-line
    >
      <head>
        <title>Taverna - Menu</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.6/semantic.min.css" />
        {/* styles (will be present only in production with webpack extract text plugin) */}
        {Object.keys(assets.styles).map((style, key) =>
          <link
            href={assets.styles[style]}
            key={key} media="screen, projection"
            rel="stylesheet" type="text/css" charSet="UTF-8"
          />
          )}
      </head>
      <body>
        <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
        {Object.keys(assets.javascript).map((script, i) =>
            <script src={__DEVELOPMENT__ ? assets.javascript[script] : `${assets.javascript[script]}`} key={i} /> // eslint-disable-line
        )}

        <script src="https://cdn.jsdelivr.net/jquery/3.1.1/jquery.min.js" />
        <script src="https://cdn.jsdelivr.net/semantic-ui/2.2.6/semantic.min.js" />
      </body>
    </html>
  );
};

