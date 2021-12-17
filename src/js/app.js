import GameSavingLoader from './GamingSavingLoader';

// eslint-disable-next-line no-console
GameSavingLoader.load().then((saving) => saving, (error) => console.log(error));
