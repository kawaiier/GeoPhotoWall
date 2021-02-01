![issues shield](https://img.shields.io/github/issues/kawaiier/GeoPhotoWall)
# GeoPhotoWall
An app for Georgia lovers. Photowall of 50 Georgian photos from [Pexels](https://www.pexels.com/). Click any photo to see it on the website.

Some of them are from the US state, sorry for that (see #3). 

💁‍♂️ https://kawaiier.github.io/geophotowall/

![screenshot](https://kawaiier.github.io/assets/images/gpw-screen.png)
## How to deploy
1. Get a free API key at [Pexels](https://www.pexels.com/api/).
2. Clone this repository.
3. Create `.env` file in `root` folder.
4. Add your API key to `.env` like this `REACT_APP_KEY=XXXXXXXXXXXXXXX`.
5. Run `npm install`.
6. Run `npm start` to start test server.

## Things To Be Done
- [X] Mobile version
- [ ] Load more photos on scroll #1
- [ ] Randomize photos #2
- [ ] Show only photos of Sakartvelo #3

## Components used
- [react](https://reactjs.org/)
- [redux](https://redux.js.org/)
- [axios](https://github.com/axios/axios)
- [pexels](https://github.com/pexels/pexels-javascript)
- [gh-pages](https://github.com/tschaub/gh-pages)