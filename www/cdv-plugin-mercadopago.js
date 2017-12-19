/*global cordova, module*/

function MercadoPago() {}

MercadoPago.prototype.setPaymentPreference = function(maxIntallments, defaultInstallments, excludedPaymentMethods, excludedPaymentTypes, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "setPaymentPreference", [maxIntallments, defaultInstallments, excludedPaymentMethods, excludedPaymentTypes]);
};
MercadoPago.prototype.showPaymentVault = function(publicKey, site, amount, color, blackFont, paymentPreference, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "showPaymentVault", [publicKey, site, amount, color, blackFont, paymentPreference]);
};
MercadoPago.prototype.showCardWithoutInstallments = function(publicKey, color, blackFont, paymentPreference, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "showCardWithoutInstallments", [publicKey, color, blackFont, paymentPreference]);
};
MercadoPago.prototype.showCardWithInstallments = function(publicKey, site, amount, color, blackFont, paymentPreference, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "showCardWithInstallments", [publicKey, site, amount, color, blackFont, paymentPreference]);
};
MercadoPago.prototype.showPaymentMethods = function(publicKey, color, blackFont, paymentPreference, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "showPaymentMethods", [publicKey, color, blackFont, paymentPreference]);
};
MercadoPago.prototype.showIssuers = function(publicKey, paymentMethod, color, blackFont, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "showIssuers", [publicKey, paymentMethod, color, blackFont]);
};
MercadoPago.prototype.showInstallments = function(publicKey, site, amount, paymentMethod, Issuer, color, blackFont, paymentPreference, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "showInstallments", [publicKey, site, amount, paymentMethod, Issuer, color, blackFont, paymentPreference]);
};
MercadoPago.prototype.showBankDeals = function(publicKey, color, blackFont, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "showBankDeals", [publicKey, color, blackFont]);
};
MercadoPago.prototype.createPayment = function(publicKey, itemID, itemQuantity, itemPrice, campaignId, accessToken, url, uri, paymentMethod, installment, cardIssuerId, tokenId, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "createPayment", [publicKey, itemID, itemQuantity, itemPrice, campaignId, accessToken, url, uri, paymentMethod, installment, cardIssuerId, tokenId]);
};
MercadoPago.prototype.showPaymentResult = function(publicKey, payment, paymentTypeId, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "showPaymentResult", [publicKey, payment, paymentTypeId]);
};
MercadoPago.prototype.startCheckout = function(publicKey, prefid, color, blackFont, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "startCheckout", [publicKey, prefid, color, blackFont]);
};
MercadoPago.prototype.getPaymentMethods = function(publicKey, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "getPaymentMethods", [publicKey]);
};
MercadoPago.prototype.getIssuers = function(publicKey, paymentMethodId, bin, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "getIssuers", [publicKey, paymentMethodId, bin]);
};
MercadoPago.prototype.getInstallments = function(publicKey, paymentMethodId, bin, issuerId, amount, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "getInstallments", [publicKey, paymentMethodId, bin, issuerId, amount]);
};
MercadoPago.prototype.getIdentificationTypes = function(publicKey, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "getIdentificationTypes", [publicKey]);
};
MercadoPago.prototype.createToken = function(publicKey, cardNumber, expirationMonth, expirationYear, securityCode, cardholdername, docType, docNumber, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "createToken", [publicKey, cardNumber, expirationMonth, expirationYear, securityCode, cardholdername, docType, docNumber]);
};
MercadoPago.prototype.getBankDeals = function(publicKey, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "getBankDeals", [publicKey]);
};
MercadoPago.prototype.getPaymentResult = function(publicKey, paymentId, paymentTypeId, successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, "MercadoPago", "getPaymentResult", [publicKey, paymentId, paymentTypeId]);
};
module.exports = new MercadoPago();
