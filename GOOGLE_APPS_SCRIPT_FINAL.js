function doPost(e) {
  try {
    console.log("📥 Received POST request");
    console.log("📦 Event object:", e);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    console.log("📊 Got sheet:", sheet.getName());
    
    let data;
    
    // Handle FormData (from React fetch with FormData body)
    if (e.parameter) {
      console.log("📝 Using FormData parameters:", e.parameter);
      data = e.parameter;
    }
    // Handle JSON data (backup)
    else if (e.postData && e.postData.contents) {
      console.log("📝 Using JSON postData:", e.postData.contents);
      data = JSON.parse(e.postData.contents);
    }
    else {
      throw new Error("No data received - neither parameter nor postData found");
    }
    
    console.log("✅ Parsed data:", data);
    
    // Validate required fields
    if (!data.fullName || !data.email) {
      throw new Error("Missing required fields: fullName or email");
    }
    
    const row = [
      new Date(), // Current timestamp in Column A
      data.fullName, // Column B
      data.email, // Column C
      data.referralCode || '' // Column D
    ];
    
    console.log("📋 Adding row:", row);
    sheet.appendRow(row);
    console.log("✅ Row added successfully");
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: "Data added successfully",
        rowData: row
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error("❌ Error in doPost:", error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false, 
        error: error.toString(),
        message: "Failed to process request"
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Rentimo Waitlist API is running!")
    .setMimeType(ContentService.MimeType.TEXT);
}
