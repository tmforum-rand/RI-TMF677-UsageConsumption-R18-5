'use strict';

var url = require('url');

var UsageConsumptionReport = require('../service/UsageConsumptionReportService');

module.exports.deleteUsageConsumptionReport = function deleteUsageConsumptionReport (req, res, next) {
  UsageConsumptionReport.deleteUsageConsumptionReport(req, res, next);
};

module.exports.listUsageConsumptionReport = function listUsageConsumptionReport (req, res, next) {
  UsageConsumptionReport.listUsageConsumptionReport(req, res, next);
};

module.exports.retrieveUsageConsumptionReport = function retrieveUsageConsumptionReport (req, res, next) {
  UsageConsumptionReport.retrieveUsageConsumptionReport(req, res, next);
};
