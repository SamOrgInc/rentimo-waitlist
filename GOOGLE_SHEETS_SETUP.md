# Google Sheets Integration Setup

## Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new sheet called "Rentimo Waitlist"
3. Add these column headers in row 1:
   - A1: Full Name
   - B1: Email
   - C1: Referral Code
   - D1: Timestamp
   - E1: User Agent

## Step 2: Create Google Apps Script
1. In your Google Sheet, go to Extensions > Apps Script
2. Replace the default code with this:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Add data to sheet
    sheet.appendRow([
      data.fullName,
      data.email,
      data.referralCode || '',
      data.timestamp,
      data.userAgent
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Rentimo Waitlist API is running!")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## Step 3: Deploy the Script
1. Click "Deploy" > "New deployment"
2. Choose "Web app" as the type
3. Set "Execute as" to "Me"
4. Set "Who has access" to "Anyone"
5. Click "Deploy"
6. Copy the Web App URL

## Step 4: Update the React App
1. In your `App.tsx` file, find this line at the top:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE'
   ```
2. Replace `PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE` with your actual Web App URL

## Step 5: Test the Integration
1. Submit a test form on your website
2. Check your Google Sheet to see if the data appears
3. If there are issues, check the Apps Script execution logs

## Security Notes
- The script is set to "Anyone" access to allow form submissions
- Consider adding validation or rate limiting if needed
- Monitor your sheet for spam submissions

## Data Structure
Each submission will create a new row with:
- Full Name: User's full name
- Email: User's email address
- Referral Code: If user was referred by someone
- Timestamp: When the form was submitted
- User Agent: Browser information for analytics
