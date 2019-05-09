'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToUsageConsumptionReportRequestStateChangeNotification = function listenToUsageConsumptionReportRequestStateChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToUsageConsumptionReportRequestStateChangeNotification(req, res, next);
};
