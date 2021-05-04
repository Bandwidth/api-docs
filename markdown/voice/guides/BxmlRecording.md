# BXML Recording

## About
This guide will show how to do call recording via the Record and StartRecording verbs.

### Record
The Record verb starts recording in a call and pauses all BXML execution until the recording is terminated by a timeout (`maxDuration`) or a terminating digit (`terminatingDigits`). Once the recording ends, BXML execution will continue at the next verb, or at the BXML at the `recordCompleteUrl` if this attribute is set.

If the `recordingAvailableUrl` attribute is set, this URL will receive a callback once the recording is available to use.

Use `<Record>` if:
* You're capturing a voicemail
* You only need a single party recording
* You're capturing input that should pause the call until finished

### Record Example
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Record recordCompleteUrl="https://myapp.com/nextBXML" maxDuration="10"/>
</Response>
```
