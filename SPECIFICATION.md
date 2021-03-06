# Site structure

- Home page with excerp of links, and other information
- CV page
- Links page, with links to mainly github projects, and social media
- Photos galleries

## CV page

Containing the CV sections. It must be easily accessible, and the printing must produce a good looking document.

## Links page

Nothing particular.

## Photo galleries

The photo galleries must manage multiple set of photos, and display them in a cool layout.

Each galleries has a name and a cover picture, and some other information (description, location, etc)

### Gallery

A gallery contains the list of photos. Each photos is displayed in a grid or a masonry (ideally a wall of pictures without spaces)

When a user click on a photo, it expand to cover la large part of the available space, but other photos keep displayed in the original order.

Each photo has a title (displayed on the thumbnail, maybe on hover only, and on the expanded view), and can contain metadata like the description, location, exposure, and license.

The metadata can be view by clicking on some sort of button. It will open a popup, a panel or a modal view with the metadata.

The picture contains also a social button bar for sharing the picture.

# Data

All the data must be stored in JSON file and loaded by the application, to allow quick update of the site without rebuilding the application.

The galleries pictures must not be stored in the application but outside, so Webpack will not interfere

# Page Header

Even is the site in mainly static, the HTML page must be served by a php page that can interpret the URL, and generate the correct page header. For example, if i'm on the gallery X page and viewing the photo Y, the page header must contain the title of the gallery, and the title of the photo. All that based on the URL (gallery/X/Y for this example).

The backend script will be included in the project, as it use the same logic from JSON file.

# Technologies Manifest

- The site is builded with Svelte + Vite. It must remain small and fast.
- Each pages must use micro-data if is possible and useful.
- The site must be SEO friendly : correct header and meta-informations.
- No CSS framework is used, except for a reset CSS.
- No JS framework is used, except for Svelte.
- The dependencies to other packages must be keep as minimal as possible.
- The site must be accessible
- The site must be printable as much as possible (eg: CV page)
- A RSS feed must be provided, even if the site will remain static for most of the time.

## CV Microdata

As I'm not an expert on microdata, I used the template from [https://gist.github.com/danielantelo/218015d40f346b964aac](https://gist.github.com/danielantelo/218015d40f346b964aac)
