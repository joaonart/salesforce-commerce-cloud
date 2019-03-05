/**
* This Method describes all constants used in worldpay
*/
function WorldpayConstants() {}
WorldpayConstants.XMLVERSION = '<?xml version="1.0"?>';
WorldpayConstants.DTDINFO = '<!DOCTYPE paymentService PUBLIC "-//Worldpay/DTD Worldpay PaymentService v1//EN" "http://dtd.worldpay.com/paymentService_v1.dtd">';
WorldpayConstants.UNKNOWN_ENTITY = 'UNKNOWN_IDENTITY';
WorldpayConstants.CANCELLEDBYSHOPPER = 'CANCELLED_BY_SHOPPER';
WorldpayConstants.THREEDERROR = '3DERROR';
WorldpayConstants.THREEDSINVALIDERROR = '3DS_INVALID_ERROR';
WorldpayConstants.NOT_IDENTIFIED_NOID = 'NOT_IDENTIFIED_NOID';
WorldpayConstants.VISASSL = 'VISA-SSL';
WorldpayConstants.AUTHORIZED = 'AUTHORISED';
WorldpayConstants.PENDING = 'PENDING';
WorldpayConstants.REFUSED = 'REFUSED';
WorldpayConstants.OPEN = 'OPEN';
WorldpayConstants.XMLHEADER = '<?xml version="1.0"?><!DOCTYPE paymentService PUBLIC "-//Worldpay//DTD Worldpay PaymentService v1//EN" "http://dtd.worldpay.com/paymentService_v1.dtd">';
WorldpayConstants.STATEMENTNARRATIVE = '<statementNarrative></statementNarrative>';
WorldpayConstants.ORDERDESCRIPTION = 'Merchant Order Number : ';
WorldpayConstants.XMLPAYMENTDETAILS = '<paymentDetails></paymentDetails>';
WorldpayConstants.CSE = '<CSE-DATA></CSE-DATA>';
WorldpayConstants.ACCEPT = 'accept';
WorldpayConstants.MD = 'MD';
WorldpayConstants.PARES = 'PaRes';
WorldpayConstants.SERVICE_ID = 'int_worldpay.http.worldpay.payment.post';
WorldpayConstants.CANCEL_OR_REFUND = 'CancelOrRefund';
WorldpayConstants.EMPTY_RESPONSE = 'Empty Response';

WorldpayConstants.DIRECT = 'DIRECT';
WorldpayConstants.REDIRECT = 'REDIRECT';
WorldpayConstants.CANCELLEDSTATUS = 'CANCELLED';
WorldpayConstants.FAILEDSTATUS = 'FAILED';
WorldpayConstants.XMLPAYMENTSERVICE = 'paymentService';
WorldpayConstants.XMLORDERSTATUSEVENT = 'orderStatusEvent';
WorldpayConstants.XMLLASTEVENT = 'lastEvent';
WorldpayConstants.XMLPAYMENTOPTION = 'paymentOption';
WorldpayConstants.merchanttokenType = 'Merchant';
// APM Names
WorldpayConstants.CHINAUNIONPAY = 'CHINAUNIONPAY-SSL';
WorldpayConstants.ENETS = 'ENETS-SSL';
WorldpayConstants.QIWI = 'QIWI-SSL';
WorldpayConstants.ALIPAY = 'ALIPAY-SSL';
WorldpayConstants.SOFORT = 'SOFORT-SSL';
WorldpayConstants.SOFORT_SWITZERLAND = 'SOFORT_CH-SSL';
WorldpayConstants.YANDEXMONEY = 'YANDEXMONEY-SSL';
WorldpayConstants.IDEAL = 'IDEAL-SSL';
WorldpayConstants.BOLETO = 'BOLETO-SSL';
WorldpayConstants.PAYPAL = 'PAYPAL-EXPRESS';
WorldpayConstants.MISTERCASH = 'MISTERCASH-SSL';
WorldpayConstants.ENETSSSL = 'ENETS-SSL';
WorldpayConstants.CASHU = 'CASHU-SSL';
WorldpayConstants.WORLDPAY = 'Worldpay';
WorldpayConstants.GIROPAY = 'GIROPAY-SSL';
WorldpayConstants.CREDITCARD = 'CREDIT_CARD';
WorldpayConstants.P24 = 'PRZELEWY-SSL';
WorldpayConstants.KONBINI = 'KONBINI-SSL';
WorldpayConstants.ELV = 'ELV-SSL';
WorldpayConstants.POLI = 'POLI-SSL';
WorldpayConstants.POLINZ = 'POLINZ-SSL';
WorldpayConstants.NORDEAFI = 'SOLO-SSL';
WorldpayConstants.NORDEASE = 'EBETALNING-SSL';
WorldpayConstants.KLARNA = 'KLARNA-SSL';
WorldpayConstants.WECHATPAY = 'WECHATPAY-SSL';

WorldpayConstants.BRAZILCOUNTRYCODE = 'BR';

WorldpayConstants.WEVDAVPATH = '/on/demandware.servlet/webdav/Sites';
WorldpayConstants.PMETHOD = 'https://';

// Error Numbers
WorldpayConstants.NOTIFYERRORCODE111 = '111';
WorldpayConstants.NOTIFYERRORCODE112 = '112';
WorldpayConstants.NOTIFYERRORCODE113 = '113';
WorldpayConstants.NOTIFYERRORCODE114 = '114';
WorldpayConstants.NOTIFYERRORCODE115 = '115';
WorldpayConstants.NOTIFYERRORCODE116 = '116';
WorldpayConstants.NOTIFYERRORCODE117 = '117';
WorldpayConstants.NOTIFYERRORCODE118 = '118';
WorldpayConstants.NOTIFYERRORCODE119 = '119';
WorldpayConstants.NOTIFYERRORCODE120 = '120';

WorldpayConstants.MESSAGEDIGEST = 'MD5';
WorldpayConstants.LIGHTBOX = 'lightbox';
WorldpayConstants.PAYMENTSTATUS = 'paymentStatus';
WorldpayConstants.APMNAME = 'apmName';
WorldpayConstants.ORDERTOKEN = 'order_token';
WorldpayConstants.ORDERID = 'order_id';
WorldpayConstants.DEBITCREDITINDICATOR = 'credit';
WorldpayConstants.CUSTOMERORDER = 'Customer';
module.exports = WorldpayConstants;
