{% multimethod %}
{% endmultimethod %}

# Downloading Reports

## Overview

* [About](#about)
* [Account Reports](#account-reports)
  * [Request a Report](#request-account-report)
  * [Query Report Status](#status-account-report)
  * [Download the Report](#download-account-report)
* [Billing Reports](#billing-reports)
  * [Request a Report](#request-billing-report)
  * [Query Report Status](#status-billing-report)
  * [Download the Report](#download-billing-report)

## About {#about}
The Bandwidth numbers API allows you to automate the creation and download of certain reports related to account usage. This is handled through various requests to our `/reports` and `/billingReports` endpoints. The available reports for each endpoint are detailed in their respective sections.

## Account Reports (`/reports`) {#account-reports}

| Report Name                                     | ID | Description                                                                                                                                    |
|-------------------------------------------------|----|------------------------------------------------------------------------------------------------------------------------------------------------|
| Full Phone Number Details                       | 2  | Complete information about all phone numbers within the report’s scope                                                                         |
| Phone Number Inventory                          | 4  | A list of all phone numbers associated with an account                                                                                         |
| E911 Phone Number Details                       | 6  | E911 information associated with phone numbers within the report’s scope                                                                       |
| Port-out Orders                                 | 8  | Phone number details for historic or current port-out orders                                                                                   |
| Port-in Orders                                  | 14 | Phone number details for historic or current port-in orders                                                                                    |
| UC Account Summary                              | 16 | Detailed account information for a given UC account                                                                                            |
| User Information                                | 24 | Information about all active and inactive users for a given account                                                                            |
| Disconnected Phone Numbers                      | 30 | Information about all phone numbers that have been disconnected from the account                                                               |
| External Phone Number Details                   | 31 | Complete information about customer provided phone numbers within the report’s scope                                                           |
| End-User Phone Number Assignment                | 34 | A list of phone numbers and their end-user assignment statuses                                                                                 |
| Alternate Caller ID E911 Report                 | 36 | E911 detail information for accounts that use an alternative identifier for the end user                                                       |
| E911 Addresses                                  | 42 | A list of all E911 addresses provisioned to an account. The list of addresses shown are only for Dynamic Location Routing-enabled accounts.    |
| Number Utilization Telephone Number List Report | 47 | This report will list all of the Telephone Numbers that appear to be under-utilized and unassigned                                             |
| Iris Account Number Utilization Report          | 48 | This account report will provide insight into the current utilization and assignment data associated with the Bandwidth Dashboard TN inventory |
| Protected Phone Numbers Report                  | 50 | This report will provide a simple report that lists all of the protected TNs on an account, as well as their status                            |
| New Numbers                                     | 59 | Phone number details for historic or current new number orders                                                                                 |
| International TN Inventory Summary              | 64 | Summary of international telephone numbers                                                                                                     |
| Telephone Number Route Plan Report              | 65 | This report lists all of the route plans that are active for the indicated account                                                             |

A <code class="get">GET</code> request to `https://dashboard.bandwidth.com/api/accounts/{accountId}/reports` will return an XML list of the available report types, their ID number, and a description of each. The report ID needs to be passed in to the URL of the API request to indicate which type of report we want to create. A <code class="get">GET</code> request to `https://dashboard.bandwidth.com/api/accounts/{accountId}/reports/{reportId}` will return details for a specific report, like a description and the parameters needed to define boundaries for the report.

{% extendmethod %}
### Request a Report {#request-account-report}
Once the ID of the report you are looking to generate is ascertained, A <code class="post">POST</code> request to `https://dashboard.bandwidth.com/api/accounts/{accountId}/reports/{reportId}/instances` will trigger the generation of a new report and return a `201` response with a location header containing a URL used to query the status of the report.

{% common %}
#### Request
```http
POST https://dashboard.bandwidth.com/api/accounts/{accountId}/reports/{reportId}/instancess HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Instance>
    <OutputFormat>pdf</OutputFormat>
    <Parameters>
        <Parameter>
            <Name>Account</Name>
            <Value>1</Value>
        </Parameter>
        <Parameter>
            <Name>Sub-account</Name>
            <Value>1</Value>
        </Parameter>
        <Parameter>
            <Name>MultiValueEnum</Name>
            <Value>value1</Value>
            <Value>value2</Value>
        </Parameter>
    </Parameters>
    <ExpiresAt>2020-11-25</ExpiresAt>
    <!-- the date (not longer than 30 days in the future) at the end of which the instance will expire, should be specified in YYYY-MM-DD format-->
</Instance>
```

#### Response
```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/reports/{reportId}/instances/789
```
{% endextendmethod %}

{% extendmethod %}
### Query Report Status {#status-account-report}
Using the URL received in the HTTP response from our first <code class="post">POST</code> request, we can make a request to query the API for the status of our report's generation.

{% common %}
#### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/reports/{reportId}/instances/789 HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response
```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ReportInstanceResponse>
    <Instance>
        <Id>100102</Id>
        <ReportId>100020</ReportId>
        <ReportName>Sample Report</ReportName>
        <OutputFormat>pdf</OutputFormat>
        <RequestedByUserName>user</RequestedByUserName>
        <RequestedAt>2020-9-19 11:05:12</RequestedAt>
        <Parameters>
            <Parameter>
                <Name>AccountId</Name>
                <Value>1</Value>
            </Parameter>
        </Parameters>
        <Status>Ready</Status>
        <ExpiresAt>2020-11-25</ExpiresAt>
    </Instance>
</ReportInstanceResponse>
```
{% endextendmethod %}

{% extendmethod %}
### Download the Report {#download-account-report}
Once the report status query returns `Ready`, we are ready to download the requested report. This can be done by making a <code class="get">GET</code> request to the URI received in the location header of the response to our original <code class="post">POST</code> request, and appending it with `/file` . The 200 response will include a `Content-Disposition` header indicating the filename, and a download of the file will begin.


{% common %}
#### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/reports/{reportId}/instances/789/file HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response
```http
HTTP/1.1 200 OK
Content-Disposition: attachment; filename=output.pdf
```
{% endextendmethod %}


## Billing Reports (`/billingReports`) {#billing-reports}

| Report Type          | Description                                                                                                                                          |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| BDR                  | Billing Detail Records for Voice Services - per call information, available on day to day basis - may not reflect final invoice                      |
| MDR                  | Message Detail Records - per message information - may not reflect final invoice                                                                     |
| INVOICE              | A copy of the invoice file or files for the specified date range                                                                                     |
| STMTBDR              | BDR records that are aligned with the invoice for Voice Services                                                                                     |
| DIDSNAP              | A list of telephone numbers, aligned with invoice                                                                                                    |
| DIDSNAP_MSG          | A list of telephone numbers that are enabled for messaging, aligned with invoice                                                                     |
| RECORDINGBDR         | Billing Detail Records for Recording Services - per recording information, available on day to day basis                                             |
| RECORDINGSTMTBDR     | BDR records that are aligned with the invoice for Recording Services                                                                                 |
| TRANSCRIPTIONBDR     | Billing Detail Records for Transcription Services - per call transcription information, available on day to day basis                                |
| TRANSCRIPTIONSTMTBDR | BDR records that are aligned with the invoice for Recording Services                                                                                 |
| CNAMBDR              | Record of CNAM Subscribe and Notify queries/dips, available on day to day basis                                                                      |
| CNAMSTMTBDR          | Record of CNAM Subscribe and Notify queries/dips, aligns with invoices                                                                               |
| CONFBDR              | Billing Detail Records for Transcription Services - per conference information, available on day to day basis                                        |
| CONFSTMTBDR          | BDR records that are aligned with the invoice for Conferencing Services                                                                              |

{% extendmethod %}
### Request a Report {#request-billing-report}
Creating a report starts with a <code class="post">POST</code> request to `https://dashboard.bandwidth.com/api/accounts/{accountId}/billingReports`, detailing the date range for the report as well as type of report you wish to download. A successful response will include a body and location header, which contains a URI with the report ID to be used in later requests.

{% common %}
#### Request
```http
POST https://dashboard.bandwidth.com/api/accounts/{accountId}/billingReports HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<BillingReport>
    <Type>BDR</Type>
    <DateRange>
        <StartDate>2020-05-21</StartDate>
        <EndDate>2020-05-29</EndDate>
    </DateRange>
</BillingReport>
```
#### Response
```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8
Location: https://dashboard.bandwidth.com/api/accounts/{accountId}/billingreports/a12b456c8-abcd-1a3b-a1b2-0a2b4c6d8e0f2

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportCreationResponse>
    <ReportStatus>RECEIVED</ReportStatus>
    <Description>The report archive is currently being constructed.</Description>
</BillingReportCreationResponse>
```
{% endextendmethod %}


{% extendmethod %}
### Query Report Status {#status-billing-report}
Because of the asynchronous nature of the `/billingReports` endpoint, a <code class="post">POST</code> request does not necessarily mean the report is ready to be consumed. A <code class="get">GET</code> request to the URI received in the location header will return the report status, letting us know if it is ready to be downloaded or not. Expected responses in the `<ReportStatus>` element are `PROCESSING` and `COMPLETED`.

{% common %}
#### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/billingreports/a12b456c8-abcd-1a3b-a1b2-0a2b4c6d8e0f2 HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
#### Response
```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<BillingReportRetrievalResponse>
    <ReportStatus>COMPLETED</ReportStatus>
    <Description>The report archive is constructed.</Description>
</BillingReportRetrievalResponse>
```
{% endextendmethod %}

{% extendmethod %}
### Download the Report {#download-billing-report}
Once the report status query returns `COMPLETED`, we are ready to download the requested report. This can be done by making a <code class="get">GET</code> request to the URI received in the location header of the response to our original <code class="post">POST</code> request, and appending it with `/file` . The 200 response will include a `Content-Disposition` header indicating the filename, and a download of the .zip file will begin.

{% common %}
#### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/billingreports/a12b456c8-abcd-1a3b-a1b2-0a2b4c6d8e0f2/file HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
#### Response
```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8
Content-Disposition: attachment; filename=bdrs_2020-05-21_2020-05-29.zip
```
{% endextendmethod %}
