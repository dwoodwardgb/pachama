# Running the project

Run `docker-compose up` and then the app should be running on `localhost:3000`.

## Design and implementation decisions

1. Node was used as the backend because I'm more comfortable with it than Python.
2. Postgres was used because it has rudimentary support for fuzzy searching.

## If I had more time

1. I would add pagination. Pagination is necessary because on the gallery page images are shown, this means that if many results are shown, many images will be on the page and this could cause performance problems.
2. I would implement real fuzzy searching using a Postgres plugin. Currently only exact substring searching is supported.
3. I would serve the frontend from a CDN, rather than the api/rest server. This would allow for better performance.
4. I might try and write some unit tests that test the backend query logic. This app is so simple writing exhaustive unit tests for other features would be a waste of time. If this were a production application it *might* be worth writing end to end tests that check on key workflows in the UI in production.
5. I would actually style the app. I ran out of time for serious UI design, but as proof that can at least create mediocre UI I submit [my side project](https://gomechef.us). I was responsible for all UI/UX and development.
