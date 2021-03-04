# Step By Step Guide To Number Assignment Using the Bandwidth Phone Number API

This guide is for using the Bandwidth Phone Number API  to assign numbers.

### Bulk assigning up to 5000 TNs with an active end-user

The Bandwidth Phone Number API Documentation can be found [here](../apiReference.md). The API endpoint for using the Number Utilization Review is ```/accounts /{accountId} /numbersAssignment```.

The POST method on this endpoint is used to bulk assign and unassign your owned phone numbers. After retrieving and auditing your phone numbers, you can use this endpoint to bulk assign and unassign your phone numbers.

#### Sample Request
```
curl -d @<your_xml_file> -u {username}:{password} -X POST https://dashboard.bandwidth.com/api/accounts/{accountId}/numbersAssignment
```

The following fields can be included in your XML file in this request:
* CustomerOrderId (optional): allows you to assign a custom ID to this request for tracking purposes
* Action (required): One of [ASSIGN, UNASSIGN], specifies if you are assigning or unassigning these numbers
* TelephoneNumbers (required): A list of TelephoneNumber fields specifying the phone numbers you want to assign or unassign
    * Note: The number of TelephoneNumber fields cannot be more than 5000 for a single request. If you have more than 5000 phone numbers, you will need to create multiple requests


#### Sample XML file
```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersAssignmentOrder>
    <CustomerOrderId>12345</CustomerOrderId>
    <Action>ASSIGN</Action>
    <TelephoneNumbers>
        <TelephoneNumber>9199918388</TelephoneNumber>
        <TelephoneNumber>4158714245</TelephoneNumber>
        <TelephoneNumber>4352154439</TelephoneNumber>
        <TelephoneNumber>4352154466</TelephoneNumber>
    </TelephoneNumbers>
</TelephoneNumbersAssignmentOrder>
```

If successful, the Number Utilization Review endpoint returns an xml response with the following fields:
* OrderCreateDate: The date of the order
* AccountId: The account id of the order
* CratedByUser: Username of who created the request
* OrderId: ID of the created order
* ProcessingStatus: Status of the request
    * Can be one of [RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED]
* TotalQuantity: Number of phone numbers in the request
* FailedQauntity: Number of phone numbers in the request that failed the requested Action
* TelephoneNumbersAssignmentOrder: The XML from the request
* Errors: List of Error objects from the request
    * Error.Code: The error code. A list of all error codes can be found [here](../error.md)
    * Error.Description: The error's description
    * Error.TelephoneNumbers: List of TelephoneNumber fields that caused this error

#### Sample successful request response
```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersAssignmentOrderResponse>
    <OrderCreateDate>2016-01-15T11:36:52.727Z</OrderCreateDate>
    <AccountId>1</AccountId>
    <CreatedByUser>jbm</CreatedByUser>
    <OrderId>65e03a35-6b97-48a5-8126-f47bad02df2a</OrderId>
    <ProcessingStatus>PARTIAL</ProcessingStatus>
    <TotalQuantity>4</TotalQuantity>
    <FailedQuantity>1</FailedQuantity>
    <TelephoneNumbersAssignmentOrder>
        <CustomerOrderId>ICPA123ABC</CustomerOrderId>
        <Action>ASSIGN</Action>
        <TelephoneNumbers>
            <TelephoneNumber>9199918388</TelephoneNumber>
            <TelephoneNumber>4158714245</TelephoneNumber>
            <TelephoneNumber>4352154439</TelephoneNumber>
            <TelephoneNumber>4352154466</TelephoneNumber>
        </TelephoneNumbers>
    </TelephoneNumbersAssignmentOrder>
    <Errors>
        <Error>
            <Code>5076</Code>
            <Description>Number does not belong to this account.</Description>
            <TelephoneNumbers>
                <TelephoneNumber>9199918388</TelephoneNumber>
            </TelephoneNumbers>
        </Error>
    </Errors>
</TelephoneNumbersAssignmentOrderResponse>
```

If unsuccessful, the Number Utilization Review endpoint returns an xml response with the following fields:


#### Sample unsuccessful request response
```
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersAssignmentOrderResponse>
    <ResponseStatus>
        <ErrorCode>13554</ErrorCode>
        <Description>Assignment action is invalid. Valid values ASSIGN, UNASSIGN</Description>
    </ResponseStatus>
</TelephoneNumbersAssignmentOrderResponse>
```
