## Configuring Your Identity Provider

Configuring your identity provider for Bandwidth will require you have a few pieces of information ready. You will need

- `usernameField` - this is the value of the `usernameField` in the SAML assertion. It is a form of attribute mapping settings that tells us which field to use as the username in your provider.
- `issuerUri` - this is the URI of the Authorization Server in your Identity Provider which will issue or mint tokens for your users. 
- `singleSignOnUrl` - this is the endpoint we will call in your Identity Provider to initiate an authentication on behalf of a user.
- `signatureCertificate` - either a PEM or DER decoded certificate to verify SAML messages sent between us and your Identity Provider.

Some SSO or Federated Authentication services don't make this information easy to get access to without creating an application ahead of time. To create an application some, services require values from the configured sending application. We send these values back as read-only properties when creating a new IdP. These properties are

- `entityId`- the entity ID of the provider to provide to the application in your provider
- `acsUrl` - the URL where your provider will send signed tokens back to be consumed by Bandwidth

To make the back-and-forth easier, we allow you to create an IdP with "dummy" values to get back the `entityId` and `acsUrl` to configure in your applications. You can update configuration values using `PUT` requests using the `Location` supplied when the IdP was initially created. Only when you send a `PUT` request to activate the IdP (`active: true`) will we validate the fields you have provided. If the values do not pass validation, the IdP will not be activated.

## FAQs
### If I update an IdP to be active, what happens to other IdPs?

There can only be one active IdP per account. Therefore, if another IdP is already active when attempting to activate a different IdP, the initially active IdP will be set to inactive.

### Can I delete an IdP while it is still active? 

You cannot delete an IdP if it is active or not. You must first deactivate it before deleting the IdP. If you attempt to delete an IdP that is still active  you will recieve a 409 - Conflict HTTP status.
