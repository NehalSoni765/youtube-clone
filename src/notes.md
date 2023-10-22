## quick links

- youtube auth link : https://developers.google.com/youtube/registering_an_application
- youtube create api key = https://console.cloud.google.com/apis/credentials?pli=1&project=youtube-clone-react-402814&supportedpurview=project
- youtube video link : https://developers.google.com/youtube/v3/docs/videos/list?apix=true

# facing error in not valid API key

- Go to the Google Cloud Console: https://console.cloud.google.com.
- Make sure you're using the Google account associated with your project.
- Select your project (in your case, it's "1003026535060") from the project drop-down menu at the top of the page.
- In the left-hand navigation pane, click on "APIs & Services" and then "Dashboard."
- Click on the "+ ENABLE APIS AND SERVICES" button.
- In the search bar, type "YouTube Data API v3" and select it from the results.
- Click the "Enable" button to enable the API for your project.
- After enabling the API, you will need to create API credentials. Go to the "Credentials" section on the left-hand navigation pane.
- Click on the "+ CREATE CREDENTIALS" button and select "API key."
- A new API key will be generated. Copy this API key.
- Replace the GOOGLE_API_KEY variable in your code with the newly generated API key.
