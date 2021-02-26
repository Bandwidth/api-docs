Rate limits for the Voice API are set by account by your customer account manager. By default, rate limits are set to 3 CPS and 30 active sessions. If you think you may need additional voice capacity, please open a ticket with our Account Management team. 
 
If a rate limit is hit when creating an outbound call the API will return a `HTTP-429` informing the reason with the message `Account call creation rate limit exceeded` or `Account concurrent call limit exceeded`.
If a rate limit is hit during a `<Forward>`, the call will be allowed, but will still count against the limit, so subsequent calls may be rate limited.
If a rate limit is hit during a `<Transfer>`, the error will be sent to `transferCompleteUrl` also informing the reason in the `errorMessage` field.
There are no notifications when inbound calls are rejected due to rate limits.
