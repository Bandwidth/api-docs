# Security 

## Security Policy

Security policy intended for the *Digital Connect* Service API leverages current SE 2SG (Service Gateway) for security and throttling:
* Only accepts SSL/TLS connections
* Authentication and Session Management
* Web services use session-based authentication, by establishing a session token via a POST or by using an API key as a POST body argument or as a cookie
* Authorization - Allows privileged actions on a resource

## Accessing Services

To access *Digital Connect* services, your requests need to pass several HTTP headers and
a URL.

* The required headers are:
  * Authorization
  * Accept
  * Content-Type (for POST operations only)
* The URL links together a base "api_context_path" that locates the overall *Digital Connect* API and a service URL that identifies a specific *Digital Connect* service.

### Obtaining an Authorization Token from 2SG

In order to use the Authorization header, you need to acquire an
authorization token from 2SG. The procedure for this is outlined on the
following page in the Sabre Dev Studio:

[https://developer.sabre.com/guides/travel-agency/how-to/get-token](https://developer.sabre.com/guides/travel-agency/how-to/get-token)

*Digital Connect* uses OAuth 2.0 token protocol for authentication and
authorization. Before any service can be invoked access token must be
obtained and passed via HTTP header. Token can be created by POST call
to 2SG endpoint containing unique Client id.

Method and endpoint:

```
POST /v2/auth/token
```

### Using the Authorization Token in the Authorization Header

After obtaining the authentication token, it must be passed to 2SG in
every call to a service in an HTTP Authorization header. The format of
the Authentication header is:

```
Authorization: Bearer <authentication_token>
```

### Header Requirements for Digital Connect Services

The header requirements are slightly different for GET and POST
operations.

**For GET Operations**

For GET operations, the following headers must be passed.

| Header name   | Header Value                     |
| :-------------| :--------------------------------|
| Accept        | application/json                 |
| Authorization | Bearer <authentication_token> |

**For POST Operations**

For POST operations, the following headers must be passed.

| Header name     | Header Value                      |
| :-------------- | :---------------------------------|
| Accept          | application/json                  |
| Content-Type    | application/json                  |
| Authorization   | Bearer <authentication_token>  |

### Digital Connect Service URLs

Individual *Digital Connect* service URLs combine the "api_context_path" that locates
the overall API and a service URL that locates a specific service. For
example, the /search service is invoked by combining the API's URL:

```http
https://<host>:<port>/<api_context_path>
```

With the service URL /search, resulting in:

```http
https://<host>:<port>/<api_context_path>/products/air/search?jipcc=<storefront>
```

Notice that the storefront code is not part of URL but is passed as a
request parameter. In practice, an actual URL will look something like
the following example:

```http
https://api.sabre.com/v1/ssw/products/air/search?jipcc=D5EE
```

Some other examples of service URLs are given in the following table:

| Service Name          | Service URL                                 | Supported |    
| :---------------------| :-------------------------------------------| :---------|
| Search                | /products/air/search?jipcc=<storefront>   | POST      |    
| Air (select Flights)  | /products/air?jipcc=<storefront>          | POST, GET |
| Passengers            | /passengers?jipcc=<storefront>            | POST, GET |
| Ancillaries           | /products/ancillaries?jipcc=<storefront>  | POST, GET |
| Seats                 | /products/seats?jipcc=<storefront>        | POST, GET |
| Products              | /products?jipcc=<storefront>              | GET       |
| Purchase              | /purchase?jipcc=<storefront>              | POST      |

### HTTP Methods

*Digital Connect* APIs use standard HTTP methods to denote actions against a resource:

* **GET** - Reads a resource. Returns HTTP 200 on success.
* **POST** - Creates a new resource. Returns HTTP 200 on success.
* **PUT** - Updates a resource. Returns HTTP 200 on success.
* **DELETE** - Deletes a resource. Returns HTTP 200 on success.

### Parameter types

Many API methods take one or more parameters, either as query parameters
of the URL itself, or as POST parameters. The documentation for each
method references these standard types:

| Parameter Type          | Meaning                                                                                                                                                                                                                                                                                  |
| :-----------------------| :---------------------------------------------------------------------------------------------------------------------------------------------|
| String                  | Any String (with validation).                                                                                                                 |
| Boolean                 | A logical `true` or `false` value. May be passed to API requests as the strings `"true"` or `"false"`.                                        |
| Integer                 | A value that is expressed as an integer. Integers have to be whole numbers.                                                                   |     
| Number                  | A value that is numeric.                                                                                                                      |                         
| String ENUM(values)     | A predefined list of string values, for example `Male` and `Female`. Any value not in the list will result in an error.                       |
| Map(keyType:valueType)  | A JSON dictionary of key/value pairs. Each key and value must be a valid instance of keyType and valueType, e.g. `{"key":"value"}` |                                                 

### JSON Data

Data is returned using JSON, a lightweight serialization language that
is compatible with many different languages. JSON is also syntactically
correct JavaScript code, which means that it can be parsed with
JavaScript's own eval() function.

## Fingerprint

*Digital Connect* API provides message fingerprinting mechanism which serves to prevent
unauthorized modifications of JSON data. User can define which data are
sensitive and should be protected. Examples of such elements are prices
which can be modified externally under specific conditions.

Security data model, represented in JSON, has the following form:

```json
"securityData": {
    "fingerprint": "e7541705e7c44f400afbda03e612f2e0876e4fffe0e54e379168b0c02e5ec308",
    "timestamp": 1516275376
}
```

* `fingerprint` is a cryptographic digest of string token created from plain JSON elements that are being secured.
* `timestamp` denotes the time of creating JSON request by the client.
* `securityData` element is validated against JSON data and if it fails, the requests are rejected in accordance with the standard API validation mechanism.

### Creating fingerprint

Clients of the fingerprint creator can define which JSON fields are to
be included in the base string. Usually, they are contained by parent of
securityData.

Generation is performed within two steps:

* creating fingerprint base string by serializing elements to strings and concatenating them (service-specific)
* creating final fingerprint by applying message authentication algorithm with hashing (HMAC) on the base.

HMAC algorithm secures content of the input string with secret key
(which needs to be provided to the client) and processes the result with
cryptographic, hashing function, such as SHA. Hashing function allows to
generate unique, constant-length strings from different input sequences
and its one-way meaning is not able to recreate original contents from
the final hash. Secret key does not have a specific format, it only
needs to be a non-empty string. The key should not be revealed to
unauthorized parties.

Client is required to use exactly the same signature algorithm as *Digital Connect*. By
default, **HMAC with SHA-256** is used but it can be changed in
configuration (see *Supported authentication algorithms
section*).

Final fingerprint is a string consisting of hexadecimal characters
representing signature bytes (case insensitive). Its length can vary
depending on the hashing algorithm used. In case of **SHA-256**, output
data is represented by a 32-byte array which results in a 64-characters
hexadecimal string.

```
sample fingerprint: e7541705e7c44f400afbda03e612f2e0876e4fffe0e54e379168b0c02e5ec308
```

### Fingerprint verification

When *Digital Connect* receives `securityData` element
with fingerprint it creates its own fingerprint using the same:

* JSON objects from request
* secret key
* message authentication algorithm

Validation is successful when the generated fingerprint is exactly the
same as the received fingerprint.

**NOTE**
Fingerprint cannot be empty.

### Creating timestamp

Timestamp denotes unique time of creating the request. Formally, it is
UNIX timestamp (number of milliseconds that passed since January 1st,
1970 00:00:00 UTC) expressed in seconds. Client should retrieve this
value from its local system using system or platform functions.

```
sample timestamp: 1516348096
```

### Timestamp verification

*Digital Connect* assumes that the client created the request reasonably close to the time
of receiving, so it compares local and received timestamps. Considering
software and network delays as well as possible system clock differences
on local and remote systems, *Digital Connect* expects the request to come within T = 10
seconds by default (configurable). Higher values indicate that the
message may have been modified by an untrusted party at some point of
time. Due to possible system clocks mismatch, the *Digital Connect* timestamp can be
smaller than received timestamp but the difference still cannot exceed
T. If that happens, request will be rejected due to failed validation.

**NOTE** 
Timestamp cannot be empty.

### Implementation notes

It is important to create base string using exactly the same object text
representation as contained in JSON. For example, if the amount is
represented the following way:

```json
{
    amount: 11000
}
```

It cannot be serialized to fingerprint base in scientific notation, as
"1.10E+4", although these values are mathematically equal.

**NOTE**
Timestamp can also be a part of fingerprint input.

### Sample code

The Java code snippets below can be used to create fingerprint with JJWT - JSON Web Token for Java and Android and Apache Commons Codec.

Maven dependencies need to be added first:

```xml
<!-- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.0</version>
</dependency>

<!-- https://mvnrepository.com/artifact/commons-codec/commons-codec -->
<dependency>
    <groupId>commons-codec</groupId>
    <artifactId>commons-codec</artifactId>
    <version>1.11</version>
</dependency>
```

and the following classes need to be imported:

```java
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.impl.crypto.MacSigner;
import io.jsonwebtoken.impl.crypto.Signer;
import java.security.Key;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.codec.binary.Hex;
```
:::

Firstly, algorithm instance by name defined in RFC 7518 is received:

```java
SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.forName("HS256");
```

then, a Key object representing secret key to be mixed with input is
created:

```java
Key secretKey = new SecretKeySpec("Secret key".getBytes(), signatureAlgorithm.getJcaName());
```

afterwards, the input message is signed:

```java
byte [] hash = new MacSigner(signatureAlgorithm, secretKey).sign(input.getBytes());
```

and finally, bytes are represented in hex:

```java
String fingerprint = new String(Hex.encodeHex(hash));
```

### Configuration keys

* `sat.signature.secret` - secret key shared between parties, default value: *Digital_Connect*
* `sat.signature.algorithm` - message digest algorithm, default value: *HS256*
* `sat.signature.maxTimestampDifference.seconds` - maximum number of seconds that received timestamp can differ from current timestamp, default value: *10*

## Supported authentication algorithms

The following algorithms are supported:

* *Digital Connect* API 3.5.2: **HS256** (HMAC using SHA-256), **HS384** (HMAC using SHA-384), **HS512** (HMAC using SHA-512)

See possible values in [RFC7518](https://tools.ietf.org/html/rfc7518).
