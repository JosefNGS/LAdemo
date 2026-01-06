# Gemini API Setup

## Configuration

To use the real Gemini AI API instead of mock responses, you need to set your API key.

### Option 1: Set in index.html (Quick Setup)

1. Open `index.html`
2. Find the script section at the bottom
3. Uncomment and set your API key:
   ```javascript
   window.GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
   ```

### Option 2: Environment Variable (Recommended for Production)

For production, use a secure method to inject the API key:
- Use a backend proxy to handle API calls
- Use environment variables that are injected at build time
- Use a secure configuration service

### Option 3: User Input (For Demo)

You can add a settings page where users can enter their own API key.

## Getting a Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and add it to your configuration

## Security Notes

⚠️ **Important**: Never commit API keys to version control!

- Add `API_SETUP.md` to `.gitignore` if it contains sensitive info
- Use environment variables for production
- Consider using a backend proxy for API calls in production
- The current setup stores the key in `window.GEMINI_API_KEY` which is visible in browser dev tools

## Fallback Behavior

If no API key is set, the service will automatically use mock responses based on query keywords. This ensures the demo works without requiring an API key.

## Testing

1. Without API key: Mock responses will be used
2. With API key: Real Gemini API will be called
3. On API error: Falls back to mock responses

