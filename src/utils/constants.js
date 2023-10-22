export const YOUTUBE_LOGO =
  "https://imgs.search.brave.com/5cj3vFL-ohknNVTY0mzaI81_ca8x832DD2qEXvPw6nk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvWW91VHViZS1M/b2dvLnBuZw";

export const BUTTON_OF_LIST = [
  "All",
  "Computer programing",
  "DSA",
  "Chill-out music",
  "Comedy",
  "Zigzag",
  "Cooking",
  "Live",
];

const GOOGLE_API_KEY = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;
export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&&maxResults=50&chart=mostPopular&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const HEADER_OPTIONS = {
  Authorization: "Bearer ",
  Accept: "application / json",
};
